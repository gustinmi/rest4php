<?php

//$array = array(
//    array("foo", "bar"),
//    array("bat", "rat"),
//);
//$values = call_user_func_array("array_merge", $array);
//var_dump($values);

//$routes = array(
//    array('/\/api\/folders\/([0-9]*)/', array('controller'=>'Folder')),
//    array('/\/api\/ads\/([0-9]*)/', array('controller'=>'Ads'))
//);
//
                              //
//foreach ($routes as $routeEntry){
//    $route = $routeEntry[0];
//    preg_match($route, $subject, $matches, PREG_OFFSET_CAPTURE);
//    var_dump($matches);
//}

$subject = '/api/get/folders/';

$routes = array(
    '/\/api\/(get|set|del|new)\/folders\/([0-9]*)/' => array('controller'=>'Folder'),
    '/\/api\/(get|set|del|new)\/ads\/([0-9]*)/' => array('controller'=>'Ads'),
    '/\/api\/(q)\/folders\/([0-9]*)\/ads/' => array('controller'=>'Queries', 'ads-in-folder'),
);

foreach (array_keys($routes) as $key){
    if (preg_match($key, $subject, $matches, PREG_OFFSET_CAPTURE)){
        var_dump($matches);

        echo $operation = $matches[1][0];
        echo $specifier = $matches[2][0];

        //var_dump($routes[$key]);
        break;
    }else{
        continue;
    };
}

//print_r(array_keys($routes));


//$keys = preg_grep( $pattern, array_keys( $input ), $flags );


//print_r($routes);







