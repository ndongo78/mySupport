import React from 'react'
import { CodeBlock } from '../../CodeBlock'

const Modifier = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
    <div className="">
      <h2 className="text-2xl font-bold m-5">Manipulation du contenu du DOM (ajouter/supprimer/modifier des éléments, etc.)</h2>
      <p>Le moyen le plus simple de modifier le contenu d'un élément HTML consiste à utiliser la innerHTMLpropriété.</p>
<CodeBlock>
{`
<html>
<body>

<p id="p1">Hello World!</p>

<script>
//modifier le contenu d'element p
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
`}
</CodeBlock>
      <h3 className='text-2xl font-bold text-blue-600 m-5'>Modification de la valeur d'un attribut</h3>
      <p>Cet exemple modifie la valeur de l'attribut src d'un {`<img>`}élément</p>
<CodeBlock>
{`
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
// change l'image src to landscape.jpg
document.getElementById("myImage").src = "landscape.jpg";
</script>
</body>
</html>
`}
</CodeBlock>
      <h3 className='text-2xl font-bold text-blue-600 m-5'>Ajouter contenu dans le dom</h3>
<CodeBlock>
{`
<!DOCTYPE html>
<html>
<body>

<script>
// create a new element
let el = document.createElement('div');
el.textContent = 'Je suis creer depuis js';
// ajouter dans le body
document.body.appendChild(el);
</script>
</body>
</html>
`}
</CodeBlock>
      <h3 className='text-2xl font-bold text-blue-600 m-5'>Supprimer contenu dans le dom</h3>
<CodeBlock>
{`
<!DOCTYPE html>
<html>
<body>

<p id="myP"></p>

<script>
// recuperer l'element a supprimer
let el = document.getElementById('myP');
//supprimer l'element 
el.remove();
</script>
</body>
</html>
`}
</CodeBlock>
      <p>
      removeAttribute(), rattachée à l'interface Element, supprime l'attribut ayant le nom indiqué de l'élément
      <br />
      </p>
      <h3 className='text-2xl font-bold text-blue-600 m-5'>Modification css</h3>
      <p>Pour changer le style d'un élément HTML</p>
<CodeBlock>
{`
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>
`}
</CodeBlock>
      <p>Pour ajouter des class css utiliser classList</p>
<CodeBlock>
{`
<html>
<style>
.p2 {
font-size:20,
color: black;
}
</style>
<body>

<p id="p2">Hello World!</p>

<script>
//recupere l'element
const el = document.getElementById("p2");
// ajouter la classe p2 du css
el.classList.add("p2");
//suprimer la classe p2
el.classList.remove("p2");
</script>
</body>
</html>
`}
</CodeBlock>
      </div>
      </div>
  )
}

export default Modifier