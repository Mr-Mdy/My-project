<template>
    <div id="main-tab-bar">
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="../../../assets/img/tabbar/吃豆人.svg" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/左箭头.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category" activeColor="blue">
                <img slot="item-icon" src="../../../assets/img/tabbar/左箭头.svg" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/电铃.svg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart" activeColor="blue">
                <img slot="item-icon" src="../../../assets/img/tabbar/电铃.svg" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/左箭头.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="blue">
                <img slot="item-icon" src="../../../assets/img/tabbar/解锁.svg" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/吃豆人.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }

</script>

<style scoped>

</style>
