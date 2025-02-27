import { useState } from "react";
import { data, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function Coffee({ coffee,setcoffees,coffees }) {
  const { _id, name, supplier, categoty, chef, teste, photo, details } = coffee;
console.log(coffees);


const deleteHandler =(_id)=>{

    console.log(_id);
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed ) {
         

        fetch( `http://localhost:3000/coffee/${_id}`,{
method:'DELETE'
 
        })
        .then(res=>res.json())
        .then(data=> { 
            console.log(data);
            
            if (data.deletedCount > 0) {
 
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  }); 

const remaining = coffees.filter(coffee=> coffee._id !== _id)
setcoffees(remaining);

                   
            }
        }
        )
    }
});
}

  return (
    <div className="card card-side  bg-base-100 shadow-sm">
      <figure >
        <img className="h-50 w-50"
          src={ photo}
          alt="Movie"
        />
      </figure>
      <div className=" mx-5 flex gap-50 items-center justify-between">
    <div>
    <h2 className="card-title"> {name}</h2>
    <p>{details} </p>
    </div>
        <div className="card-actions flex flex-col justify-end">
          <button className="btn btn-primary">Watch</button>
          <button   className="btn btn-primary"><NavLink to={`/updatecoffee/${_id}`}>update</NavLink></button>
          <button onClick={()=> deleteHandler(_id)} className="btn bg-red-500 btn-primary">delete</button>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
