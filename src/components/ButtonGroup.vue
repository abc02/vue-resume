<template>
    <div class="button-container">
        <button class="empty" v-on:click="emptyData">
            <span>{{buttonType.msg[0]}}</span>
        </button>
        <button class="added" v-if="buttonType.msg.length > 1" v-on:click="addData">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-save"></use>
            </svg>
            <span>{{buttonType.msg[1]}}</span>
        </button>
    </div>
</template>


<script>
export default {
    props: ['buttonType'],
    methods: {
        emptyData() {
            let type = this.buttonType.type,
                fn = this.buttonType.callBlacks[0]
            fn(type)
        },
        addData() {
            let type = this.buttonType.type,
                fn = this.buttonType.callBlacks[1]
            fn(type)
        },
        removeData(index) {
            this.projects.splice(index, 1)
        }
    }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.button-container {
    display: flex;
    box-shadow: 0 8px 8px $LightShadow;
    button {
        cursor: pointer;
        font-size: 16px;
        background-color: $White;
        padding: 16px;
        flex: 1;
    }
    .empty {
        &:hover {
            color: $Silver;
        }
    }
    .added {
        background-color: $LightGreen;
        color: $White;
        span {
            margin-left: 8px;
        }
        &:hover {
            color: $Green;
        }
    }
}
</style>
