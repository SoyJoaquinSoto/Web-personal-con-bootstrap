
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        if($(window).width() >= 640) {
            $('#sidebar').toggleClass('shownMD');
            $('#contenido').toggleClass('shownMD');
            $('#sidebar').removeClass('shownSM');
        }
        else {
            $('#sidebar').toggleClass('shownSM');
            $('#sidebar').removeClass('shownMD');
            $('#contenido').removeClass('shownMD');
        }
    });

});