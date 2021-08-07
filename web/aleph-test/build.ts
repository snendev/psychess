// builds chess wasm binary into the js bundle
// only necessary because alephjs does not yet support bundling wasm files

const jsText = Deno.readTextFileSync('./api/game/chess/wasm_chess.js')
const jsLines = jsText.split('\n')

function replaceBytesLine(input: string[]): string[] {
  const lineIndex = input.findIndex((line) => line.startsWith('const p'))
  if (lineIndex === -1) return input

  const wasmBin = Deno.readFileSync('./api/game/chess/wasm_chess_bg.wasm')
  
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

const newJsText = replaceBytesLine(replaceUrlLine((jsLines))).join('\n')

Deno.writeTextFileSync('./api/game/chess/wasm_chess.js', newJsText)
