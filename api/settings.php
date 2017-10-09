<?

$host = "localhost";
$user = "checklistPrime";
$password ="uS4TzBuK";
$database = "checklistPrime";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die('{"error": "Cant connect"}');
}

if (!defined("CONTINUE")) {
    die("Not allowed");
}

if (!isset($_GET["action"])) {
    die("No action given");
}

?>