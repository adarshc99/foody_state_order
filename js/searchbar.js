$(document).ready(function()
{
    $(document).on("keyup",".Search-bar",function()
    {
        // console.log($(this).val());
        let search = $(this).val();
        let obj = {search};
    fetch('php/search_bar.php', 
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
            // console.log(json);
            var Show_Food_data =``;
            if(json.length>0)
            {
                Show_Food_data = ` <div class=" mt-3">
            <div class="row row-cols-sm-1 row-cols-xl-2">`;
            for(let i=0;i<(json.length);i++)
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

            }
            else
            {
                Show_Food_data = `<p class="h3 w-25 m-auto"><kbd>No record found</kbd></p>`;
            }
            
            document.getElementsByClassName("content").item(0).innerHTML = Show_Food_data;
        });
    });
   
});