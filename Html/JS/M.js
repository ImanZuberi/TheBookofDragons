var text = "There is not a lot that is known about this class, hence the name “Mystery”. They are known to have mysterious personalities. Dragons in this class are often feared more than the others due to the lack of knowledge there is on them. Dragons in this class include the Changewing, Bone Napper, and Death Song."
var notext = ""



$(".menu-area").click(function() {

    $(".menu-area").toggleClass("active") 
    if ($(".menu-area").hasClass("active")){
            $("<div></div>")
            .html(text)
            .addClass("appear")
            
            .appendTo("#everything")
            
    }
    else{
        $(".appear").remove();
    }
})