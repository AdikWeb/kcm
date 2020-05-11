<template>
	<div class="menuBlock card">
		<a class="menuBlock--label" href="#">{{label}}</a>
		<div class="menuBlock--items">
			<slot/>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['label'],
        name: "blockMenu"
    }
</script>

<style lang="scss">
	.menuBlock {
		margin-top: 46px;
		flex-grow: 1;
		&:first-child{
			margin-top: 0;
		}
		&--label {
			text-decoration: none;
			color: #000000;
			font-weight: 600;
			font-size: 1.125rem;
			margin-bottom: 17px;
			display: block;

		}
		&--items{
			.item{
				a{
					font-size: 0.938rem;
					margin-bottom: 14px;
					display: block;
					transition: 300ms ease;
					&:hover{
						color: #C8863E;
					}
				}
			}
		}
	}
</style>