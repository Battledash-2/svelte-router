<script>
	import { navigate } from './helpers/navigation';
	import { sameHost } from './helpers/parseRoute';

	export let href = '/';
	export let to = null;
	export let state = null;
	export let replace = false;

	if (to !== null) href = to;

	function interceptClick() {
		if (!sameHost(href)) {
			location.href = href;
			return;
		}
		navigate(href, state ? state : history.state, replace);
	}
</script>

<a on:click|preventDefault={interceptClick} {href} {...$$restProps}>
	<slot {state} />
</a>
