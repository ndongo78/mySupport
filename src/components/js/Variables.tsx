import React from "react";
import { CodeBlock } from "../CodeBlock";

const Variables = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Variables JavaScript</h2>
        <p className="text-xl m-2">
          Les variables sont des conteneurs pour stocker des données (stocker
          des valeurs de données).
        </p>
        <p className="text-xl m-2">
          Les variables sont déclarées avec les mots clé:
          <span className="text-red-600 m-2 font-bold">var</span>,
          <span className="text-red-600 m-2 font-bold">let</span>,
          <span className="text-red-600 m-2 font-bold">const</span>
        </p>
<CodeBlock>
  {`
  //Comment créer une variable
  var n;
  let x;
  //Comment utilisé une variable
  n=1;
  x=3;
  let y= n + x ;
  console.log(y); //afficher la value x dans la console
`}
</CodeBlock>
      </div>
      <div className="">
        <h3 className="text-xl font-bold m-5 text-blue-600">NB</h3>
        <p className="text-xl m-2">
          Toutes les variables JavaScript doivent être identifiées par des noms
          uniques
        </p>
        <p className="text-xl m-2">
          Les noms de variables peuvent être des noms courts (comme x et y) ou
          des noms plus descriptifs (age, sum, totalVolume).
        </p>
        <h4 className="text-blue-700 text-xl ml-5 font-bold">
          Les règles générales de construction des noms de variables
          (identificateurs uniques) sont :
        </h4>
        <ul className="ml-7">
          <li className="text-[18px] mt-3">
            Les noms peuvent contenir des lettres, des chiffres, des traits de
            soulignement et des signes dollar.
          </li>
          <li className="text-[18px] m-1">
            Les noms doivent commencer par une lettre.
          </li>
          <li className="text-[18px] m-1">
            Les noms peuvent également commencer par $ et _ (mais nous ne les
            utiliserons pas dans ce tutoriel).
          </li>
          <li className="text-[18px] m-1">
            Les noms sont sensibles à la casse (y et Y sont des variables
            différentes).
          </li>
          <li className="text-[18px] m-1">
            Les mots réservés (comme les mots clés JavaScript) ne peuvent pas
            être utilisés comme noms.
          </li>
        </ul>
      </div>
      <div className=" flex justify-start flex-col">
        <h2 className="text-xl font-bold m-5 text-blue-600">
          Les mots clés: <span className="text-red-600 m-2 font-bold">let</span>
          ,<span className="text-red-600 m-2 font-bold">const</span>
        </h2>
        <div className="ml-6 text-xl">
          <p className="text-black font-normal">
            <span className="text-red-600 m-2 ">const</span> mot-clé a été
            introduit dans ES6 (2015) .
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ne peuvent pas être
            redéclarées .
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ne peuvent pas être
            réaffectées.
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ont une portée de
            bloc .
          </p>
        </div>
      </div>
      <CodeBlock>
        {`
            const person= "john";
            person="bill";
            //cela generera une erreur
          `}
      </CodeBlock>
    </div>
  );
};

export default Variables;
