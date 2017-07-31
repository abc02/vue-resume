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
    Topbar, Editor, Preview
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  >.topbar {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 3px hsla(0, 0, 0, .5);
  }
  >main {
    background-color: #ddd;
    display: flex;
    flex: 1;
    >.editor {
      width: 40em;
      background-color: white;
      box-shadow: 0 0 3px hsla(0, 0, 0, .5);
      margin: 16px;
      margin-right: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    >.preview {
      flex: 1;
      background-color: white;
      box-shadow: 0 0 3px hsla(0, 0, 0, .5);
      margin: 16px;
      margin-left: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
