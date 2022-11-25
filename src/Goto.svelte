<script>
	import { matched } from './helpers/contexts';
	import { navigate } from './helpers/navigation';
	import { sameHost } from './helpers/parseRoute';

	matched.set(true); // force it

	// `navigate` but with an element (can be helpful in some cases)
	export let href = '/';
	export let to = null;
	export let state = null;
	export let delay = 200; // ms

	if (to !== null) href = to;

	if (!sameHost(href)) {
		location.href = href;
	}

	setTimeout(
		() => navigate(href, state == null ? history.state : state),
		delay
	);
</script>
