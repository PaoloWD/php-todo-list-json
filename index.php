

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body class="bg-dark">
    <div id="app">
        <div class="container">
            <div class="row flex-column align-items-center">
                <div class="col-4">
                    <h1 class="text-center text-white">Todo List</h1>
                    <div class="bg-white">
                        <div class="border-bottom p-3" v-for="todo in todoList">{{todo.WID}}</div>
                    </div>
                </div>
                <div class="col-4">
                    <form @submit.prevent="onSubmitTodo" class="text-center mt-3">
                        <div class="d-flex ">
                            <input class="w-100" type="text" name="WID" v-model="todo.WID">
                            <button class="btn btn-primary">Inserisci</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
</body>
</html>