<template>
  <div id="editor">

    <ol class="panes">
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===0}" v-show="resume.currentTab === 0">
          <ProfileEditor />
          <ButtonGroup v-bind:buttonType="porfileButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===1}" v-show="resume.currentTab ===1">
          <WorkHistoryEditor />
          <ButtonGroup v-bind:buttonType="workHistoryButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===2}" v-show="resume.currentTab === 2">
          <ProjectEditor/>
          <ButtonGroup v-bind:buttonType="projectsButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===3}" v-show="resume.currentTab ===3">
          <SchoolEditor />
          <ButtonGroup v-bind:buttonType="schoolButton" />
        </li>
      </transition>
      <transition enter-active-class="animated bounceInLeft">
        <li v-bind:class="{acitve: resume.currentTab ===4}" v-show="resume.currentTab ===4">
          <ContactEditor />
          <ButtonGroup v-bind:buttonType="contactButton" />
        </li>
      </transition>
    </ol>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import ProfileEditor from 'editor/ProfileEditor'
import WorkHistoryEditor from 'editor/WorkHistoryEditor'
import ProjectEditor from 'editor/ProjectEditor'
import SchoolEditor from 'editor/SchoolEditor'
import ContactEditor from 'editor/ContactEditor'
import ButtonGroup from 'editor/ButtonGroup'
export default {
  name: 'Editor',
  computed: {
    ...mapState(['resume'])
  },
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
        callBlacks: [this.emptyData, this.addItem]
      },
      projectsButton: {
        type: 'projects',
        msg: ['清空', '新增'],
        callBlacks: [this.emptyData, this.addItem]
      },
      schoolButton: {
        type: 'school',
        msg: ['清空', '新增'],
        callBlacks: [this.emptyData, this.addItem]
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
    ...mapMutations(['addItem','emptyData'])
  }

}
</script>
<style lang="scss">
@import '../../assets/color.scss';
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