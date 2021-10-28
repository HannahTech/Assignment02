<?php
$result = "Assignment06.json";
header("Content-Type: application/json");
header("Cashe-Control: no-cache");
readfile($result);
?>