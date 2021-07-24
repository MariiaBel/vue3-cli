<template>
    <div>
        <h1>Персонажи Disney</h1>
        <carousel 
            :settings="settings" 
            :breakpoints="breakpoints" 
            class="cards">
            <slide v-for="item in items" :key="item.id">
                <Card :item="item" :more=true class="cards__item">
                    <span class="cards__text" v-html="item.desc"></span>
                </Card>
            </slide>

            <template #addons>
                <Pagination />
            </template>
        </carousel>
    </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import items from'@/seeders/persons.js'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
export default {
    components: {
        Card,
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            items: items,
            settings: {
                itemsToShow: 1,
                wrapAround: false,
                snapAlign: 'center'
            },
            breakpoints: {
                768: {
                    itemsToShow: 2,
                    itemsToScroll: 2,
                    snapAlign: 'left'
                },
                1280: {
                    itemsToShow: 1.4,
                    itemsToScroll: 1,
                    snapAlign: 'center'
                }

            }
        }
    }
}
</script>

<style lang="sass">
    .cards
        // display: flex
        // flex-direction: row
        // flex-wrap: wrap
        // list-style: none
        padding: 0
        margin-top: 30px
        &__item
            // width: 32%
            // min-width: 350px
            // flex-grow: 1
            margin: 0 20px
        &__text
            text-overflow: ellipsis
            overflow: hidden
            white-space: none
            display: -webkit-box !important
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
    .carousel 
        --carousel-color-primary: var(--c-accent)
        --carousel-color-secondary: gray
        &__pagination-button
            height: 10px
            padding: 5px
            box-sizing: content-box
            </style>