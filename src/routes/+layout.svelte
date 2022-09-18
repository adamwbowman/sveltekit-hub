
<!-- +layout.svelte --> 

<script>
	export let data;
</script>

<nav>
	<a href="/">home</a> &nbsp;
	{#each data.sections as section}
		<a href="/{section.slug}">{section.title}</a> &nbsp;
	{/each}
	<a href="/blog">Our Blog</a> &nbsp;
	<a href="/team">Our Team</a> &nbsp;
</nav>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<footer>
	<p>footer</p>
</footer>