<script>
	import { getContext } from "svelte";
	import { ROUTER } from "./helpers/contexts";
	import { navigate } from "./helpers/navigation";

	export let href = '/';
	export let state = history.state;

	const context = getContext(ROUTER);

	function interceptClick() {
		navigate(href, context, null);
	}
</script>
<a on:click|preventDefault={interceptClick} href={href} {...$$restProps}>
	<slot state={state} />
</a>