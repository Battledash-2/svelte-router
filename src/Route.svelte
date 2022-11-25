<script>
	import { getContext } from "svelte";
	import { ROUTER } from "./helpers/contexts";
	import { pathJoin } from "./helpers/navigation";
	import { getRegexp, parseRoute, routeMatch, routeMatchText } from "./helpers/parseRoute";

	export let path = '';
	export let component = null;
	export let exact = false;
	export let text = false;

	
	const { registerRoute, matched, home } = getContext(ROUTER);
	path = pathJoin([ home, path ]);

	registerRoute(path.toString(), component);

	let thisActive = false;
	let thisOptions = {};

	$: {
		if ($matched == false && !text) {
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
	<svelte:component this="{component}" options={thisOptions} {...$$restProps} />
{:else if thisActive}
	<slot options={thisOptions} />
{/if}