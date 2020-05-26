import React from "react";
import AdminUsers from "./AdminUsers";
import AdminMeal from "./AdminMeal";
import PageNotFound from "./PageNotFound";



function AdminOperationOptions(props) {  

  if(props.toOpen==="users"){
    return (
        <AdminUsers/>
    )
  }else if(props.toOpen==="meals"){
    return (
      <AdminMeal/>
      )
  }else{
    return(
      <PageNotFound/>
    )
  }

}

export default AdminOperationOptions;
