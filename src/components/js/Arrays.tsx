import React from 'react'
import { CodeBlock } from '../CodeBlock'


const Arrays = () => {
  
  
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Arrays JavaScript</h2>
        <p>
    Un tableau est une collection ordonnée d'éléments qui peuvent être de n'importe quel type de données. En JavaScript, un tableau est un objet de type "Array".
        </p>
   <CodeBlock>
        {`
let fruits = ['pomme', 'banane', 'orange', 'fraise'];
  // on peut créer un tableau array avec le mot clé new
const fruits = new Array('pomme', 'banane', 'orange', 'fraise')
        `}
        </CodeBlock>
    <p> Pour accéder aux éléments d'un tableau </p>
    <CodeBlock>
        {`
let fruits = ['pomme', 'banane', 'orange', 'fraise'];
   // exemple si on veut accéder orange élément 
   console.log(fruits[2])
        `}
        </CodeBlock> 
   <div>
    Notez que les tableaux en JavaScript commence par 0 en index
   </div>
   <p>Modifier un élément du tableau. exemple on remplacé orange par mangue</p>
    <CodeBlock>
        {`
let fruits = ['pomme', 'banane', 'orange', 'fraise'];
   // modifier orange par mango
   fruits[2]="mango";
  
   console.log(fruits) // affiche  ['pomme', 'banane', 'mango', 'fraise'];
        `}
        </CodeBlock> 
          <p><span className="text-2xl p-2 text-red-600">length</span> renvoie la longueur du tableau</p>
           <p><span className="text-2xl p-2 text-red-600">push()</span> permet d'ajouter d'éléments dans un tableau(array)
           </p>
           <CodeBlock>
           {`
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.push("Lemon");  // ajoute "Lemon" dans fruits
           `}
           </CodeBlock>
        <p>
toString() convertit un tableau en une chaîne de valeurs de tableau (séparées par des virgules).
        </p>
        <CodeBlock>
        {`
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.toString()) // affiche Banana,Orange,Apple,Mango
 `}
        </CodeBlock>
        <p>
join() méthode joint également tous les éléments du tableau dans une chaîne
<br/>
Il se comporte comme toString(), mais en plus vous pouvez spécifier le séparateur
        </p>
        <CodeBlock>
        {`
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.join("*")); // affiche Banana * Orange * Apple * Mango
 `}
        </CodeBlock>
      <p>
pop() méthode supprime le dernier élément d'un tableau
      </p>
              <CodeBlock>
        {`
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.pop(); //supprime Mango du tableau 
 `}
        </CodeBlock>
  <p>
shift() méthode supprime le premier élément du tableau et « décale » tous les autres éléments vers un index inférieur.
  </p>
  <CodeBlock>
        {`
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.shift(); //supprime Banana du tableau 
 `}
 </CodeBlock>
 <p>
unshift() méthode ajoute un nouvel élément à un tableau (au début) et "décale" les anciens éléments
 </p>
   <CodeBlock>
        {`
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.unshift("cerise"); //ajoute cerise au début du tableau index 0
 `}
 </CodeBlock>
   <h2 className="text-2xl font-bold m-5">Itération de tableau JavaScript</h2>
   <p>
   forEach() méthode appelle une fonction (une fonction de rappel) une fois pour chaque élément du tableau.
   </p>
   <CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
   `}
   </CodeBlock>
   <p>
map() méthode crée un nouveau tableau en exécutant une fonction sur chaque élément du tableau
   </p>
      <CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.map(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
   `}
   </CodeBlock>
   <p>
filter() méthode crée un nouveau tableau avec des éléments de tableau qui réussissent un test
   </p>
         <CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.filter(myFunction);

function myFunction(value, index, array) {
   return value > 20
  
}
   `}
   </CodeBlock>
   <p>
reduce() méthode exécute une fonction sur chaque élément du tableau pour produire (reducer) une valeur unique.
   </p>
<CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.reduce(myFunction);

function myFunction(total,value, index, array) {
   return total + value 
  
}
   `}
   </CodeBlock>
   <p>
every() méthode vérifie si toutes les valeurs du tableau réussissent un test
   </p>
  <CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let majeur =numbers.every(myFunction);

function myFunction(value, index, array) {
   return value > 18
  
}
   `}
   </CodeBlock>
   <p>
some() méthode vérifie si certaines valeurs de tableau réussissent un test.
   </p>
  <CodeBlock> 
   {`
const numbers = [45, 4, 9, 16, 25];
let majeur =numbers.some(myFunction);

function myFunction(value, index, array) {
   return value > 18
  
}
   `}
   </CodeBlock>
    </div>
    </div>
  )
}

export default Arrays