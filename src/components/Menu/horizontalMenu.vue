<template>
	<div :id="id" class="horizontal-menu" v-show="!this.$parent.$data.openSearch">
		<slot/>
	</div>
</template>

<script>
    export default {
        name: "horizontalMenu",
        data() {
            return {
                id: Date.now(),
                open: false
            }
        },
    }
</script>

<style lang="scss">
	.horizontal-menu {
		display: flex;
		align-items: center;
		@media screen and (max-width: 995px) {
			display: none;
		}

		.item {
			margin-right: 16px;
			position: relative;

			a {
				color: #000000;
				transition: 300ms ease;
				font-size: 0.875rem;
			}

			&:hover > {
				a {
					color: #C8863E;
				}

				.submenu {
					display: block !important;
					opacity: 1;
				}
			}
		}

	}
</style>