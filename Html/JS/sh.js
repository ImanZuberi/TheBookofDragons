var text = "These species of dragons live up to their name. They are known to have sharp parts on their body. They tend to have a prideful personality, always wanting some sort of attention. Their most dangerous qualities come from their poisonous spikes which they fire at enemies. These spikes regenerate right away. The most famous of this class is the Deadly Nadder, other dragons include the TimberJack and the Razorwhip"
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
