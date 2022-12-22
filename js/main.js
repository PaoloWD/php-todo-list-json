const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todoList: [],
      todo: {},
      isSelected: false,
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
    taskCompleted(i) {
      this.todoList[i].status = !this.todoList[i].status;
      console.log(i);
    },
  },
}).mount("#app");
