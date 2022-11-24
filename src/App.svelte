<script>
	import Route from "./Route.svelte";
	import Router from "./Router.svelte";
	import Thing from "./test/Thing.svelte";
	import Thong from "./test/Thong.svelte";
</script>
<Router>
	<Route path="/hello" component={Thing} exact />
	<Route path="/yellow" component={Thong} exact />

	<Route path=".*">
		<h1>No not found L</h1>
	</Route>
</Router>