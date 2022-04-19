$(document).ready(function()
{
   
    $("#btn-close-model").on("click",function()
    {
        $('#myModal').modal('toggle');
    });
    $("#signup_button").on("click",function()
    {
        
        $('#myModal').modal('show');
        let Uname = document.getElementById("signup_name").value;
        let Uemail = document.getElementById("signup_email").value;
        let Upassword = document.getElementById("signup_pwd").value;
        let U_con_assword = document.getElementById("signup_confirm_pwd").value;
        let Uloaction = document.getElementById("Location").value;

        let obj = {
            Uname,
            Uemail,
            Upassword,
            U_con_assword,
            Uloaction
        }
        fetch('php/signup.php', 
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));


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

    // $(".content").click(function()
    // {
    //     $("button.navbar-toggler").click();
    //     // $("button.navbar-toggler").fadeOut("slow");
    // });
    $('.content').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    
});

// if all forms feilds stisfy the condition then input form will be reset else not and show error
//



