
<!-- team/+layout.svelte --> 

<script>
	export let data;
</script>


{#each data.teammates as teammate}
<p>{teammate.name}: {teammate.tags}</p> &nbsp;
{/each}


<slot />