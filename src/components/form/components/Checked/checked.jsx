import React from "react"

import "./checked.css"

const Checkbox = ({ checked, checkedFun, name, id, ...prop}) => {
    return <div>
       <input checked={checked} onChange={({target}) => checkedFun(target.checked) } {...prop} type="checkbox" class="custom-checkbox" id={id} />
        <label for={id}></label>

    </div> 
}

export default Checkbox