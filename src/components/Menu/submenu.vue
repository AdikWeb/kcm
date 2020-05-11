<template>
	<div class="submenu">
		<div class="items">
			<slot/>
		</div>
	</div>
</template>

<script>
    export default {
        name: "submenu"
    }
</script>

<style scoped lang="scss">
.submenu{
	position: absolute;
	filter: drop-shadow(0 0 1px #7e7e7e);
	top: 100%;
	left: 0;
	transform: translateX(-50%);
	display: none;
	padding-top: 10px;
	&:hover{
		display: block;
	}
	.items{
		padding: 12px;
		border-radius: 3px;
		background: #fff;
		transition: all 300ms ease 1s;
		[class$="--item"]{
			margin-right: 0;
		}
		&:after{
			content: "";
			width: 20px;
			height: 10px;
			position: absolute;
			bottom: calc(100% - 10px);
			left: calc(50% - 10px);
			background: linear-gradient(to right bottom, transparent 50%, white 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, white 50%) right / 50% 100% no-repeat;
		}

	}
}
</style>