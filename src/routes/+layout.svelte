
<!-- +layout.svelte --> 

<script>
	export let data;
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</svelte:head>

<nav class="navbar navbar-expand-md fixed-top navbar-dark" style="background-color: rgb(21, 74, 146);">
	<div class="container-fluid">
		<a class="navbar-brand" href="/#">
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-lightbulb text-white pb-1" viewBox="0 0 16 16">
				<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
			</svg>
		The Hub</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav me-auto">
			{#each data.sections as section}
				<li class="nav-item">
					<a class="nav-link" href="/{section.route}">{section.title}</a>
				</li>
			{/each}
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/blog">Our Blog</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/team">Our Team</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main class="pt-5">
	<slot />
</main>

<footer class="container">
	<div class="row">
		<div class="col-12 col-md py-3">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
				<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
			</svg>
			The Hub
		</div>
		<div class="col-6 col-md">
			<h5>Efforts</h5>
			<ul class="list-unstyled text-small">
				<li><a class="link-secondary" href="/#">Way of Working</a></li>
				<li><a class="link-secondary" href="/#">Way of Delivering</a></li>
				<li><a class="link-secondary" href="/#">High Performance</a></li>
				<li><a class="link-secondary" href="/#">Global Teams</a></li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<h5>Resources</h5>
			<ul class="list-unstyled text-small">
				<li><a class="link-secondary" href="/#">#category</a></li>
				<li><a class="link-secondary" href="/#">#category</a></li>
				<li><a class="link-secondary" href="/#">#category</a></li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<h5>Learning</h5>
			<ul class="list-unstyled text-small">
				<li><a class="link-secondary" href="/#">Learning Group #1</a></li>
				<li><a class="link-secondary" href="/#">Learning Group #2</a></li>
				<li><a class="link-secondary" href="/#">Learning Group #3</a></li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<h5>Our Team</h5>
			<ul class="list-unstyled text-small">
				<li><a class="link-secondary" href="/#">Our Blog</a></li>
				<li><a class="link-secondary" href="/#">About Us</a></li>
			</ul>
		</div>
	</div>
</footer>

<style>
	nav {
<<<<<<< HEAD
		border-bottom: 5px solid rgb(21, 74, 146);
=======
		border-bottom: 5px solid rgb(0, 130, 192);
>>>>>>> refs/remotes/origin/main
	}
</style>