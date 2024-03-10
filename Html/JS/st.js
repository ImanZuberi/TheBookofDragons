var text = "They are known to be the most dangerous fire-breathing dragons. Some of them, such as the Monstrous Nightmare are known for their ability to set themselves on fire. They have a high shot limit, however the more tired they are, the weaker the less likely they are to produce flames. The well-known dragons of this class are the Monstrous Nightmare, Terrible Terror, and the Singetail."
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
