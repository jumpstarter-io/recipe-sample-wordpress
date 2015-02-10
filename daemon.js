{
    "php-fpm": {
	"exec": ["/app/code/php5/php5-fpm", "-y", "/app/code/php5/php-fpm.conf"]
    },
    "nginx": {
	"pre_exec_list": [
	    ["/app/code/nginx/pre-exec"],
	    ["/bin/bash", "-c", "mkdir -p /app/state/uploads"],
	    ["/bin/bash", "-c", "php /app/code/src/wp-content/plugins/jumpstarter/js-init.php"]
	],
	"exec": ["/app/code/nginx/nginx", "-c", "/app/code/nginx/nginx.conf"]
    }
}
