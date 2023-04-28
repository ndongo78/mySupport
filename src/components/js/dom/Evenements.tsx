import React from 'react'
import { CodeBlock } from '../../CodeBlock'
import event1 from "../../../assets/event1.png"
import event2 from "../../../assets/event2.png"
import event3 from "../../../assets/event3.png"
import event4 from "../../../assets/event4.png"

const Evenements = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
    <div className="">
      <h2 className="text-2xl font-bold m-5">Evénements Javascript</h2>
      <p>On peut être exécuté un événement lorsqu'un utilisateur clique sur un élément HTML</p>
       <h4 className='text-2xl m-5'>Exemples d'événements HTML</h4>
       <p>
       Lorsqu'un utilisateur clique sur la souris <br />
        Lorsqu'une page Web est chargée <br />
        Lorsqu'une image a été chargée <br />
        Lorsque la souris passe sur un élément <br />
        Lorsqu'un champ de saisie est modifié <br />
        Lorsqu'un formulaire HTML est soumis <br />
        Lorsqu'un utilisateur appuie sur une touche
       </p>
       <CodeBlock>
        {`
         <!DOCTYPE html>
         <html>
         <body>
         
         <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
         
         </body>
         </html>
        `}
       </CodeBlock>
        <h2 className="text-2xl font-bold m-5 text-blue-500">Les événements onload et onunload</h2>
        <p>
        Les événements onloadet onunloadsont déclenchés lorsque l'utilisateur entre ou quitte la page.
        <br />
        L' onloadévénement peut être utilisé pour vérifier le type et la version du navigateur du visiteur, et charger la version appropriée de la page Web en fonction des informations
        </p>
<CodeBlock>
{`
<!DOCTYPE html>
<html>
<body onload="checkCookies()">

<h2>JavaScript HTML Events</h2>

<p id="demo"></p>

<script>
function checkCookies() {
var text = "";
if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
} else {
    text = "Cookies are not enabled.";
}
document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 
`}
</CodeBlock>
        <h2 className="text-2xl font-bold m-5 text-blue-500">L'événement onchange </h2>
        <p>onchangeévénement est souvent utilisé en combinaison avec la validation des champs de saisie</p>
      <CodeBlock>
        {`
         <input type="text" id="fname" onchange="upperCase()">
        `}
      </CodeBlock>
      <h2 className="text-2xl font-bold m-5 text-blue-500">La méthode addEventListener()
</h2>
 <p>
 addEventListener() méthode attache un gestionnaire d'événements à l'élément spécifié.
 <br />
 Vous pouvez facilement supprimer un écouteur d'événement en utilisant la removeEventListener() méthode.
 </p>
  <CodeBlock>
    {`
     <!DOCTYPE html>
     <html>
     <body>
     
     <h2>JavaScript addEventListener()</h2>
     
     <p>This example uses the addEventListener() method to attach a click event to a button.</p>
     
     <button id="myBtn">Try it</button>
     
     <script>
     document.getElementById("myBtn").addEventListener("click", function() {
       alert("Hello World!");
     });
     </script>
     </body>
     </html>
    `}
  </CodeBlock>
   <h2 className="text-2xl font-bold m-5 text-blue-500">La méthode removeEventListener()</h2>
      <h2 className="text-2xl font-bold m-5 text-blue-500">List desé vénements Javascript</h2>
        <div className='m-5'>
        <img src={event2} alt=""  />
       <img src={event1} alt=""  />
       <img src={event3} alt=""  />
       <img src={event4} alt=""  />
        </div>
      </div>
      </div>
  )
}

export default Evenements