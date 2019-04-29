<template>
    <div id="container">
        <el-header>
            <img :src="imgUrl" alt="logo">
            <el-menu mode="horizontal">
                <el-menu-item>指南</el-menu-item>
                <el-menu-item>组件</el-menu-item>
                <el-menu-item>资源</el-menu-item>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside>
                <h4>element基础组件</h4>  
                <ElementMenu />              
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>  
</template>
<script>
import ElementMenu from './ElementMenu'
export default {
    components:{
        ElementMenu
    },
    data(){
        return {
            imgUrl:require("../assets/image/logo.svg")
        }
    }
}
</script>

