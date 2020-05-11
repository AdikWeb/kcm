<template>
    <a :href="to">
        <slot/>
    </a>
</template>

<script>
    export default {
        props:['to', 'prevent'],
        data() {
            return {
                parentPrevent: this.$parent.prevent||false
            }
        },
        name: "href",
        mounted() {
            if(this.prevent || this.parentPrevent){
                this.$el.onclick = e =>{
                    e.preventDefault();
                }
            }
        }
    }
</script>