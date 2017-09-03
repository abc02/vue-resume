<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div class="container" v-for="(item,index) in school">
                <el-form-item label="学校">
                    <el-input :value="item.name" @change="changeEditor({$event,a:'school',b:'name',index})" placeholder="请填写学校名称"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input :value="item.major" @change="changeEditor({$event,a:'school',b:'major',index})" placeholder="请填写专业名称"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" @click="removeItem({a:'school',index})" v-if="school.length > 1"></i>
            </div>
        </el-form>
    </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters(['school'])
    },
    methods: {
        ...mapMutations(['changeEditor', 'removeItem'])
    }
}
</script>