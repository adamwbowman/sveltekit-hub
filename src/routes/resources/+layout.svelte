
<!-- resources/+layout.svelte --> 

<script>
	export let data;
</script>

<nav>
	{#each data.sections as section}
		<a href="/{section.slug}">{section.title}</a> &nbsp;
	{/each}
</nav>

<slot />