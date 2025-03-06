<?php

/**
 * ---------------------------------------------------------------------
 JPDZSoftware admin panel 
 */

include('../inc/includes.php');

Session::checkLoginUser();


Html::header(__('Helpdesk Dashboard'), $_SERVER['PHP_SELF'], "helpdesk", "dashboard");

function getTwigInstance() {
    static $twig = null;  // Caché en memoria

    if ($twig === null) {
        $loader = new \Twig\Loader\FilesystemLoader(GLPI_ROOT . "/templates/");
        $twig = new \Twig\Environment($loader, [
            'cache' => GLPI_ROOT . "/files/_cache/twig", // Activa caché de Twig
            'debug' => true  // Habilita modo debug si estás en desarrollo
        ]);
    }

    return $twig;
}

// Obtener la instancia de Twig
$twig = getTwigInstance();

// Renderizar la plantilla con variables
echo $twig->render('components/dashboard/mydashboard.html.twig', [
    'usuario' => 'Juan Pérez',
    'notificaciones' => 5
]);

Html::helpFooter();

Html::footer();

