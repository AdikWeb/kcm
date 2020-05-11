<template>
	<div class="newsList">
		<div class="row">
			<slot/>
		</div>
		<slot name="footerList"/>
	</div>

</template>

<script>
    export default {
        name: "newsList"
    }
</script>

<style scoped lang="scss">
	.newsList {

	}
</style>