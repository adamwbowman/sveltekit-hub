
<!-- learning/+page.svelte --> 

<div class="container mt-4 mb-5">
	<h1>Learning 1</h1>
	<p class="fs-5 col-md-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <mark>incididunt ut labore</mark> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
	<div class="mb-5">
		<a href="/#" class="btn btn-primary btn-lg px-4">Learn more >></a>
	</div>
	<hr class="col-3 col-md-2 mb-5">
	<div class="row g-5">
		<div class="col-md-6">
		<h2>Starter projects</h2>
		<p>Ready to beyond the starter guide? Check out these projects that you can quickly reference to learn more.</p>
		<ul class="icon-list ps-0">
			<li class="d-flex align-items-start mb-1"><a href="/#">Starter Group #1</a></li>
			<li class="text-muted d-flex align-items-start mb-1">Strater Group #2 (coming soon!)</li>
		</ul>
	</div>
	<div class="col-md-6">
		<h2>Guides</h2>
		<p>Read more detailed instructions and documentation on...</p>
		<ul class="icon-list ps-0">
			<li class="d-flex align-items-start mb-1"><a href="/#">Group #1 Quick start guide</a></li>
			<li class="d-flex align-items-start mb-1"><a href="/#">Group #1 Advanced guide</a></li>
			<li class="d-flex align-items-start mb-1"><a href="/#">Group #2 Quick start guide</a></li>
			<li class="d-flex align-items-start mb-1"><a href="/#">Group #2 Advanced guide</a></li>
			<li class="d-flex align-items-start mb-1"><a href="/#">Group #2 Additional resources guide</a></li>
		</ul>
	</div>
	</div>
</div>

<style>
	.icon-list li::before {
		display: block;
		flex-shrink: 0;
		width: 1.5em;
		height: 1.5em;
		margin-right: .5rem;
		content: "";
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E") no-repeat center center / 100% auto;
	}
</style>