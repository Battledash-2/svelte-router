<script>
	import { setContext } from 'svelte';
	import { matched, ROUTER } from './helpers/contexts';

	export let home = '/';

	const routes = [];

	function registerRoute(route, element) {
		// @ts-ignore
		routes.push({
			route,
			element,
		});
	}
	function removeRoute(route) {
		routes.map((r) => r.route !== route);
	}

	setContext(ROUTER, {
		registerRoute,
		removeRoute,
		home,
	});

	window.addEventListener('popstate', () => {
		matched.set(false);
	});
</script>

<slot />
