<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in tabsArr" v-bind:class="{active:currentTab === i}" v-on:click="currentTab = i">
                    <svg class="icon" aria-hidden="true">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class="{acitve: currentTab ===0}">tab 1</li>
            <li v-bind:class="{acitve: currentTab ===1}">tab 2</li>
            <li v-bind:class="{acitve: currentTab ===2}">tab 3</li>
            <li v-bind:class="{acitve: currentTab ===3}">tab 4</li>
            <li v-bind:class="{acitve: currentTab ===4}">tab 5</li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabsArr: [0, 1, 2, 3, 4],
            icons: ['card', 'works', 'skill', 'school', 'phone'],
            currentTab: 0
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
        >li {
            display: none;
            &.acitve {
                display: block;
            }
        }
    }
}
</style>