<template>
	<button class="circleButton">
		<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L5 6.00003L1 11" stroke="#184473" stroke-width="1.6"/>
		</svg>
	</button>
</template>

<script>
    export default {
        name: "circleBtn"
    }
</script>

<style scoped lang="scss">
	.circleButton {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		width: 42px;
		height: 42px;
		border: 1px solid #184473;
		border-radius: 10em;
		transition: 300ms ease;
		cursor: pointer;
		outline: none;
		svg{
			display: block;
			path{
				transition: 300ms ease;
				stroke: #184473;
			}
		}
		&:hover{
			border-color:#C8863E ;
			svg{
				path{
					stroke: #C8863E;
				}
			}
		}
		&.middle {
			width: 42px;
			height: 42px;
		}
	}
</style>