<template>
	<div class="headerNumberAndSocBox">
		<a class="headerNumberAndSocBox__tel" :href="'tel:'+tel">{{tel||text}}</a>
		<div class="headerNumberAndSocBox__socBox">
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="#"><i class="fab fa-whatsapp"></i></a>
			<a href="#"><i class="fas fa-envelope"></i></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['text', 'tel'],
        name: "headerNumberAndSocBox"
    }
</script>

<style scoped lang="scss">
	.headerNumberAndSocBox {
		display: flex;
		align-items: center;
		&__tel {
			color: #184473;
			text-decoration: none;
			font-size: 0.813rem;
			margin-right: 24px;
		}
		&__socBox{
			display: flex;
			align-items: center;
			a{
				text-decoration: none;
				color: #184473;
				display: block;
				margin-right: 14px;
				&:last-child{
					margin-right: 0;
				}
				i{
					display: block;
					font-size: 1rem;
				}
			}
		}
		a{
			transition: 300ms ease;
			&:hover{
				color: #C8863E;
			}
		}
		&.white{
			a{
				color: #fff;
				&:hover{
					color: #C8863E;
				}
			}
		}
		&.autoLeft{
			margin-left: auto;
		}
	}
</style>