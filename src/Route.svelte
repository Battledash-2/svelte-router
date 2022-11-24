<script>
	import { getContext } from "svelte";
	import { ROUTER } from "./context/contexts";
	import { getRegexp, parseRoute, routeMatch } from "./helpers/parseRoute";

	export let path = '';
	export let component = null;
	export let exact = false;
	
	const { registerRoute, matched } = getContext(ROUTER);
	registerRoute(path.toString(), component);

	console.log('Path "'+path.toString()+'" registered!');
	
	let thisActive = false;
	let thisOptions = {};

	$: {
		if ($matched == false) {
			const active = getRegexp(path, exact);

			if (routeMatch(location.pathname, active.regex)) {
				// current route is active
				thisActive = true;
				thisOptions = parseRoute(location.pathname, active);
				matched.set(true);
			} else {
				thisActive = false;
				matched.set(false);
			}
		}
	}
</script>

{#if thisActive && component}
	<svelte:component this="{component}" options={thisOptions} {...$$restProps} />
{:else if thisActive}
	<slot />
{/if}