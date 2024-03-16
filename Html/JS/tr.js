var text = " This class of dragons was formerly known as the fear class. The name has been replaced for 'Tracker Class' after the Vikings no longer feared them. They are most known for their stealth; they often have multiple heads. The most famously known dragons from this class include the Hideous Zippleback, and the Snaptrapper."
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