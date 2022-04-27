$(document).ready(function()
{
    // To show User name Popup
    fetch('php/UserName_and_Email_set.php', 
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => 
        {
            if(json["status"] == true)
            {
                $("#myModal").html(`<div class="modal-dialog">
                                        <div class="alert alert-success">
                                        <strong>Hello ${json["value"]}</strong>.
                                        </div>  
                            </div>`);
                $("#add_item").html(json["cart"]);
            $("#myModal").modal("show");
            }
            else
            {
                location.replace("index.html");
                return;
            }
        });
    
    setTimeout(function()
    {
        $("#myModal").modal("hide");
    },2000);



    let home_page = ()=>{
        fetch('php/food_fetch.php', 
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => 
        {
           
            var Show_Food_data = ` <div class=" mt-3">
            <div class="row row-cols-sm-1 row-cols-xl-2">`;
            for(let i=0;i<(json.length)-2;i++)
            {
                Show_Food_data += `<div class="col">
                                        <div class="modal-content">

                                            <!-- Modal Header -->
                                            <div class="modal-header bg-dark  d-flex justify-content-around ">
                                            

                                                <div class="p-2 bg-danger text-white flex-fill text-center mx-2 rounded">
                                                        ${json[i]["Food_Name"]}
                                                </div>
                                                <div class="p-2 bg-danger text-white flex-fill text-center mx-2 rounded">
                                                <span class="material-icons-two-tone" style="font-size: 16px;">
                                                store
                                                </span> <b>${json[i]["Shop_Name"]}</b>
                                                </div>
                                            
                                            </div>
                            
                                            <!-- Modal body -->
                                            <div class="modal-body">
                                                <img src="images/${json[i]["Image"]}" alt="Los Angeles" class=" w-100 img-fluid rounded" style="height: 200px;">
                                            </div>
                            
                                            <!-- Modal footer -->
                                            <div class="modal-footer bg-dark d-flex">
                                            
                                                    <div class="p-2  flex-fill text-center rounded text-danger alert alert-warning ">
                                                        ${json[i]["Price"]}
                                                        <i class="material-icons-two-tone" style="font-size:14px;">
                                                        currency_rupee
                                                        </i>
                                                    </div>
                                                
                                                    <button type="button" class="btn-fav btn btn-danger bg-danger  flex-fill text-dark rounded" data-bs-dismiss="modal" data-id=${json[i]["ID"]} id="btn-for-fav">
                                                        <span class="material-icons-two-tone">
                                                        favorite_border
                                                        </span>
                                                    </button>
                                        
                                                    <button type="button" class="btn-order btn btn-danger p-2 bg-primary flex-fill" data-bs-dismiss="modal" data-order-id=${json[i]["ID"]}>
                                                        Order
                                                    </button>
                                            </div>

                                        </div>
                                </div>`
            }
            Show_Food_data += `</div>
            </div>`;
            document.getElementsByClassName("content").item(0).innerHTML = Show_Food_data;
        });
    }
    home_page();
    // fav food display

    var favorite_page = ()=>
    {
        fetch('php/add_fav_item_display.php', 
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => 
        {
            let add_to_fav_display = `<div class="modal-body">
                                            <div class="row row-cols-1">
                                            <div class="col">
                                            <div class="d-flex justify-content-between mb-3 bg-danger rounded-1">        
                                            <div class="p-2 ">FOOD</div>
                                            <div class="p-2 ">FOOD NAME</div>
                                            <div class="p-2 ">PRICE/ITEM</div>
                                            <div class="p-2">Delete</div></div>
                                            </div>
                                            <div class="col">`;
            for (let index = 0; index < json.length-1; index++) 
            {
                add_to_fav_display += `<div class="d-flex justify-content-between mb-3 alert alert-success">        
                                    <div class="p-2 "><img src=images/${json[index]["Image"]} width=50px height=50px></div>
                                    <div class="p-2 ">${json[index]["Food_Name"]}</div>
                                    <div class="p-2 ">${json[index]["Price"]}<i class="material-icons-two-tone" style="font-size:14px;">
                                    currency_rupee
                                    </i></div>
                                    <button type="button" class="btn-fav-del btn btn-danger p-2 bg-primary" data-id=${json[index]["add_to_cart_id"]}><span class="material-symbols-sharp">
                                    delete
                                    </span></button></div>`;

            }
            // document.getElementsByClassName("content").item(0).innerHTML = `
            

           
            add_to_fav_display += `</div></div></div>
            <div class="modal-footer">
                <div class="p-2 flex-fill text-center rounded text-danger alert alert-warning" data-bs-dismiss="modal">Total Price:   ${json[(json.length)-1]["Total"]}<i class="material-icons-two-tone" style="font-size:14px;">
                currency_rupee
                </i></div>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Pay</button>
            </div>`;
            document.getElementsByClassName("content").item(0).innerHTML = add_to_fav_display;
        });
    }

    // onclick event for delete fav food
    $(document).on("click",".btn-fav-del",function()
    {
        obj = {"food_ID":$(this).attr("data-id")};
        fetch('php/fav_food_delete.php', 
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            
                if(json["status"] == true)
                {
                    $("#myModal").html(`<div class="modal-dialog">
                    <div class="alert alert-success">
                    <strong>${json["value"]}</strong>.
                    </div>  
                    </div>`);
                    $("#add_item").html(json["cart"]);
                
                }
                else
                {
                    $("#myModal").html(`<div class="modal-dialog">
                    <div class="alert alert-success bg-danger text-white">
                    <strong>${json["value"]}</strong>.
                    </div>  
                    </div>`);
                    
                }

                $("#myModal").modal("show");
                $(this).closest(".d-flex").hide(3000);
            
        });
        setTimeout(function()
    {
        $("#myModal").modal("hide");
        favorite_page();
    },2000);
        
    });
    
   
    $("#favorite").on("click",function()
    {
        
            favorite_page();
    });
    $("#menu").on("click",function(e)
    {
        home_page();
    });


    // logout Code
    $("#Logout").on("click",function(e)
    {
        fetch('php/user_logout.php', 
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => 
        {
            if(json["status"] == true)
            {
                location.replace("index.html");
            }
            else
            {
                $("#myModal").html(`<div class="modal-dialog">
                                        
                                        <div class="alert alert-success">
                                        <strong>There Was Some Probelem in the logout ,Please try again!!!</strong>.
                                        </div>

                                        
                            </div>`);
            $("#myModal").modal("show");
            }
            setTimeout(function()
            {
                $("#myModal").modal("hide");
            },2000);
        });
    });
    

    // add to cart add function
    $(document).on("click","#btn-for-fav",function()
    {
        // console.log($(this).attr("data-id"));
        
        obj = {"food_ID":$(this).attr("data-id")};
        fetch('php/add_fav_food.php', 
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
            let Result_show_cart = json["value"];  
            if(json["status"] == true)
            {
                $("#add_item").html(json["cart"]);
                $("#myModal").html(`<div class="modal-dialog">                          
                <div class="alert alert-success">
                <strong>${Result_show_cart}</strong>.
                </div>     
                </div>`);
                $("#myModal").modal("show");
            }
            else
            {
                
                $("#myModal").html(`<div class="modal-dialog ">                          
                <div class="alert alert-success bg-danger text-white">
                <strong>${Result_show_cart}</strong>.
                </div>     
                </div>`);
                $("#myModal").modal("show");

            }
            
        });
        setTimeout(()=>$("#myModal").modal("hide"),2000);
    });
    
    $(".Search-bar").on("focus",function()
    {
        home_page();
       
    })

    $(".Search-bar").blur(function()
    {
       $(this).val("");
    });
    // $(".Search-bar").change(function()
    // {
    //     document.getElementsByClassName("content").item(0).innerHTML = `
    //                                                             <div class="container mt-3">
    //                                                             <h2>Home in</h2>
    //                                                         </div>`;
    // })




    // order btn function
    $(document).on("click",".btn-order",function()
    {
        console.log($(this).attr("data-order-id"));
    });
});