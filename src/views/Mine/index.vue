<template>
  <div id="main">
      <Header title="我的喵喵"/>
        <div id="content">
          <Login />
        </div>
      <TabBar/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'

export default {
  name: 'Mine',
  components: {
    Header,
    TabBar,
    Login
  }
}
</script>

<style lang="scss" scoped>
  #main{ height: 100%; display: flex; flex-direction:column;}
  #content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
</style>
