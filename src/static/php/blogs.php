<?php
	$conn = new mysqli("localhost", "deajen9_rdj", "rdj_pass", "deajen9_rdj");
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}

	$sql = "SELECT * FROM blogs";
	$result = $conn->query($sql);
	$files = array();

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	        array_push($files, array('title' => $row['title'], 'date' => $row['date'], 'description' => $row['description'], 'url' => $row['url']));
	    }
	} 

	echo json_encode($files);

	$conn->close();
?>