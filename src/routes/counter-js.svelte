<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Counter JS</title>
	<!-- He, we import the counter compiled to JavaScript with Rollup. -->
	<script defer src="../../package-js/counter.js"></script>
	<link rel="stylesheet" href="../../package-js/counter.css" />
</svelte:head>

<div class="content">
	<h1>Here, the counter is compiled to JavaScript with Rollup before to be used.</h1>

	<p>
		You need to run the <code>package:js</code> script to compile the counter in JavaScript.
	</p>

	<!-- The counter will take place in the following div. -->
	<div id="svelte-counter" />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
