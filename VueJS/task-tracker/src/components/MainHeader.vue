<template>
    <header>
        <h1>{{ title }}</h1>
        <ButtonComp @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" />
    </header>
</template>

<script>
    import ButtonComp from './ButtonComp'

    export default {
        name: 'MainHeader',
        props: {
            title: String,
            showAddTask: Boolean
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