const _wildcard = Symbol('wildcard');

// Returns { regex, ids }
export function getRegexp(route = '', exact = false, wildcard = true) {
	const ids = [];

	const _route = route.toString().replace(/(:([^/]+)?|\.\*)/g, (v) => {
		if (v === '.*' && wildcard) {
			ids.push(_wildcard);
			return '(.*)';
		} else {
			const id = v.slice(1);
			ids.push(id);

			return '([^/]+)?';
		}
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
	const params = {};
	const wildcards = [];

	regexp.regex
		.exec(route)
		.slice(1)
		.map((m) => {
			let c = regexp.ids[i++];
			if (c === _wildcard) wildcards.push(m);
			// if you have a wildcard it'll match everything so this is redundant but eh
			else params[c] = m;
		});

	return {
		params,
		wildcards,
	};
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

// Returns boolean
export function sameHost(path) {
	return new URL(path, location.origin).hostname === location.hostname;
}
