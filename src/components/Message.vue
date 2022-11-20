<template>
    <div class="gitflow-message-container">
        <div class="gitflow-message-spacer"
             :style="{'border-color': color, 'background-color': `rgba(${hexToRgb(color)}, 0.4)`}"
             :class="'ms'+spacing"/>
        <div class="gitflow-message-block">
            <template v-if="tag">
                <Tag class="gitflow-tag-mobile" :color="color" :message="tag"/>
            </template>
            <div v-html="message"/>
        </div>
    </div>
</template>

<script>
import utils from "@/Utils";
import Tag from "@/components/Tag";

export default {
    name: "Message",
    components: {Tag},
    props: ["spacing", "color", "message", "description", "tag"],
    methods: {
        hexToRgb(color) {
            return utils.hexToRgb(color)
        }
    }
}
</script>

<style lang="scss" scoped>
.gitflow-message-container {
    display: flex;
    width: auto;
    min-height: 36px;
    align-self: center;

    .gitflow-message-spacer {
        width: 10px;
        border-right: 3px solid;
        margin: 3px 10px 3px 0;

        @media (min-width: 768px) {
            &.ms1 {
                width: 40px;
            }
            &.ms2 {
                width: 70px;
            }
            &.ms3 {
                width: 100px;
            }
            &.ms4 {
                width: 130px;
            }
        }
    }

    .gitflow-message-block {
        align-self: center;
        width: calc(100% - 155px);
        flex: auto;
        padding: 2px 0;

        .gitflow-tag-mobile {
            display: flex;

            @media (min-width: 768px) {
                display: none;
            }
        }
    }
}
</style>