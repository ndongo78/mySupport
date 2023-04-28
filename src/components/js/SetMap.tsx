import React from 'react'
import { CodeBlock } from '../CodeBlock'
import c6 from "../../assets/c6.png"
import c7 from "../../assets/c7.png"

const SetMap = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="m-5">
        <h2 className="text-2xl font-bold m-5">Sets et Maps en JavaScript</h2>
        <p>En JavaScript, les Sets et les Maps sont des structures de données qui permettent de stocker des collections d'éléments</p>
     <h3 className='text-2xl font-bold text-blue-500 m-3'>Sets</h3>
     <p>Un Set est une collection d'éléments uniques et non ordonnés. On peut ajouter, supprimer des éléments ou vérifier s'ils sont présents dans le Set. <br />
      Dans un set la duplication d'elements n'est pas autoriser
     </p>
     <div>
        <img src={c6} alt=""  />
     </div>
<CodeBlock>
{`
const mySet = new Set();
mySet.add('hello');
mySet.add('world');
mySet.add('world'); // n'affectera pas le Set car 'world' est déjà présent
console.log(mySet.has('hello')); // true
console.log(mySet.has('world')); // true
console.log(mySet.size); // 2
console.log(mySet.value); //
mySet.delete('hello');
`}
</CodeBlock>
<h3 className='text-2xl font-bold text-blue-500 m-3'>Maps</h3>
 <p>Une Map est une collection d'éléments clé-valeur. On peut ajouter, supprimer des éléments ou récupérer la valeur d'une clé</p>
    <img src={c7} alt=""  />
<CodeBlock>
{`
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap.get('name')); // John
console.log(myMap.get('age')); // 30
myMap.delete('age');
console.log(myMap.has('age')); // false
console.log(myMap.size); // 1

`}
</CodeBlock>
    </div>
    </div>
  )
}

export default SetMap