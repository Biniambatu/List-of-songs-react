
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface props{
  id:number,
  title:string
}
const Api = () => {
  const [users ,setUsers] = useState<props[]>([]);
  useEffect(()=>{
    axios.get<props[]>('https://jsonplaceholder.typicode.com/albums')
    .then(res => setUsers(res.data))
  },[])
    return ( 
      <ul>
        { users.map(e=>(<li key={e.id}>{e.title}</li>)) } 
      </ul>
    
  )
}

export default Api