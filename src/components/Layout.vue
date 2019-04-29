<template>
    <section class="content">
        <h2>Layout 布局</h2>
        <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
        <h3>基础布局</h3>
        <p>使用单一分栏创建基础的栅格布局。</p>
        <div class="source demo-block">
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
        <h3>分栏间隔</h3>   
        <p>分栏之间存在间隔。</p>
        <div class="source demo-block">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
        <h3>分栏偏移</h3>
        <p>支持偏移指定的栏数。</p>
        <div class="source demo-block">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>              
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>
        <h3>对齐方式</h3>
        <p>通过 flex 布局来对分栏进行灵活的对齐。</p>
        <div class="source demo-block">
            <el-row type="flex" class="row-bg" justify="center" :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> 
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>              
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> 
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col> 
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> 
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col> 
            </el-row>
            <el-row type="flex" class="row-bg" justify="end" :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> 
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col> 
            </el-row>
        </div>
        <h3>响应式布局</h3>
        <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
        <div class="source demo-block">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
export default {
    name:"layout",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark{
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>


