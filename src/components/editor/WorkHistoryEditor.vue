<template>
    <div>
        <h2>工作经历</h2>
        <el-form>
            <div class="container" v-for="(work,index) in workHistory">
                <el-form-item label="公司">
                    <el-input :value="work.company" @change="changeEditor({$event,a:'workHistory',b:'company',index})" placeholder="请填写公司名称"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input :value="work.content" @change="changeEditor({$event,a:'workHistory',b:'content',index})" placeholder="请填写岗位名称"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" @click="removeItem({a:'workHistory',index})" v-if="workHistory.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters(['workHistory'])
    },
    methods: {
        removeWorkHistory(index) {
            this.workHistory.splice(index, 1)
        },
        ...mapMutations(['changeEditor','removeItem'])
    }
}
</script>