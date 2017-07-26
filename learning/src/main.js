// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    seen: true,
    notSeen: false,
    todos: [
      { id: 1, text: 'Todo item1' },
      { id: 2, text: 'Todo item2' },
      { id: 3, text: 'Todo item3' }
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function(value) {
      if(!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)

    }
  },
  computed: {
    computedMessage: function() {
      return this.message + " computed!"
    }
  }
  //template: '<App/>',
  //components: { App }
})
