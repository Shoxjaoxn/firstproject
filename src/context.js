import React from 'react'

const Taom= createContext(;)

function TaomProvider({children}) {
    const [data, setData]=useState([
        {id:1,name:"nazarboy"},
        {id:2,name:"nazarboy"},
        {id:3,name:"nazarboy"},
        {id:4,name:"nazarboy"},
    ])
  return (
    <Taom.Provider value={[data,setData]}>{children}</Taom.Provider>
  )
}

export default TaomProvider