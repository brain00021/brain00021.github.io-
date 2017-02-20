<?php

mb_internal_encoding('UTF-8');

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg' ];
$subject = mb_encode_mimeheader("Contact ".$name, 'UTF-8');;
$sHeaders = "Content-type: text/html; charset=UTF-8\r\n";

$mailbody = '
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=UTF-8">
<style>
table {background-color: yellow;}
.name {font-size: 250%;}
</style>
</head>
<body>
<table border=1>
	<tr>
		<td class="name">Name</td>
		<td>'.htmlspecialchars($name).'</td>
	</tr>
	<tr>
		<td>Email</td>
		<td>'. htmlspecialchars($email) . '</td>
	</tr>
	<tr>
		<td>Msg</td>
		<td>'. htmlspecialchars($msg). '</td>
	</tr>
</table>
</body></html>
';

mail("brain00021@gmail.com,cfwei.tw@gmail.com",$subject,$mailbody,$sHeaders); 

?>
<h1>Message Sent! return back to Website</h1>
<script>
	var urlHref = location.href;
	window.location.assign("http://brian-li.com/resume/index.php");
</script>
