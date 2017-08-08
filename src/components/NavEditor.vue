<template>
    <div id="naveditor">
        <ol>
            <li v-for="(item,index) in icons" v-bind:class="{active:resume.currentTab === index}" v-on:click="resume.currentTab = index">
                <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-${item}`"></use>
                </svg>
            </li>
        </ol>
        <ol>
            <li id="save" class="save" v-on:click="saveData" v-show="resume.currentUser">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-save"></use>
                </svg>
            </li>
            <li id="preview" class="preview" v-on:click="preview">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-preview"></use>
                </svg>
            </li>
        </ol>
    </div>
</template>


<script>
export default {
    props: ['resume'],
    data() {
        return {
            icons: ['card', 'works', 'skill', 'school', 'phone'],
        }
    },
    methods: {
        preview() {
            this.$emit("preview")
        },
        saveData() {
            this.$emit('saveData')
        }

    }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
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
