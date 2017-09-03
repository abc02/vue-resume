<template>
    <div id="naveditor">
        <ol>
            <li v-for="(item,index) in icons" v-bind:class="{active:resume.currentTab === index}" @click="setCurrentTab(index)">
                <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-${item}`"></use>
                </svg>
            </li>
        </ol>
        <ol>
            <li id="pdf" class="pdf" @click="pdf" v-show="currentUser">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pdf"></use>
                </svg>
            </li>
            <li id="save" class="save" @click="save" v-show="currentUser">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-save"></use>
                </svg>
            </li>
            <li id="preview" class="preview" @click="isPreview">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-preview"></use>
                </svg>
            </li>
        </ol>
    </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import leancloudService from 'js/service/leancloudService.js'

export default {
    name: 'NavEditor',
    computed: {
        ...mapState(['resume', 'currentUser', 'isPreviewNode'])
    },
    data() {
        return {
            icons: ['card', 'works', 'skill', 'school', 'phone'],
        }
    },
    methods: {
        isPreview() {
            this.$emit('isPreview')
        },
        save() {
            if (this.resume.id) {
                leancloudService.updata(this.resume)
                this.msg('更新成功')
            } else {
                leancloudService.initdata(this.resume).then((resumefile) => {
                    this.$store.commit('setResumefileId', resumefile.id)
                    this.msg('保存成功')
                }, (error) => {
                    console.error(error);
                });
            }
        },
        pdf() {
        },
        ...mapMutations(['setCurrentTab'])
    }
}
</script>

<style lang="scss">
@import '../../assets/color.scss';
#naveditor {
    background-color: $Black;
    width: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    >ol>li {
        padding: 16px 0;
        text-align: center;
        >.icon {
            fill: $DarkWhite;
            width: 32px;
            height: 32px;
        }
        &:active {
            >.icon {
                fill: $LightYellow;
            }
        }
        &:hover {
            >.icon {
                fill: $DarkYellow;
            }
        }
    }
}
</style>
