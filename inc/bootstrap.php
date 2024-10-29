<?php
/**
 * Main file to handle files.
 */
defined( 'ABSPATH' ) || exit;


/**
 * Required files for plugin.
 */
$required_files = array(
	'inc/helpers.php',
	'inc/api/class-login-ui-api.php',
	// 'inc/api/class-settings.php',
	'inc/class-menu-pointer.php',

	'build/non-blocks/admin/ui-builder/index.php',
	'build/non-blocks/admin/ui-builder-iframe/index.php',
	'build/non-blocks/login-ui/index.php',
	// 'build/non-blocks/admin/settings/index.php',
);

/**
 * check and include files.
 */
foreach ( $required_files as $file ) {
	$file = sprintf( '%s%s', ADVANCED_LOGIN_PAGE_CUSTOMIZER_BASE_DIR, $file );
	if ( file_exists( $file ) ) {
		require_once $file;
	}
}
