<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-bind:class="{active:currentTab===0}" v-on:click="currentTab = 0">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-card"></use>
                    </svg>
                </li>
                <li v-bind:class="{active:currentTab===1}" v-on:click="currentTab = 1">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-works"></use>
                    </svg>
                </li>
                <li v-bind:class="{active:currentTab===2}" v-on:click="currentTab = 2">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-skill"></use>
                    </svg>
                </li>
                <li v-bind:class="{active:currentTab===3}" v-on:click="currentTab = 3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-school"></use>
                    </svg>
                </li>
                <li v-bind:class="{active:currentTab===4}" v-on:click="currentTab = 4">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-phone"></use>
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