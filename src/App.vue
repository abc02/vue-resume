<template>
  <!--newresume 分支重构界面  -->

  <div id="app" v-bind:class="{previewNode:isPreviewNode}">
    <transition tag="div" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft" appear>
      <NavEditor id="naveditor" class="naveditor" v-bind:resume="resume" :currentUser="currentUser" v-on:preview="isPreview" v-on:saveData="saveData" v-on:savePDF="savePDF" v-show="!isPreviewNode" />
    </transition>
    <div class="container">
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
        <Topbar id="topbar" class="topbar" :resume="resume" :currentUser="currentUser" @getCurrentUser="getCurrentUser" v-on:logInUp="logInUp" v-on:logOut="logOut" v-show="!isPreviewNode" />
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
import AV from 'leancloud-storage'
import jsPDF from 'jsPDF'
import html2canvas from 'html2canvas'

let defaultResume = {
  objectId: null,
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
      currentUser: null,
      resume: defaultResume
    }
  },
  methods: {
    isPreview() {
      this.isPreviewNode = !this.isPreviewNode
      if (this.isPreviewNode) {
        this.$message({
          message: '预览模式',
          type: 'success'
        })
      } else {
        this.$message({
          message: '编辑模式',
          type: 'success'
        })

      }

    },
    logInUp(currentUser) {
      console.log('App', currentUser)
      this.currentUser = currentUser
      this.readLeancloud()
    },
    logOut() {
      this.currentUser = null
      this.resume = defaultResume
    },
    getCurrentUser(currentUser) {
      // console.log(currentUser)
      this.currentUser = currentUser
      this.readLeancloud()
    },
    readLeancloud() {
      if (!this.currentUser) {
        this.resume = defaultResume
        return
      } else if (this.currentUser) {
        var query = new AV.Query('resumefile');
        query.find()
          .then((resumefile) => {
            let resume = resumefile[0]
            let id = resume.id
            this.resume = JSON.parse(resume.attributes.resumefile)
            this.resume.id = id
          }, function(error) {
            console.error(error)
          })
      }
    },
    savePDF() {
      var content = document.querySelector('div#preview');

      html2canvas(content, {
        onrendered: function(canvas) {

          var contentWidth = canvas.width;
          var contentHeight = canvas.height;

          //一页pdf显示html页面生成的canvas高度;
          var pageHeight = contentWidth / 592.28 * 841.89;
          //未生成pdf的html页面高度
          var leftHeight = contentHeight;
          //页面偏移
          var position = 0;
          //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
          var imgWidth = 595.28;
          var imgHeight = 592.28 / contentWidth * contentHeight;

          var pageData = canvas.toDataURL('image/jpeg', 1.0);

          var pdf = new jsPDF('', 'pt', 'a4');

          //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          //当内容未超过pdf一页显示的范围，无需分页
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight;
              position -= 841.89;
              //避免添加空白页
              if (leftHeight > 0) {
                pdf.addPage();
              }
            }
          }
          pdf.save('content.pdf');
        }
      })
    },
    saveData() {
      console.log('data', this.resume.id)
      if (this.resume.id) {
        this.updataLeancloud()
      } else {
        this.saveInitData()
      }
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    },
    saveInitData() {

      // window.localStorage.setItem('myresume', resumetring)`
      console.log('saveData')
      var resumetring = JSON.stringify(this.resume)
      var Resumefile = AV.Object.extend('resumefile')
      var resumefile = new Resumefile()
      var acl = new AV.ACL()
      acl.setReadAccess(AV.User.current(), true) // 只有这个 user 能读
      acl.setWriteAccess(AV.User.current(), true) // 只有这个 user 能写
      resumefile.set('resumefile', resumetring);
      resumefile.setACL(acl) // 设置访问控制

      // 设置优先级
      resumefile.save().then((resumefile) => {
        this.resume.id = resumefile.id
        console.log('objectId is ' + resumefile.id);
      }, (error) => {
        console.error(error);
      });
    },
    updataLeancloud() {
      // console.log(this.resumefile.id)
      var newresumefile = AV.Object.createWithoutData('resumefile', this.resume.id);
      // 修改属性
      var resumetring = JSON.stringify(this.resume)
      newresumefile.set('resumefile', resumetring);
      // 保存到云端
      newresumefile.save();
    },
    readOldData() {
      console.log('readOldData')
      let oldResumetring = window.localStorage.getItem('myresume')
      let oldResume = JSON.parse(oldResumetring)
      this.resume = oldResume || defaultResume
    },

  },
  created() {
    // 浏览器卸载时，存储数据到localStorage
    // window.onbeforeunload = () => this.saveData()

    // this.readOldData()
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
