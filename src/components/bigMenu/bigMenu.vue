<template>
	<transition name="bottomTop">
		<div class="bigMenu" v-show="open">
			<div class="bigMenu--items card-columns" :class="wrapItems">
				<slot/>
			</div>
		</div>
	</transition>
</template>

<script>
    export default {
        name: "bigMenu",
        props: ['wrapItems', 'button'],
        data() {
            return {
                open: false
            }
        },
        mounted() {
            if (this.button) {
                let hamButt = document.querySelectorAll(this.button);
                hamButt.forEach(el => {
                    el.onclick = this.clickButton;
                })
            }
        },
        methods: {
            clickButton() {
                this.open = !this.open;
                this.$root.menuOpen = this.open;
            }
        }
    }
</script>

<style lang="scss">
	.bigMenu {
		z-index: 9999;

		.card-columns {
			-webkit-column-count: 4;
			-moz-column-count: 4;
			column-count: 4;
			@media screen and (max-width: 1200px) {
				-webkit-column-count: 3;
				-moz-column-count: 3;
				column-count: 3;
			}
			@media screen and (max-width: 900px) {
				-webkit-column-count: 2;
				-moz-column-count: 2;
				column-count: 2;
			}
			@media screen and (max-width: 500px) {
				-webkit-column-count: 1;
				-moz-column-count: 1;
				column-count: 1;
			}
		}

		&--items {
			width: 100%;
			height: 100%;
		}
	}
</style>