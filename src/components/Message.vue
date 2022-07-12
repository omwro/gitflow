<template>
    <div class="message-container">
        <div class="message-spacer"
             :style="{'border-color': color, 'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
             :class="'ms'+spacing"/>
        <div class="message-block">
            <div>{{ message }}</div>
            <div class="description">{{ description }}</div>
        </div>
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
.message-container {
    display: flex;
    width: auto;
    min-height: 30px;
    align-self: center;

    .message-spacer {
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

    .message-block {
        align-self: center;
        width: calc(100% - 155px);
        flex: auto;
        padding: 2px 0;

        .description {
            font-size: 12px;
        }

    }
}
</style>