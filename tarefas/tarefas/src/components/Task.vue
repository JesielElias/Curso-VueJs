<template>
  <div class="task" :class="{done: !task.pending, pending: task.pending}" @click="$emit('taskStateChanged', task)">
      <span class="close" @click.stop="$emit('taskDeleted', task)">X</span>
      <div class="task-body">
        <p>{{task.name}}</p>
      </div>
      
  </div>
</template>

<script>
export default {
    props:{
        task: { type: Object, required: true}
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
    methods: {
        marcarDesmarcar() {
            this.task.pending = !this.task.pending;
        },
    }
}
</script>

<style>

    .task{
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        text-align: center;
        padding: 10px;
        cursor: pointer;
        margin: 15px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending{
        background-color: rgb(211, 85, 85);
        border-left: 12px solid rgb(214, 39, 39);
    }

    .done{
        background-color: rgb(112, 221, 126);
        border-left: 12px solid rgb(35, 199, 57);
        text-decoration: line-through;
    }

    .close{
        border-radius: 20px;
        width: 20px;
        font-weight: 500;
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 1rem;
    }

    .pending .close{
        background-color: rgb(214, 39, 39);
    }

    .done .close{
        background-color: rgb(35, 199, 57);
    }


</style>