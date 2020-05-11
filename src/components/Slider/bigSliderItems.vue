<template>
	<div class="bigSlider__item">
		<div class="bigSlider__item--inlineContent container">
			<div class="bigSlider__item--leftBox">
				<div class="bigSlider__item--title">
					<slot name="title"/>
				</div>
				<div class="bigSlider__item--preview">
					<slot name="prevText"/>
				</div>

				<btnArrow :to="linkTo">{{linkText}}</btnArrow>
			</div>

			<div class="bigSlider__item--rightBox">
				<div class="bigSlider__item--percent">
					<slot name="percent"/>
				</div>
				<div class="bigSlider__item--percentText">
					<slot name="percentText"/>
				</div>

				<div class="btn-group">
					<circleBtn class="prev" :class="'prev_'+id"/>
					<circleBtn class="next" :class="'next_'+id"/>
				</div>
				<img class="bigSlider__item--backgroundImage" :src="bgImage">
			</div>
		</div>
	</div>
</template>

<script>
    import btnArrow from "../buttons/arrowButton/btnArrow";
    import circleBtn from "../buttons/circleButton/circleBtn";

    export default {
        props: ['bgImage', 'linkTo', 'linkText'],
        name: "bigSliderItems",
        data() {
            return {
                id: this.$parent.$data.id
            }
        },
        components: {
            btnArrow,
            circleBtn
        }
    }
</script>

<style scoped lang="scss">
	.btn-group {
		position: relative;
		bottom: -82px;
	}

	.circleButton {
		position: relative;
		z-index: 4;

		&.prev {
			transform: rotate(180deg);
			margin-right: 6px;
		}

	}

	.bigSlider {
		&__item {
			&--inlineContent {
				min-height: 486px;
				width: 100%;
				display: flex;
				align-items: stretch;
				@media screen and (max-width: 868px){
					&.container{
						max-width: 100%;
						padding: 0;
					}
				}
			}

			&--leftBox, &--rightBox {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			&--leftBox {
				max-width: 320px;
				padding: 20px 35px 20px 0;
				position: relative;
				background: #Fff;
				z-index: 3;
				@media screen and (max-width: 868px){
					display: none;
				}
			}

			&--rightBox {
				position: relative;
				padding: 20px 55px;

				&:after,
				&:before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				}

				&:after {
					z-index: 3;
					box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.12);
				}

				&:before {
					background: linear-gradient(90deg, #FFFFFF 23.09%, rgba(255, 255, 255, 0) 47.65%);
					opacity: 0.95;
					z-index: 1;
				}
			}

			&--title {
				font-size: 1.75rem;
				margin-bottom: 18px;
				font-weight: 500;
			}

			&--preview {
				font-size: 1rem;
				font-weight: 300;
				line-height: 22px;
				margin-bottom: 18px;
			}

			&--percent {
				font-size: 2.625rem;
				font-weight: 500;
				line-height: .9;
				margin-bottom: 15px;
				position: relative;
				z-index: 2;
				transform: translateY(50px);
				transition: 300ms ease-in-out 200ms;
				opacity: 0;
			}

			&--percentText {
				font-size: 1rem;
				font-weight: 300;
				position: relative;
				z-index: 2;
				transform: translateY(50px);
				transition: 300ms ease-in;
				opacity: 0;
			}

			&--backgroundImage {
				position: absolute;
				object-fit: cover;
				display: block;
				width: calc(100% + 30vw);
				height: 100%;
				top: 0;
				left: 0;
				transition: 9s all ease;
				transform: scale(1.2) rotate(3deg);
				transform-origin: center;
				@media screen and (max-width: 868px){
					width: 100%;
				}
			}
		}
	}

	.slick-active, .slick-current {
		.bigSlider {
			&__item {
				&--percent {
					transform: translateY(0);
					opacity: 1;
				}
				&--percentText{
					transform: translateY(0);
					opacity: 1;
				}
				&--backgroundImage{
					transform: scale(1)  translateX(0);
				}
			}
		}
	}
</style>