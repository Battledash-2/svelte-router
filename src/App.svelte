<script>
	import Link from "./Link.svelte";
	import Route from "./Route.svelte";
	import Router from "./Router.svelte";
	import MyComponent from "./test/MyComponent.svelte";
</script>

<h1>Hi</h1>

<Router>
	<Route path="/hello" exact>
		<h1>Hello!</h1>
	</Route>
	<Route path="/hello/:userName" let:options={options}>
		<h1>Hello, {options.userName}!</h1>
	</Route>
	<Route path="/view/:blogId" component={MyComponent} />
	<Route path="hey" text><h1>hi</h1></Route>
	<Route path="links" text>
		<Link href="test">Hi</Link>
	</Route>

	<Route path=".*"><h1>Woops, don't know how you got here.</h1><p>Error 404.</p></Route>
</Router>