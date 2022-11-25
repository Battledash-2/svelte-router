export function navigate(path = '/', context = null, state = history.state) {
	path = path || '/';
	context = context || null;
	state = state || history.state;

	// @ts-ignore
	history.pushState(state, false, path);
	if (context) context.matched.set(false);
}
export function goBack(context = null, state = history.state) {
	history.back();
	if (context) context.matched.set(false);
}
export function goForward(context = null, state = history.state) {
	history.forward();
	if (context) context.matched.set(false);
}

export function pathJoin(paths, sep = '/') {
	let r = paths.join(sep).replace(/\/{1,}/g, sep);
	if (!r.startsWith(sep)) r = sep + r;
	if (r.endsWith(sep)) r = r.slice(0, -1);
	return r;
}
