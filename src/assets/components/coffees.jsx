import { useLoaderData } from "react-router-dom"
import Coffee from "./coffee"
import { useState } from "react"


 
function Coffees() {

    const coffees = useLoaderData()
    const [coffeess,setcoffees] = useState( [...coffees])
// console.log({coffees} ,{coffeess});


    return (
        <div>
            <h2 className="font-bold text-4xl text-center my-5">all coffee  are here</h2>

   
          <div className="grid mx-10 gap-4 md:grid-cols-2  ">
          {
                coffeess.map(coffee => <Coffee key={coffee.id} coffee={coffee}
                    coffees={coffeess} setcoffees={setcoffees}

                ></Coffee>)
            }
          </div>
        </div>
    )
}

export default Coffees
