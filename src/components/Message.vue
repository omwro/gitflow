<template>
    <div class="gitflow-message-container">
        <div class="gitflow-message-spacer"
             :style="{'border-color': color, 'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
             :class="'ms'+spacing"/>
        <div class="gitflow-message-block" v-html="message"></div>
    </div>
</template>

<script>
import utils from "@/Utils";

export default {
    name: "Message",
    props: ["spacing", "color", "message", "description"],
    methods: {
        hexToRgb(color) {
            return utils.hexToRgb(color)
        }
    }
}
</script>

<style lang="scss" scoped>
.gitflow-message-container {
    display: flex;
    width: auto;
    min-height: 30px;
    align-self: center;

    .gitflow-message-spacer {
        width: 10px;
        border-right: 3px solid;
        margin: 3px 10px 3px 0;

        @media (min-width: 768px) {
            &.ms1 {
                width: 40px;
            }
            &.ms2 {
                width: 70px;
            }
            &.ms3 {
                width: 100px;
            }
            &.ms4 {
                width: 130px;
            }
        }
    }

    .gitflow-message-block {
        align-self: center;
        width: calc(100% - 155px);
        flex: auto;
        padding: 2px 0;
    }
}
</style>