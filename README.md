# grunt-task-newer

> Run grunt task only if source files are newer.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-task-newer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-task-newer');
```

## The "task_newer" task

### Usage Example
```js
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-task-newer');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: [
                    {
                        expand: true,
                        cwd: 'path/to/src'
                        dest: 'path/to/dest',
                        src: ['**/*.js', '!**/*.min.js'],
                        ext: '.min.js'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['task_newer:uglify']);
}
```

## Release History
_(Nothing yet)_
