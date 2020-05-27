<template>
    <swiper>
        <!--            :  使用变量的某个属性时-->
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper'

    export default {
        name: "HomeSwiper",
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        mounted() {
            console.log(this.banners);
        }
    }
</script>

<style scoped>

</style>