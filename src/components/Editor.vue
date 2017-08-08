<template>
  <div id="editor">
  
    <ol class="panes">
      <transition enter-active-class="animated bounceInLeft" v-on:transitionend="test">
        <li v-bind:class="{acitve: resume.currentTab ===0}" v-show="resume.currentTab === 0">
          <ProfileEditor v-bind:profile="resume.profile" />
          <ButtonGroup v-bind:buttonType="porfileButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===1}" v-show="resume.currentTab ===1">
          <WorkHistoryEditor v-bind:workHistory="resume.workHistory" />
          <ButtonGroup v-bind:buttonType="workHistoryButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===2}" v-show="resume.currentTab === 2">
          <ProjectEditor v-bind:projects="resume.projects" />
          <ButtonGroup v-bind:buttonType="projectsButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===3}" v-show="resume.currentTab ===3">
          <SchoolEditor v-bind:school="resume.school" />
          <ButtonGroup v-bind:buttonType="schoolButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===4}" v-show="resume.currentTab ===4">
          <ContactEditor v-bind:contact="resume.contact" />
          <ButtonGroup v-bind:buttonType="contactButton" />
        </li>
      </transition>
    </ol>
  </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import WorkHistoryEditor from './WorkHistoryEditor'
import ProjectEditor from './ProjectEditor'
import SchoolEditor from './SchoolEditor'
import ContactEditor from './ContactEditor'
import ButtonGroup from './ButtonGroup'
export default {
  props: ['resume'],
  data() {
    return {
      show: true,
      porfileButton: {
        type: 'profile',
        msg: ['清空'],
        callBlacks: [this.emptyData]
      },
      workHistoryButton: {
        type: 'workHistory',
        msg: ['清空', '新增'],
        callBlacks: [this.emptyData, this.addData]
      },
      projectsButton: {
        type: 'projects',
        msg: ['清空', '新增'],
        callBlacks: [this.emptyData, this.addData]
      },
      schoolButton: {
        type: 'school',
        msg: ['清空', '新增'],
        callBlacks: [this.emptyData, this.addData]
      },
      contactButton: {
        type: 'contact',
        msg: ['清空'],
        callBlacks: [this.emptyData]
      },

    }
  },
  components: {
    ProfileEditor, WorkHistoryEditor, ProjectEditor, SchoolEditor, ContactEditor, ButtonGroup
  },
  methods: {
    addData(type) {
      let tmp = this.resume[type]
      if (!Array.isArray(tmp)) return
      switch (type) {
        case 'workHistory':
          tmp.push({ company: '', content: '' })
          break;
        case 'projects':
          tmp.push({ name: '', content: '' })
          break;
        case 'school':
          tmp.push({ name: '', major: '' })
          break;
      }

    },
    emptyData(type) {
      let tmp = this.resume[type]
      if (!Array.isArray(tmp)) {
        console.log('obj')
        for (let key in tmp) {
          tmp[key] = ''
        }
      } else {
        console.log('arr')
        tmp.map((obj) => {
          for (let key in obj) {
            obj[key] = ''
          }
        })
      }
    },
    test() {
      console.log('transitionend ')
    }

  }

}
</script>
<style lang="scss">
@import '../assets/color.scss';
#editor {
  min-height: 100px;
  display: flex;
  >.panes {
    display: flex;
    flex: 1;
    >li {
      display: none;
      padding: 32px;
      padding-top: 0px;
      height: 100%;
      width: 100%;
      overflow: auto;
      text-align: center;
      &.acitve {
        display: block;
      }
      h2 {
        font-weight: bolder;
        text-align: left;
        background-color: $White;
        padding: 24px;
        box-shadow: 0 8px 8px $LightShadow;
        border-radius: 2px;
        overflow: hidden;
      }
      .container {
        border-top: 1px solid #ddd;
        margin-top: 16px;
        position: relative;
        >.el-form-item {
          background-color: $White;
          padding: 8px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 24px;
          >label {
            font-weight: bolder;
            padding: 16px 0 16px 8px;
            font-size: 16px;
          }
          .el-input {
            font-size: 16px;
            padding: 8px 0 8px 8px;
            ;
            border-top: 2px solid $DarkWhite;
            input {
              border-width: 0;
              padding-left: 0px;
              background-color: $White;
            }
          }
        }
        .el-icon-circle-cross {
          position: absolute;
          right: 16px;
          top: 24px;
          cursor: pointer;
          font-size: 16px;
        }
      }
    }
  }
}
</style>