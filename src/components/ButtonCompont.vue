<template>
    <section>
        <h2>Button 按钮</h2>
        <p>常用的操作按钮。</p>
        <h3>基础用法</h3>
        <p>基础的按钮用法。</p>
        <div class="demo-block source">
            <div>
                <el-button>默认按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
            </div>
            <div style="margin:20px 0">
                <el-button plain>plain朴素按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
            </div>
            <div>
                <el-button round>round圆形按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
            </div>
        </div>
        <h3>禁用状态</h3>
        <p>按钮不可用状态。</p>
        <div class="demo-block source">
            <div>
                <el-button disabled>默认按钮</el-button>
                <el-button type="success" disabled>成功按钮</el-button>
                <el-button type="danger" disabled>危险按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="info" disabled>信息按钮</el-button>
                <el-button type="primary" disabled>主要按钮</el-button>
            </div>
            <div style="margin:20px 0">
                <el-button plain disabled>plain朴素按钮</el-button>
                <el-button type="success" plain disabled>成功按钮</el-button>
                <el-button type="danger" plain disabled>危险按钮</el-button>
                <el-button type="warning" plain disabled>警告按钮</el-button>
                <el-button type="info" plain disabled>信息按钮</el-button>
                <el-button type="primary" plain disabled>主要按钮</el-button>
            </div>
            <div>
                <el-button round disabled>round圆形按钮</el-button>
                <el-button type="success" round disabled>成功按钮</el-button>
                <el-button type="danger" round disabled>危险按钮</el-button>
                <el-button type="warning" round disabled>警告按钮</el-button>
                <el-button type="info" round disabled>信息按钮</el-button>
                <el-button type="primary" round disabled>主要按钮</el-button>
            </div>
        </div>
        <h3>文字按钮</h3>
        <p>没有边框和背景色的按钮。</p>
        <div class="demo-block source">
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>disabled文字按钮</el-button>
        </div>
        <h3>图标按钮</h3>
        <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <div class="demo-block source">
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary"><i class="el-icon-search"></i> 搜索</el-button>
            <el-button type="primary"><i class="el-icon-upload el-icon-right"></i> 上传</el-button>
        </div>
        <h3>按钮组</h3>
        <p>以按钮组的方式出现，常用于多项类似操作。</p>
        <div class="demo-block source">
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页 <i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary" icon="el-icon-remove">删除</el-button>
                <el-button type="primary" icon="el-icon-setting">设置</el-button>
                <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
            </el-button-group>
        </div>
        <h3>加载中</h3>
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
        <div class="demo-block source">
            <el-button type="primary" :loading="true">加载中</el-button>
        </div>
        <h3>不同尺寸</h3>
        <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
        <div class="demo-block source">
            <div>
                <el-button type="primary">默认按钮</el-button>
                <el-button type="primary" size="medium">中等按钮</el-button>
                <el-button type="primary" size="small">小型按钮</el-button>
                <el-button type="primary" size="mini">超小按钮</el-button>
            </div>
            <div style="margin:20px 0">
                 <el-button type="primary" round>默认按钮</el-button>
                <el-button type="primary" size="medium" round>中等按钮</el-button>
                <el-button type="primary" size="small" round>小型按钮</el-button>
                <el-button type="primary" size="mini" round>超小按钮</el-button>
            </div>
        </div>
        

    </section>
</template>

<script>
export default {
  name: 'ButtonComponet',
  data(){
      return {
          msg:"Hello Vue-Router"
      }   
  }
}
</script>

<style scoped>
</style>

