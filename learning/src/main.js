// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todo'],
  template: '{{ todo.text }}</li>'
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
    ],
    classObject: { 
      active: true, 
      'text-danger': true 
    },
    activeClass: 'active',
    errorClass: 'error',
    isActive: true,
    styleObject: {
      color: '#6b6b6b',
      fontSize: '16px'
    },
    ok: true,
    no: false,
    username: {
      firstName: "San",
      middleName: "Wu",
      lastName: "Zhang"
    },
    picked: ''
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
    toggleInput: function() {
      this.ok = !this.ok
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
    },
    computedClassObject: function() {
      return {
        active: this.classObject.active
      }
    }
  }
  //template: '<App/>',
  //components: { App }
})
