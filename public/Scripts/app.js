// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteBut = document.querySelectorAll('.btn-danger');
        
        for(button of deleteBut)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Do you want to delete it?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-contact');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();