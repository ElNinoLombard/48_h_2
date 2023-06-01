<?php
include 'db_connect.php';

$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$location = '/48_h_2/back/api';
$returnData = ['data' => [], 'message' => 'Succes'];

if ($location) {
    $route = str_replace($location, '', $uri);
}

switch ($request_method) {
    case 'GET':
        if (preg_match('/article.*/', $route)) {
            getAllArticle();
        }
        if (preg_match('/myaccount.*/', $route)) {
            if (!empty($_GET['id'])) {
                getUserById($_GET['id']);
            } else {
                return $returnData['message'] = 'Id manquant';
            }
        }
        break;
    case 'POST':
        if (preg_match('/login.*/', $route)) {
            if (!empty($_POST['mail']) && !empty($_POST['password'])) {
                checkConnection($_POST['mail'], $_POST['password']);
            } else {
                return $returnData['message'] = 'Adresse mail et/ou mot de passe manquant';

            }
        }
        if (preg_match('/article.*/', $route)) {
            addArticle();
        }
        break;
    case 'PUT':
        if (preg_match('/article.*/', $route)) {
            if (!empty($_GET['id'])) {
                $id = intval($_GET['id']);
                updateArticle($id);
            } else {
                return $returnData['message'] = 'Id manquant';
            }
        }
        break;
    case 'DELETE':
        if (preg_match('/article.*/', $route)) {
            if (!empty($_GET['id'])) {
                deleteArticle();
            } else {
                return $returnData['message'] = 'Id manquant';
            }
        }
        break;
    default:
        break;
}

function getUserById($id) {
    global $connexion;
    global $returnData;

    $query = "SELECT * FROM user LEFT JOIN role ON role_id = role.id WHERE user.id=$id";
    $result = mysqli_query($connexion, $query);
    echo $query;
    $returnData['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $returnData['message'] = mysqli_connect_error();

    return $returnData;
}

function checkConnection($mail, $password) {
    global $connexion;
    global $returnData;

    $query = "SELECT * FROM user
         INNER JOIN image ON article.image_id = image.id
         where mail = '$mail' and password = '$password'";
    echo $query;
    $result = mysqli_query($connexion, $query);

    if ($result) {
        $returnData['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
    } else {
        $returnData['message'] = mysqli_connect_error();
    }

    return $returnData;
}


function getAllArticle() {
    global $connexion;
    global $returnData;

    $query = "SELECT * FROM article
         INNER JOIN image ON article.image_id = image.id
         ORDER BY modifiedDate DESC";
    $result = mysqli_query($connexion, $query);
    if ($result) {
        $returnData['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
    } else {
        $returnData['message'] = "Error 500";
    }

    return $returnData;
}

function updateArticle($id) {
    global $connexion;
    global $returnData;

    $modified = date('Y-m-d h:i:s');
    $data = array();
    parse_str(file_get_contents('php://input'),$data);
    $query = "UPDATE produit SET title='" . $data['title'] . "', description='" . $data['description'] . "', author_id=" . $data['author_id'] . ", image_id=" . $data['image'] . ", modifiedDate='$modified'";
    $returnData['data'] = mysqli_query($connexion, $query);

    if ($returnData['data']) {
        $returnData['message'] = 'PUT réussi';
    } else {
        $returnData['message'] = 'PUT échoué';
    }
}

function addArticle() {
    global $connexion;
    global $returnData;

    $title = $_POST['title'];
    $description = $_POST['description'];
    $author_id = $_POST['author_id'];
    $image_id = $_POST['image_id'];
    $created = $modified =  date('Y-m-d h:i:s');

    $query = "INSERT INTO article (title, description, author_id, image_id, creationDate, modifiedDate)
    VALUES ('$title', '$description', $author_id, $image_id, '$created', '$modified')";
    $returnData['data'] = mysqli_query($connexion, $query);

    if ($returnData['data']) {
        $returnData['message'] = 'PUT réussi';
    } else {
        $returnData['message'] = 'PUT échoué';
    }
}

function deleteArticle() {
    global $connexion;
    global $returnData;

    $id = $_GET['id'];

    $query = "DELETE FROM article WHERE id=$id";
    $returnData['data'] = mysqli_query($connexion, $query);

    if ($returnData['data']) {
        $returnData['message'] = 'PUT réussi';
    } else {
        $returnData['message'] = 'PUT échoué';
    }
}
