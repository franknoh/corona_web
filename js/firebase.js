$(function () {
    var ver = '8.2.1';
    $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-app.js', function () {
        $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-analytics.js', function () {
            $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-auth.js', function () {
                $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-database.js', function () {
                    $.getScript('https://www.gstatic.com/firebasejs/' + ver + '/firebase-firestore.js', function () {
                    });
                });
            });
        });
    });
});