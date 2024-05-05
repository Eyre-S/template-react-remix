/**
 * Instant compute a function and return the result.
 * 
 * The usage is like:
 * ```
 * const expr = () => { for (i = 0; i < 10; i++) { if (i > 5) return i } }
 * const some_val = did(expr)
 * ```
 * or most commonly usage is like:
 * ```
 * const some_val = did(() => { for (i = 0; i < 10; i++) { if (i > 5) return i } })
 * ```
 * 
 * So, it gives a way to do a complex compute within one scope and get its result
 * like most of the fp languages can do.
 * 
 * It is actually equivalent to
 * ```
 * const some_val = (() => { for (i = 0; i < 10; i++) { if (i > 5) return i } })()
 * ```
 * just more readable...maybe.
 * 
 * It also have a alias named {@link _$}. use it as you like.
 */
export function do$<T> (expr: () => T): T {
	return expr()
}

/**
 * The alias of {@link do$}
 */
export const _$ = do$

/**
 * Returns the input object as is.
 *
 * For sometimes you need to write a inline function that just return a static object,
 * but in plain javascript, you need to write:
 * ```
 * needAObjectReturn(() => { return {...} })
 * ```
 * That's confusing.
 * 
 * With it, you will just write:
 * ```
 * needAObjectReturn(() => $as({ ... }))
 * ```
 *
 * @param {T} obj - The input object.
 * @return {T} - The same input object.
 */
export function as$<T> (obj: T): T {
	return obj
}

/**
 * Check if a value is `undefined`, and return a fallback value if it is.
 * 
 * May also known as *undefined safety*.
 * 
 * @param <Use> - The default type.
 * @param <Else> - The undef fallback type.
 * @param it The value need to be undef-safety check.
 * @param orElse The fallback value.
 * @returns `it` when the value is not undefined, `orElse` or else.
 */
export function useOrElse <Use, Else> (it: Use|undefined, orElse: Else): Use|Else {
	return it === undefined ? orElse : it
}
