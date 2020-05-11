<template>
	<div class="item">
		<a :href="to">{{label}}</a>
		<slot/>
	</div>
</template>

<script>
    export default {
        props:["to", "label"],
        name: "mitem"
    }
</script>