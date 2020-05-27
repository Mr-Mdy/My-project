<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon">图片插槽</slot>
        <slot v-else name="item-icon-active">替换</slot>
        <!--      <div :class="{active:isActive}">-->
        <div :style="activeStyle">
            <slot name="item-text">文本插槽</slot>
        </div>
        <!--              <img src="../../assets/img/tabbar/吃豆人.svg" alt="">-->
        <!--              <div>首页</div>-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red',
            }
        },
        data() {
            return {
                // isActive: false
            }
        },
        computed: {
            isActive() {
                //route当前活跃的router   indeof 判断  /home  =? item1(./home)
                // 在this。path中找没有==-1
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item {
        flex: 1px;
        text-align: center;
        height: 49px;
        /*line-height: 49px;*/
        font-size: 14px;
    }

    .tab-bar-item img {
        height: 23px;
        width: 24px;
        margin-top: 5px;
        /*去除图片边距*/
        vertical-align: middle;
    }

    .active {
        color: red;
    }
</style>
