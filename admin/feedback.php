
<?php
$con=mysqli_connect("localhost","root","","techno");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM customer_feedback");


while($row = mysqli_fetch_array($result))
{
echo "<table>";
echo "<td width=11%>" . $row['name'] . "</td>";
echo "<td> : " . $row['feedback'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>
