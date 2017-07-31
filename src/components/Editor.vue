<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in tabsArr" v-bind:class="{active:currentTab === i}" v-on:click="currentTab = i" v-bind:title="firstCapital[i]">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{acitve: currentTab ===0}">
        <h2>个人信息</h2>
        <el-form>
          <div class="container">
            <el-form-item label="姓名">
              <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="城市">
              <el-input v-model="profile.citry"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="profile.birth"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </li>
      <li v-bind:class="{acitve: currentTab ===1}">
        <h2>工作经历</h2>
        <el-form>
          <div class="container" v-for="(work,index) in workHistory">
            <el-form-item label="公司">
              <el-input v-model="work.company"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model="work.content"></el-input>
            </el-form-item>
            <i class="el-icon-circle-cross" v-on:click="removeWorkHistory(index)"></i>
          </div>
        </el-form>
        <el-button v-on:click="addWorkHistory">新增</el-button>
      </li>
      <li v-bind:class="{acitve: currentTab ===2}">
        <h2>前端项目</h2>
        <el-form>
          <div class="container" v-for="(item,index) in projects">
            <el-form-item label="项目名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="项目内容">
              <el-input v-model="item.content"></el-input>
            </el-form-item>
            <i class="el-icon-circle-cross" v-on:click="removeProject(index)"></i>
          </div>
        </el-form>
        <el-button v-on:click="addProject">新增</el-button>
      </li>
      <li v-bind:class="{acitve: currentTab ===3}">
        <h2>学习经历</h2>
        <el-form>
          <div class="container" v-for="(item,index) in school">
            <el-form-item label="学校">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input v-model="item.major"></el-input>
            </el-form-item>
            <i class="el-icon-circle-cross" v-on:click="removeSchool(index)"></i>
          </div>
        </el-form>
        <el-button v-on:click="addSchool">新增</el-button>
      </li>
      <li v-bind:class="{acitve: currentTab ===4}">
        <h2>联系方式</h2>
        <el-form>
          <div class="container">
            <el-form-item label="手机">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input></el-input>
            </el-form-item>
          </div>
        </el-form>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabsArr: [0, 1, 2, 3, 4],
      icons: ['card', 'works', 'skill', 'school', 'phone'],
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
      ]

    }
  },
  computed: {
    firstCapital() {
      return this.icons.map((e) => {
        return e.slice(0, 1).toUpperCase() + e.slice(1)
      })
    }
  },
  methods: {
    addWorkHistory() {
      this.workHistory.push({
        company: '', content: ''
      })
    },
    removeWorkHistory(index) {
      this.workHistory.splice(index, 1)
    },
    addProject() {
      this.projects.push({
        name: '', content: ''
      })
    },
    removeProject(index) {
      this.projects.splice(index, 1)
    },
    addSchool() {
      this.school.push({
        name: '', major: ''
      })
    },
    removeSchool(index) {
      this.school.splice(index, 1)
    }
  }

}
</script>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  >nav {
    background-color: #000;
    width: 80px;
    >ol>li {
      padding: 16px 0;
      text-align: center;
      >.icon {
        fill: white;
        width: 24px;
        height: 24px;
      }
      &.active {
        background: white;
        >.icon {
          fill: black;
        }
      }
    }
  }
  >.panes {
    display: flex;
    flex: 1;
    >li {
      display: none;
      padding: 32px;
      height: 100%;
      width: 100%;
      overflow: auto;
      text-align: center;
      &.acitve {
        display: block;
      }
      h2 {
        text-align: left;
      }
      .container {
        border-top: 1px solid #ddd;
        margin-top: 16px;
        position: relative;
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