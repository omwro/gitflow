<template>
    <div id="gitflow">
        <div v-for="item in items" :key="item.id" class="row">
            <template v-if="item.tag">
                <Tag :color="colors[item.line]" :message="item.tag"/>
                <HorizontalLine half :index="item.line" :color="colors[item.line]"/>
            </template>
            <Spacer v-else/>
            <div class="flow">
                <template v-for="i in item.line">
                    <template v-if="i === item.line">
                        <div v-if="item.style === 'commit'" class="block">
                            <TransparentBackground right :color="colors[i]"/>
                            <VerticalLine :index="i" top :color="colors[i]"/>
                            <VerticalLine :index="i" bottom :color="colors[i]"/>
                            <Bullet :index="item.line" :color="colors[item.line]" :image="item.img"/>
                        </div>
                        <div v-else-if="item.style === 'start'" class="block block-mobile">
                            <TransparentBackground :color="colors[item.line]"/>
                            <CornerLine bottom :index="item.line" :color="colors[item.line]"/>
                        </div>
                        <div v-else-if="item.style === 'merge'" class="block block-mobile">
                            <TransparentBackground :color="colors[item.line]"/>
                            <CornerLine top :index="item.line" :color="colors[item.line]"/>
                        </div>
                        <VerticalLine v-else :index="i" :color="colors[i]" :key="i"/>
                    </template>
                    <template v-else>
                        <template v-if="item.style === 'start'">
                            <div v-if="i < item.start" :class="'block block-mobile color'+i">
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right half :index="item.line" :color="colors[item.line]"/>
                            </div>
                            <div v-else-if="i === item.start" class="block">
                                <TransparentBackground right :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <Bullet :index="item.line" :color="colors[item.line]"/>
                            </div>
                            <div v-else-if="i > item.start" class="block block-mobile">
                                <TransparentBackground :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </div>
                        </template>
                        <VerticalLine v-else-if="item.style === 'commit'" :index="i" :color="colors[i]"/>
                        <template v-else-if="item.style === 'merge'">
                            <div v-if="i < item.merge" class="block block-mobile">
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine half :index="item.line" :color="colors[item.line]"/>
                            </div>
                            <div v-else-if="i === item.merge" class="block">
                                <TransparentBackground right :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <Bullet :index="item.line" :color="colors[item.line]"/>
                            </div>
                            <div v-else-if="i > item.merge" :class="'block block-mobile color'+item.line">
                                <TransparentBackground :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </div>
                        </template>
                        <VerticalLine v-else :index="i" :color="colors[i]" :key="i"/>
                    </template>
                </template>
            </div>
            <Message v-if="item.msg"
                     :spacing="item.spacing"
                     :color="colors[item.line]"
                     :message="item.msg"
                     :description="item.desc"/>
        </div>
    </div>
</template>

<script>
import json from "./git.json"
import Message from "@/components/Message";
import Tag from "@/components/Tag";
import Spacer from "@/components/Spacer";
import TransparentBackground from "@/components/TransparentBackground";
import VerticalLine from "@/components/VerticalLine";
import HorizontalLine from "@/components/HorizontalLine";
import CornerLine from "@/components/CornerLine";
import Bullet from "@/components/Bullet";

export default {
    name: "GitFlow",
    components: {Bullet, CornerLine, HorizontalLine, VerticalLine, TransparentBackground, Spacer, Tag, Message},
    data: () => ({
        items: json,
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

<style lang="scss" scoped>
$mq-m: 768px;

#gitflow {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 16px;
    margin: 0 8px;
    max-width: 1000px;

    .row {
        display: flex;
        flex-direction: row;
        height: auto;

        &:hover {
            background-color: rgba(black, .1);
        }

        .flow {
            display: inline-flex;
        }

        .block {
            width: 30px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            min-height: 30px;
        }

    }
}

@media (max-width: $mq-m) {
    #gitflow {
        font-size: 14px;

        .row {

            .flow {
                max-width: 30px;
            }

            .block-mobile:not(.color2) {
                position: absolute;
                left: 87px;
            }
        }
    }
}
</style>