$(document).ready(function()
{
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
                                            <div class="modal-footer bg-dark d-flex ">
                                            
                                                    <div class="p-2  flex-fill text-center rounded text-danger alert alert-warning ">
                                                        ${json[i]["Price"]}
                                                        <i class="material-icons-two-tone" style="font-size:14px;">
                                                        currency_rupee
                                                        </i>
                                                    </div>
                                                
                                                    <button type="button" class="btn-fav btn btn-danger bg-danger  flex-fill text-dark rounded" data-bs-dismiss="modal" data-id=${json[i]["ID"]}>
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
   
    $("#favorite").on("click",function(e)
    {
        
            document.getElementsByClassName("content").item(0).innerHTML = `
            <div class="modal-body">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="d-flex justify-content-between  mb-3 alert alert-success">
                        <div class="p-2 bg-info">Flex item 1</div>
                        <div class="p-2 bg-warning">Flex item 2</div>
                        <div class="p-2 bg-primary">Delete</div>
                      </div>
                      <div class="d-flex justify-content-between  mb-3 alert alert-success">
                      <div class="p-2 bg-info">Flex item 1</div>
                      <div class="p-2 bg-warning">Flex item 2</div>
                      <div class="p-2 bg-primary">Flex item 3</div>
                    </div>

              </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>

        </div>`;
    });
    $("#menu").on("click",function(e)
    {
        home_page();
    });
    $("#Logout").on("click",function(e)
    {
        document.getElementsByClassName("content").item(0).innerHTML = `
                                                    <div class="container mt-3">
                                                    <h2>Home in</h2>
                                                </div>`;
    });
    

    // add to cart add function
    $(document).on("click",".btn-fav",function()
    {
        // console.log($(this).attr("data-id"));
        obj = {"food_ID":$(this).attr("data-id")}
        fetch('php/add_fav_food.php', 
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