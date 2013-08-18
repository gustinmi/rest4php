$.ajaxSetup({
    statusCode: {
        cache : false, //defeat browser cache
        timeout: 2000,
        404: function() {
            alertify.error('Strežnik ni dostopen!');
        },
        503: function(){
            alertify.error('Napaka pri komunikaciji s strežnikom!');
        },
        403: function() {
            alertify.alert('Vaša seja je pošla. Preusmerjeni boste na stran za login!', function () {
                window.location.href = 'server/index.html';
            });
        }
    }
});