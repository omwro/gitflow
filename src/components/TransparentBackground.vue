<template>
    <div class="gitflow-transparent-background"
         :style="{'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
         :class="right ? 'gitflow-transparent-background-right' : ''"/>
</template>

<script>
import utils from "@/Utils";

export default {
    name: "TransparentBackground",
    props: {
        color: String,
        right: Boolean
    },
    methods: {
        hexToRgb(color) {
            return utils.hexToRgb(color)
        }
    }
}
</script>

<style lang="scss" scoped>
.gitflow-transparent-background {
    display: none;
    width: 30px;
    height: calc(100% - 6px);
    position: absolute;
    margin-top: 3px;

    &.gitflow-transparent-background-right {
        display: block;
        width: 15px;
        margin-left: 15px;
    }

    @media (min-width: 768px) {
        display: block;
    }
}
</style>