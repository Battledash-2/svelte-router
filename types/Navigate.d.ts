import 'svelte2tsx/svelte-jsx';
import { SvelteComponentTyped } from 'svelte';

interface NavigateParams {
	href?: string;
	to?: string;
	state?: object;
	replace?: boolean;
}

export class Navigate extends SvelteComponentTyped<NavigateParams> {}
