<template>
  <!--newresume 分支重构界面  -->
  
  <div id="app" v-bind:class="{previewNode:isPreviewNode}">
    <transition tag="div" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft" appear>
      <NavEditor id="naveditor" class="naveditor" v-bind:resume="resume" v-on:preview="isPreview" v-on:saveData="saveData" v-show="!isPreviewNode" />
    </transition>
    <div class="container">
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
        <Topbar id="topbar" class="topbar" v-show="!isPreviewNode" />
      </transition>
      <main>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
          <Editor id="editor" class="editor" v-bind:resume="resume" v-on:saveData="saveData" v-show="!isPreviewNode" />
        </transition>
        <Preview id="preview" class="preview" v-bind:resume="resume" />
      </main>
      <div id="exitPreview" v-on:click="isPreview">
        <svg class="icon" aria-hidden="true ">
          <use xlink:href="#icon-exit"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import NavEditor from './components/NavEditor'
import Editor from './components/Editor'
import Preview from './components/Preview'


let defaultResume = {
  currentTab: 0,
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
export default {
  components: {
    Topbar, NavEditor, Editor, Preview
  },
  data() {
    return {
      isPreviewNode: false,
      resume: defaultResume
    }
  },
  methods: {
    isPreview() {
      this.isPreviewNode = !this.isPreviewNode
    },
    saveData() {
      console.log('saveData')
      let resumetring = JSON.stringify(this.resume)
      window.localStorage.setItem('myresume', resumetring)
    },
    readOldData() {
      console.log('readOldData')
      let oldResumetring = window.localStorage.getItem('myresume')
      let oldResume = JSON.parse(oldResumetring)
      this.resume = oldResume || defaultResume
    }

  },
  created() {
    // 浏览器卸载时，存储数据到localStorage
    window.onbeforeunload = () => this.saveData()

    this.readOldData()
  }
}
</script>

<style lang="scss">
@import './assets/color.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  background-color: $DarkWhite;
  overflow: hidden;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  >.container {
    background-color: $DarkWhite;
    width: 100vw;
    display: flex;
    flex-direction: column;
    >.topbar {
      background-color: $White;
      color: $Black;
      box-shadow: 0 6px 6px $LightShadow;
    }
    >main {
      display: flex;
      flex: 1;
      >.editor {
        width: 40em;
        margin: 16px;
        margin-right: 8px; // background-color: $White;
        overflow: hidden;
      }
      >.preview {
        flex: 1;
        background-color: $White;
        margin: 16px;
        margin-left: 8px;
        border-radius: 4px;
      }
    }
  }
}

.previewNode {
  >#naveditor {
    display: none;
  }

  >.container {
    #topbar {
      display: none;
    }
    >main {
      #editor {
        display: none;
      }
      #preview {
        max-width: 800px;
        margin: 32px auto;
      }
    }
  }
}


#exitPreview {
  display: none;
}

.previewNode {
  #exitPreview {
    width: 32px;
    height: 32px;
    font-size: 32px;
    color: $Black;
    display: inline-block;
    position: fixed;
    left: 24px;
    bottom: 16px;
    >.icon {
      fill: $Black;
      width: 32px;
      height: 32px;
    }
    &:active {
      >.icon {
        fill: $LightYellow;
      }
    }
    &:hover {
      >.icon {
        fill: $DarkYellow;
      }
    }
  }
}
</style>
