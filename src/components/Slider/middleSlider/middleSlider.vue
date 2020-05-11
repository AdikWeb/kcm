<template>
	<div :id="id">
		<slot/>
	</div>
</template>

<script>
    import $ from "jquery";
    import 'slick-carousel';

    export default {
        name: "middleSlider",
        data() {
            return {
                id: Date.now(),
            }
        },
        mounted() {
            let id = this.id;
            $('#' + id).slick({
                autoplay: true,
                speed: 1000,
                fade: true,
                nextArrow: '.next_' + this.id,
                prevArrow: '.prev_' + this.id
            })
        }
    }
</script>

<style scoped>

</style>