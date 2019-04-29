<template>
    <section class="content">
        <h2>Container 布局容器</h2>
        <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
        <p>&lt;el-container&gt;：外层容器。当子元素中包含&lt;el-header&gt; 或 &lt;el-footer&gt;时， 全部子元素会垂直上下排列，否则会水平左右排列。</p>
        <p>&lt;el-header&gt;：顶栏容器。</p>
        <p>&lt;el-aside&gt;：侧边栏容器。</p>
        <p>&lt;el-main&gt;：主要区域容器。</p>
        <p>&lt;el-footer&gt;：底栏容器。</p>
        <div class="tip">
            <p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，&lt;el-container&gt; 的子元素只能是后四者，后四者的父元素也只能是 &lt;el-container&gt;。</p>
        </div>
        <h3>常见页面布局</h3>
        <div class="demo-block">
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
            <el-container>
                 <el-header>Header</el-header>
                 <el-container>
                    <el-aside>Aside</el-aside>
                    <el-main>Main</el-main>
                 </el-container>
            </el-container>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </div>
    </section>
</template>
<script>
export default {
    name:"container",
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{

    }
}
</script>
<style scoped>
.content .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-aside{
    background:#D3DCe6;
    color:#333;
    min-height:160px;
    line-height:160px;
    text-align:center;
}
.el-main{
    background:#e9eef3;
    color:#333;
    text-align:center;
    min-height:160px;
    line-height:160px;
}
.el-container{
    margin-bottom:40px;
}
.el-container:nth-child(4) .el-aside,
  .el-container:nth-child(5) .el-aside {
    line-height: 320px;
    height:320px;
  }
</style>
