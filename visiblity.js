//definining Function - click listiner
$(document).ready(function(){
    
    //Global Variable Declarations
    var previous=$('section#recent'); //Base case
    var myClass;
    var sectionId; //Array of Section Id's
    
     $("ul[title='main'] > li").click(function(){
        alert("hello world");

        // this targets the specific element that you clicked on
        //$(this).addClass("visible") 

        myClass = $(this).attr("class");
        console.log(myClass);
        $('section#'+myClass).removeClass('hidden').addClass('visible');
        //previous = $(this);
        console.log(previous);
        previous.removeClass('visible').addClass('hidden');
    });
    
    //show all publicaitions 
    /*$('#view-all').click(function(){
        $("ul[title='main'] > li").removeClass("hidden").addClass('visible');
         previous = $(this);
   });*/

    
    //TODO get previous working
    //ensure visibiltiy is changed after another tab is clicked
    sectionId = ['recent', '2014', '2013', '2012', '2011','2010'];

    for ( var i = 0; i < sectionId.length; i++ ){

        var currentClass = sectionId[i];

        if ($(currentClass).hasClass('visible'))
        {
            previous = sectionId[i];
            console.log(previous);
            break;  
        }
    }

    previous.removeClass('visible');
    console.log(previous);

}); // end of function


