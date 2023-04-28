import React from 'react'
import { CodeBlock } from '../CodeBlock'

const Boucles = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="m-5">
        <h2 className="text-2xl font-bold m-5">Boucles JavaScript</h2>
        <p>Les boucles peuvent exécuter un bloc de code plusieurs fois.</p>
      <h3 className='text-2xl font-bold text-blue-500 m-3'>La boucle For</h3>
<CodeBlock>
{`
for (expression 1; expression 2; expression 3) {
// code block to be executed
}
`}
</CodeBlock>
      <p>
      L'expression 1 est exécutée (une fois) avant l'exécution du bloc de code.
<br />
L'expression 2 définit la condition d'exécution du bloc de code.
<br />
L'expression 3 est exécutée (à chaque fois) après l'exécution du bloc de code.
      </p>
<CodeBlock>
{`
for (let i = 0; i < 5; i++) {
console.log(i);
}
`}
</CodeBlock>
      <h3 className='text-2xl font-bold m-3 text-blue-500'>La boucle For in</h3>
    <p>L'instruction JavaScript for inparcourt les propriétés d'un objet </p>
<CodeBlock>
{`
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
`}
</CodeBlock>
     <p>
    <strong>Exemple expliqué</strong> 
      La boucle for in itère sur un objet personne
      <br />
      Chaque itération renvoie une clé (x)
      <br />
      La clé est utilisée pour accéder à la valeur de la clé
      <br />
      La valeur de la clé est personne[x]
     </p>
     <h3 className='text-2xl font-bold m-3 text-blue-500'>La boucle while</h3>
    <p>while boucle parcourt un bloc de code tant qu'une condition spécifiée est vraie </p>
<CodeBlock>
{`
while (i < 10) {
text += "The number is " + i;
i++;
}
`}
</CodeBlock>
     <h3 className='text-2xl font-bold m-3 text-blue-500'>La boucle do while</h3>
    <p>La boucle est une variante de la boucle while. Cette boucle exécutera le bloc de code une fois, avant de vérifier si la condition est vraie, puis elle répétera la boucle tant que la condition est vraie </p>
<CodeBlock>
{`
do {
text += "The number is " + i;
i++;
}
while (i < 10);
`}
</CodeBlock>
    </div>
    </div>
  )
}

export default Boucles