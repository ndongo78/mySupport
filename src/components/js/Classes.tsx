import React from 'react'
import { CodeBlock } from '../CodeBlock'

const Classes = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="m-5">
        <h2 className="text-2xl font-bold m-5">class JavaScript</h2>
        <p>Les classes en JavaScript sont une façon de créer des objets réutilisables avec des propriétés et des méthodes. Les classes sont introduites dans ECMAScript 6 (ES6) et offrent une syntaxe plus simple et plus claire pour la création d'objets</p>
     <strong className='m-5'>Synthaxe</strong>
<CodeBlock>
{`
class ClassName {
constructor() {...}
}
`}
</CodeBlock>
   <strong className='m-5'>Exemple</strong>
<CodeBlock>
{`
class person {
constructor(name,age,country) {
this.name = name;
this.age = age;
this.country = country;
}
}
`}
</CodeBlock>
     <strong className='m-5'>Utilisation class</strong>
<CodeBlock>
{`
//creer des objects avec la class
const person1 = new Person("john", 25,"fr");
const person2 = new Person("tom", 30,"EN");
`}
</CodeBlock>
     <strong className='m-5'>NB</strong>
     <p>Utilisez le mot-clé class pour créer une classe</p>
     <p>Ajoutez toujours une constructor() méthode</p>
     <h3 className='text-blue-600 m-5 text-xl'>Ajouter des methodes dans les class</h3>
<CodeBlock>
{`
class person {
constructor(name,age,country) {
    this.name = name;
    this.age = age;
    this.country = country;
}
youfrom(){
    return "vous etes de " + this.country
}

}
`}
</CodeBlock>
     <h3 className='text-blue-600 m-5 text-xl'>Héritage de classe JavaScript</h3>
      <p>
      Pour créer un héritage de classe, utilisez le extends mot-clé.
    <br />
    Une classe créée avec un héritage de classe hérite de toutes les méthodes d'une autre classe 
</p>
<CodeBlock>
{`
class Car {
constructor(brand) {
this.carname = brand;
}
present() {
return 'I have a ' + this.carname;
}
}

class Model extends Car {
constructor(brand, mod) {
super(brand);
this.model = mod;
}
show() {
return this.present() + ', it is a ' + this.model;
}
}

let myCar = new Model("Ford", "Mustang");
`}
</CodeBlock>
      
    </div>
    </div>
  )
}

export default Classes