<template>
    <section>
        <h2>Radio 单选框</h2>
        <p>在一组备选项中进行单选</p>
        <h3>基础用法</h3>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <div class="demo-block source">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <h3>禁用状态</h3>
        <p>单选框不可用的状态。</p>
        <div class="demo-block source">
            <el-radio disabled v-model="radio1" label="1">选中且禁用</el-radio>
            <el-radio disabled v-model="radio1" label="2">禁用状态</el-radio>
        </div>
        <h3>单选框组</h3>
        <p>适用于在多个互斥的选项中选择的场景</p>
        <div class="demo-block source">
            <el-radio-group v-model="radio2">
                <el-radio  :label="1">备选项</el-radio>
                <el-radio :label="2">备选项</el-radio>
                <el-radio :label="3">备选项</el-radio>
            </el-radio-group>  
        </div>
        <h3>按钮样式</h3>
        <p>按钮样式的单选组合。</p>
        <div class="demo-block source">
            <div>
                <el-radio-group v-model="radio3">
                    <el-radio-button  label="北京">北京</el-radio-button>
                    <el-radio-button label="上海">上海</el-radio-button>
                    <el-radio-button label="天津">天津</el-radio-button>
                    <el-radio-button label="广州">广州</el-radio-button>
                    <el-radio-button label="深圳">深圳</el-radio-button>
                </el-radio-group> 
            </div>
            <div style="margin:20px 0">
                <el-radio-group v-model="radio4" size="medium">
                    <el-radio-button  label="北京">北京</el-radio-button>
                    <el-radio-button label="上海">上海</el-radio-button>
                    <el-radio-button label="天津">天津</el-radio-button>
                    <el-radio-button label="广州">广州</el-radio-button>
                    <el-radio-button label="深圳">深圳</el-radio-button>
                </el-radio-group> 
            </div>
            <div>
                <el-radio-group v-model="radio6" size="small">
                    <el-radio-button  label="北京">北京</el-radio-button>
                    <el-radio-button label="上海">上海</el-radio-button>
                    <el-radio-button label="天津">天津</el-radio-button>
                    <el-radio-button label="广州">广州</el-radio-button>
                    <el-radio-button label="深圳">深圳</el-radio-button>
                </el-radio-group>  
            </div>
            <div style="margin:20px 0">
                <el-radio-group v-model="radio5" size="mini">
                    <el-radio-button  label="北京">北京</el-radio-button>
                    <el-radio-button label="上海">上海</el-radio-button>
                    <el-radio-button label="天津">天津</el-radio-button>
                    <el-radio-button label="广州">广州</el-radio-button>
                    <el-radio-button label="深圳">深圳</el-radio-button>
                </el-radio-group> 
            </div>
            <div>
                <el-radio v-model="radio7" label="1" border>备选项</el-radio>
                <el-radio v-model="radio7" label="2" border>备选项</el-radio>
                <el-radio v-model="radio7" label="3" border size="medium">备选项</el-radio>
                <el-radio v-model="radio7" label="4" size="small" border>备选项</el-radio>
                <el-radio v-model="radio7" label="5" size="mini" border>备选项</el-radio>
            </div>
            
            
            
        </div>
        
        



    </section>
</template>
<script>
export default {
    data(){
        return {
            radio:"1",
            radio1:"1",
            radio2:"1",
            radio3:"北京",
            radio4:"上海",
            radio5:"天津",
            radio6:"广州",
            radio7:"1"
        }
    }
}
</script>

