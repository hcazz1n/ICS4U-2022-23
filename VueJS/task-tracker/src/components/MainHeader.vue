<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonComp />
    </header>
</template>

<script>
    import ButtonComp from './ButtonComp'

    export default {
        name: 'MainHeader',
        props: {
            title: String,
        },
        components: {
            ButtonComp
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>