    
// Using Javascript   (YOU CAN DO THIS WITH JS ALSO AND WITH JQUERY ALSO)
    const rulesBtn = document.getElementById("rules-btn");
    const closeBtn = document.getElementById("close-btn");
    const rules = document.getElementById("rules");

    //Show the rules on click
    rulesBtn.addEventListener('click', ()=>{
        rules.classList.add('show');
    });

    //Hide the rules on click
    closeBtn.addEventListener('click', ()=>{
        rules.classList.remove('show');
    });



 // Using jQuery -  

    // To Show the rules on click
    // $('#rules-btn').click(()=>{
    //     $('#rules').addClass('show')
    // });
    // To remove the rules on click 
    // $('#close-btn').click(()=>{
    //     $('#rules').removeClass('show')
    // });


    