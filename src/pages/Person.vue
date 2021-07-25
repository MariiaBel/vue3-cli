<template>
    <Card class="card--person" v-if="person" :item="person" :link="back">
        <template v-slot:body>
            <span class="" v-html="person.desc"></span>
            <section v-if="person.birth">
                <h2>Рождение персонажа</h2>
                <p v-for="item in person.birth" :key="item">{{ item }}</p>
            </section>
        </template>
    </Card>
</template>

<script>
import persons from '@/seeders/persons.js'
import Card from '@/components/UI/Card.vue'
import { routes } from '@/router/routes.js'

export default {
    components: {
      Card
    },
    data() {
        return {
            person: null
        }
    },
    created() {
        const alias = this.$route.params.personAlias
        const person = persons.find(item => item.alias === alias)
        const Err404Route = routes.find(item => item.name === '404')
        if(!person) window.location.href= Err404Route.path
        this.person = person
    }
}
</script>