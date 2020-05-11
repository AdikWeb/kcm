<template>
	<div class="col-lg-4 col-md-6 col-sm-12">
		<a :to="link||'#'" class="newsCard">
			<img class="newsCard__bgImage" img :src="bgImage">
			<img class="newsCard__bgImage preloader" src="https://semantic-ui.com/images/wireframe/image.png">
			<div class="newsCard__content">
				<div class="newsCard__content--title">
					<slot name="title"/>
				</div>
				<div class="newsCard__content--preview">
					<slot name="preview"/>
				</div>
				<div class="newsCard__content--link">
					<btnArrow>{{linkText||'More'}}</btnArrow>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
    import btnArrow from "../../buttons/arrowButton/btnArrow";

    export default {
        props: ['link', 'bgImage', 'linkText'],
        name: "newsCard",
        components: {
            btnArrow
        },
        mounted() {
            let preloader = this.$el.querySelector('.preloader');
            let img = this.$el.querySelector('[img]');
            if (!img.complete) {
                preloader.onload = () => this.removePreloader(preloader)
            } else {
                this.removePreloader(preloader)
            }
        },
        methods: {
            removePreloader(e) {
                e.classList.add('loaded');
                setTimeout(() => {
                    e.remove()
                }, 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
	.newsCard {
		/*max-width: 370px;*/
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid #C8863E;
		margin-bottom: 32px;
		display: block;

		&__bgImage {
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			object-fit: cover;
			transition: 400ms ease-in-out;
		}

		.preloader {
			clip-path: circle(100% at 50% 50%);

			&.loaded {
				clip-path: circle(0% at 100% 100%);
				opacity: 0;
			}
		}

		&__content {
			position: relative;
			display: flex;
			min-height: 390px;
			flex-direction: column;
			justify-content: flex-end;
			padding: 35px 24px;
			cursor: pointer;

			&:after {
				background: linear-gradient(180deg, rgba(255, 255, 255, 0) 41.92%, #FFFFFF 81.15%);
				content: "";
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				position: absolute;
				z-index: 1;
				transition: 500ms ease-in-out;
				opacity: 1;
			}

			&:before {
				content: "";
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: #184473;
				opacity: .4;
				position: absolute;
				border-radius: 100%;
				width: 100%;
				height: 500px;
				transition: 400ms ease;
				transform: translateY(-100%);
			}

			&--title {
				font-size: 1.25rem;
				font-weight: 500;
				line-height: 30px;
				margin-bottom: 9px;
				transition: 300ms ease;
				transform: translateY(90%);
				position: relative;
				z-index: 2;
			}

			&--preview {
				font-size: 0.875rem;
				font-weight: 300;
				margin-bottom: 14px;
				transition: 300ms ease;
				transform: translateY(99%);
				position: relative;
				z-index: 2;
				height: 36px;
				overflow: hidden;
			}

			&--link {
				transition: 300ms ease;
				transform: translateY(100px);
				opacity: 0;
				position: relative;
				z-index: 2;
			}

			&:hover {
				background: transparent;

				[class$='--link'], [class$='--title'], [class$='--preview'] {
					transform: translateY(0);
					opacity: 1;
					color: #ffffff;

					a {
						color: #ffffff;

						&:after {
							filter: brightness(0) invert(1);
						}
					}
				}

				[class$='--link'] {
					transition: ease 300ms 300ms;
				}

				[class$='--title'] {
					transition: ease 300ms 100ms;
				}

				[class$='--preview'] {
					transition: ease 300ms 200ms;
					height: auto;
				}

				&:after {
					transition: 400ms ease-in-out;
					opacity: 0;
				}

				&:before {
					transition: 400ms ease-in-out;
					transform: translateY(0);
					border-radius: 0;
				}
			}
		}

		&:hover {
			[class$='__bgImage'] {
				transform: rotate(4deg) scale(1.3);
			}
		}
	}
</style>