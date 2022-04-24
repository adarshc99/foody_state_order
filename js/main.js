$(document).ready(function()
{
        fetch('php/UserName_and_Email_set.php', 
        {
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => 
        {
            if(json["status"] == true)
            {
                location.assign("products_page.html");
            }
        });

    $('.content').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // varification ccode 
    $(document).on("click","#Varification-Enter",function()
    {
                            $('#myModal').html(`<div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                    <h4 class="modal-title">Varification Code</h4>
                                                    </div>

                                                <!-- Modal body -->
                                                
                                                <div class="modal-body">
                                                    <input type="text" name="varification_code_link_EMail" id="varification_code_link_EMail" placeholder="Enter Email Here" class="form-control my-1" autocomplete="off">
                            
                                                    <input type="text" name="Varification_code_value" id="Varification_code_value" placeholder="Enter Code Here" class="form-control my-1" autocomplete="off" >
                                                    <p class="invalid-feedback text-danger" id="Renter_varification_code_error">hello</p>
                                                </div>

                                                <!-- Modal footer -->
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" id="btn-close-link-model">Submit</button>
                                                </div>
                                </div></div>`);
                                $('#myModal').modal('show');
    });
    // $(document).on("click","#btn-close-link-model",function()
    // {
    //     $('#myModal').modal('toggle');
    // });
    $(document).on("click","#btn-close-model",function()
    {
        let Varification_Code = document.getElementById("varification_code").value;
        let obj = {Varification_Code};
        console.log(obj);
        fetch('php/varification.php', 
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
            if(json["value"] == 1)
            {
                $('#myModal').modal('toggle');
                location.assign("products_page.html");
                return;
            }
            else if(json["value"] == 2)
            {
                document.getElementById("varification_error").style.display = "block";
                document.getElementById("varification_error").innerText = "Wrong Varification Code";
                return;
            }
            else if(json["value"] == 4)
            {
                document.getElementById("varification_error").style.display = "block";
                document.getElementById("varification_error").innerText = "You Have Already Varified Your Email,Please Go To Login";
                return;
            }
            else
            {   
                document.getElementById("varification_error").innerHTML = "Please GO To Varification Code Button";
                document.getElementById("varification_error").style.display = "block";
                return;

            }
        });
    });
    $(document).on("click","#btn-close-link-model",function()
    {
        let Uemail = $("#varification_code_link_EMail").val();
        let Ucode = $("#Varification_code_value").val();
        let atposition = Uemail.indexOf("@");  
        let dotposition = Uemail.lastIndexOf(".");  

        if (Uemail==null || Uemail== "")
        {  
             document.getElementById("Renter_varification_code_error").innerHTML = "Email can't be blank";
             document.getElementById("Renter_varification_code_error").style.display = "block";
             return;
        }
        if(Ucode == "")
        {
            document.getElementById("Renter_varification_code_error").innerHTML = "Code Can't be blank";
            document.getElementById("Renter_varification_code_error").style.display = "block";
            return;
        }
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=Uemail.length)
        {  
            document.getElementById("Renter_varification_code_error").innerHTML = "Please Enter Valid Email Address";
            document.getElementById("Renter_varification_code_error").style.display = "block";
            return;  
        }
        let obj = {
            Uemail,
            Ucode
        };


        fetch('php/varification_through_external_btn.php', 
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
            if(json["status"] == true)
            {
                $('#myModal').modal('toggle');
                location.assign("products_page.html");
            }
            else
            {
                document.getElementById("Renter_varification_code_error").innerHTML = json["value"];
                document.getElementById("Renter_varification_code_error").style.display = "block";
                
                return; 
            }
        });




    });
   

    
    
    

    
});

// if all forms feilds stisfy the condition then input form will be reset else not and show error
//



