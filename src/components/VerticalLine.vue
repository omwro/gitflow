<template>
    <div class="vertical-line"
         :style="{'z-index': index, 'border-color': color}"
         :class="[top ? 'vertical-line-top' : '', bottom ? 'vertical-line-bottom' : '']"/>

</template>

<script>
export default {
    name: "VerticalLine",
    props: {
        index: Number,
        color: String,
        top: Boolean,
        bottom: Boolean
    }
}
</script>

<style lang="scss" scoped>
.vertical-line {
    width: 13px;
    height: auto;
    margin-right: 13px;
    border-right: 4px solid;
    flex: none;
    position: absolute;

    &.vertical-line-top {
        height: 100% !important;
        top: 0;
    }

    &.vertical-line-bottom {
        height: 100% !important;
        bottom: 0;
    }

    @media (min-width: 768px) {
        position: inherit;

        //border-radius: 0;
        //border-top: 0;
        //border-bottom: 0;
    }
}
.block .vertical-line {
    position: absolute;
}
</style>