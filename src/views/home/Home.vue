<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物城</div>
        </nav-bar>

        <!--        轮播图-->
        <home-swiper :banners="banners"/>
        <!--        推荐-->
        <recommend-view :recommends="recommends"></recommend-view>
        <!--        流行-->
        <feature></feature>

        <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>


        <goods :goods="showGoods"></goods>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/Navbar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import Feature from "./childComps/Feature";
    import TabControl from "../../components/content/tabControl/TabControl";

    import Goods from "../../components/content/goods/Goods";

    import {getHomeMultidata, getHomeGoods, getGoods} from "../../network/home";

    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            Feature,
            TabControl,
            Goods
        },
        data() {
            return {
                banners: [],
                banners1: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'news': {page: 0, list: []},
                    'sell': {page: 0, list: []},
                },
                //默认商品类型
                currentType: 'pop',
            }
        },
        created() {
            this.getHomeMultidata()

            this.getGoods()


        },
        mounted() {
            // this.getdata();
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        methods: {
            /*
            * 事件监听
            * */

            tabClick(index) {
                // console.log(index);
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        breaks
                }
            },

            /**
             *网络请求
             */
            getHomeMultidata() {
                //请求多个数据
                getHomeMultidata().then(res => {
                    console.log(res);
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },

            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    // console.log(res);
                    this.goods[type].list.push(...res.data.list)  //抽出所有数据遍历放在数组中
                    this.goods[type].page += 1
                })
            },

            getGoods() {
                getGoods().then(res => {
                    this.banners1 = res.data;
                    console.log(this.banners1);
                })
            }

        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: white;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        background-color: #fff;
        position: sticky;
        top: 44px;
    }
</style>
