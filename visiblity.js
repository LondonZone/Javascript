//definining Function - click listiner
$(document).ready(function(){
    var previous=$('section#recent');
    var myClass;
    
     $("ul[title='main'] > li").click(function(){
        alert("hello world");
        // this targets the specific element that you clicked on
        //$(this).addClass("visible") 
        myClass = $(this).attr("class");
        console.log(myClass);
        $('section#'+myClass).removeClass('hidden').addClass('visible');
        previous = $(this);
        console.log(previous);

    });
       
    //show all publicaitions 
    //$('#view-all').click(function(){
     //   $("ul[title='main'] > li").removeClass("hidden");
       //  previous = $(this);
   // });
    previous.removeClass('visible');
     //ensure visibiltiy is changed after another tab is clicked
}); // end of function