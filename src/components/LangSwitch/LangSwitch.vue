<template>
    <div class="langSwitch">
        <button @click="open" class="langSwitch--button" type="button">Rus</button>
        <i @click="open" :style="[opened?{'transform': 'rotate(180deg)'}:'']" class="fas fa-chevron-down"></i>
        <transition name="bottomTop">
            <div v-show="opened" class="items">
                <slot/>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props:['iPrevent'],
        data() {
            return {
                prevent: this.iPrevent || false,
                opened: false,
            }
        },
        name: "LangSwitch",
        methods:{
            open(e){
                e.preventDefault();
                this.opened = !this.opened;
            }
        }
    }
</script>

<style lang="scss">
.langSwitch{
    display: flex;
    align-items: center;
    position: relative;
    .items{
        filter: drop-shadow(0 1px 1px fade_out(#7e7e7e, .3));
        display: flex;
        padding: 5px 10px;
        flex-direction: column;
        position: absolute;
        top: calc(100% + 10px);
        background: #fff;
        border-radius: 3px;
        z-index: 9999999;
        a{
            text-decoration: none;
            color: #000;
            font-size: 0.813rem;
            font-weight: 300;
            margin-bottom: 10px;
            transition: 300ms ease;
            &:last-child{
                margin-bottom: 0;
            }
            &:hover{
                color: #C8863E;
            }
        }

        &:after{
            content: "";
            width: 20px;
            height: 10px;
            position: absolute;
            bottom: 100%;
            left: calc(50% - 10px);
            background: linear-gradient(to right bottom, transparent 50%, white 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, white 50%) right / 50% 100% no-repeat;
        }
    }

    &--button{
        background-color: transparent;
        border: none;
        font-size: 0.813rem;
        outline: none;
        cursor: pointer;
    }

    .fas{
        font-size: 0.500rem;
    }
}
</style>