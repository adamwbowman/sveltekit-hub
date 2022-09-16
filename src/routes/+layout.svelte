
<script>
	export let data;
</script>

<nav>
	<a href="/">home</a> &nbsp;
	{#each data.sections as section}
		<a href="/{section.slug}">{section.title}</a> &nbsp;
	{/each}
</nav>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<footer>
	<p>footer</p>
</footer>