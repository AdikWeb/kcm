<template>
	<div :id="id" class="bigSliderMain">
		<slot/>
	</div>
</template>

<script>
    import $ from "jquery";
    import 'slick-carousel';

    export default {
        name: "bigSlider",
        data() {
            return {
                id: Date.now()
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
.bigSliderMain{
	overflow: hidden;
}
</style>