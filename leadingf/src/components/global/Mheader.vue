<template>
    <div class="header">
       <slot></slot>
        <i class="" v-if="back" @click="goBack">返回</i>
    </div>
</template>
<script>
    export default{
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped lang="less">
    .header{
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        background: #339A99;
        height:55px;
        text-align: center;
        line-height: 55px;
        font-weight: bold; 
        i{
            position: absolute;
            left:5px;
            font-size:20px;
            color: #fff;
        }      
    }
    
</style>
