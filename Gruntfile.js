module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            src: ['./javascript/*.js', './blog/javascript/*.js', './resume/javascript/*.js', './contact/javascript/*.js', './projects/javascript/*.js']
        },
        watch: {
            scripts: {
                files: ['./javascript/*.js', './blog/javascript/*.js', './resume/javascript/*.js', './contact/javascript/*.js', './projects/javascript/*.js'],
                tasks: ['eslint'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'javascript',
                    src: '*.js',
                    dest: 'build',
                    ext: '.min.js'
                },
                {
                    expand: true,
                    cwd: 'blog',
                    src: 'javascript/*.js',
                    dest: 'build',
                    ext: '.min.js'
                },
                {
                    expand: true,
                    cwd: 'resume',
                    src: 'javascript/*.js',
                    dest: 'build',
                    ext: '.min.js'
                },
                {
                    expand: true,
                    cwd: 'projects',
                    src: 'javascript/*.js',
                    dest: 'build',
                    ext: '.min.js'
                },
                {
                    expand: true,
                    cwd: 'contact',
                    src: 'javascript/*.js',
                    dest: 'build',
                    ext: '.min.js'
                }
                ]
            }
        }
    })

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('gruntify-eslint')

    // Default task(s).
    grunt.registerTask('default', ['watch', 'eslint'])
}
