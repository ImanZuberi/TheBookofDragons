var text = "These dragons are known for their speed. Their light bodies allow them to move like lightning. They never miss their shots, and their attacks are unstoppable. They are extremely intelligent, strong, and have a high endurance. These dragons are part of one of the more feared classes. The Skrill was recorded by Bork the Bold, however the most deadly of dragons, the Night Fury was unkown due to its danger and inability to apporach. It was only discovered and studied by Hiccup Haddok."
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
