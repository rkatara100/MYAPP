import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const User = () => {

      const navigation = useNavigate();
      const param = useParams();
      console.log(param.id);

      return (
            <div className='user'>
                  <button onClick={() => navigation("/about")}>Click</button>
            </div>
      )
}

export default User
