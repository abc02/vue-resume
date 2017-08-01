<template>
    <div id="preview">
        <h1>{{ resume.profile.name || '请填写姓名'}}</h1>
        <p>{{ resume.profile.citry || '请填写城市'}} | {{ resume.profile.birth || '请填写出生年月'}}</p>
    
        <section v-if="filter(resume.workHistory).length > 0">
            <h2>工作经历</h2>
            <ul>
                <li v-for="work in resume.workHistory">
                    {{ work.company}} {{work.content}}
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.projects).length > 0">
            <h2>前端项目</h2>
            <ul>
                <li v-for="item in filter(resume.projects)">
                    {{item.name}} {{item.content}}
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.school).length > 0">
            <h2>学习经历</h2>
            <ul>
                <li v-for="item in filter(resume.school)">
                    {{item.name}} {{item.major}}
                </li>
            </ul>
        </section>
        <section>
            <h2>联系方式</h2>
            <p>手机:
                <span>{{resume.contact.phone || '请填写手机号码'}}</span>
            </p>微信:
            <span>{{resume.contact.wechat || '请填写微信号码'}}</span>
            </p>
            <p>邮箱:
                <span>{{resume.contact.email || '请填写电子邮箱'}}</span>
            </p>
        </section>
    </div>
</template>

<script>
export default {
    props: ['resume'],
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
    padding: 32px;
    h1 {}
}
</style>