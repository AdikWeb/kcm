<template>
	<a class="btnArrow" :href="to">
		<slot/>
	</a>
</template>

<script>
    export default {
        props: ["to"],
        name: "btnArrow"
    }
</script>

<style scoped lang="scss">
	.btnArrow {
		color: #C8863E;
		display: inline-flex;
		align-items: center;
		flex-wrap: nowrap;
		font-size: 1rem;
		text-decoration: none;
		&:after {
			transition: 300ms ease;
			content: "";
			width: 16px;
			height: 9px;
			display: block;
			margin-left: 6px;
			background: url("./arrow.svg") center center / contain no-repeat;
		}

		&:hover{
			color: #B15D00;
			&:after{
				transform: translateX(10px);
			}
		}
	}
</style>