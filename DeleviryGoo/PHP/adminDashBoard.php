<?php
$server = "localhost";
$username = "root";
$password = "123";
$dbName = "DeliverGoo";
$tableName = "contactUs";
// Create connection
$conn = new mysqli($server, $username, $password, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM " . $tableName);

echo '
<section class="top">
  <section class="bottom">
    <div class="home content center">
      <h1>Recently <span class="yellow">Received</span> Messages</h1>
    </div>
    <div class="wrap-table100 center">
      <div class="table100">
        <table>
          <thead>
            <tr class="table100-head">
              <th class="column1">Date</th>
              <th class="column2">ID</th>
              <th class="column3">Name</th>
              <th class="column4">Email</th>
              <th class="column5">Phone Number</th>
              <th class="column6">Message</th>
            </tr>
          </thead>
          <tbody>
            ';

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['dateReceived'] . "</td>";
echo "<td>" . $row['id'] . "</td>";
echo "<td>" . $row['name'] . "</td>";
echo "<td>" . $row['email'] . "</td>";
echo "<td>" . $row['phone'] . "</td>";
echo "<td>" . $row['message'] . "</td>";

echo "</tr>";
}
echo '</tbody>
</table>
</div>
</div>
</section>
<form method="POST" class="field">
<input type="submit" name="drop" class="btn small content" style="margin-left: 300px;" value="Drop All Records" />
</form>
</section>';
if(array_key_exists('drop', $_POST)) {
    dropAllData($conn, $tableName);
}
function dropAllData($conn, $tableName) {
    $conn->query("TRUNCATE TABLE " . $tableName);
    echo '<script>alert("Data Dropped.")</script>';
    
}
$conn->close();
?>