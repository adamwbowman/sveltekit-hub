
<!-- blog/+layout.svelte --> 

<script>
	import { page } from '$app/stores';
	export let data;
</script>

<nav class="navbar navbar-expand mt-2" style="background-color: #fcecbb;">
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

<!-- {#each data.posts as post}
	<p>{post.title}: {post.month}/{post.day}/{post.year}</p> &nbsp;
{/each} -->

<slot />