"use sctrict";

// Desturtturo createApp da VueJS
const { createApp } = Vue;

// Istanzio l'app
const myApp = createApp({
  data() {
    return {
      todos: [],
      todoText: "",
    };
  },
  methods: {
    // Funzione che aggiunge un nuovo todo all'array quando viene premuto il tasto +
    addTodo() {
      if (this.todoText.trim() !== "") {
        this.todos.push({ text: this.todoText, completed: false });
        this.todoText = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});

myApp.mount("#app");
