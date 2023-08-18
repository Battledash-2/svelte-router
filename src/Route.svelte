<script>
	import { getContext } from 'svelte';
	import { matched, ROUTER } from './helpers/contexts';
	import { pathJoin } from './helpers/navigation';
	import { getRegexp, parseRoute, routeMatch, routeMatchText } from './helpers/parseRoute';

	export let path = '';
	export let component = null;
	export let exact = false;
	export let text = false;
	export let index = false;

	const { registerRoute, home } = getContext(ROUTER);
	path = pathJoin([home, path]);
	console.log(path);

	registerRoute(path.toString(), component);

	let thisActive = false;
	let thisParams = {};
	let thisWildcards = [];

	// let lhome = home || '';
	// lhome = !lhome.startsWith('/') ? '/' + lhome : lhome;
	// lhome = !lhome.endsWith('/') ? lhome + '/' : lhome;

	$: {
		if ($matched == false && index === true) {
			thisActive = true;
			matched.set(true);
		} else if ($matched == false && !text) {
			// console.log(lhome + (path.startsWith('/') ? path.slice(1) : path));
			// const active = getRegexp(lhome + (path.startsWith('/') ? path.slice(1) : path), exact);
			const active = getRegexp(path, exact);

			if (routeMatch(location.pathname, active.regex)) {
				// current route is active
				thisActive = true;

				const r = parseRoute(location.pathname, active);
				thisParams = r.params;
				thisWildcards = r.wildcards;

				matched.set(true);
			} else {
				thisActive = false;
				matched.set(false);
			}
		} else if ($matched == false && text) {
			if (routeMatchText(location.pathname, path)) {
				thisActive = true;
				matched.set(true);
			} else {
				thisActive = false;
				matched.set(false);
			}
		} else {
			thisActive = false;
		}
	}
</script>

{#if thisActive && component}
	<svelte:component this={component} params={thisParams} wildcards={thisWildcards} {...$$restProps} />
{:else if thisActive}
	<slot params={thisParams} wildcards={thisWildcards} />
{/if}
