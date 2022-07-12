<template>
    <div :style="{'z-index': index, 'border-color': color}"
         :class="[top ? 'cornerline-top' : '', bottom ? 'cornerline-bottom' : '']"/>

</template>

<script>
// TODO fix responsive min-width

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
.cornerline-top {
    width: 13px;
    height: 13px;
    margin: 13px 13px 0 0;
    border-top: 4px solid;
    border-right: 4px solid;
    border-radius: 0 15px 0 0;
}

.cornerline-bottom {
    width: 13px;
    height: 13px;
    margin: 0 13px 13px 0;
    border-bottom: 4px solid;
    border-right: 4px solid;
    border-radius: 0 0 15px 0;
}
@media (max-width: 768px) {
    .cornerline-bottom, .cornerline-top {
        border-radius: 0;
        border-top: 0;
        border-bottom: 0;
    }

    .cornerline-top {
        height: 17px;
    }
}
</style>