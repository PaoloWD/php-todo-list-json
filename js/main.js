const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todoList: [],
      todo: {},
    };
  },
  methods: {
    onSubmitTodo() {
      axios
        .post("API/createTodo.php", this.todo, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          this.fetchTodo();
        });
    },
    fetchTodo() {
      axios.get("API/todo.php").then((resp) => {
        this.todoList = resp.data;
        console.log(resp.data);
      });
    },
  },
}).mount("#app");
