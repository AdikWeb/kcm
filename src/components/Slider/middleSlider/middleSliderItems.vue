<template>
	<div class="middleSlider__item">
		<slot/>
		<div class="btn-group">
			<circleBtn class="prev" :class="'prev_'+id"/>
			<circleBtn class="next" :class="'next_'+id"/>
		</div>
	</div>
</template>

<script>
    import circleBtn from "../../buttons/circleButton/circleBtn";

    export default {
        props: ['bgImage', 'linkTo', 'linkText'],
        name: "middleSliderItems",

        data() {
            return {
                id: this.$parent.$data.id
            }
        },
        components: {
            circleBtn
        }
    }
</script>

<style lang="scss">
	.circleButton {
		position: relative;
		z-index: 4;
		&.prev {
			transform: rotate(180deg);
			margin-right: 6px;
		}
	}

	.slick-active, .slick-current {

	}
</style>