
<!-- blog/+layout.svelte --> 

<script>
	import { page } from '$app/stores';
	export let data;
</script>


{#each data.posts as post}
<p>{post.title}: {post.month}/{post.day}/{post.year}</p> &nbsp;
{/each}

<h3>
	{$page.params.year}, 
	{$page.params.month}, 
	{$page.params.day}
</h3>

<slot />