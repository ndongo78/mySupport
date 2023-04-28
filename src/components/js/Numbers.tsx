import React from 'react'
import { CodeBlock } from '../CodeBlock'


const Numbers = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Numbers JavaScript</h2>
        <p>JavaScript n'a qu'un seul type de Number.Les nombres peuvent etre entier ou décimal
        </p>
        <CodeBlock>
        {`
let x = 3.14;    // nombres  decimals
let y = 3;       // nombres entier 
        `}
        </CodeBlock>
     
    </div>
    </div>
  )
}

export default Numbers