$(function () {
    var ver = '8.2.1';
    $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-app.js', function () {
        $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-analytics.js', function () {
            var firebaseConfig = {
                apiKey: "AIzaSyDwWmi0nyHVHd6eve9HiHzxGI_8ajM0d18",
                authDomain: "frankonoh-corona.firebaseapp.com",
                projectId: "frankonoh-corona",
                storageBucket: "frankonoh-corona.appspot.com",
                messagingSenderId: "1050805798387",
                appId: "1:1050805798387:web:76f3f5e62c45cd0dd17e86",
                measurementId: "G-4QXD0LSQ0L"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        });
    });
});