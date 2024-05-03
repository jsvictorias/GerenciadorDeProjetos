import React, { useState } from 'react'
const TPlist = () => {

    //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(true)
  
    return (
      <div className='toglle'>
        <div 
              onClick={() => setToggle(!toggle)} 
              class="btn btn-primary mb-5">
                 {'>'} Exemplo 1 
        </div>
        {toggle && (
          <ul class="list-group">
            <li class="list-group-item">Exemplo de task</li>
            <li class="list-group-item">Exemplo de task</li>
            
          </ul>
        )}
      </div>
    )
  }
  export default TPlist