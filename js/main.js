$(document).ready(function()
{
   
    $("#btn-close-model").on("click",function()
    {
        $('#myModal').modal('toggle');
    });
    

    $("#btn-close-model").on("click",function()
    {
        let Varification_Code = document.getElementById("varification_code").value;
        let obj = {Varification_Code};
        fetch('php/varification.php', 
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => location.assign("products_page.html"));
    })

    $('.content').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    
    
    

    
});

// if all forms feilds stisfy the condition then input form will be reset else not and show error
//



