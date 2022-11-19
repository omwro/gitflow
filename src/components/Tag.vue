<template>
    <div class="gitflow-tag"
         :style="{'background-color': `rgba(${hexToRgb(color)}, 0.4)`, 'border-color': color}">
        {{ message }}
    </div>
</template>

<script>
import utils from "@/Utils";

export default {
    name: "Tag",
    props: ["color", "message"],
    methods: {
        hexToRgb(color) {
            return utils.hexToRgb(color)
        }
    }
}
</script>

<style lang="scss" scoped>
.gitflow-tag {
    width: 62px;
    height: 12px;
    padding: 5px;
    margin: 3px 0;
    display: flex;
    align-items: center;
    border-radius: 2px;
    border: solid 1px;

    @media (min-width: 768px) {
        width: 88px;
    }
}
</style>