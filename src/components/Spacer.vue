<template>
    <div class="gitflow-spacer"/>
</template>

<script>
export default {
    name: "Spacer"
}
</script>

<style lang="scss" scoped>
.gitflow-spacer {
    margin-left: 79px;
    display: none;

    @media (min-width: 768px) {
        margin-left: 130px;
        display: flex;
    }
}
</style>