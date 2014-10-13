$(function() {
    $('.container-menu li').bind('click', function() {
        var id = $(this).attr('id');
        $.post(
            '/hash',
            {
                hashValue: id
            },
            function(data) {
                $()
            }
        );
    });
});