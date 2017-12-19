<?
define('CONTINUE', true);

require_once('settings.php');

$action = $_GET["action"];

function getId() {
    $id = false;
    if (isset($_GET["id"]) && intval($_GET["id"]) !== 0) {
        $id = intval($_GET["id"]);
    }

    return $id;
}

function getPart() {
	$id = false;
	if (isset($_GET["part"]) && intval($_GET["part"]) !== 0) {
		$id = intval($_GET["part"]);
	}

	return $id;
}

function getRelic() {
	$id = false;
	if (isset($_GET["relic"]) && intval($_GET["relic"]) !== 0) {
		$id = intval($_GET["relic"]);
	}

	return $id;
}

function getItem() {
	$id = false;
	if (isset($_GET["item"]) && intval($_GET["item"]) !== 0) {
		$id = intval($_GET["item"]);
	}

	return $id;
}

switch ($action) {
    case "lastUpdate":
        $sql = "
            SELECT 
                update_id,
                updated
            FROM updates
            ORDER BY
                update_id DESC
            LIMIT 1";

        $result = $conn->query($sql);

        echo json_encode($result->fetch_assoc());
    break;

    case "items": 
        $id = getId();
        $sql = "
            SELECT 
                i.item_id AS itemId, 
                i.name AS itemName, 
                it.item_type_id AS typeId, 
                COUNT(p.part_id) AS totalParts
            FROM items i
            INNER JOIN item_types it 
                ON i.type = it.item_type_id 
            LEFT JOIN parts p
                ON i.item_id = p.item 
            WHERE 1
            ".($id ? "AND i.item_id = " . $id : "")."
            GROUP BY 
                i.item_id
            ORDER BY
                it.order, 
                i.name";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "itemTypes":
        $id = getId();
        $sql = "
            SELECT 
                it.item_type_id AS id, 
                it.name AS name
            FROM item_types it
            WHERE 1
            ".($id ? "AND it.item_type_id = " . $id : "")." 
            ORDER BY 
                it.item_type_id";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "parts":
        $id = getId();
	    $item = getItem();
        $sql = "
            SELECT
                p.part_id AS partId, 
                pt.part_type_id AS typeId, 
                p.item AS itemId
            FROM parts p
            INNER JOIN part_types pt
                ON p.type = pt.part_type_id
            WHERE 1
            ".($id ? "AND p.part_id = " . $id : "")."
            ".($item ? "AND p.item = " . $item : "")."
            ORDER BY 
                pt.order,
                pt.name";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "partTypes":
        $id = getId();
        $sql = "
            SELECT 
                pt.part_type_id AS id, 
                pt.name AS name
            FROM part_types pt
            WHERE 1
            ".($id ? "AND pt.part_type_id = " . $id : "")."
            ORDER BY
                pt.part_type_id";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data); 
    break;

    case "relics":
        $id = getId();
        $sql = "SELECT relic_id, name, era FROM relics " . ($id ? "WHERE relic_id = " . $id : "");
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data); 
    break;

    case "relicEras":
        $id = getId();
        $sql = "SELECT relic_era_id AS id, name AS name FROM relic_eras " . ($id ? "WHERE relic_era_id = " . $id : "");
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data); 
    break;

    case "partsInRelics":
        $id = getId();
        $part = getPart();

        $sql = "
            SELECT 
                r.relic_id AS relicId, 
                CONCAT_WS(' ', re.name, r.name) AS relicName, 
                pir.part AS partId
            FROM relics r
            INNER JOIN relic_eras re
                ON r.era = re.relic_era_id
            INNER JOIN part_in_relic pir
                ON r.relic_id = pir.relic
            WHERE 1
            ".($id ? "AND r.relic_id = " . $id . " " : "")."
            ".($item ? "AND pir.part = " . $item . " " : "")."
            ORDER BY 
                re.order, 
                r.name";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data); 
    break;

	case "relicsForPart":
		$part = getPart();
        $sql = "
            SELECT 
                pir.relic AS relicId, 
                CONCAT_WS(' ', re.name, r.name) AS relicName, 
                pir.part AS partId,
                pir.chance AS partChance,
                IF(COUNT(rim.relic) > 0, 1, 0) AS inMissions
            FROM part_in_relic pir
            INNER JOIN relics r
                ON pir.relic = r.relic_id
            INNER JOIN relic_eras re
                ON r.era = re.relic_era_id
            LEFT JOIN relic_in_mission rim
                ON r.relic_id = rim.relic
            WHERE 1
            ".($part ? "AND pir.part = " . $part . " " : "")."
            GROUP BY 
                CONCAT_WS('-', r.relic_id, pir.part)
            ORDER BY 
                re.order,
                r.name";
		$result = $conn->query($sql);

		$data = [];

		while ($row = $result->fetch_assoc()) {
			$data[] = $row;
		}

		echo json_encode($data);
    break;

    case "missionTypes":
        $sql = "
            SELECT
                mission_type_id AS id,
                name AS name
            FROM mission_types";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "missionLocations":
        $sql = "
            SELECT
                mission_location_id AS id,
                name AS name
            FROM mission_locations";
        $result = $conn->query($sql);

        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "missions":
        $id = getId();
        $sql = "
            SELECT
                mission_id, 
                name, 
                location, 
                type
            FROM missions
            WHERE 1
            ".($id ? "AND mission_id = " . $id . " " : "")."
            ";
        $result = $conn->query($sql);
        
        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
    break;

    case "missionsForRelic":
        $relic = getRelic();
        $sql = "
            SELECT
                m.mission_id AS missionId,
                m.name AS missionName,
                m.type AS missionType,
                m.location AS missionLocation,
                rim.rotation AS missionRotation, 
                rim.chance AS relicChance
            FROM relic_in_mission rim
            INNER JOIN missions m
                ON rim.mission = m.mission_id
            ".($relic ? "WHERE rim.relic = " . $relic . " " : "")."
            ORDER BY 
                rim.chance DESC,
                rim.rotation";

        $result = $conn->query($sql);
        
        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
        break;
    break;
    
    default:
    die("{\"error\":\"Not a valid action\"}");
    break;
}



?>