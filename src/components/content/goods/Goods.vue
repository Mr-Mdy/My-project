<template>
    <div class="goods">
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>
        <h2>sdd</h2>

        <goodslist-itme v-for="item in goods " :goods-item="item"></goodslist-itme>
    </div>
</template>

<script>
    import GoodslistItme from "./GoodslistItme";

    export default {
        name: "Goods",
        components: {
            GoodslistItme
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }

        }
    }
</script>

<style scoped>

</style>