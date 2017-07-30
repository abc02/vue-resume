<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  components: {
    Topbar , Editor , Preview
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display:flex;
  flex-direction: column;
  >.topbar {
    min-height: 100px;
  }
  >main{
    display:flex;
    flex: 1;
    >.preview{
      flex:1;
    }
  }
}
</style>
