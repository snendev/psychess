/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_wasmclient_free(a: number): void;
export function get_piece_from_i32(a: number, b: number): void;
export function get_piece_index_from_character(a: number): number;
export function create_board(a: number, b: number, c: number): number;
export function wasmclient_new(): number;
export function wasmclient_move_piece(a: number, b: number, c: number): number;
export function wasmclient_get_valid_targets(a: number, b: number, c: number): void;
export function wasmclient_is_white_turn(a: number): number;
export function wasmclient_render_board(a: number, b: number): void;
export function wasmclient_get_move_history(a: number, b: number): void;
export function wasmclient_undo_last_move(a: number): void;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
