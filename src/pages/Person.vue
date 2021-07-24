<template>
    <Card class="card--person" :item="person" :link="back">
        <span class="" v-html="person.desc"></span>
        <section v-if="person.birth">
            <h2>Рождение персонажа</h2>
            <p v-for="item in person.birth" :key="item">{{ item }}</p>
        </section>
    </Card>
</template>

<script>
import persons from '@/seeders/persons.js'
import Card from '@/components/UI/Card.vue'

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
        this.person = person
    }
}
</script>