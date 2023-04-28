import React from "react"
import Prism from "prismjs"

export const CodeBlock=( {children}:any)=>{
  
  

React.useEffect(()=>{
    if(typeof window !== "undefined"){
      Prism.highlightAll();
    }
  },[])
  
  return (
     <div className="flex flex-cols m-5 text-xl justify-start items-start">
     <pre >
     <code className={`language-javascript`} >
      {children}
      </code>
     </pre>
     </div>
    )
}