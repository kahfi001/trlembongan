<script lang="ts">
	import "$lib/style/main.css"
	import { page } from '$app/stores';

	// Reactive canonical URL
	$: canonicalUrl = $page.url.origin + $page.url.pathname;
	
</script>

<svelte:head>
	<link rel="canonical" href="{canonicalUrl}" />
	<meta property="og:url" content="{canonicalUrl}" />
	<meta property="og:type" content="website">
</svelte:head>

<div >
	<main>
		<slot />
	</main>
</div>
