import React, { useState } from 'react'

export default function U_state_radiobtn() {
    const [liked, setliked] = useState(true);
    function handlechanged (e) {
        setliked(e.target.checked)
    }
  return (
    <div>
        <h3>using U state with radio btn and handle change event and using terinary operator.</h3>
        <label>
            <input type="checkbox" checked={liked} onChange={handlechanged} />
            I like this!
        </label>
        <p>you {liked ? "liked this" : "did not like this"} product</p>

      
    </div>
  )
}
