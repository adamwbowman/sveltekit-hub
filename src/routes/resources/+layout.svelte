
<!-- resources/+layout.svelte --> 

<script>
	export let data;
</script>

<nav class="navbar navbar-expand" style="background-color: #fcecbb;">
	<div class="container-fluid justify-content-center">
		<ul class="navbar-nav">
		{#each data.sections as section}
			<li class="nav-item py-0">
				<a class="nav-link py-0" href="/{section.route}"><small>{section.title}</small></a>
			</li>
		{/each}
		</ul>
	</div>
</nav>

<slot />