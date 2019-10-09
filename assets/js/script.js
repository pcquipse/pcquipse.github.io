
$(document).ready(function(){
    var isOpen = false;
    //Scroll functions
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            $('#floating-button').fadeIn(200);
        }
        else{
            $('#floating-button').fadeOut(200);
        }
    });

    // Adjust banner
    $('#banner').css('margin-top',$(".navbar").outerHeight())

    //Open and close sidenav
    $('#sidenav-toggle').on('click', function(event){
        if(isOpen){
            $('#mySidenav').css('width', "0");
            isOpen = false;
        }
        else{
            $('#mySidenav').css('width', "250px");
            isOpen = true;
        }
    });
    
    //Scroll to view function
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },1000);
        // - $('.navbar').height()
    });
});
