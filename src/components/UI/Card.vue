<template>
    <section>
        <h2>{{ name }}</h2>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>