import 'svelte2tsx/svelte-jsx';
import { SvelteComponentTyped } from 'svelte';

interface LinkParams {
	href?: string;
	to?: string;
	state?: object;
	replace?: boolean;
}

export class Link extends SvelteComponentTyped<
	LinkParams & svelte.JSX.HTMLProps<HTMLAnchorElement>
> {}
