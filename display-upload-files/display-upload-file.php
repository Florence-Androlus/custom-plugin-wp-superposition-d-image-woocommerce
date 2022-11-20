<?php 
/* 
* @wordpress-plugin
* Plugin Name: Display Upload Files 
* Description:       Affiche les différents téléchargement à l'emplacement voulu
* Version:           1.0.2
* Author:            Fan-Develop
* Author URI:        https://fan-develop.fr
* Requires at least: 5.9
* Requires PHP: 7.4.0
*/

/* Chemin vers ce fichier dans une constante
* => sera utile pour les hook d'activation et désactivation
*/
define('DISPLAY_UPLOAD_FILE_PLUGIN_FILE', __FILE__);
define('DF_PLUGIN_PATH', rtrim(plugin_dir_url(__FILE__), "/") ) ;

/* If this file is called directly, abort.*/
if ( ! defined( 'WPINC' ) ) {
	die;
}

// ajout fichier JS
wp_enqueue_script('duf-frontend', DF_PLUGIN_PATH. '/js/duf-frontend.js' ,array('jquery'));	
