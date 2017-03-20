<?php
	if ($handle = opendir('../blogPages')) {
		$files = array();
			while (false !== ($entry = readdir($handle))) {
				if ($entry != "." && $entry != "..") 
					array_push($files, array('name' => $entry, 'time' => fileatime('../blogPages/' . $entry)));
			}

	  	echo json_encode($files);

		closedir($handle);
	}
?>