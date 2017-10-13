
<?php
$con=mysqli_connect("localhost","root","","techno");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM messages");


while($row = mysqli_fetch_array($result))
{
echo "<table>";
echo "<td width=4>" . $row['Name'] . "</td>";
echo "<td> : " . $row['message'] . "</td>";
echo "</tr>";
}
echo "</table>";
echo "<button>Reply to messages</button>";
mysqli_close($con);
?>
