({
    appDir: "../src/",
    baseUrl: "static/js",
    dir: "../build",
    mainConfigFile: "../src/static/js/main.js",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",
    preserveLicenseComments: false,
    //removeCombined: true,

    modules: [
        //Optimize the application files. jQuery is not
        //included since it is already in require-jquery.js
        {
            name: "main"
        },
        {
            name: "modules/app",
            exclude: ["main"]
        },
        {
            name: "modules/BooksList/Module",
            exclude: ["main", "modules/app"]
        },
        {
            name: "modules/NavBar/Module",
            exclude: ["main", "modules/app"]
        },
        {
            name: "modules/Orders/Module",
            exclude: ["main", "modules/app"]
        },
        {
            name: "modules/UserProfile/Module",
            exclude: ["main", "modules/app"]
        }
    ]
})
