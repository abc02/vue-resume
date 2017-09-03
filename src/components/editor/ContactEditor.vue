<template>
    <div>
        <h2>联系方式</h2>
        <el-form>
            <div class="container">
                <el-form-item label="手机">
                    <el-input :value="contact.phone" @change="changeEditor({$event,a:'contact',b:'phone'})" placeholder="请填写手机号码"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input :value="contact.wechat" @change="changeEditor({$event,a:'contact',b:'wechat'})" placeholder="请填写微信号"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input :value="contact.email" @change="changeEditor({$event,a:'contact',b:'email'})" placeholder="请填写电子邮箱"></el-input>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['contact'])
    },
    methods: {
        ...mapMutations(['changeEditor'])
    }
}
</script>
