$(document).ready(function()
{
    // login form fields

    $("#login_btn").on("click",function()
    {
        let User_email = $("#login_email").val();
        let User_password = $("#login_pwd").val();
        let atposition = User_email.indexOf("@");  
        let dotposition = User_email.lastIndexOf(".");  
        if (User_email==null || User_email== "")
        {  
             document.getElementById("login_email_val").innerHTML = "Email can't be blank";
             document.getElementById("login_email_val").style.display = "block";
             return;
        }
        if(User_password == "")
        {
            document.getElementById("login_password_val").innerHTML = "Password can't be blank";
            document.getElementById("login_password_val").style.display = "block";
            return;
        }
       
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=User_email.length)
        {  
            document.getElementById("login_email_val").innerHTML = "Please Enter Valid Email Address";
            document.getElementById("login_email_val").style.display = "block";
            return;  
        }
        
        
        // fetach function here
        location.assign("products_page.html")
       

        
    });
    $("input").focus(function()
    {
        $(".invalid-feedback").hide();
    });
})