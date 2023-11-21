import React, {useState, useEffect} from 'react'

function App() {
  
  const [data, setData] = useState([{}])
  
  useEffect(() => {
      fetch("/reports").then(
        res => res.json()
      ).then(
          data => {
              setData(data)
              console.log(data)
          }
      )



  })


  return (
    <div>

        {(typeof data.reports === 'undefined') ? (
          <p>Loading...</p>
        ): (
            data.reports.map((report, i) => (
              <p key={i}>{report}</p>
            ))
        )}


    </div>
  )
}


export default App
