<template>
	<div class="col-lg-4 col-md-6 col-sm-12">
		<a href="#" class="simpleCardNew">
			<img :src="img" alt="">
			<div class="simpleCardNew__info">
				<div class="simpleCardNew__date">
					<slot name="date"/>
				</div>
				<div class="simpleCardNew__title">
					<slot name="title"/>
				</div>
				<div class="simpleCardNew__shortDescr">
					<slot name="shortDescr"/>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
    export default {
        props: ['img'],
        name: "simpleCardNews"
    }
</script>

<style scoped lang="scss">
	[class^="col-"]{
		margin-bottom: 30px;
	}
	.simpleCardNew {
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: #000000;
		border: 1px solid #C8863E;
		border-radius: 4px;
		display: block;
		transition: ease 300ms;
		&__info{
			padding: 19px 30px;

		}
		img {
			width: calc(100% - 2px);
			object-fit: cover;
			min-height: 198px;
			border-radius: 4px;
			margin: 1px 1px 9px 1px;
		}

		&__date {
			font-size: 0.875rem;
			margin-bottom: 9px;
			display: block;
		}

		&__title {
			font-size: 1.125rem;
			line-height: 24px;
			margin-bottom: 8px;
			transition: ease 300ms;
		}
		&__shortDescr{
			font-size: 0.875rem;
			line-height: 22px;
		}
		&:hover{
			box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
			[class$="__title"]{
				color: #C8863E;
			}
		}
	}
</style>