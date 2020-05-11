<template>
	<a class="recButton" :href="linkTo">
		<span class="baseText"><slot/></span>
		<span class="hoverText"><slot/></span>
	</a>
</template>

<script>
    export default {
        props: ['linkTo'],
        name: "recButton"
    }
</script>

<style scoped lang="scss">
	.recButton {
		position: relative;
		display: inline-block;
		border: 1px solid #C8863E;
		border-radius: 4px;
		text-decoration: none;
		color: #C8863E;
		text-align: center;
		line-height: 30px;
		background: #ffffff;
		transition: 300ms ease;
		.hoverText, .baseText{
			display: block;
			padding: 14px 30px;
		}
		.hoverText{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: block;
			padding: 14px 30px;
			transition: 400ms ease;
			color: #ffffff;
			background: #C8863E;
			overflow: hidden;
			clip-path: circle(0% at -100% -100%);
		}
		&:hover {
			box-shadow: 0 2px 15px -2px rgba(0,0,0,.4);
			.hoverText{
				clip-path: circle(100% at 50% 50%);
			}
		}
	}
</style>