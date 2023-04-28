import React from 'react'
import c8 from "../../../assets/pic_htmltree.gif"
import c9 from "../../../assets/c9.png"
import c10 from "../../../assets/c10.png"
import c11 from "../../../assets/c11.png"
import  c12 from "../../../assets/c12.png"
import { CodeBlock } from '../../CodeBlock'

const Introduction = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">DOM JavaScript</h2>
        <h3 className='text-xl m-5'>Le DOM HTML (Document Object Model)</h3>
        <p>Lorsqu'une page Web est chargée, le navigateur crée un modèle d' objet de document de la page.
<br />
Le modèle HTML DOM est construit comme un arbre d' Objets 
<br />
L'arborescence d'objets HTML DOM
</p>
        <img src={c8} alt="" className='m-5'/>
        <p>
        Avec le modèle objet, JavaScript obtient toute la puissance dont il a besoin pour créer du HTML dynamique :
<br />
<br />
JavaScript peut modifier tous les éléments HTML de la page <br />
JavaScript peut modifier tous les attributs HTML de la page <br />
JavaScript peut modifier tous les styles CSS de la page <br />
JavaScript peut supprimer des éléments et des attributs HTML existants <br />
JavaScript peut ajouter de nouveaux éléments et attributs HTML <br />
JavaScript peut réagir à tous les événements HTML existants dans la page <br />
JavaScript peut créer de nouveaux événements HTML dans la page <br />
        </p>
  <img src={c9} alt="" className='m-5' />
    <div>
  <img src={c10} alt="" className='m-5' />
    </div>
    <h2 className="text-2xl font-bold m-5">Recherche éléments methodes HTML</h2>
        <div className="m-5">
        <img src={c11} alt="" />
        <img src={c12} alt="" />
        </div>
     <h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'élément HTML par identifiant</h3>
     <p>Cet exemple trouve l'élément avec id="myDiv"</p>
<CodeBlock>
{`
let myDiv = document.getElementById('myDiv');
`}
</CodeBlock>
       <h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'éléments HTML par nom de balise</h3>
        <p>Cet exemple trouve tous {`<p>`} les éléments</p>
<CodeBlock>
{`
let myPbalise = document.getElementsByTagName("p");
`}
</CodeBlock>
<h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'éléments HTML par nom de balise</h3>
 <p>Cet exemple renvoie une liste de tous les éléments avec class="root"</p>
 <CodeBlock>
{`
let x = document.getElementsByClassName("root");
`}
</CodeBlock>
        </div>
        </div>
  )
}

export default Introduction