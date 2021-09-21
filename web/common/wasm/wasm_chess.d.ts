/* tslint:disable */
/* eslint-disable */
/**
* @param {number} value 
* @returns {string} 
*/
export function get_piece_from_i32(value: number): string;
/**
* @param {string} value 
* @returns {number} 
*/
export function get_piece_index_from_character(value: string): number;
/**
* @param {Int32Array} pieces_and_positions 
* @param {boolean} is_white_turn 
* @returns {WasmClient} 
*/
export function create_board(pieces_and_positions: Int32Array, is_white_turn: boolean): WasmClient;
/**
*/
export class WasmClient {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} origin 
* @param {number} target 
* @returns {boolean} 
*/
  move_piece(origin: number, target: number): boolean;
/**
* @param {number} position 
* @returns {Int32Array} 
*/
  get_valid_targets(position: number): Int32Array;
/**
* @returns {boolean} 
*/
  is_white_turn(): boolean;
/**
* @returns {Int32Array} 
*/
  render_board(): Int32Array;
/**
* Returns an array of move strings
* @param {WasmClient} game 
* @returns {any[]} 
*/
  static get_move_history(game: WasmClient): any[];
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmclient_free: (a: number) => void;
  readonly get_piece_from_i32: (a: number, b: number) => void;
  readonly get_piece_index_from_character: (a: number) => number;
  readonly create_board: (a: number, b: number, c: number) => number;
  readonly wasmclient_new: () => number;
  readonly wasmclient_move_piece: (a: number, b: number, c: number) => number;
  readonly wasmclient_get_valid_targets: (a: number, b: number, c: number) => void;
  readonly wasmclient_is_white_turn: (a: number) => number;
  readonly wasmclient_render_board: (a: number, b: number) => void;
  readonly wasmclient_get_move_history: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        