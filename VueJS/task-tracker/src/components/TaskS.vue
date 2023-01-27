<template>
    <div :key="task.id" v-for="task in tasks">
        <TaskSingular @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
    import TaskSingular from './TaskSingular'

    export default{
        name: 'TaskS',
        props: {
            tasks: Array
        },
        components: {
            TaskSingular
        },
        emits: ['delete-task', 'toggle-reminder'],
    }
</script>