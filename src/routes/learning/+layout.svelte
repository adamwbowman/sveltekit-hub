
<!-- learning/+layout.svelte --> 

<script>
	export let data;
</script>

<nav class="navbar navbar-expand-lg bg-warning">
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
		{#each data.sections as section}
			<li class="nav-item">
				<a class="nav-link" href="/{section.slug}">{section.title}</a>
			</li>
		{/each}
		</ul>
	</div>
</nav>

<slot />