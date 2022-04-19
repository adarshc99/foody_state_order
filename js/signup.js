$(document).ready(function()
{
    $("#signup_button").on("click",function()
    {
        
       
        let Uname = document.getElementById("signup_name").value;
        let Uemail = document.getElementById("signup_email").value;
        let Upassword = document.getElementById("signup_pwd").value;
        let U_con_assword = document.getElementById("signup_confirm_pwd").value;
        let Uloction = document.getElementById("Loction").value;
        let atposition = Uemail.indexOf("@");  
        let dotposition = Uemail.lastIndexOf(".");  

        // validation 
        if (Uname==null || Uname== "")
        {  
             document.getElementById("signup_name_val").innerHTML = "Username can't be blank";
             document.getElementById("signup_name_val").style.display = "block";
             return;
        }
        if(Uemail == "")
        {
            document.getElementById("signup_email_val").innerHTML = "Please Enter Email Address";
            document.getElementById("signup_email_val").style.display = "block";
            return;
        }
        if(Upassword == "")
        {
            document.getElementById("signup_password_val").innerHTML = "Password can't be blank";
            document.getElementById("signup_password_val").style.display = "block";
            return;
        }
        if(U_con_assword == "")
        {
            document.getElementById("signup_Con_password_val").innerHTML = "Please Enter Confirmation Password";
            document.getElementById("signup_Con_password_val").style.display = "block";
            return;
        }
        if(Upassword != U_con_assword)
        {
            document.getElementById("signup_Con_password_val").innerHTML = "Password Not Mathched";
            document.getElementById("signup_Con_password_val").style.display = "block";
            return;
        }
       
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=Uemail.length)
        {  
            document.getElementById("signup_email_val").innerHTML = "Please Enter Valid Email Address";
            document.getElementById("signup_email_val").style.display = "block";
            return;  
        }
        if(Uloction == "")
        {
            document.getElementById("signup_location_val").innerHTML = "Please Enter Loaction";
            document.getElementById("signup_location_val").style.display = "block";
            return;  
        }
       
        let obj = {
            Uname,
            Uemail,
            Upassword,
            U_con_assword,
            Uloction,
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
        .then((json) => 
        {
            if(json["status"] == false)
            {
                document.getElementById("signup_email_val").innerHTML = json["value"];
                document.getElementById("signup_email_val").style.display = "block";
                return;
            }
            else
            {
                 Uname = document.getElementById("signup_name").value = "";
                 Uemail = document.getElementById("signup_email").value = "";
                 Upassword = document.getElementById("signup_pwd").value = "";
                 U_con_assword = document.getElementById("signup_confirm_pwd").value = "";
                 Uloction = document.getElementById("Loction").value = "";
                 atposition = "";  
                 dotposition = "";  
                 $('#myModal').modal('show'); // enter varification Code
            }
        });

       


    });

});