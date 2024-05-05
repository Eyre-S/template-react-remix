export function classes (...classes: (string|false|null|undefined)[]) {
	return classes.filter(x =>
		(x !== null) && (x !== undefined) && (x !== false)
	).join(' ')
}

export function posXY (x: string, y: string): React.CSSProperties {
	return {
		left: x,
		top: y,
	}
}
