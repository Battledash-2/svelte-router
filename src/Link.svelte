<script>
	import { getContext } from "svelte";
	import { ROUTER } from "./helpers/contexts";
	import { navigate } from "./helpers/navigation";
	import { sameHost } from "./helpers/parseRoute";

	export let href = '/';
	export let state = null;

	const context = getContext(ROUTER);

	function interceptClick() {
		if (!sameHost(href)) {
			location.href = href;
			return;
		}
		navigate(href, context, state ? state : history.state);
	}
</script>
<a on:click|preventDefault={interceptClick} href={href} {...$$restProps}>
	<slot state={state} />
</a>