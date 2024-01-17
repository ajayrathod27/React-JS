import { useState } from "react";

const Filtered = ({items}) =>{

    const [filteredItems, setFilterdItems] = useState(items);
    const handleChange = (e) =>{
        console.log(e.target.value)
        setFilterdItems(items.filter(it=>(it.title.indexOf(e.target.value)>-1)))
    }

    return(
        <div>
            <input onChange={handleChange} type="text" name="" id="" />
            {filteredItems.map(it=><div>{it.title}</div>)}
        </div>
    )
}

export default Filtered;