# Jumpstarter wordpress recipe

A recipe is a set of files which aims to simplify a Jumpstarter Application install.

# Files

## Jumpstart-Recipe

It is the init script which should successfully install and start WordPress.
Write there all the commands that should be run to install everything your Wordpress + jumpstarter Application needs to run.

## nginx.conf

nginx server configuration file

## daemon.json

more information needed

## portals.json

Where you define all Portals for your application.
[More information here](https://github.com/jumpstarter-io/help/wiki/App-Portals).

## wp-env.json

WordPress settings that you want the Jumpstarter plugin to automatically sync with the install should be defined in `/app/code/wp-env.json`. The env file has the following format. If a field is omitted it will be ignored.


```json
{
	"theme": "",
	"plugins": [],
	"user_plugins": [],
	"disabled_capabilities": [],
	"options": {}
}
```

Field explanation:

* `theme` - A string containing the name of the folder containing the theme in wp-content/themes/
* `plugins` - A list of plugin files (["hello.php", "myplugin/plugin.php", ...]).
* `user_plugins` - A list of plugins that the user can enable or disable at will.
* `disabled_capabilities` - A list of WordPress capabilities. (["edit_posts", "edit_pages"]).
* `options` - An object of Key -> Val.