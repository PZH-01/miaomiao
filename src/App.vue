<template>
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>

<script>
export default {

}
</script>

<style lang="scss">
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}
</style>
