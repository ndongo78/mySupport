import React from 'react'
import { CodeBlock } from '../CodeBlock'

const Syntaxe = () => {
  return (
    <div className='h-[100vh] overflow-scroll'>
      <div className="">
      <h2 className='text-2xl font-bold m-5'>Syntaxe JavaScript</h2>
      <p className='text-xl m-2'>La syntaxe JavaScript est l'ensemble des règles, comment les programmes JavaScript sont construits :</p>
       <div className="">
        <h3 className='text-xl font-bold m-5 text-blue-600'>Les commentaires:</h3>
        <p className='text-xl m-2'>Ils permettent d'ajouter des notes pour expliquer le code et ne sont pas interprétés par le navigateur. Il y a deux types de commentaires en JavaScript </p>
        <p className='ml-5'>. Les commentaires sur une ligne, qui sont précédés de deux barres obliques //.</p>
        <p className='ml-5 mt-2'>. Les commentaires multi-lignes, qui commencent par /* et se terminent par */.</p>
       </div>
       <div className="">
       <h3 className='text-xl font-bold m-5 text-blue-600'>Les variables:</h3>
       <p className='text-xl m-2'>
       Elles permettent de stocker des valeurs, telles que des nombres, des chaînes de caractères ou des booléens. Pour créer une variable en JavaScript, on utilise le mot-clé var,let,const, suivi du nom de la variable, suivi éventuellement d'une valeur 
       </p>
       </div>
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
       <div className="">
       <h3 className='text-xl font-bold m-5 text-blue-600'>Les opérateurs:</h3>
       <p className='text-xl m-2'>
       Ils permettent de réaliser des opérations sur des valeurs. Il existe différents types d'opérateurs en JavaScript, tels que les opérateurs arithmétiques (+, -, *, /), les opérateurs de comparaison (==, !=, &gt;, &lt;), les opérateurs logiques (&&, ||) et bien d'autres encore.
       </p>
       </div>
       <div className="">
       <h3 className='text-xl font-bold m-5 text-blue-600'>Les conditions :</h3>
       <p className='text-xl m-2'>
       Elles permettent d'exécuter une partie de code seulement si une certaine condition est remplie. Pour cela, on utilise le mot-clé if, suivi de la condition entre parenthèses et du code à exécuter entre accolades :
       </p>
<CodeBlock>
{`
if(myVariable > 10){
console.log("Ma variable est supérieure à 10");
}
`}
</CodeBlock>
      
       </div>
       <div className="">
       <h3 className='text-xl font-bold m-5 text-blue-600'>Les boucles :</h3>
       <p className='text-xl m-2'>
       Elles permettent de répéter une partie de code un certain nombre de fois, ou tant qu'une certaine condition est remplie. En JavaScript, on utilise souvent la boucle for, while, do while ,
      </p>
<CodeBlock>
{`
for(var i = 0; i < 10){
console.log("La variable i vaut " + i);
}
`}
</CodeBlock>
       </div>
       <div className="">
       <h3 className='text-xl font-bold m-5 text-blue-600'>Les fonctions :</h3>
       <p className='text-xl m-2'>
       Elles permettent de regrouper du code qui peut être réutilisé plusieurs fois dans le programme. Pour créer une fonction en JavaScript, on utilise le mot-clé function, suivi du nom de la fonction, des paramètres entre parenthèses et du code à exécuter entre accolades :
        </p>
<CodeBlock>
{`
function maFunction(parametre1,parametre2){
console.log("La fonction a été appelée avec les paramètres " 
+ parametre1 + " et " + parametre2);
}
`}
</CodeBlock>
       </div>
      </div>
    </div>
  )
}

export default Syntaxe