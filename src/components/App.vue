<template>
  <!--newresume 分支重构界面  -->

  <div id="app" v-bind:class="{previewNode:isPreviewNode}">
    <transition tag="div" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft" appear>
      <NavEditor id="naveditor" class="naveditor" @isPreview="isPreview" v-show="!isPreviewNode" />
    </transition>
    <div class="container">
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
        <Topbar id="topbar" class="topbar" v-show="!isPreviewNode" />
      </transition>
      <main>
        <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
          <Editor id="editor" class="editor" v-show="!isPreviewNode" />
        </transition>
        <Preview id="preview" class="preview" />
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
import { mapState, mapMutations } from 'vuex'
import AV from 'js/api/av.js';
import mixin from 'js/api/mixin.js'
import signService from 'js/service/signService.js'
import leancloudService from 'js/service/leancloudService.js'


export default {
  name:'app',
  mixins: [mixin, AV],
  computed: {
    ...mapState(['resume','currentUser','isPreviewNode','formData'])
  },
  methods: {
    isPreview() {
      this.$store.commit('isPreviewNode' )
      if (this.isPreviewNode) {
        this.msg('预览模式')
      } else {
        this.msg('编辑模式')
      }
    }
  },
  created() {
    let currentUser = signService.getCurrentUser()
    this.$store.commit('setCurrentUser', currentUser)
    this.$store.dispatch('read',{currentUser}).then(res=>{
      this.$store.commit('setResume', res)
    })
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
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
