// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'

Vue.config.productionTip = false

//Async
Vue.component('async-example', function(resolve, reject) {
  setTimeout(function(){
    resolve({template: '<p>I am async</p>'})
  }, 1000) 
})

// Slots
Vue.component('section-content', {
  props: ['title'],
  template: '<div><h1>{{title}}</h1><hr/><slot name="slot1"></slot><slot text="This is scoped slot"></slot><hr/></div>'
})

// Form control
Vue.component('number-input', {
  template: '<input ref="input" :value="value" @input="updateValue($event.target.value)" />',
  props: ['value'],
  methods: {
    updateValue: function(value) {
      this.$emit('input', ++value)
    }
  }
})

Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: String
  },
  template: '<input type="checkbox" :checked="checked"></input>'
})

// Event popup
Vue.component('button-counter', {
  template: '<button @click="incrementCounter">{{ counter }} -- {{ childTotal }}</button>',
  props: ['childTotal'],
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
      this.$emit('increment')
      this.$emit('update:childTotal', this.counter)
    }
  }
})

// Props
Vue.component('child', {
  props: ['message', 'myMessage'],
  template: '<span>{{ message }} - {{ myMessage }}</span>',
  data: function() {
    console.log(typeof this.myMessage)
    return {};
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('my-row', {
  template: "<p>aaa</p>"
})

var localComponent = {
  template: "<h1>This is a local component</h1>"
}

var localComponent2 = {
  template: "<h1>This XX is a local component</h1>"
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentView: localComponent2,
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
    picked: '',
    // event popup
    total: 0,
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
    toggleInput: function() {
      this.ok = !this.ok
    },
    // event pop up
    incrementTotal: function() {
      this.total += 1;
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
  },

  components: {
    'local-component': localComponent
  }
  //template: '<App/>',
  //components: { App }
})
