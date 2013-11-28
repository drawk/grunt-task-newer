/*
 * grunt-task-newer
 * https://github.com/drawk/grunt-task-newer
 *
 * Copyright (c) 2013 Gilles G.
 * Licensed under the MIT license.
 */

'use strict';

var outofdate = require('grunt-task-newer-lib').outofdate;

module.exports = function(grunt) {
    grunt.registerTask('newer', 'Run grunt task only if source files are newer.', function(name, target) {
        var prefix = this.name;

        if (!target) {
            var tasks = [];
            
            Object.keys(grunt.config(name)).forEach(function(target) {
                if (!/^_|^options$/.test(target)) {
                    tasks.push(prefix + ':' + name + ':' + target);
                }
            });

            return grunt.task.run(tasks);
        }

        var args       = Array.prototype.slice.call(arguments, 2).join(':'),
            config     = grunt.util._.clone(grunt.config.get([name, target])),
            newerFiles = grunt.task.normalizeMultiTaskFiles(config, target).filter(function(f) { 
                             return outofdate(f.dest, f.src); 
                         });

        if (!newerFiles.length) {
            return;
        }

        config.files = newerFiles;

        delete config.src;
        delete config.dest;          

        grunt.config.set([name, target], config);

        grunt.task.run(name + ':' + target + (args ? ':' + args : ''));
    });
};