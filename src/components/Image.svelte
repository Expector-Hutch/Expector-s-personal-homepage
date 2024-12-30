<script lang="ts">
	export let src: string;
	export let height: string = 'auto';
	export let width: string = 'auto';
</script>

<style lang="scss">
	.image {
		background: {
			position: center;
			repeat: no-repeat;
			size: cover;
		}
	}
</style>

<div class="image" style="background-image: url('{src}');">
	<div style="width: {width}; height: {height};"></div>
</div>
