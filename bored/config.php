<?php

    /**
     * config.php
     *
     * Computer Science 50
     * 
     *
     * Configures app.
     */

    // display errors, warnings, and notices
    ini_set("display_errors", true);
    error_reporting(E_ALL);

    // requirements
    require("helpers.php");

    // CS50 Library
    /*require("/home/ubuntu/workspace/finalproject/vendor/library50-php-5/CS50/CS50.php");
    CS50::init(__DIR__ . "/config.json");*/

    // enable sessions
    session_start();

    // require authentication for all create, edit 
    // if (in_array($_SERVER["PHP_SELF"], ["/style/create.php", "/style/yourevents.php"]))
    // {
    //     if (empty($_SESSION["id"]))
    //     {
    //         redirect("login.php");
    //     }
    // }

?>
