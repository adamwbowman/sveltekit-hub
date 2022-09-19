
<!-- team/+layout.svelte --> 

<script>
	import { page } from '$app/stores';
	export let data;
</script>


{#each data.teammates as teammate}
<p>{teammate.name}: {teammate.tags}</p> &nbsp;
{/each}


<slot />