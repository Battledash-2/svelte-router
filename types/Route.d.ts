import 'svelte2tsx/svelte-jsx';
import { SvelteComponentTyped } from 'svelte';

interface RouteProps {
	path: string;
	component: SvelteComponentTyped;
	exact: boolean;
	text: string;
}

export class Route extends SvelteComponentTyped<RouteProps> {}
