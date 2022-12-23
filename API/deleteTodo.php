<?php
$todo = file_get_contents("../todo.json");
$todo = json_decode($todo, true);
$indexJs = (int)$_POST["index"];
var_dump($indexJs);
array_splice($todo,$indexJs, 1);
$todoJson = json_encode($todo, JSON_PRETTY_PRINT);
file_put_contents("../todo.json", $todoJson);
header("Content-Type: application/json");

