import 'svelte2tsx/svelte-jsx';
import { SvelteComponentTyped } from 'svelte';

interface GotoParams {
	href?: string;
	to?: string;
	state?: object;
}

export class Goto extends SvelteComponentTyped<GotoParams> {}
