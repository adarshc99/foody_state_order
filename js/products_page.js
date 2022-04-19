$(document).ready(function()
{
    let home_page = ()=>{
        document.getElementById("home").innerHTML = `
                                                    <div class=" mt-3">
                                                        <div class="row row-cols-2 ">
                                                            <div class="col">
                                                                <div class="modal-content">
                                                
                                                                    <!-- Modal Header -->
                                                                    <div class="modal-header bg-dark  ">
                                                                        <h4 class="modal-title btn btn-danger">Paneer Masala</h4>
                                                                       
                                                                    </div>
                                                    
                                                                    <!-- Modal body -->
                                                                    <div class="modal-body">
                                                                        <img src="thumnail.jpg" alt="Los Angeles" class=" w-100 img-fluid" style="height: 300px;">
                                                                    </div>
                                                    
                                                                    <!-- Modal footer -->
                                                                    <div class="modal-footer bg-dark justify-content-between">
                                                                    
                                                                                <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> 
                                                                    
                                                                    </div>
                                                
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="modal-content">
                                                
                                                                    <!-- Modal Header -->
                                                                    <div class="modal-header bg-dark  ">
                                                                        <h4 class="modal-title btn btn-danger">Paneer Masala</h4>
                                                                       
                                                                    </div>
                                                    
                                                                    <!-- Modal body -->
                                                                    <div class="modal-body">
                                                                        <img src="thumnail.jpg" alt="Los Angeles" class=" w-100 img-fluid" style="height: 300px;">
                                                                    </div>
                                                    
                                                                    <!-- Modal footer -->
                                                                    <div class="modal-footer bg-dark">
                                                                    
                                                                                <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Close</button> 
                                                                    
                                                                    </div>
                                                
                                                                </div>
                                                            </div>
                                                            
                                                    </div>
                                            </div>`;
    }
    home_page();
   
    $("li a").on("click",function(e)
    {
        if(e.target.attributes[2].nodeValue == "#Login")
        {
            document.getElementById("Login").innerHTML = `
            <div class="modal-body">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="d-flex justify-content-between  mb-3 alert alert-success">
                        <div class="p-2 bg-info">Flex item 1</div>
                        <div class="p-2 bg-warning">Flex item 2</div>
                        <div class="p-2 bg-primary">Flex item 3</div>
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
        }
        if(e.target.attributes[2].nodeValue == "#home")
        {
            home_page();
        }
        if(e.target.attributes[2].nodeValue == "#SignUp")
        {
            document.getElementById("SignUp").innerHTML = `
                                                        <div class="container mt-3">
                                                        <h2>Home in</h2>
                                                    </div>`;
        }
    });
});