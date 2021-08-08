/**
 * After calling alephjs dev --reload, be sure to correct inconsistencies:
 * wasm_chess#L100: `const __dirname =` starts with './'
 * 
 * wasm_chess#L108-110 => imports['wasi_snapshot_preview1'] = wasi.exports;
 */

const mode = Deno.args[0]

// inline chess wasm byte sequence into the js bundle
// only necessary because alephjs does not yet support bundling wasm files
function replaceDirnameLine(input: string[]): string[] {
  const lineIndex = input.findIndex((line) => line.startsWith('const __dirname'))
  if (lineIndex === -1) return input

  const newDirnameDeclaration = input[lineIndex].replace('\"/', '\"./')

  return [
    ...input.slice(0, lineIndex),
    newDirnameDeclaration,
    ...input.slice(lineIndex + 1),
  ]
}

if (mode !== "development" && mode !== "production") {
  console.error("Usage: deno run --allow-read --allow-write postreload.ts {development | production}")
} else {
  const jsText = Deno.readTextFileSync(`./.aleph/${mode}/api/game/wasm/wasm_chess.js`)
  const jsLines = jsText.split('\n')
  
  const newJsText = replaceDirnameLine((jsLines)).join('\n')
  
  Deno.writeTextFileSync(`./.aleph/${mode}/api/game/wasm/wasm_chess.js`, newJsText)
}

