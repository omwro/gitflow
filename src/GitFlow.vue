<template>
    <div id="gitflow">
        <div v-for="item in items" :key="item.id" class="row">
            <template v-if="item.tag">
                <Tag :color="colors[item.line]" :message="item.tag"/>
                <div :class="'hline hl-h color'+item.line"></div>
            </template>
            <Spacer v-else/>

            <div class="flow">
                <template v-for="i in item.line">
                    <template v-if="i === item.line">
                        <template v-if="item.style === 'commit'">
                            <div :key="i" class="block">
                                <TransparentBackground right :color="colors[i]"/>
                                <div :class="'vline vl-t color'+i"></div>
                                <div :class="'vline vl-b color'+i"></div>
                                <div :class="'bullet b-img color'+item.line">
                                    <img v-lazy="'./img/company/logo.webp'" alt="profile picture"/>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="item.style === 'start'">
                            <div class="block block-mobile" :key="i">
                                <TransparentBackground :color="colors[item.line]"/>
                                <div :class="'bottomcornerline color'+item.line"></div>
                            </div>
                        </template>
                        <template v-else-if="item.style === 'merge'">
                            <div class="block block-mobile" :key="i">
                                <TransparentBackground :color="colors[item.line]"/>
                                <div :class="'topcornerline color'+item.line"></div>
                            </div>
                        </template>
                        <template v-else>
                            <div :key="i" :class="'vline color'+i"></div>
                        </template>
                    </template>
                    <template v-else>
                        <template v-if="item.style === 'start'">
                            <template v-if="i < item.start">
                                <div :key="i" :class="'block block-mobile color'+i">
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline hl-l hl-h color'+item.line"></div>
                                    <div :class="'hline hl-r hl-h color'+item.line"></div>
                                </div>
                            </template>
                            <template v-else-if="i === item.start">
                                <div :key="i" class="block">
                                    <TransparentBackground right :color="colors[item.line]"/>
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline hl-l hl-h color'+item.line"></div>
                                    <div :class="'hline hl-r color'+item.line"></div>
                                    <div :class="'bullet b-s color'+item.line"></div>
                                </div>
                            </template>
                            <template v-else-if="i > item.start">
                                <div :key="i" class="block block-mobile">
                                    <TransparentBackground :color="colors[item.line]"/>
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline color'+item.line"></div>
                                    <div :class="'hline color'+item.line"></div>
                                </div>
                            </template>
                        </template>
                        <template v-else-if="item.style === 'commit'">
                            <div :key="i" :class="'vline color'+i"></div>
                        </template>
                        <template v-else-if="item.style === 'merge'">
                            <template v-if="i < item.merge">
                                <div :key="i" class="block block-mobile">
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline hl-h color'+item.line"></div>
                                </div>
                            </template>
                            <template v-else-if="i === item.merge">
                                <div :key="i" class="block">
                                    <TransparentBackground right :color="colors[item.line]"/>
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline hl-l hl-h color'+item.line"></div>
                                    <div :class="'hline hl-r color'+item.line"></div>
                                    <div :class="'bullet b-s color'+item.line"></div>
                                </div>
                            </template>
                            <template v-else-if="i > item.merge">
                                <div :key="i" :class="'block block-mobile color'+item.line">
                                    <TransparentBackground :color="colors[item.line]"/>
                                    <div :class="'vline vl-t color'+i"></div>
                                    <div :class="'vline vl-b color'+i"></div>
                                    <div :class="'hline color'+item.line"></div>
                                    <div :class="'hline color'+item.line"></div>
                                </div>
                            </template>
                        </template>
                        <template v-else>
                            <div :key="i" :class="'vline color'+i"></div>
                        </template>
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

export default {
    name: "GitFlow",
    components: {TransparentBackground, Spacer, Tag, Message},
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
$color-light: #000000;
$background-light: #ffffff;
$block-light: #ebebeb;

$color-dark: #ebebeb;
$background-dark: #141414;
$block-dark: #1e1e1e;

$dark5: #3c3c3c;
$dark6: #464646;
$grey: #7d7d7d;

$light2: #e1e1e1;
$light3: #d7d7d7;
$light4: #cdcdcd;
$light5: #c3c3c3;
$light6: #b9b9b9;

$accent: #b51c14;
$accent-dark: #541714;
$accent-tp: rgba($accent, 0.4);
$accent2: #0074A0;
$accent2-tp: rgba($accent2, 0.4);
$accent3: #00764E;
$accent3-tp: rgba($accent3, 0.4);
$accent4: #cd8700;
$accent4-tp: rgba($accent4, 0.4);
$brilliant-turquoise: #4ae3eb;

$mq-s: 320px;
$mq-sm: 480px;
$mq-m: 768px;
$mq-l: 1280px;
$mq-xl: 1920px;
$mq-xxl: 2460px;

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

        .vline, .bottomcornerline, .topcornerline {
            .color1 {
                z-index: 1;
            }

            .color2 {
                z-index: 2;
            }

            .color3 {
                z-index: 3;
            }

            .color4 {
                z-index: 4;
            }
        }

        .block {
            width: 30px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            min-height: 30px;

            .hline,
            .vline,
            .b-s {
                position: absolute;
            }
        }

        .bullet {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            align-self: center;
            z-index: 5;

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

            &.color1 {
                background-color: $accent;
                border-color: $accent;
            }

            &.color2 {
                background-color: $accent2;
                border-color: $accent2;
            }

            &.color3 {
                background-color: $accent3;
                border-color: $accent3;
            }

            &.color4 {
                background-color: $accent4;
                border-color: $accent4;
            }
        }

        .hline {
            width: 30px;
            height: 13px;
            margin-top: 13px;
            border-top: 4px solid;

            &.hl-r {
                width: 15px;
                right: 0;
            }

            &.hl-l {
                width: 15px;
                left: 0;
            }

            &.hl-h {
                height: 14px;
                margin-top: 14px;
                border-width: 2px;
            }
        }

        .vline {
            width: 13px;
            height: auto;
            margin-right: 13px;
            border-right: 4px solid;
            flex: none;

            &.vl-t {
                height: 100%;
                top: 0;
            }

            &.vl-b {
                height: 100%;
                bottom: 0;
            }
        }

        .topcornerline {
            width: 13px;
            height: 13px;
            margin: 13px 13px 0 0;
            border-top: 4px solid;
            border-right: 4px solid;
            border-radius: 0 15px 0 0;
        }

        .bottomcornerline {
            width: 13px;
            height: 13px;
            margin: 0 13px 13px 0;
            border-bottom: 4px solid;
            border-right: 4px solid;
            border-radius: 0 0 15px 0;
        }

        .hline,
        .vline,
        .topcornerline,
        .bottomcornerline {
            &.color1 {
                border-color: $accent;
            }

            &.color2 {
                border-color: $accent2;
            }

            &.color3 {
                border-color: $accent3;
            }

            &.color4 {
                border-color: $accent4;
            }
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

            .vline {
                position: absolute;
            }

            .block-mobile:not(.color2) {
                position: absolute;
                left: 87px;
            }

            .vline, .bottomcornerline, .topcornerline{
                border-radius: 0;
                border-top: 0;
                border-bottom: 0;
            }

            .hline.hl-h:not(.hl-r):not(.hl-l) {
                width: 5px;
            }

            .hline.hl-r, .hline:not(.hl-h) {
                display: none;
            }

            .topcornerline {
                height: 17px;
            }

            .bullet {
                &.b-img {
                    z-index: 5;
                }

                &.b-s {
                    z-index: 5;
                }
            }




        }
    }
}
</style>