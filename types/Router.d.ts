import { SvelteComponentTyped } from 'svelte';
import 'svelte2tsx/svelte-jsx';

interface RouterProps {
	home?: string;
}

export class Router extends SvelteComponentTyped<RouterProps> {}
