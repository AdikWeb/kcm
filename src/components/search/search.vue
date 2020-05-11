<template>
	<div class="searchBox" :class="open?'open':''">
		<form action="#" method="get">
			<input type="hidden" name="s" :value="value">
			<button :type="value.length!==0?'submit':'button'" @click="clickSearch" :class="value.length!==0?'go':''">
				<div class="searchButton icon">
					<span class="searchButton--left"></span>
					<span class="searchButton--right"></span>
					<span class="searchButton--bottom"></span>
				</div>
			</button>
		</form>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                value: '',
            }
        },

        methods: {
            clickSearch(e) {
                if (this.value.length === 0) {
                    e.preventDefault();
                }
            }
        },
        name: "search"
    }
</script>

<style lang="scss">
	.searchInput {

	}

	.searchBox {
		position: relative;
		height: 16px;
		@media screen and (max-width: 1100px){
			margin-left: auto;
		}
		&.menuOpened{
			margin-left: 0;

			@media screen and (max-width: 767px){
				margin-left: auto;
			}
		}
		form {
			right: 0;
			top: 0;
			transition: 300ms ease;
			border-radius: 10em;
			display: flex;
			align-items: center;

			button {
				&[type="button"],
				&[type="submit"] {
					border: none;
					background-color: transparent;
					width: 16px;
					height: 16px;
					position: relative;
					outline: none;
				}

				.searchButton {
					position: absolute;
					top: 0;
					left: 0;
					display: block;
					width: 20px;
					height: 20px;
					pointer-events: none;
					$iconsColor: #000;
					$iconsWidth: 2px;

					span {
						position: absolute;
					}

					&--left,
					&--right,
					&--bottom {
						$size: 15px;
						display: block;
						border-radius: 10em;
						width: $size;
						height: $size;
					}

					&--left {
						border-left: $iconsWidth solid $iconsColor;
						border-bottom: $iconsWidth solid $iconsColor;
					}

					&--right {
						border-right: $iconsWidth solid $iconsColor;
						border-top: $iconsWidth solid $iconsColor;
					}

					&--bottom {
						$position: 61%;
						border: $iconsWidth/2 solid $iconsColor;
						transform: rotate(-50deg);
						width: 1px;
						height: 5px;
						top: $position;
						left: $position + 5;
					}
				}
			}

			input {
				right: 100%;
				height: 20px;
				width: calc(100% - 300px);
			}
		}
	}
</style>