<?php

/**
 * ---------------------------------------------------------------------
 JPDZSoftware admin panel 
 */
use Glpi\Application\View\TemplateRenderer;
include('../inc/includes.php');
include('../inc/dbClient.php');


Session::checkLoginUser();


Html::header(__('Helpdesk Dashboard'), $_SERVER['PHP_SELF'], "helpdesk", "dashboard");


// Prueba la consulta
$user = json_decode(json_encode(getUserPDO(2001)));

TemplateRenderer::getInstance()->display('components/dashboard/mydashboard.html.twig', [
    'params' => $user,
]);

Html::helpFooter();

Html::footer();

