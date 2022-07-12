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
                        <Block v-if="item.style === 'commit'">
                            <TransparentBackground right :color="colors[i]"/>
                            <VerticalLine :index="i" top :color="colors[i]"/>
                            <VerticalLine :index="i" bottom :color="colors[i]"/>
                            <Bullet :index="item.line" :color="colors[item.line]" :image="item.img"/>
                        </Block>
                        <Block v-else-if="item.style === 'start'" mobile>
                            <TransparentBackground :color="colors[item.line]"/>
                            <CornerLine bottom :index="item.line" :color="colors[item.line]"/>
                        </Block>
                        <Block v-else-if="item.style === 'merge'" mobile>
                            <TransparentBackground :color="colors[item.line]"/>
                            <CornerLine top :index="item.line" :color="colors[item.line]"/>
                        </Block>
                        <VerticalLine v-else :index="i" :color="colors[i]" :key="i"/>
                    </template>
                    <template v-else>
                        <template v-if="item.style === 'start'">
                            <Block v-if="i < item.start" mobile>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right half :index="item.line" :color="colors[item.line]"/>
                            </Block>
                            <Block v-else-if="i === item.start">
                                <TransparentBackground right :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <Bullet :index="item.line" :color="colors[item.line]"/>
                            </Block>
                            <Block v-else-if="i > item.start" mobile>
                                <TransparentBackground :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </Block>
                        </template>
                        <VerticalLine v-else-if="item.style === 'commit'" :index="i" :color="colors[i]"/>
                        <template v-else-if="item.style === 'merge'">
                            <Block v-if="i < item.merge" mobile>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine half :index="item.line" :color="colors[item.line]"/>
                            </Block>
                            <Block v-else-if="i === item.merge">
                                <TransparentBackground right :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine left half :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine right :index="item.line" :color="colors[item.line]"/>
                                <Bullet :index="item.line" :color="colors[item.line]"/>
                            </Block>
                            <Block v-else-if="i > item.merge" mobile>
                                <TransparentBackground :color="colors[item.line]"/>
                                <VerticalLine :index="i" top :color="colors[i]"/>
                                <VerticalLine :index="i" bottom :color="colors[i]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                                <HorizontalLine :index="item.line" :color="colors[item.line]"/>
                            </Block>
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
import Block from "@/components/Block";

export default {
    name: "GitFlow",
    components: {Block, Bullet, CornerLine, HorizontalLine, VerticalLine, TransparentBackground, Spacer, Tag, Message},
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
#gitflow {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 14px;
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
            max-width: 30px;
        }
    }

    @media (min-width: 768px) {
        font-size: 16px;

        .flow {
            max-width: none !important;
        }
    }
}
</style>