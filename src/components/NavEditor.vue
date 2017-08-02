<template>
    <div id="naveditor">
        <ol>
            <li v-for="(item,index) in icons" v-bind:class="{active:resume.currentTab === index}" v-on:click="resume.currentTab = index">
                <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-${item}`"></use>
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
    }
}
</script>

<style lang="scss">
#naveditor {
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
</style>
