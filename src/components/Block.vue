<template>
    <div class="block" :class="mobile ? 'block-mobile' : ''">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "Block",
    props: {
        mobile: Boolean
    }
}
</script>

<style lang="scss" scoped>
.block {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    min-height: 30px;

    @media (max-width: 768px) {
        &.block-mobile {
            position: absolute;
            left: 87px;
        }
    }
}
</style>