/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/hello
 * @param name `~lib/string/String`
 * @returns `~lib/string/String`
 */
export declare function hello(name: string): string;
