import React from "react";
import Img from "../../assets/img_operators.jpeg";
import C1 from "../../assets/c1.png";
import C2 from "../../assets/c2.png";
import C3 from "../../assets/c3.png";
import C4 from "../../assets/c4.png";
import { CodeBlock } from "../CodeBlock";

const Operators = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className=" ml-5">
        <h2 className="text-2xl font-bold m-5">Opérateurs JavaScript</h2>
        <p className="text-xl ">
          L' opérateur d'addition{" "}
          <span className="text-blue-600 font-bold p-2">+</span> ajoute des
          nombres
        </p>
        <p className="text-xl ">
          L' opérateur d'affectation{" "}
          <span className="text-blue-600 font-bold p-2">=</span> affecte une
          valeur à une variable.
        </p>
        <div className="mt-3">
          <img src={Img} alt="" />
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Affectation JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur d'affectation{" "}
            <span className="text-blue-600 font-bold p-2">=</span> affecte une
            valeur à une variable :
          </p>
          <CodeBlock>
            {`
let x=3;
console.log(x)// 3
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Ajout JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur plus{" "}
            <span className="text-blue-600 font-bold p-2">+</span> ajoute des
            nombres , des string , array :
          </p>
          <CodeBlock>
            {`
           let x=3;
           let y=5;
           let z= y + x;
           console.log(z)// 8
         `}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Multiplication JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de multiplication{" "}
            <span className="text-blue-600 font-bold p-2">*</span> multiplie les
            nombres :
          </p>
          <CodeBlock>
            {`
let x=3;
let y=5;
let z= y * x;
console.log(z) // 15
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Division JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de division{" "}
            <span className="text-blue-600 font-bold p-2">/</span> divise les
            nombres :
          </p>
          <CodeBlock>
            {`
let x=5;
let y=5;
let z= y / x;
console.log(z)// 1
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Sous-traction JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de sous-traction{" "}
            <span className="text-blue-600 font-bold p-2">-</span> sous-trait
            les nombres :
          </p>
          <CodeBlock>
            {`
let x=3;
let y=5;
let z= y - x;
console.log(z)// 2
`}
          </CodeBlock>
        </div>
        <div className="con">
          <h2 className="text-2xl font-bold m-5">Opérateurs Récap</h2>
          <img src={C3} alt="" className="m-4" />
          <img src={C4} alt="" className="m-4" />
          <img src={C1} alt="" className="m-4" />
          <img src={C2} alt="" className="m-4" />
        </div>
        <h2 className="text-2xl font-bold m-5">Types de données JavaScript</h2>
        <p className="text-xl m-3 font-bold text-blue-600">
          JavaScript a 8 types de données
        </p>
        <ol className="text-xl">
          <li>1 String</li>
          <li>2 Number</li>
          <li>3 Boolean</li>
          <li>4 Bigint</li>
          <li>5 Null</li>
          <li>6 Undefined</li>
          <li>7 Symbol</li>
          <li>8 Object</li>
        </ol>
        <h4 className="text-xl m-3 font-bold text-blue-600">
          Le type de données d'objet
        </h4>
        <p className="text-xl m-3">Peut contenir </p>
        <ol className="text-xl">
          <li>1 Object</li>
          <li>2 Array</li>
          <li>3 Date</li>
        </ol>
        <h4>Exemple</h4>
        <>
          <div className="p-2">
            <CodeBlock>
              {`
//Numbers
let x=12;
var y=1.23;
`}
            </CodeBlock>
          </div>
          {/* ob */}
          <div className="p-2">
            <CodeBlock>
              {`
//Strings
const firstName ="john";
let color="green";
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock>
              {`
// Booleans
let isValid =true;
let isRed=false;
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock>
              {`
// Object
const person ={
name: 'John',
age:23,
colorYeux: "marron"
}
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <p className=" opacity-90 text-green-500 ml-5"></p>
            <CodeBlock>
              {`
// Array
const fruits=["banana", "cerise", "orange", "mango"]
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock className={"first-letter"}>
              {
                //date
                `const date=new Date("2022-03-25")`
              }
            </CodeBlock>
          </div>
        </>
        {/* typeOf */}
        <h4 className="text-xl m-3 font-bold text-blue-600">
          Le typeOf de Javascript:
        </h4>
        <p className="text-xl ml-5">
          Vous pouvez utiliser l'opérateur JavaScript{" "}
          <span className="text-red-600 font-bold">typeof</span> pour trouver le
          type d'une variable JavaScript.
        </p>
        <div className="p-2">
          <CodeBlock>
            {`
const date=new Date("13-02-2023")
console.log(typeof date) // date
const user={name: "tom", email:"tom@gmail.com"}
console.log(typeof user) // object
`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default Operators;
