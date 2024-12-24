import { useEffect, useState } from 'react'
import axios from 'axios'
function Card() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => { 
    fetchData()
  },[]);

  async function fetchData() {
    try {
      const response = await axios.get('/api')
      setData(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <h1>{data.message}</h1>
    </div>
  )
}

export default Card
