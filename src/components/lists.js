import React, { useState } from 'react'
const TPlist = () => {

  const [toggle, setToggle] = useState(true);
    return (
      
      <div className='toglle'>
      <div 
            onClick={() => setToggle(!toggle)} 
            className='list-group-item'>
               {'>'} Exemplo 1 
      </div>
      {toggle && (
        <ul >
          <li>Exemplo de task</li>
          <li>Exemplo de task</li>
          
        </ul>
      )}
    </div>

    )
  }
  export default TPlist