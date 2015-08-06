
//definining Function - click listiner
 document.onclick = function() {
    var previous;
     $("div[title='main'] li").click(function(){

        // this targets the specific element that you clicked on
        $(this).addClass("visible") 
        previous = $(this);

    });
     
    
    //show all publicaitions 
    if($('#view-all').click(function())){
        $("div[title='main'] li").removeClass("hidden");
         previous = $(this);
    });


    previous.removeClass('visible');
     //ensure visibiltiy is changed after another tab is clicked
}




