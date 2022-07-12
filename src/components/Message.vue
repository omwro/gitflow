<template>
    <div class="message-container">
        <div class="message-spacer" :class="'ms'+spacing+' color'+color"/>
        <div class="message-block">
            <div>{{ message }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: ["spacing", "color", "message", "description"]
}
</script>

<style lang="scss" scoped>
$accent: #b51c14;
$accent-tp: rgba($accent, 0.4);
$accent2: #0074A0;
$accent2-tp: rgba($accent2, 0.4);
$accent3: #00764E;
$accent3-tp: rgba($accent3, 0.4);
$accent4: #cd8700;
$accent4-tp: rgba($accent4, 0.4);

.message-container {
    display: flex;
    width: auto;
    min-height: 30px;
    align-self: center;

    .message-spacer {
        width: 10px;
        border-right: 3px solid;
        margin: 3px 10px 3px 0;

        &.color1 {
            border-color: $accent;
            background-color: $accent-tp;
        }

        &.color2 {
            border-color: $accent2;
            background-color: $accent2-tp;
        }

        &.color3 {
            border-color: $accent3;
            background-color: $accent3-tp;
        }

        &.color4 {
            border-color: $accent4;
            background-color: $accent4-tp;
        }

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

    .message-block {
        align-self: center;
        width: calc(100% - 155px);
        flex: auto;
        padding: 2px 0;

        .description {
            font-size: 12px;
        }

    }
}
</style>