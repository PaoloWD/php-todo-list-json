<?php
$todo = file_get_contents("../todo.json");
$todo = json_decode($todo, true);
$newTodo = [
    "WID" => $_POST["WID"],
];
$todo[] = $newTodo;
$todoJson = json_encode($todo, JSON_PRETTY_PRINT);
file_put_contents("../todo.json", $todoJson);
header("Content-Type: application/json");
echo json_encode($newTodo);
