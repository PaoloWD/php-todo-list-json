const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todoList: [],
      todo: {},
      index: Number,
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
      this.todo.WID = "";
    },
    fetchTodo() {
      axios.get("API/todo.php").then((resp) => {
        this.todoList = resp.data;
        console.log(resp.data);
      });
    },
    taskCompleted(i) {
      this.todoList[i].status = !this.todoList[i].status;
      console.log("TaskComplete", i);
    },
    deleteTask(i) {
      this.index = i;
      axios
        .post("API/deleteTodo.php", this.index, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          this.fetchTodo();
        });
      console.log("this.index", this.index);
    },
  },
}).mount("#app");
