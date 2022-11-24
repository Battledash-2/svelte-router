<script>
	import Route from "./Route.svelte";
	import Router from "./Router.svelte";
	import MyComponent from "./test/MyComponent.svelte";
</script>
<Router>
	<Route path="/hello" exact>
		<h1>Hello!</h1>
	</Route>
	<Route path="/hello/:userName" let:options={options}>
		<h1>Hello, {options.userName}!</h1>
	</Route>
	<Route path="/view/:blogId" component={MyComponent} />
	<Route path=".*"><h1>Woops, don't know how you got here.</h1><p>Error 404.</p></Route>
</Router>