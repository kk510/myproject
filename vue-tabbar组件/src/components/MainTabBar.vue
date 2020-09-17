<template>
    <div>
<tab-bar>
       <tab-bar-item path='/home' activeColor="deepPink">
         <img src="../assets/img/tabbar/jiemaoshuabeifen3.svg" slot="item-icon">
         <img src="../assets/img/tabbar/huazhuangmianbeifen3.svg" slot="item-icon-active">
         <div slot = "item-text">首页</div>
       </tab-bar-item>

       <tab-bar-item path="/profile" activeColor="deepPink">
         <img src="../assets/img/tabbar/jiemaoshuabeifen3.svg" slot="item-icon">
         <img src="../assets/img/tabbar/shuzibeifen3.svg" slot="item-icon-active">

         
         <div slot = "item-text">我的</div>
       </tab-bar-item>
       <tab-bar-item path="/cart" activeColor="deepPink">
         <img src="../assets/img/tabbar/jiemaoshuabeifen3.svg" slot="item-icon">
         <img src="../assets/img/tabbar/xiangshuibeifen3.svg" slot="item-icon-active">

     
         <div slot = "item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="/category" activeColor="deepPink">
         <img src="../assets/img/tabbar/zhijiayoubeifen3.svg" slot="item-icon">
         <img src="../assets/img/tabbar/xifashuibeifen3.svg" slot="item-icon-active">
         <div slot = "item-text">分类</div>
       </tab-bar-item>
     </tab-bar>
    </div>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem'
    export default {
        components:{
            TabBarItem,
            TabBar
        }
    }
</script>

<style scoped>

</style>