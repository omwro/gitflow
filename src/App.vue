<template>
    <GitFlow/>
</template>

<script>
import GitFlow from "@/GitFlow";

export default {
    name: 'App',
    components: {
        GitFlow,
    },

    data: () => ({
        colors: [
            "#000000",
            "#b51c14",
            "#0074A0",
            "#00764E",
            "#cd8700"
        ]
    })
}
</script>

<style lang="scss">
html, body {
    padding: 0;
    margin: 0;
}

#app main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
</style>
