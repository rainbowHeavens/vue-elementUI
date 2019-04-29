<template>
    <section>
        <h2>Color 色彩</h2>
        <p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
        <!-- <div v-for="(item,index) in colorList" :key="index">
            <h3>{{item.colorTitle}}</h3>
            <p>{{item.colorText}}</p>
            <el-row :gutter="20" v-for="(colorItem,colorIndex) in item.colorChild" :key="colorIndex">
                <el-col :span="6"><div class="demo-color-box" :class="colorItem.colorStyle">{{colorItem.colorTitle}}<p>{{colorItem.colorText}}</p></div></el-col>
            </el-row>
        </div>  -->
        <h3>主色</h3>
        <p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
        <el-row>
            <el-col :span="6"><div class="demo-color-box bg-bule">Blue <p>#409eff</p></div></el-col>
        </el-row>
        <h3>辅助色</h3>
        <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
        <el-row :gutter="20">
            <el-col :span="6"><div class="demo-color-box bg-success">Success <p>#67c23a</p></div></el-col>
            <el-col :span="6"><div class="demo-color-box bg-warning">Warning <p>#e6a23c</p></div></el-col>
            <el-col :span="6"><div class="demo-color-box bg-danger">Danger <p>#f56c6c</p></div></el-col>
            <el-col :span="6"><div class="demo-color-box bg-info">Info <p>#909399</p></div></el-col>
        </el-row> 
        <h3>中性色</h3>
        <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="demo-color-box bg-text-primary">主要文字 <p>#303133</p></div>
                <div class="demo-color-box bg-text-regular">常规文字 <p>#606266</p></div>
                <div class="demo-color-box bg-text-secondary">次要文字 <p>#909399</p></div>
                <div class="demo-color-box bg-text-placeholder">占位文字<p>#C0C4CC</p></div>
            </el-col>
            <el-col :span="6">
                <div class="demo-color-box bg-border-base">一级边框 <p>#DCDFE6</p></div>
                <div class="demo-color-box bg-border-light">二级边框 <p>#E4E7ED</p></div>
                <div class="demo-color-box bg-border-lighter">三级边框 <p>#EBEEF5</p></div>
                <div class="demo-color-box bg-border-extra-light">四级边框 <p>#F2F6FC</p></div>
            </el-col>
        </el-row>   
    </section>
</template>
<script>
export default {
    data(){
        return {
            colorList:[
               { 
                    colorTitle:"主色",
                    colorText:"Element 主要品牌颜色是鲜艳、友好的蓝色。",
                    colorChild:[
                        {
                            colorTitle:"Blue",
                            colorStyle:"bg-bule",
                            colorText:"#409eff"
                        }
                    ],
                    colorChild2:[]
                },
                { 
                    colorTitle:"辅助色",
                    colorText:"除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。",
                    colorChild:[
                        {
                            colorTitle:"Success",
                            colorStyle:"bg-success",
                            colorText:"#67c23a"
                        },
                        {
                            colorTitle:"Warning",
                            colorStyle:"bg-warning",
                            colorText:"#e6a23c"
                        },
                        {
                            colorTitle:"Danger",
                            colorStyle:"bg-danger",
                            colorText:"#f56c6c"
                        },
                        {
                            colorTitle:"Info",
                            colorStyle:"bg-info",
                            colorText:"#909399"
                        },
                    ],
                    colorChild2:[]
                },
                { 
                    colorTitle:"中性色",
                    colorText:"中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",
                    colorChild:[
                        {
                            colorTitle:"主要文字",
                            colorStyle:"bg-text-primary",
                            colorText:"#303133"
                        },
                         {
                            colorTitle:"常规文字",
                            colorStyle:"bg-text-regular",
                            colorText:"#606266"
                        },
                         {
                            colorTitle:"次要文字",
                            colorStyle:"bg-text-secondary",
                            colorText:"#909399"
                        },
                         {
                            colorTitle:"占位文字",
                            colorStyle:"bg-text-placeholder",
                            colorText:"#C0C4CC"
                        },
                    ],
                    colorChild2:[
                        {
                            colorTitle:"一级边框",
                            colorStyle:"bg-border-base",
                            colorText:"#DCDFE6"
                        },
                         {
                            colorTitle:"二级边框",
                            colorStyle:"bg-border-light",
                            colorText:"#E4E7ED"
                        },
                         {
                            colorTitle:"三级边框",
                            colorStyle:"bg-border-lighter",
                            colorText:"#EBEEF5"
                        },
                         {
                            colorTitle:"四级边框",
                            colorStyle:"bg-border--extra-light",
                            colorText:"#F2F6FC"
                        },
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
    .demo-color-box{
        height:74px;
        padding:10px;
        color:#fff;
        font-size:14px;
        border-radius:4px;
        box-sizing: border-box;
    }
    .bg-bule{
        background-color: #409eff;
    }
    .bg-warning{
        background-color:#e6a23c;
    }
    .bg-success{
        background-color:#67c23a
    }
    .bg-danger{
        background-color:#f56c6c;
    }
    .bg-info{
        background-color:#909399;
    }
    .bg-text-primary{
        background-color:#303133;
    }
    .bg-text-regular{
        background-color:#606266;
    }
    .bg-text-secondary{
        background-color:#909399;
    }
    .bg-text-placeholder{
        background-color:#C0C4CC;
    }
    .bg-border-base{
        background-color:#DCDFE6;
        color:#333;
    }
    .bg-border-light{
        background-color:#E4E7ED;
        color:#333;
    }
    .bg-border-lighter{
        background-color:#EBEEF5;
        color:#333;
    }
    .bg-border-extra-light{
        background-color:#F2F6FC;
        color:#333;
    }
</style>
