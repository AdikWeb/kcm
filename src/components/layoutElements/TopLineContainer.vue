<template>
	<div :class="type">
		<slot/>
	</div>
</template>

<script>
    export default {
        name: 'TopLineContainer',
        props: ['type'],
        data() {
            return {
                open:false
            }
        }
    }
</script>
<style lang="scss">
	.inline {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
</style>