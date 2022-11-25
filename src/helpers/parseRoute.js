// Returns { regex, ids }
export function getRegexp(route = '', exact = false) {
	const ids = [];
	const _route = route.replace(/:([^/]+)?/g, (v) => {
		const id = v.slice(1);
		ids.push(id);

		return '([^/]+)?';
	});

	const regex = new RegExp(exact ? '^' + _route + '/?$' : _route);

	return {
		regex,
		ids,
	};
}

// Returns { path, values }
export function parseRoute(route = '', regexp = getRegexp('')) {
	let i = 0;
	const out = {};
	regexp.regex
		.exec(route)
		.slice(1)
		.map((m) => {
			out[regexp.ids[i++]] = m;
		});
	return out;
}

// Returns boolean
export function routeMatch(route = '', regex = new RegExp('')) {
	return regex.test(route);
}

// Returns boolean
export function routeMatchText(route, path) {
	route = route.endsWith('/') ? route.slice(0, -1) : route;
	return route === path || route === path.slice(1) || route.slice(1) === path;
}
