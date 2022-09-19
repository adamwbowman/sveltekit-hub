
<!-- learning/+layout.svelte --> 

<script>
	export let data;
</script>

<header class="border-bottom bg-warning">
	<div class="container d-flex flex-wrap">
		<ul class="nav">
		{#each data.sections as section}
			<li class="nav-item">
				<a class="nav-link nav-dark" href="/{section.slug}">{section.title}</a>
			</li>
		{/each}
		</ul>
	</div>
</header>

<slot />