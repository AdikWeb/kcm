<template>
	<div class="item">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
	.item{
		/*width: 270px;*/
	}
</style>
<script>
    export default {
        name: "carouselItems"
    }
</script>