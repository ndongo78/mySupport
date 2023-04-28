import React from 'react'
import { CodeBlock } from '../CodeBlock'

const Strings = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Strings JavaScript</h2>
        <p>Les chaînes JavaScript servent à stocker et à manipuler du texte.</p>
        <p>Une chaîne JavaScript est composée de zéro ou plusieurs caractères écrits entre guillemets.</p>
        <p>Vous pouvez utiliser des guillemets simples ou doubles</p>
<CodeBlock>
{`
let text = "John Doe";
let carName = 'Volvo XC60';
`}
</CodeBlock>
  <h2 className="text-2xl font-bold m-5">Strings  et méthodes</h2>
  <span className="text-xl text-red-600 font-bold m-5">length</span> : <span>cette méthode renvoie la longueur du chaine </span>
   <CodeBlock>
   {`
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let longueurChaine = text.length;
// longueurChaine contient la longueur de text variable
   `}
   </CodeBlock>
   <h3 className="text-2xl  font-bold m-5">Extraction de parties de cordes </h3>
   <p>Il existe 3 méthodes pour extraire une partie d'une chaîne</p>
   <ul className="text-red-600 font-bold m-5 text-2xl">
  <li className="text-2xl m-2">slice(start, end) </li>
   <li className="text-2xl m-2">substring(start, end)</li>
   <li className="text-2xl m-2">substr(start, length)</li>
   </ul>
   <p>
<span className="text-2xl text-red-600 p-2">slice()</span> extrait une partie d'une chaîne et renvoie la partie extraite dans une nouvelle chaîne.
 <br/>
La méthode prend 2 paramètres : position de départ et position de fin (fin non incluse).
   </p>
   <CodeBlock>
   {`
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part) // Banana
   `}
   </CodeBlock>
   <p>
<span className="text-2xl text-red-600 p-2">substring()</span> est similaire à slice().
<br/>
La différence est que les valeurs de début et de fin inférieures à 0 sont traitées comme 0 dans substring().
   </p>
   <CodeBlock>
   {`
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part) // Banana
   `}
   </CodeBlock>
   <p>
<span className="text-2xl text-red-600 p-2"> replace() </span> méthode remplace une valeur spécifiée par une autre valeur dans une chaîne
   </p>
   <CodeBlock>
    {`
let text = "Please visit paris!";
let newText = text.replace("paris", "lyon");
    `}
   </CodeBlock>
   <p>
En 2021, JavaScript a introduit la méthode string <span className="text-2xl text-red-600 p-2"> replaceAll() </span> 
</p>
   <CodeBlock>
    {`
let text = "Please visit paris!.paris est magnifique";
let newText = text.replaceAll("paris", "lyon");
    `}
   </CodeBlock>
   <p>Pour convertir une chaîne en majuscule avec <span className="text-2xl text-red-600 p-2">toUpperCase()</span>
   </p>
      <p>Pour convertir une chaîne  en minuscules avec <span className="text-2xl text-red-600 p-2">toLowerCase()</span>
   </p>
   <CodeBlock>
   {`
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
   `}
   </CodeBlock>
   <p>
   <span className="text-2xl text-red-600 p-2">concat()</span>
    joint deux chaînes ou plus
   </p>
   <CodeBlock>
   {`
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
   `}
   </CodeBlock>
   <p>
     <span className="text-2xl text-red-600 p-2">trim()</span>
    méthode supprime les espaces des deux côtés d'une chaîne
   </p>
   <CodeBlock>
   {`
let text1 = "      Hello World!      ";
let text2 = text1.trim();
   `}
   </CodeBlock>
   <p>
  indexOf() méthode renvoie l' index (position) de la première occurrence d'une chaîne dans une chaîne
  <br/>
lastIndexOf() méthode renvoie l' index de la dernière occurrence d'un texte spécifié dans une chaîne
<br/>
indexOf(), et lastIndexOf() renvoient -1 si le texte n'est pas trouvé
   </p>
  <CodeBlock>
  {`
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
  `}
  </CodeBlock>
    </div>
    </div>
  )
}

export default Strings