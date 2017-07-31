<template>
  <div id="app" v-bind:class="{previewNode:previewNode}">
    <Topbar id="topbar" class="topbar" v-on:preview="preview" />
    <main>
      <Editor id="editor" class="editor" v-bind:resume="resume" />
      <Preview id="preview" class="preview" v-bind:resume="resume" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  components: {
    Topbar, Editor, Preview
  },
  data() {
    return {
      previewNode: false,
      resume: {
        profile: {
          name: '',
          citry: '',
          birth: ''
        },
        workHistory: [
          { company: '', content: '' },
        ],
        projects: [
          { name: '', content: '' },
        ],
        school: [
          { name: '', major: '' }
        ],
        contact: {
          phone: '',
          wechat: '',
          email: ''
        }
      }
    }
  },
  methods: {
    exitPreview() {
      this.previewNode = false
    },
    preview() {
      this.previewNode = true
    }
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

.previewNode {
  #topbar {
    display: none;
  }
  main {
    #editor {
      display: none;
    }
    #preview {
      max-width: 800px;
      margin: 32px auto;
    }
  }
}


#exitPreview {
  display: none;
}

.previewNode #exitPreview {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
