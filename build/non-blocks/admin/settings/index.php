<?php
/**
 * Handle admin setting.
 */
namespace Advanced_Login_Page_Customizer;

defined( 'ABSPATH' ) || exit;

class Admin_Settings {

	/**
	 * Assets handle.
	 *
	 * @var string
	 */
	public static $handle = 'alpc-admin-settings';

	/**
	 * Initiate class.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_assets' ) );
		add_action( 'admin_menu', array( __CLASS__, 'login_ui_builder_page' ) );
	}

	/**
	 * Register assets.
	 *
	 * @return void
	 */
	public static function register_assets() {

		$asset_file_values = include_once 'index.asset.php';
		$deps              = $asset_file_values['dependencies'];
		$ver               = $asset_file_values['version'];
		$src               = sprintf( '%sbuild/non-blocks/admin/settings/index.js', ADVANCED_LOGIN_PAGE_CUSTOMIZER_BASE_URL );

		wp_register_script( self::$handle, $src, $deps, $ver, true );

		$src = sprintf( '%sbuild/non-blocks/admin/settings/index.css', ADVANCED_LOGIN_PAGE_CUSTOMIZER_BASE_URL );
		wp_register_style( self::$handle, $src, array( 'wp-components' ), $ver );

		$site_logo = get_option( 'site_logo' );
		$data      = array(
			'admin_url'  => admin_url(),
			'site_title' => get_bloginfo( 'name' ),
			'site_logo'  => wp_get_attachment_url( $site_logo ),
			'plugin_url' => ADVANCED_LOGIN_PAGE_CUSTOMIZER_BASE_URL,

		);
		$data = apply_filters( 'alpc_plugin_vars', $data );
		wp_localize_script(
			self::$handle,
			'alpc_vars',
			$data
		);
	}

	/**
	 * Enqueue scripts.
	 *
	 * @return void
	 */
	public static function enqueue_scripts() {
		wp_enqueue_script( self::$handle );
		wp_enqueue_style( self::$handle );
		wp_enqueue_media();

		wp_enqueue_script( 'wp-format-library' );
		wp_enqueue_style( 'wp-format-library' );
	}

	/**
	 * Register a custom menu page.
	 *
	 * @return void
	 */
	public static function login_ui_builder_page() {
		add_menu_page(
			// 'themes.php',
			__( 'Advanced Login Page Customizer', 'advanced-login-page-customizer' ), // Page title
			__( 'Login Customizer', 'advanced-login-page-customizer' ), // Menu title
			'manage_options',
			'alpc-settings',
			array( __CLASS__, 'login_ui_builder_page_cb' ), // Callback function
			'data:image/svg+xml;base64,' . base64_encode( '<svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none"><path d="M53.4411 25.605C53.4411 33.8933 46.7004 40.6123 38.3854 40.6123C30.0703 40.6123 23.3297 33.8933 23.3297 25.605C23.3297 17.3167 30.0703 10.5977 38.3854 10.5977C46.7004 10.5977 53.4411 17.3167 53.4411 25.605Z" fill="white"></path><path d="M0.224205 79.7975C-1.07051 85.0502 3.43201 89.4982 8.84188 89.4982L49.6951 89.4982C48.2913 88.1296 47.4195 86.2178 47.4195 84.1024V56.4013C47.4195 53.8957 48.6425 51.6758 50.5241 50.3058C47.0522 49.3584 43.4405 48.8664 39.7781 48.8664C28.9754 48.8664 18.6151 53.1472 10.9765 60.7672C5.67456 66.0561 1.98525 72.653 0.224205 79.7975Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60.9022 51.1856V41.5534H60.9062C60.9313 40.4766 61.0743 39.4024 61.3349 38.3502C61.8645 36.2114 62.8664 34.2176 64.2673 32.5144C65.6683 30.8113 67.4329 29.4418 69.4323 28.5061C71.4317 27.5703 73.6154 27.0918 75.8239 27.1057C78.0323 27.1195 80.2098 27.6253 82.1973 28.586C84.1848 29.5468 85.932 30.9382 87.3114 32.6588C88.6907 34.3794 89.6674 36.3855 90.1701 38.5308C90.4032 39.5255 90.5316 40.5384 90.5553 41.5534H90.5594V51.1856H92.6801C96.8415 51.1856 100.215 54.5592 100.215 58.7206V82.1793C100.215 86.3407 96.8415 89.7142 92.6801 89.7142H59.4709C55.3095 89.7142 51.936 86.3407 51.936 82.1793V58.7206C51.936 54.5591 55.3095 51.1856 59.4709 51.1856H60.9022ZM68.4889 51.1856V42.4167C68.4948 41.6703 68.5313 40.923 68.7179 40.1695C68.9759 39.1276 69.4639 38.1563 70.1464 37.3266C70.8289 36.497 71.6885 35.8298 72.6625 35.374C73.6365 34.9181 74.7003 34.685 75.7761 34.6918C76.852 34.6985 77.9127 34.9449 78.8809 35.4129C79.8491 35.881 80.7002 36.5588 81.3722 37.397C82.0441 38.2351 82.5199 39.2124 82.7648 40.2575C82.9248 40.9401 82.9644 41.5775 82.9727 42.2251V51.1856H68.4889Z" fill="white"></path></svg>' ),
			90
		);
	}
	/**
	 * Custom menu page callback.
	 *
	 * @return void
	 */
	public static function login_ui_builder_page_cb() {
			self::enqueue_scripts();
			echo "<div id='alpc-app'></div>";
	}
}

Admin_Settings::init();
