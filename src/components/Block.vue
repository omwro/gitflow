<template>
    <div class="gitflow-block" :class="mobile ? 'gitflow-block-mobile' : ''">
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
.gitflow-block {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    min-height: 30px;

    &.gitflow-block-mobile {
        position: absolute;
        left: 103px;
    }

    @media (min-width: 768px) {
        &.gitflow-block-mobile {
            position: relative;
            left: 0;
        }
    }
}
</style>