<template>
    <section class="card">
        <picture v-if="item.img" class="card__pic">
            <img :src="item.img" :alt="item.name">
        </picture>
        <h2 class="card__title">{{ item.name }}</h2>
        
        <slot></slot>
        
        <!-- <a v-if="more" class="card__link" :href="item.alias">More >></a> -->
        <router-link 
            v-if="more" 
            class="card__link" 
            :to="{name: 'personAlias', params: { personAlias: item.alias } }">
            More >>
        </router-link>
        <router-link 
            v-else 
            class="card__link" 
            :to="{name: 'home'}">
            Back >>
        </router-link>

    </section>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        more:{
            type: Boolean,
            required:false
        }
    }
}
</script>

<style lang="sass">
    .card
        &__pic
            width: 100%
            height: 400px
            display: block
            img
                object-fit: cover
                width: 100%
                height: 100%
        &__title
            margin-bottom: 0
        &__link
            display: block
            text-align: right
            color: var(--c-accent)
            font-weight: 600
            text-transform: uppercase
            text-decoration: none
            padding: 5px
        &.card--person
            max-width: 600px
            margin: 0 auto
            .card
                &__pic
                    height: initial    </style>