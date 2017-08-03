<template>
  <div id="editor">
  
    <ol class="panes">
      <li v-bind:class="{acitve: resume.currentTab ===0}">
        <ProfileEditor v-bind:profile="resume.profile"></ProfileEditor>
      </li>
      <li v-bind:class="{acitve: resume.currentTab ===1}">
        <WorkHistoryEditor v-bind:workHistory="resume.workHistory"></WorkHistoryEditor>
      </li>
      <li v-bind:class="{acitve: resume.currentTab ===2}">
        <ProjectEditor v-bind:projects="resume.projects"></ProjectEditor>
      </li>
      <li v-bind:class="{acitve: resume.currentTab ===3}">
        <SchoolEditor v-bind:school="resume.school"></SchoolEditor>
      </li>
      <li v-bind:class="{acitve: resume.currentTab ===4}">
        <ContactEditor v-bind:contact="resume.contact"></ContactEditor>
      </li>
    </ol>
  </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import WorkHistoryEditor from './WorkHistoryEditor'
import ProjectEditor from './ProjectEditor'
import SchoolEditor from './SchoolEditor'
import ContactEditor from './ContactEditor'
export default {
  props: ['resume'],
  components: {
    ProfileEditor, WorkHistoryEditor, ProjectEditor, SchoolEditor, ContactEditor
  },

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
        text-align: left;
        background-color: $White;
        padding: 16px;
        box-shadow: 0 3px 5px hsla(0, 0, 0, .2);
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
        }
        .el-icon-circle-cross {
          position: absolute;
          right: 0;
          top: 8px;
          cursor: pointer;
          font-size: 16px;
        }
      }
    }
  }
}
</style>