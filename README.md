# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Elif Yildirim

  #### Je startniveau:
  Blauw/rood

  #### Je focus:
Responsive (en surface plane als er tijd voor is) 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
    https://smoothcomp.com/en
  #### Screenshot(s) van de eerste pagina (small screen): 
    Home pagina
<img src="readme-images/sc1.png" width="350px" alt="home pagina"> 
Hier is content met linkjes naar andere pagina's
<img src="readme-images/sc2.png" width="350px" alt="home pagina"> 


  #### Screenshot(s) van de tweede pagina (small screen):
    Detail pagina
<img src="readme-images/sc4.png" width="350px" alt="detail pagina"> Hier begint de detail pagina
<img src="readme-images/sc5.png" width="350px" alt="detail pagina"> Hier is wat tekst


</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  
  Mijn bevindingen die in de toegankelijkheidstest naar voren kwamen: 
  - Screanreader ging makkelijk aan. De toetsen die je moet gebruiken zijn makkelijk te vinden en begrijpen.
  - De stem van de screenreader is prima te volgen. 
  - De screenreader pakt alle headings en linkjes op de juiste volgorde. Als ik op 1 klik pakt die alle H1's en als ik 2 of 3 klik leest die de juiste bijhorende headings voor. 
  - Bij images zegt die unlabed graphic, dus de images hebben geen alt tekst waardoor ze niet toegankelijk zijn voor de screenreader. 
  - De screenreader geeft aan wanneer het een link is.
  
 Mijn bevindingen die in de WCAG checklist naar voren kwamen: 
  - De content van de website is makkelijk te begrijpen. Het is duidelijk dat de buttons buttons zijn. De screenreader laat goed weten wanneer iets een link is.
  - Bij het valideren van de code komen er veel errors uit. De site heeft een lang attribute en je kan de site overschakelen naar verschillende talen. De pagina's hebben geen unieke titel, tenminste er stond (toen ik het opzocht) aria-label: not specified. 
  - Bij tab en shift-tab is er een visuele element die zichbaar wordt.
  - De site kan geroteerd worden naar verschillende angles en de links hebben een goeie grootte en positie. 
  - De site heeft alleen maar div's. Geen lists. De headings staan elke keer bovenaan de div, dus heeft een logische volgorde. Het heeft op de home pagina twee H1's. 
  - De images hebben geen alt attribute. Het heeft geen text alternative voor complexere foto's. Er zijn twee images die tekst bevatten en die als button worden weergegeven, deze hebben wel een alt-text. 
  - De site heeft 1 video zonder audio. Het speelt automatisch. Je kan hem niet pauzeren of stoppen. 
  - De links hebben een a element. De links hebben een focus state. Sommige buttons hebben geen button element. De links hebben een icoon die verwijst dat je naar een andere pagina verstuurd gaat worden.
  - Ze gebruiken wel kleur, maar ze gebruiken ook veel vormen, plaatjes en tekst voor de informatie. Er is alleen een dark mode. 
  - Het heeft 1 animatie onderaan met de logo's van hun partners. Het is subtiel, maar ik kan niet vinden of het zich houdt aan de prefers-reduced-motion media query.
  - De color contrast is helemaal goed. 

  Vragen: 
  - "Provide a unique title for each page" -> is dit een H1?  -> antwoord: ja. Mijn website heeft dit niet!

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
https://miro.com/welcomeonboard/V1BSajh5eFZHUEVMTU5XdEZvb1ZranQwanlsZUEyQWlwdnh5ZE4wUWZzd2ZyN2s4ampNd0xRS1BaMkFuWkFRM2ZDQ3RzT042a1pVc3ZNSXJMZlFUa3lGSStGYlBsazVqVjFwR2R2aXVJOC9OeUU2TlhyUXFZM2c4S25mSUlpVXBzVXVvMm53MW9OWFg5bkJoVXZxdFhRPT0hdjE=?share_link_id=997982138408  Link naar mijn schets! <br>
Feedback op mijn breakdownschets:
- img wordt een a
- button een a
- in de header allleen de dingen die op elke pagina zijn; zoals de nav, maar de img met h1 niet
- voor hamburgermenu: nav/ul-/li/a en dan is het een button om alles open te doen
- header/logo/a/button en dan een nav
- van de homepage de logo de h1 maken of h1 toevoegen en die dan verbergen (want elke pagina moet een goeie h1 hebben)
- de h1 wordt een h2
- de buttons die ik had in de voormalige header moeten a's worden
- de kleine stuk in de h2 kan je strong gebruiken
- bij de eerste section met de ul: om het beter te maken kan je van de hele li een a maken
- van die ?: een nav met een ul en dan li
- tweede img: later met css komt de background img maar kan ook een img als ik met vol overtuiging het kan uitleggen
- bij de volgende ul: gewoon een li met een img. hoeft geen p
- bij de een na laatste kan ik een section in een section doen
- bij de footer moet de ul in een ul en daarna pas de li met a's
- maak ook ss van de andere states: bv hamburgermenu

