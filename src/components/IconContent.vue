<template>
    <section>
        <h2>Icon 图标</h2>
        <p>提供了一套常用的图标集合。</p>
        <h3>使用方法</h3>
        <p>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
        <div class="demo-block source">
            <i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <h3>图标集合</h3>
        <ul class="icon-list">
            <li v-for="item in iconList" :key="item.iconId">
                <span>
                    <i :class="item.iconName"></i>
                    <span class="icon-name">{{item.iconName}}</span>
                </span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data(){
        return {
            iconList:[
                {iconId:1,iconName:"el-icon-upload"},
                {iconId:2,iconName:"el-icon-error"},
                {iconId:3,iconName:"el-icon-success"},
                {iconId:4,iconName:"el-icon-warning"},
                {iconId:5,iconName:"el-icon-sort-down"},
                {iconId:6,iconName:"el-icon-sort-up"},
                {iconId:7,iconName:"el-icon-arrow-left"},
                {iconId:8,iconName:"el-icon-circle-plus"},
                {iconId:9,iconName:"el-icon-circle-plus-outline"},
                 {iconId:10,iconName:"el-icon-arrow-down"},
                {iconId:11,iconName:"el-icon-arrow-right"},
                {iconId:12,iconName:"el-icon-arrow-up"},
                {iconId:13,iconName:"el-icon-back"},
                {iconId:14,iconName:"el-icon-circle-close"},
                {iconId:15,iconName:"el-icon-date"},
                {iconId:16,iconName:"el-icon-circle-close-outline"},
                {iconId:17,iconName:"el-icon-caret-left"},
                {iconId:18,iconName:"el-icon-caret-bottom"},
                {iconId:19,iconName:"el-icon-caret-top"},
                {iconId:20,iconName:"el-icon-caret-right"},
                {iconId:21,iconName:"el-icon-close"},
                {iconId:22,iconName:"el-icon-check"},
                {iconId:23,iconName:"el-icon-d-arrow-left"},
                {iconId:24,iconName:"el-icon-delete"},
                {iconId:25,iconName:"el-icon-d-arrow-right"},
                {iconId:26,iconName:"el-icon-document"},
                {iconId:27,iconName:"el-icon-d-caret"},
                {iconId:28,iconName:"el-icon-edit-outline"},
                {iconId:29,iconName:"el-icon-download"},
                {iconId:30,iconName:"el-icon-goods"},
                {iconId:31,iconName:"el-icon-search"},
                {iconId:32,iconName:"el-icon-info"},
                {iconId:33,iconName:"el-icon-message"},
                {iconId:34,iconName:"el-icon-edit"},
                {iconId:35,iconName:"el-icon-location"},
                {iconId:36,iconName:"el-icon-loading"},
                {iconId:37,iconName:"el-icon-location-outline"},
                {iconId:38,iconName:"el-icon-menu"},
                {iconId:39,iconName:"el-icon-mminus"},
                {iconId:40,iconName:"el-icon-bell"},
                {iconId:41,iconName:"el-icon-mobile-phone"},
                {iconId:42,iconName:"el-icon-news"},
                {iconId:43,iconName:"el-icon-more"},
                {iconId:44,iconName:"el-icon-more-outline"},
                {iconId:45,iconName:"el-icon-phone"},
                {iconId:46,iconName:"el-icon-phone-outline"},
                {iconId:47,iconName:"el-icon-picture"},
                 {iconId:48,iconName:"el-icon-picture-outline"},
                {iconId:49,iconName:"el-icon-plus"},
                {iconId:50,iconName:"el-icon-rank"},
                {iconId:51,iconName:"el-icon-printer"},
                {iconId:52,iconName:"el-icon-refresh"},
                {iconId:53,iconName:"el-icon-question"},
                {iconId:54,iconName:"el-icon-remove"},
                {iconId:55,iconName:"el-icon-share"},
                {iconId:56,iconName:"el-icon-star-on"},
                {iconId:57,iconName:"el-icon-setting"},
                 {iconId:58,iconName:"el-icon-circle-check"},
                {iconId:59,iconName:"el-icon-service"},
                {iconId:60,iconName:"el-icon-sold-out"},
                {iconId:61,iconName:"el-icon-remove-outline"},
                {iconId:62,iconName:"el-icon-star-off"},
                {iconId:63,iconName:"el-icon-circle-check-outline"},
                {iconId:64,iconName:"el-icon-tickets"},
                {iconId:65,iconName:"el-icon-sort"},
                {iconId:66,iconName:"el-icon-zoom-in"},
                {iconId:67,iconName:"el-icon-zoom-out"},
                 {iconId:68,iconName:"el-icon-time"},
                {iconId:69,iconName:"el-icon-view"},
                {iconId:70,iconName:"el-icon-upload2"}
            ]
        }
    }
}
</script>
<style scoped>
.demo-block i{
    font-size:1.5em;
    vertical-align: middle;
    margin:0 20px;
    color:#606266;
}
.icon-list{
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}
.icon-list li{
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-list li:after{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
.icon-list li span{
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    color:#99a9bf;
}
.icon-list li i{
    display:block;
    font-size:32px;
    margin-bottom:12px;
    color:#606266;
}
.icon-list li span.icon-name{
    color:#606266;
    font-size:1em;
    padding:0 3px;
    font-weight:500;
}
</style>

