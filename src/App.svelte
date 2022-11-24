<script>
	import Route from "./Route.svelte";
	import Router from "./Router.svelte";
</script>
<Router>
	<Route path="/hello" exact>
		<h1>Hello!</h1>
	</Route>
</Router>