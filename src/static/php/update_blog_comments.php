<?php
	$topic = $_GET['topic'];
	$name = $_GET['name'];
	$text = $_GET['text'];
	$type = $_GET['type'];

	$conn = new mysqli("localhost", "deajen9_rdj", "rdj_pass", "deajen9_rdj");
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}

	$sql = "INSERT INTO `deajen9_rdj`.`blog_comments` (`content`, `name`, `time`, `topic`, `type`) VALUES ('". $text . "', '" . $name . "',  Now(), '" . $topic . "', '" . $type . "');";

	$result = $conn->query($sql);

	echo $conn->error;

	$conn->close();