$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1428923967',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: '1428923967.1677ed0.ae718fd853f44f80a606ff9815938cab',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/><i class="fa fa-search" aria-hidden="true"></i></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});