Dynamische deel (bijv menu) en andere dynamische delen (bijv filter) kan je ook in dezelfde Miro board zien.


</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

Ik wist soms niet wat voor code ik moest gebruiken voor specifieke content delen op mijn website. De foto hieronder is een voorbeeld. Ik kon maar niet vinden wat ik hier zou kunnen gebruiken, dus had het aan de 
studentassistent gevraagd en die zei dat ik een section in een section kon doen. 
<img src="readme-images/voorbeeld1.png" width="350px" alt="voorbeeld van stand van zaken"> <br>
Daarna was ik al een beetje begonnen met mijn CSS, maar het lukte me niet om m'n achtergrond kleur goed te krijgen. Ik speelde daar veel mee en kon niet de oplossing vinden, dus vroeg ik dit ook aan de studentassisten. Ik had eerst mijn background color op een * gedaan, omdat ik dacht dat ik toch alles moest selecteren, zij vertelden me dat ik het juist alleen op de body moest doen, zodat het niet letterlijk alles pakt (want dit was het geval). Toen ik dit veranderd had, kregen de section de juiste achtergrond kleur, precies wat ik wou! <br>
<img src="readme-images/voorbeeld2.png" width="350px" alt="voorbeeld van stand van zaken html">



  ### Agenda voor meeting
Mijn groepje zijn de papegaaien!
Student 1 (Elif)
- Ik wil sowieso mijn HTML even laten checken
- Is mijn footer goed? 

De andere studenten vroegen vooral of de breakdownschets goed was en daar kregen ze veel feedback op.
Als tip gaven ze bijv. dat we de H1 niet moeten vergeten, de header niet moeten vergeten. En ze hadden het over detail summary, maar dat gebruikt mijn website niet..

  ### Verslag van meeting

- Een ul kan geen titel hebben. De titel uit de ul halen en buiten de ul zetten als een heading.
- Ik had bij m'n a's een alt text geschreven, maar dit hoeft helemaal niet zeiden de studentassistenten. Dus alle alt text bij de a's mogen weg.
- Bij de alt text van de images moet ik de tekst veranderen naar een betere beschrijving. Ik had eerst als text "image of judo", maar het woord image moet niet.
- Bij de footer had ik een ul in een ul, omdat ik dat als tip had gekregen van een andere assistente, maar deze keer zeiden ze dat ik beter een nav kan gebruiken en daarin drie sections met een heading daarbinnen, omdat elke stuk een titel heeft.
- En dan in de section een ul met daarin de li / a.
- Ook bij de footer kan ik de laatste lijst in een aparte (dus niet in de nav) ul doen met daarin (bij de laatste regel met de apps) een ul. Hierin komen de li met de img's.
- Over mijn fonts: ik had een bestand gevonden van de website waarin alle fonts stonden en ik kreeg als feedback te horen dat ik de gene die dubbel zijn eruit kan halen. Een nieuwe CSS bestand moet maken met daarin de fonts. fonts.css. @fontface en dan bij de headings aangeven font-family en font-weight.
- + de foto op m'n github veranderen naar eentje zonder een bullet point!
<img src="readme-images/voortgangsgesprek1.png" width="350px" alt="voorbeeld van verslag meeting">
<img src="readme-images/voortgangsgesprek2.png" width="350px" alt="voorbeeld van verslag meeting">




</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>