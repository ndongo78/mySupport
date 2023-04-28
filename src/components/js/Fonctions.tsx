import React from "react"
import {CodeBlock} from "../CodeBlock"

const Functions=()=>{
  
  const fun  =`
function sum(a, b) {
  return a + b;
}`
  
  return (
    
     <div className='h-[100vh] overflow-scroll'>
    <div className=" ml-5">
    <h2 className='text-2xl font-bold m-5'>Functions JavaScript</h2>
    <p className="text-xl">Une fonction JavaScript est un bloc de code conçu pour effectuer une tâche particulière.</p>
    <p className="text-xl">Pour exécuter une fonction il faut l'appeler</p>

   <CodeBlock>
      {
 `
function sum(a, b) {
  return a + b;
}`
      }
     </CodeBlock>
     
     <p>Une fonction JavaScript est définie avec le functionmot-clé, suivi d'un nom , suivi de parenthèses () .
     </p>
      <p>
    Les noms de fonction peuvent contenir des lettres, des chiffres, des traits de soulignement et des signes dollar (mêmes règles que les variables).
      </p>
      <p>
Les parenthèses peuvent inclure des noms de paramètres séparés par des virgules :
( paramètre1, paramètre2, ... )
</p>
 <p className="text-xl">
 Le code à exécuter, par la fonction, est placé entre accolades : &#123; &#125;
 </p>
 <CodeBlock>
{`function name(parameter1, parameter2, parameter3) {
  // code to be executed
}`}
 </CodeBlock>
  <h3 className='text-xl font-bold m-5 text-blue-600'>Pourquoi Fonctions ?</h3>
  <p>Vous pouvez réutiliser le code : définissez le code une fois et réutilisez-le plusieurs fois.
<br/>
Vous pouvez utiliser le même code plusieurs fois avec des arguments différents, pour produire des résultats différents.</p>
  <h3 className='text-xl font-bold m-5 text-blue-600'>Utilisation des Fonctions comme des variables </h3>
  <p>Les fonctions peuvent être utilisées de la même manière que vous utilisez des variables, dans tous les types de formules, d'affectations et de calculs.</p>
     <CodeBlock>
      {
 `
function calculCourse(price, nombreItemDansPanier) {
  return price * nombreItemDansPanier;
}
let total= calculCourse(10,5)
console.log(x) // affiche 50 
`
  }
     </CodeBlock>

     <p>
          Les variables déclarées dans une fonction JavaScript deviennent
          LOCALES à la fonction.
          <br />
          Les variables locales ne sont accessibles qu'à partir de la fonction.
        </p>
<CodeBlock>
{`
// la variable carName n'est pas accessible ici

function myFunction() {
let carName = "Volvo";
//  carName est accessible ici
}

// la variable carName n'est pas accessible ici
`}
</CodeBlock>
<h3 className='text-xl font-bold m-5 text-blue-600'>Fonctions anonymes</h3>
  <p>Une fonction anonyme est une fonction qui n'a pas de nom et est définie directement dans le code. Elle peut être stockée dans une variable ou passée en tant que paramètre à une autre fonction.<br/> Par exemple:</p>
<CodeBlock>
{`
let maFonction = function(parametre) {
// Code de la fonction
};

// Appel de la fonction
maFonction(valeur);
`}
</CodeBlock>
      <h3 className='text-xl font-bold m-5 text-blue-600'>Fonctions auto-exécutables</h3>
      
      <p>Une fonction auto-exécutable, ou IIFE (Immediately Invoked Function Expression), est une fonction anonyme qui est exécutée immédiatement après sa définition. Elle est souvent utilisée pour créer une portée locale pour les variables et les fonctions et éviter les conflits de noms de variables avec d'autres parties de l'application.<br/> Par exemple:</p>
<CodeBlock>
{`
(function() {
// Code de la fonction
})();
`}
</CodeBlock>
       <p>
        Dans cet exemple, la fonction est définie entre parenthèses et suivie d'une paire de parenthèses supplémentaires, ce qui force son exécution immédiate.
        <br />
   Notez que dans les versions les plus récentes de JavaScript,l'utilisation de fonctions anonymes est moins courante grâce à l'introduction de la syntaxe de fonction fléchée <CodeBlock>{`(() => {})`}</CodeBlock> qui permet de créer des fonctions de manière concise et avec une portée locale des variables.</p>
   <h3 className='text-xl font-bold m-5 text-blue-600'>Fonctions recursives</h3>
   <p>Une fonction récursive est une fonction qui s'appelle elle-même, soit directement, soit indirectement par l'intermédiaire d'une autre fonction. La récursivité est un concept clé en programmation fonctionnelle et peut être utilisée pour résoudre des problèmes qui nécessitent une répétition d'opérations similaires.</p>
<CodeBlock>
{`
function factorial(n) {
if (n === 0) {
return 1;
} else {
return n * factorial(n - 1);
}
}        
`}
</CodeBlock>
<h3 className='text-xl font-bold m-5 text-blue-600'>NB</h3>
<p>Dans cet exemple, la fonction factorial s'appelle elle-même jusqu'à ce que n soit égal à 0. À ce stade, la fonction retourne 1, ce qui termine la récursion.
 <br />
Il est important de faire attention à ne pas créer de boucles infinies lors de l'utilisation de fonctions récursives, car cela peut entraîner des erreurs de débordement de pile (stack overflow errors).</p>
      </div>
    </div>
    )
}

export default Functions