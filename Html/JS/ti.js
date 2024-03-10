var text = "The Tidal Class of dragons primarily live underwater, these are the dragons Vikings run into trouble with while at sea. Some species have the ability to survive on land, following a similar biology to amphibians. These dragons have limited species that can create flames. However, their abilities lie in their electricity generation. These dragons are much larger than the other classes, yet they have been known to be peaceful and prefer to be left alone. The Dragons of this class include the Scauldron, and the Thunderdrum."
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
