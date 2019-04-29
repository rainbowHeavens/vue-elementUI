<template>
    <el-menu :default-active="activeIndex" router>
        <el-submenu v-for="item in mainMainList" :index="item.levelId" :key="item.levelId">
            <template slot="title"><span slot="title">{{item.name}}</span></template>
            <el-menu-item-group :title="item.title">
                <el-menu-item v-for="childList in item.children" :key="childList.levelId" :index="childList.levelId">{{childList.name}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    data(){
        return {
            mainMainList:[{
                "levelId":"1",
                "name":"导航一",
                "title":"Basic",
                "children":[
                    {"levelId":"layout","name":"Layout 布局"},
                    {"levelId":"container","name":"container 布局容器"},
                    {"levelId":"colorSel","name":"Color 色彩"},
                    {"levelId":"icon","name":"Icon 图标"},
                    {"levelId":"button","name":"Button 按钮"},
                ]
            },
            {
                "levelId":"2",
                "name":"导航二",
                "title":"Form",
                "children":[
                    {"levelId":"radio","name":"Radio 单选框"},
                    {"levelId":"checkbox","name":"CheckBox 复选框"},
                    {"levelId":"input","name":"Input 输入框"},
                    {"levelId":"inputNum","name":"InputNumber 计数器"},
                ]
            },
            {
                "levelId":"3",
                "name":"导航三",
                "title":"Data",
                "children":[
                    {"levelId":"radio1","name":"Radio 单选框"},
                    {"levelId":"checkbox1","name":"CheckBox 复选框"},
                    {"levelId":"input1","name":"Input 输入框"},
                    {"levelId":"inputNum1","name":"InputNumber 计数器"},
                ]
            },
            {
                "levelId":"4",
                "name":"导航四",
                "title":"Notice",
                "children":[
                    {"levelId":"radio2","name":"Radio 单选框"},
                    {"levelId":"checkbox2","name":"CheckBox 复选框"},
                    {"levelId":"input2","name":"Input 输入框"},
                    {"levelId":"inputNum2","name":"InputNumber 计数器"},
                ]
            }]
        }
    },
    methods:{
        
    },
    computed:{
        activeIndex(){
            return this.$route.path.replace('/','');
        }
    },
    methods:{}
}
</script>
