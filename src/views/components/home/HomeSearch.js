import React from "react";

function HomeSearch(){
    return(
        <div className="modal fade" id="search-modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form>
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Search here..." />
                            <button className="search_btn"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div> 
            {/* /.modal-content */}
            </div> 
         {/* /.modal-dialog */}
        </div>
    )
}

export default HomeSearch;