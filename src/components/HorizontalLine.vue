<template>
    <div class="horizontal-line"
         :style="{'z-index': index, 'border-color': color}"
         :class="[
             left ? 'horizontal-line-left' : '',
             right ? 'horizontal-line-right' : '',
             half ? 'horizontal-line-half' : '']"/>

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
.horizontal-line {
    width: 30px;
    height: 13px;
    margin-top: 13px;
    border-top: 4px solid;

    &.horizontal-line-right {
        width: 15px;
        right: 0;
    }

    &.horizontal-line-left {
        width: 15px;
        left: 0;
    }

    &.horizontal-line-half {
        height: 14px;
        margin-top: 14px;
        border-width: 2px;

        &:not(.horizontal-line-right):not(.horizontal-line-left) {
            width: 5px;
        }
    }

    &.horizontal-line-right, &:not(.horizontal-line-half) {
        display: none;
    }

    @media (min-width: 768px) {
        &.horizontal-line-half:not(.horizontal-line-right):not(.horizontal-line-left) {
            width: 30px;
        }

        &.horizontal-line-right, &:not(.horizontal-line-half) {
            display: flex;
        }
    }
}

.block .horizontal-line {
    position: absolute;
}
</style>