<script>
	import { page } from '$app/stores';
</script>

<h1>Blog</h1>

<h3>
	{$page.params.year}, 
	{$page.params.month}, 
	{$page.params.day}
</h3>