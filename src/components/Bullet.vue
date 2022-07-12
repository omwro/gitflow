<template>
    <div :style="{'background-color': color, 'border-color': color, 'z-index': index}"
         class="bullet"
         :class="image ? 'b-img' : 'b-s'">
        <img v-if="image" :src="image" alt="image"/>
    </div>
</template>

<script>
export default {
    name: "Bullet",
    props: {
        index: Number,
        color: String,
        image: String
    }
}
</script>

<style lang="scss" scoped>
.bullet {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    align-self: center;

    &.b-s {
        height: 16px;
        width: 16px;
        margin: 7px;
        position: relative;
    }

    &.b-img {
        height: 24px;
        width: 24px;
        border: 3px solid;
        overflow: hidden;
        flex: none;

        img {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }
    }
}

//.block .b-s {
//    position: absolute;
//}
</style>