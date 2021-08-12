const WASM_DIR = './api/game/wasm'

// inline chess wasm byte sequence into the js bundle
// only necessary because alephjs does not yet support bundling wasm files
function replaceBytesLine(input: string[]): string[] {
  const lineIndex = input.findIndex((line) => line.startsWith('const p'))
  if (lineIndex === -1) return input

  const wasmBin = Deno.readFileSync(`${WASM_DIR}/wasm_chess_bg.wasm`)

  const wasmBinString = Array.from(wasmBin).map((uint8) => `${uint8}`).join(',')

  const newPDeclaration =
  `const buffer = new ArrayBuffer(${wasmBin.length})
  const bytes = new Uint8Array(buffer)
  bytes.set([${wasmBinString}])`
  
  return [
    ...input.slice(0, lineIndex),
    ...newPDeclaration.split('\n'),
    ...input.slice(lineIndex + 2),
  ]
}

// URL doesn't work this way (anymore?)
function replaceUrlLine(input: string[]): string[] {
  const lineIndex = input.findIndex((line) => line.startsWith('const __dirname'))
  if (lineIndex === -1) return input
  const newDirDeclaration = input[lineIndex].replace(
    'new URL(import.meta.url).pathname',
    'import.meta.url'
  )
  return [
    ...input.slice(0, lineIndex),
    newDirDeclaration,
    ...input.slice(lineIndex + 1),
  ]
}

function replaceWasiSnapshotLine(input: string[]): string[] {
  const lineIndex = input.findIndex((line) => line.includes('wasi_snapshot_preview1'))
  if (lineIndex === -1) return input
  
  const newImportDeclaration = "imports['wasi_snapshot_preview1'] = wasi.exports"

  return [
    ...input.slice(0, lineIndex),
    newImportDeclaration,
    ...input.slice(lineIndex + 1),
  ]
}

const jsText = Deno.readTextFileSync(`${WASM_DIR}/wasm_chess.js`)
const jsLines = jsText.split('\n')
 
const newJsText = replaceWasiSnapshotLine(replaceBytesLine(replaceUrlLine((jsLines)))).join('\n')

Deno.writeTextFileSync(`${WASM_DIR}/wasm_chess.js`, newJsText)
