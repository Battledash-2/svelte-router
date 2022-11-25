import { matched } from './contexts';

export function navigate(path = '/', state = history.state) {
	// @ts-ignore
	history.pushState(state, false, path);
	matched.set(false);
}

export function pathJoin(paths, sep = '/') {
	let r = paths.join(sep).replace(/\/{1,}/g, sep);
	if (!r.startsWith(sep)) r = sep + r;
	if (r.endsWith(sep)) r = r.slice(0, -1);
	return r;
}
