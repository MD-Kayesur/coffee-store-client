import { data } from "react-router-dom";
import Swal from "sweetalert2";
 
function AddCoffee() {
  const addCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const categoty = form.categoty.value;
    const photo = form.photo.value;
    const chef = form.chef.value;
    const teste = form.teste.value;
    const details = form.details.value;
    const newCoffees = {
      name,
      supplier,
      categoty,
      chef,
      teste,
      photo,
      details,
    };
    // console.log(newCoffees);
//  https://jsonplaceholder.typicode.com/users

fetch('http://localhost:3000/coffee',{
method:'POST',
headers:{
    "Content-Type": "application/json"
},
body:JSON.stringify(newCoffees)
})
.then(res=>res.json())
.then(data=>  {
   if (data.insertedId) {
    Swal.fire({
        title: 'Success!',
        text: 'User Added Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
   }
}
)


    
  };

  return (
    <div className="w-200 mx-auto">
      <h2 className="text-3xl  font-bold">Add A Coffee</h2>


      <h2>url: https://i.ibb.co.com/sGC2BQN/download.jpg</h2>
      <h2>url : https://i.ibb.co.com/fGBb2Sj7/babor-ajom.png</h2>
      <h2>url : https://i.ibb.co.com/gLmmXyPm/jasprit-bumrah.jpg</h2>
      <h2>url : https://i.ibb.co.com/sJPtjqTT/pat-cummins.jpg</h2>

      <form onSubmit={addCoffee} className="w-full my-3" action="">
        <div className="flex">
          <div className="">
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
              <label className="fieldset-label font-bold text-black">
                name
              </label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="name"
              />

              <label className=" font-bold text-black fieldset-label">
                Supplier
              </label>
              <input
                type="text"
                className="input"
                name="supplier"
                placeholder=" Supplier"
              />

              <label className="fieldset-label font-bold text-black">
                category
              </label>
              <input
                type="text"
                className="input"
                name="categoty"
                placeholder="category"
              />

              <label className="fieldset-label font-bold text-black">
                photo
              </label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder=" photo"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
              <label className="fieldset-label font-bold text-black">
                chef
              </label>
              <input
                type="text"
                className="input"
                name="chef"
                placeholder="chef"
              />

              <label className="fieldset-label font-bold text-black">
                {" "}
                teste
              </label>
              <input
                type="text"
                className="input"
                name="teste"
                placeholder="teste"
              />

              <label className="fieldset-label font-bold text-black">
                details
              </label>
              <input
                type="text"
                className="input"
                name="details"
                placeholder="details"
              />
            </fieldset>
          </div>
        </div>

        <button className="w-100 btn mx-auto"> sub</button>
      </form>
    </div>
  );
}

export default AddCoffee;
