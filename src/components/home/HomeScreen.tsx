import React from 'react'
import { CodeBlock } from '../CodeBlock'




const HomeScreen = () => {
  const scriptTagOpen="<script>"
  const scriptTagClose='<script> // Ecrire ici votre code javascript </script>'
  return (
    <div className='h-[100vh] overflow-scroll'>
       <h2 className='text-2xl font-bold m-5'>Présentation de Javascript</h2>
      <div className='m-6 text-xl'>
      JavaScript est un langage de programmation qui permet de créer du contenu mis à jour de façon dynamique, de contrôler le contenu multimédia, d'animer des images, et tout ce à quoi on peut penser. Bon, peut-être pas tout, mais vous pouvez faire bien des choses avec quelques lignes de JavaScript.<br/>
      <br/>
      En informatique, on parle de code interprété ou compilé. JavaScript est un langage interprété : le code est exécuté de haut en bas et le résultat du code exécuté est envoyé immédiatement. Vous n'avez pas à transformer le code en une autre forme avant que le navigateur ne l'exécute.
      </div>
      <h2 className='text-2xl font-bold m-5'>D'ou viens Javascript</h2>
      <div className='m-6 text-xl'>
      L'histoire de JavaScript remonte à 1995, lorsque Brendan Eich, alors employé de Netscape, a développé un nouveau langage de programmation pour le navigateur Netscape Navigator. À l'origine, le langage a été conçu pour être utilisé pour des tâches simples telles que la validation des formulaires, mais il a rapidement été étendu pour prendre en charge des applications web plus complexes.
       <br/>
       <br/>
       Le langage a d'abord été appelé Mocha, puis LiveScript, avant de finalement être renommé JavaScript. Cependant, le nom JavaScript est un peu trompeur, car le langage n'est pas étroitement lié à Java. Au lieu de cela, le nom a été choisi pour capitaliser sur la popularité de Java à l'époque.
       <br />
       <br />
       ECMA-262 est le nom officiel de la norme. ECMAScript est le nom officiel du langage.
       <br />
       <br />
       Aujourd'hui, JavaScript est l'un des langages de programmation les plus populaires au monde et est largement utilisé pour développer des applications web, des applications mobiles, des jeux vidéo et bien d'autres applications.
      </div>
      <h2 className='text-2xl font-bold m-5'>Pourquoi utiliser JavaScript ?</h2>
      <div className='m-6 text-xl'>
      JavaScript est un langage de programmation très populaire qui est largement utilisé pour développer des applications web et mobiles. Voici quelques raisons pour lesquelles vous pourriez vouloir utiliser JavaScript :
      <br/>
      <br/>
      1 Interactivité : JavaScript permet de rendre les pages web plus interactives et dynamiques en ajoutant des effets visuels, des animations, des pop-ups, etc. 
      <br />
      <br />
      2 Facilité d'utilisation : JavaScript est facile à apprendre et à utiliser, ce qui en fait un choix populaire pour les débutants en programmation.
      <br />
      <br />
      3 Large communauté de développeurs : JavaScript est utilisé par une grande communauté de développeurs, ce qui signifie qu'il y a une abondance de ressources en ligne pour vous aider à résoudre des problèmes et à améliorer votre code.
      <br />
      <br />
      4 Compatibilité multiplateforme : JavaScript est pris en charge par tous les principaux navigateurs web et peut être exécuté sur plusieurs plates-formes, y compris les ordinateurs de bureau, les smartphones et les tablettes.Compatibilité multiplateforme : JavaScript est pris en charge par tous les principaux navigateurs web et peut être exécuté sur plusieurs plates-formes, y compris les ordinateurs de bureau, les smartphones et les tablettes.
      <br />
      <br />
      5 Grande variété de bibliothèques et de frameworks : JavaScript dispose d'une grande variété de bibliothèques et de frameworks qui peuvent être utilisés pour accélérer le développement d'applications web et mobiles.
      </div>
      <h2 className='text-2xl font-bold m-5'>Comment ajouter du JavaScript à votre page</h2>
      <div className='m-6 text-xl'>
      Pour ajouter du JavaScript à un document HTML, il n'y a qu'une seule façon : avec l'élément <span className='text-red-600'> &lt;script  &gt; </span> . Voyons cela sur un exemple.
      <div className="edit">
<CodeBlock >
{
`<script> 
// ecrire ici votre code javascript
</script>`
}
</CodeBlock>
      </div>
       Vous pouvez aussi ajouter un fichier externe voici un exemple
<CodeBlock>
{
`<script src="/app.js"> </script>`
}
</CodeBlock>
      </div>
    </div>
  )
}

export default HomeScreen