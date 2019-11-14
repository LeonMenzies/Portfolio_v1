function aboutBtn(){
    $(function(){
        $('#projectsPage').hide();
        $('#contactPage').hide();
        $('#aboutPage').slideToggle(500);
    })
}

function projectsBtn(){
    $(function(){
        $('#aboutPage').hide();
        $('#contactPage').hide();
        $('#projectsPage').slideToggle(500);
    })
}

function contactBtn(){
    $(function(){
        $('#aboutPage').hide();
        $('#projectsPage').hide();
        $('#contactPage').slideToggle(500);
    })
}