import React from 'react'
import { CodeBlock } from '../CodeBlock'

const Callbacks = () => {



    

  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="m-5">
        <h2 className="text-2xl font-bold m-5">Callbacks JavaScript</h2>
        <p>Un callback est une fonction passée en argument à une autre fonction
        Cette technique permet à une fonction d'appeler une autre fonction
    <br />
Une fonction de callback peut s'exécuter après la fin d'une autre fonction
        <br />
        Les fonctions JavaScript sont exécutées dans l'ordre où elles sont appelées. Pas dans l'ordre où ils sont définis
        </p>
<CodeBlock>
{`
function myFirst() {
myDisplayer("Hello");
}

function mySecond() {
myDisplayer("Goodbye");
}

myFirst();
mySecond();
`}
</CodeBlock>
    <h3 className='text-blue-600 m-5 text-xl'>JavaScript asynchrone</h3>
    <p>Les fonctions exécutées en parallèle avec d'autres fonctions sont appelées asynchrones</p>
    <CodeBlock>
{`
function myFirst() {
console.log("myFirst");
}

setTimeout(myFirst, 1000); //setTimeout s'excute chaque 1s
setInterval(myFirst,1000) //setinterval s'excute chaque 1s
`}
</CodeBlock>
    <h2 className="text-2xl font-bold m-5">Promise JavaScript</h2>
    <p>L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.</p>
     <strong className='m-5'>Une Promise est dans un de ces états</strong>
     <p>
     pending (en attente) : état initial, la promesse n'est ni tenue, ni rompue ;<br />
    fulfilled (tenue) : l'opération a réussi ;<br />    
    rejected (rompue) : l'opération a échoué.
    </p>   
<CodeBlock>
{`
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);
`}
</CodeBlock>
   <p>Exemple pour attendre une fichiers</p>
<CodeBlock>
{`
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "path/to/");
    req.onload = function() {
        if (req.status == 200) {
        myResolve(req.response);
        } else {
        myReject("File not Found");
        }
    };
    req.send();
    });
    
    myPromise.then(
    function(value) {
        console.log(value);
    },
    function(error) {
        console.log("first",error)
    }
    );
`}
</CodeBlock>
        </div>
        </div>
  )
}

export default Callbacks