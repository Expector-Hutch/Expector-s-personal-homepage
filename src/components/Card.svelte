<div class="card">
	<slot />
</div>

<style>
	.card {
		overflow: hidden;
		background-color: #2424248c;
		border-radius: 11px;
		backdrop-filter: blur(5px);
		box-shadow: #0000004d 2px 8px 8px;
		border: 2px rgba(0, 0, 0, .4) solid;
        border-bottom: 2px rgba(40, 40, 40, .35) solid;
        border-right: 2px rgba(40, 40, 40, .35) solid;
	}
</style>