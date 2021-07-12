<template>
    <div>
        <h1>Персонажи Disney</h1>
        <ul class="cards">
            <li class="cards__item" v-for="item in items" :key="item.id">
                <Card class="card" :name="item.name" >
                    <p>
                        <span v-html="item.desc">
                        </span>
                    </p>
                </Card>
            </li>
        </ul>
    </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import {items} from'@/_config'

export default {
    components: {
      Card
    },
    data() {
        return {
            items: items
        }
    }
}
</script>

<style lang="sass">
    .cards
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: space-between
        list-style: none
        padding: 0
        &__item
            width: 32%
            min-width: 300px
</style>