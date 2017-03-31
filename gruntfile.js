module.exports = function (grunt) {
    var browserRule = 'last 2 versions';
    var config = {
        pkg: grunt.file.readJSON('package.json'),

        /**
         * The banner is the comment that is placed at the top of our compiled
         * source files. It is first processed as a Grunt template, where the `<%=`
         * pairs are evaluated based on this very configuration object.
         */
        meta: {
            banner: '/**\n' +
            ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n'
            //' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [browserRule],
                        add: true,
                        remove: true
                    })
                ]
            },
            dist: {
                src: 'Contents/<%= pkg.name %>.css'
            }
        },

        less: {
            /* we are not currently splitting out the builders less files as it may be unreliable */
            build: {
                files: { 'Contents/<%= pkg.name %>.css': 'Contents/less/main.less' },
                options: {}
            }

        },

        jshint: {
            options: {
                
            },
            components: [
                'app/Components/*.module.js', 'app/Components/*.js', 'app/Components/**/*.module.js', 'app/Components/**/*.js'
            ],
            apps: [
                'app/**/*.module.js', 'app/*.module.js', 'app/**/*.js', 'app/*.js',  '!app/Components/**/*.js'
            ]
        },


        /**
       * `grunt concat` concatenates multiple source files into a single file.
       */
        concat: {
            options: {
                sourceMap: true
            },            
            apps: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['app/**/*.module.js', 'app/**/*.services.js', 'app/*.module.js', 'app/**/*.js', 'app/*.js', '!app/Components/**/*.js'],
                dest: 'Scripts/<%= pkg.name %>_apps.js'
            },
            components: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: ['app/Components/*.module.js', 'app/Components/*.services.js', 'app/Components/*.js', 'app/Components/**/*.module.js', 'app/Components/**/*.js'],
                dest: 'Scripts/<%= pkg.name %>_components.js'
            }            
        },
        watch: {
            scripts: {
                files: ['app/**/*.js', 'app/*.js'],
                tasks: ['jshint','concat'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['app/**/*.less'],
                tasks: [
                    'less'
                ],
                options: {
                    spawn: false,
                },
            }
        },
        /**
        * less handles our LESS compilation and uglification automatically. Only
        * our main app less file is included in compilation; all other files must be
        * imported from this file.
        */
        less: {
            development: {
                options: {
                    paths: ['assets/styles']
                },
                files: {
                    'assets/styles/<%= pkg.name %>.css': 'assets/styles/main.less'
                }
            }
            //},
            //production: {
            //    options: {
            //        paths: ['assets/styles']
            //    },
            //    files: {
            //        'assets/styles/<%= pkg.name %>.css': 'assets/styles/main.less'
            //    }
            //}
        },

        
        //grunt task configuration will go here     
    };




    grunt.initConfig(config);

    //load grunt task


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-ng-annotate');

     
    //register grunt default task
    grunt.registerTask('default', 'The default grunt task for project', function () {
        grunt.log.write('Start grunt task for MatchPoint').ok();
        grunt.config.set('DEV', true);
        grunt.task.run(['jshint', 'concat']);

    });

    grunt.registerTask('autoprefixer-debug', 'show information about our autoprefixer configuration', function () {
        var autoprefixer = require('autoprefixer');
        var info = autoprefixer({ browsers: [browserRule] }).info();
        grunt.log.write(info);

    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.registerTask('devconcat', ['concat']);
    grunt.registerTask('devvalid', ['jshint']);
    grunt.registerTask('devstyle', ['less']);
    grunt.registerTask('dev', ['jshint', 'concat', 'less']);
    grunt.registerTask('devwatch', ['watch']);
    
    
    //grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);

    function copyIndexFile(indexFileName) {
        var distDir = grunt.config.get('distdir');
        indexFileName = indexFileName || 'index.html';
        grunt.file.copy('index.html', distDir + '/' + indexFileName, { process: grunt.template.process });
    }


}