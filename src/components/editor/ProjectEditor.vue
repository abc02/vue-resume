<template>
    <div>
        <h2>前端项目</h2>
        <el-form>
            <div class="container" v-for="(item,index) in projects">
                <el-form-item label="项目名称">
                    <el-input :value="item.name" @change="changeEditor({$event,a:'projects',b:'name',index})" placeholder="请填写项目名称"></el-input>
                </el-form-item>
                <el-form-item label="项目内容">
                    <el-input :value="item.content" @change="changeEditor({$event,a:'projects',b:'content',index})" placeholder="请填写项目内容"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" @click="removeItem({a:'projects',index})" v-if="projects.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed:{
        ...mapGetters(['projects'])
    },
    methods: {
        ...mapMutations(['changeEditor','removeItem'])
    }
}
</script>