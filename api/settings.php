<?

// respond to preflights
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With');

    exit;
}

$host = "localhost";
$user = "checklistPrime";
$password ="uS4TzBuK";
$database = "checklistPrime";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("{\"error\":\"No connection\"}");
}

if (!defined("CONTINUE")) {
    die("{\"error\":\"Not allowed - 1\"}");
}

if (!isset($_GET["action"])) {
    die("{\"error\":\"No action\"}");
}

if ($_GET["action"] == "henk") {
    header("location: https://www.youtube.com/watch?v=w0HNZL9mmOo"); // Blame @Sharkwipf
}

// Setting headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$authKey = false;

if (!empty($_SERVER['HTTP_AUTH_KEY'])) {
    $authKey = $_SERVER['HTTP_AUTH_KEY'];
} else {
    die("{\"error\":\"Not allowed - 2\"}");
}

$sql = "
    SELECT 
        * 
    FROM auth_keys 
    WHERE `key` LIKE '" . $conn->real_escape_string($authKey) . "'
    AND active = '1'";

$result = $conn->query($sql);

if ($result->num_rows == 0) {
    die("{\"error\":\"Not allowed - 3\"}");
}

?>