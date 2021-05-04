// strike off specific todos by checking
$("ul").on("click", "li", function(){
    $('audio#complete')[0].play();
    $(this).toggleClass("completed");
});

// Click on trash can to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(600,function(){
        $('audio#remove')[0].play();
        $(this).remove();
    });
    event.stopPropagation();
})

// input functionality
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>")
    }
});

// toggling input
$(".fa-pencil-square-o").click(function(){
    $("input[type='text'").fadeToggle();
});
