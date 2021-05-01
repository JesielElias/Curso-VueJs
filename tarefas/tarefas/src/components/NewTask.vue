<template>
  <div class="new-task">
      <input v-model="name" @keydown.enter="add" type="text"
        class="form-element" placeholder="Insira uma nova tarefa"/>
      <button v-on:click="add"> + </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add(){
            if (this.name.length){
                this.$emit('taskAdded', { name: this.name});
                this.name = '';
            }
            
        }
    }
}
</script>

<style>

    .new-task{
        margin: 35px;
    }

    .form-element{
        outline: none;
        
    }

</style>