<template>
    <div :style="{'z-index': index, 'border-color': color}"
         :class="[top ? 'gitflow-cornerline-top' : '', bottom ? 'gitflow-cornerline-bottom' : '']"/>

</template>

<script>
export default {
    name: "CornerLine",
    props: {
        index: Number,
        color: String,
        top: Boolean,
        bottom: Boolean
    }
}
</script>

<style lang="scss" scoped>
.gitflow-cornerline-top {
    width: 13px;
    height: 17px;
    margin: 13px 13px 0 0;
    border-right: 4px solid;
    border-radius: 0;
    border-top: 0;

    @media (min-width: 768px) {
        height: 13px;
        border-radius: 0 15px 0 0;
        border-top: 4px solid;
    }
}

.gitflow-cornerline-bottom {
    width: 13px;
    height: 13px;
    margin: 0 13px 13px 0;
    border-bottom: 0;
    border-right: 4px solid;
    border-radius: 0;

    @media (min-width: 768px) {
        border-radius: 0 0 15px 0;
        border-bottom: 4px solid;
    }
}
</style>