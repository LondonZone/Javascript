//definining Function - click listiner
$(document).ready(function(){
    
    //Global Variable Declarations
    var previous=$('section#all-pubs'); //Base case
    var myClass;
    var sectionId = ['all-pubs', 'CVPR', 'ECCV','ICCV','siggraph','T-PAMI','IJCV']; //Array of Section Id's

     $("ul[title='main'] > li").click(function(){

        // this targets the specific element that you clicked on
        myClass = $(this).attr("class");

        //TODO get previous working (DONE)
        // Test edge casesif MyClass=previous
        //ensure visibiltiy is changed after another tab is clicked
        for ( var i = 0; i < sectionId.length; i++ ){

            var currentClass = sectionId[i];
            //console.log(currentClass); //test loop is working 
            if ($('#'+currentClass).hasClass('visible'))
            {
                previous=$('section#'+sectionId[i]);
                $(previous).removeClass('visible').addClass('hidden');
                break;  
            }
        }
        $('section#'+myClass).removeClass('hidden').addClass('visible'); //Show Current Section
    });
    
    //show all publicaitions 
  $(".view-all").click(function(){
            $('section#all-pubs').removeClass('hidden').addClass('visible');

   }); 
    console.log('previous = '+previous);

}); // end of function
