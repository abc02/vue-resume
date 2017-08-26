<template>
    <div id="preview">
        <section class="profile">
            <h1>{{ resume.profile.name || '请填写姓名'}}</h1>
            <p>
                <strong>{{ resume.profile.citry || '请填写城市'}} </strong>|
                <small>{{ resume.profile.birth || '请填写出生年月'}}</small>
            </p>
        </section>
        <div class="container">

            <section v-if="filter(resume.workHistory).length > 0" class="workHistory">
                <h2>工作经历</h2>
                <ul>
                    <li v-for="work in resume.workHistory">
                        <h3>{{ work.company}} </h3>
                        <span>{{work.content}}</span>
                    </li>
                </ul>
            </section>
            <section v-if="filter(resume.projects).length > 0" class="projects">
                <h2>前端项目</h2>
                <ul>
                    <li v-for="item in filter(resume.projects)">
                        <h3>{{item.name}} </h3>
                        <span>{{item.content}}</span>
                    </li>
                </ul>
            </section>
            <div class="split"></div>
            <section v-if="filter(resume.school).length > 0" class="school">
                <h2>学习经历</h2>
                <ul>
                    <li v-for="item in filter(resume.school)">
                        <h3>{{item.name}}</h3>
                        <span> {{item.major}}</span>
                    </li>
                </ul>
            </section>

            <section class="contact">
                <h2>联系方式</h2>
                <p>手机:
                    <span>{{resume.contact.phone || '请填写手机号码'}}</span>
                </p>
                <p>微信:
                    <span>{{resume.contact.wechat || '请填写微信号码'}}</span>
                </p>
                <p>邮箱:
                    <span>{{resume.contact.email || '请填写电子邮箱'}}</span>
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['resume'],
    computed: {
        resume() {
            return this.$store.state.resume
        }
    },
    methods: {
        filter(array) { //过滤出非空对象
            return array.filter(item => !this.isEmpty(item))
        },
        isEmpty(object) {
            let empty = true
            for (let key in object) {
                if (object[key]) {
                    empty = false
                    break
                }
            }
            return empty
        }
    }
}
</script>
<style lang="scss">
#preview {
    h1,
    h2 {
        padding: 0;
        margin: 0;
    }
    padding: 32px;
    section {
        margin: 0 16px 32px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
        li,
        p {
            padding: 8px;
            h2,
            h3 {
                padding-bottom: 8px;
            }
        }
    }
    .profile {
        h1 {
            margin-bottom: 8px;
        }
    }
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>