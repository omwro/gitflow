<template>
    <div class="gitflow-horizontal-line"
         :style="{'z-index': index, 'border-color': color}"
         :class="[
             left ? 'gitflow-horizontal-line-left' : '',
             right ? 'gitflow-horizontal-line-right' : '',
             half ? 'gitflow-horizontal-line-half' : '']"/>

</template>

<script>
export default {
    name: "HorizontalLine",
    props: {
        index: Number,
        color: String,
        left: Boolean,
        right: Boolean,
        half: Boolean
    }
}
</script>

<style lang="scss" scoped>
.gitflow-horizontal-line {
    width: 30px;
    height: 13px;
    margin-top: 13px;
    border-top: 4px solid;

    &.gitflow-horizontal-line-right {
        width: 15px;
        right: 0;
    }

    &.gitflow-horizontal-line-left {
        width: 15px;
        left: 0;
    }

    &.gitflow-horizontal-line-half {
        height: 14px;
        margin-top: 14px;
        border-width: 2px;

        &:not(.gitflow-horizontal-line-right):not(.gitflow-horizontal-line-left) {
            width: 5px;
        }
    }

    &.gitflow-horizontal-line-right, &:not(.gitflow-horizontal-line-half) {
        display: none;
    }

    @media (min-width: 768px) {
        &.gitflow-horizontal-line-half:not(.gitflow-horizontal-line-right):not(.gitflow-horizontal-line-left) {
            width: 30px;
        }

        &.gitflow-horizontal-line-right, &:not(.gitflow-horizontal-line-half) {
            display: flex;
        }
    }
}

.gitflow-block .gitflow-horizontal-line {
    position: absolute;
}
</style>