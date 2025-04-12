import { createContext, useState, useContext } from "react"
const GetContext = createContext(null);
export function useGetProvider({children}){
    const [input, setInput] = useState("")
    const [data, setData] = useState<null | Array<{}>>(null)
    const api = (input) =>{
        setInput(input)
        return this
    }
    const output = async()=>{
        if(input === "post"){
            const response = await fetch(`https://jsonplaceholder.typicode.com/${input}`)
            const data = response.json()
            data.then(result=>{
                setData(result)
            })
        }
        return this
    }
    return(
        <GetContext.Provider value={{api,input,output}}>
            {children}
        </GetContext.Provider>
    )
    
}
export const useGet = ()=>{
    return useContext(GetContext)
}

// useGet().api("post").output().data