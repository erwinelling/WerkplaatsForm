<html>
<body>

<?php

// Show all URL parameters (and
// all form data submitted via the
// 'get' method)
foreach($_POST as $key=>$value){
    echo $key, ' => ', $value, "<br/>";
}
?>

</body>
</html>
