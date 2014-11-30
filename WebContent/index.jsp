<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript">
function showRow(rowId) {
    document.getElementById(rowId).style.display = "";
}
function hideRow(rowId) {
    document.getElementById(rowId).style.display = "none";
}

</script>

<title>Insert title here</title>
</head>
<body>
	<table>
		<tr>
			<th>Header Cell 1</th>
			<th>Header Cell 2</th>
		</tr>
		<tr id="row1">
			<td>Bla 1</td>
			<td>Bla 2</td>
		</tr>
		<tr id="row2" style="display: none;">
			<td colspan="2">Secret row, spooky</td>
		</tr>
		<tr>
			<td>This row</td>
			<td>will never hide</td>
		</tr>
	</table>
	<a href="javascript: void(0);"
		onclick="showRow('row2'); hideRow('row1');">Show/Hide rows</a>
</body>
</html>