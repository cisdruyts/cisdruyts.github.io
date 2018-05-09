//SKETCHFAB - FIREFOX INIT
var iframe = document.getElementById('api-frame');
var urlid = '0adbbe16e03643f18510dbc3c5082894'; //Sketchfab id.

// By default, the latest version of the viewer API will be used.
var client = new Sketchfab(iframe);

// Alternatively, you can request a specific version.
// var client = new Sketchfab( '1.0.0', iframe );

client.init(urlid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function () {

            console.log('Viewer is ready');

        });
    },
    error: function onError() {
        console.log('Viewer error');
    }
});