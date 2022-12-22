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
      axios
        .post("API/deleteTodo.php", i, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          this.todoList.splice(i, 1);
          resp.data.splice(i, 1);
          console.log("response", resp.data);
          console.log("index", i);
        });
    },
  },
}).mount("#app");
