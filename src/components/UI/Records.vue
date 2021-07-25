<template>
    <ul class="records">
        <li class="records__item" v-for="(record, index) in records" :key="index">
            <dl>
                <dt class="records__item-name">{{ record.type }}</dt>
                <dd class="records__item-desc">{{ record.value }}</dd>
            </dl>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        records: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="sass">
    .records
        display: flex
        flex-direction: row
        list-style: none
        text-align: center
        padding: 0
        border: 1px solid lightgray
        border-radius: 5px 
        &__item
            flex-grow: 1
            &-name
                text-transform: uppercase
                font-weight: 600
            &-desc
                margin: 0

</style>