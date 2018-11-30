<template>
<div>
  <div>
    <input v-model="inputValue" />
    <button @click="handleSubmit">提交</button>
  </div>
  <ul>
    <todo-item v-for="(item, index) of list" :key="index" :content="item" @delete="handleDelete(index)">
    </todo-item>
  </ul>
</div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  components: {
    'todo-item': TodoItem
  },
  data() {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit() {
      if (this.inputValue !== '') {
        this.list.push(this.inputValue)
        this.inputValue = ''
      }
    },
    handleDelete(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
