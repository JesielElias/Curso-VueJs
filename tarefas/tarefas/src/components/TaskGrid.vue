<template>
    <div class="tasks">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name" :task="task"
                @taskDeleted="$emit('taskDeleted', i)"
                @taskStateChanged="$emit('taskStateChanged', i)"></Task>
        </template>
        <p v-else> Sua vida está em dia :) </p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
    props: {
        tasks: {type: Array, required: true}
    },
    components: { Task }
}
</script>

<style>
    .tasks{
        display: flex;
        flex-wrap: wrap;
    }
</style>