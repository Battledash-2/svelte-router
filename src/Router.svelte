<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { ROUTER } from "./helpers/contexts";
	import { goBack } from "./helpers/navigation";

	export let home = '/';

	const routes = [];
	const matched = writable(false);

	function registerRoute(route, element) {
		// @ts-ignore
		routes.push({
			route,
			element
		});
	}
	function removeRoute(route) {
		routes.map(r => r.route !== route);
	}

	setContext(ROUTER, {
		registerRoute,
		removeRoute,
		matched,
		home,
	});

	window.addEventListener('popstate', () => {
		matched.set(false);
	});
</script>

<slot />
