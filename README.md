<h2>Krav til funksjonalitet</h2>
 
**SVG**  
Svg-bildene er lagret i mappen «svg_images» i public mappen. Hver kategori har fått en egen undermappe. Det er 3 kategorier(Dessert, Drikke og Mat) og 4 ulike typer av hver ketegori. For å hente/fetche bildene på nettsiden har vi opprettet en egen FetchImage komponent. Som default state har vi «chosenPic» satt som en tom streng. Ved hjelp av AJAX fetch() henter vi ut ønsket bilde fra public mappen. Til dette bruker vi «pictureCategory» som er kategorien som er trykket på, og imageName, som er navnet på bildet til den tilhørende kategorien og fanen. «FetchImage» komponenten er lagt til i «TabContent» som er komponenten som inneholder bilde, lyd og tekst. Vi har valgt å vise første bilde i dessert kategorien når siden blir åpnet. 
 
**JSON**  
Tekstene er lagret i en json-fil i public mappen. Denne json-filen har navnet «tekster.json». Her er det lagret 12 tekster som har en tilhørende «type» for kategori og «label» for hvilke fane de tilhører. De ulike katergoriene er (dikt, haiku og vits). For å hente teksten til fanen og kategorien som er trykket på, har vi opprettet komponenten «FetchText». «FetchText» har en tom «allText» liste ved start og henter ut, på samme måte som «FetchImage» bildet ved bruk av AJAX sin fetch(). Men i motsetning til «FetchImage» blir all teksten hentet ut. Sortering av hvilken tekst som skal hentes til siden skjer i render(). Her brukes både kategori «type» og fane «label» til å hente ut riktig tekst. I tillegg formaterer vi teksten ved å lage linjeskift ved tegnet «\n». «FetchText» blir lagt til i «TabContent» sammen med bilde(«FetchImage») og lyd(«AudioPlayer»).
 
**Mp3**  
Lyd-filene (av typen .mp3)er på samme måte som svg-filene lagret i mappen «sound» og hver kategori har sin egen undermappe. Det er tilsammen 12 lydfiler, 4stk fordelt i 3 kategorier. For å hente lyd er har vi opprettet komponenten «AudioPlayer». Denne komponenten bruker den innebygde <audio> taggen i html5. For å hente riktig lyd fil fra public mappen, brukes «soundCategory» som tilsvarer den trykkede kategorien og navnet på lyd som tilhører kategorien og fanen. «AudioPlayer» er også lagt inn i «TabContent». For å få den oppdaterte lyden  er det ikke nok å endre i src, derfor implementerte vi en metode for å loade audio-taggen. 
 
**Tab display**  
Hver kombinasjon av bilde, lyd og tekst er utstilt på en tab/fane. Det er totalt 4 tabs på nettsiden. På startsiden har vi en valgt første bilde, lyd og tekst fra de første kategoriene. Vi har valgt å lage komponenter for en «Tab.js»,og alle tabs’ene «Tabs.js». I tillegg har vi en «TabContent.js» som inneholder hver kombinasjon av bilde, lyd og tekst.
I «Tab.js» blir hver tab generert. Her blir «label» og den aktive fanen man trykket på lagret, samt blir funksjonen “handleClick()” kjørt (denne oppdaterer tabCategory i state i App.js). Tab-klassen returnerer en liste med «label» som er hver kombinasjon. Tabsene våre er inspirert av de man finner på  https://alligator.io/react/tabs-component/. Det som skiller seg ut fra vår kode og den fra nettsiden er at vi har integrert inn funkjonen handleClick og endret designet fullstendig. Oversikt over kode vi har fått inspirasjon fra står under punktet om lånt kode.  
 

**Meny**  
I komponenten «MediaSettings» er menyen med alle kategoriene for bilde ,lyd og tekst. Med taggen <input> lager vi en radio button. Fra «bildeSettings.json», «lydSettings.json», og «tekstSettings.json» mapes innholdet fra disse filene. Disse json-filene finner man i mappen «data». Hver av json-filene inneholder id, type, label og name. Ved å map’e gjør vi koden mer leselig da vi kun trenger 3 inputs istede for 12. «MediaSettings» returnerer navn på media type og de tilhørende radioknappene med kategorinavn. I tillegg returneres to knapper, en for å lagre sin favoritt kombinasjon og en for å vise favorittkombinasjon. «MediaSettings» er implementert i App.js. Tilsammen så består App.js av komponentene  <Header/>, </TabContent> og <MediaSettings/>.
 
<h2>Responsive Web Design</h2>  
 
**Flexbox/flytende layout**  
Siden er gjort responsive ved hjelp av både css grid og css flexbox. Ved bruk av flexbox får man et flytende layout som gjør det enkelt å plassere elementer hvor man vil.  Knappene for favoritt kategori, og vis favoritt er midtstilt ved bruk av flexbox. Det samme er knappen for lydavspilling. 
 
**Bildeskalering**  
Alle svg-bildene bruker ViewBox som gjør at bildene skaleres riktig.
 
**Media-queries**  
I tillegg har vi implementert media-queries for skjermer med bredde 400px (mobiltelefoner, med utgangspunkt i iPhone X) og for bredde 800px (nettbrett, med utgangspunkt i iPad). Om man snur mobilen horisontalt vil styling for skjermer med bredde større en 500px gjelde (altså, gå i iPad modus). På mobile skjermer er tekst og lyd satt under svg bildene. Dette er gjort ved hjelp av css grid. Det ble diskutert om vi skulle flytte «MediaSettings» i kolonne over tabdisplayet, og vi fant ut av at det kun var hensiktsmessig på små mobile enheter. På større enheter, som nettbrett eller pc’er har vi valgt å ha “MediaSettings” på siden, slik at det ikke tar oppmerksomheten bort fra innholdet.
 
**CSS grid**  
CSS grid er brukt på hovedelementene i App.js og til å sette opp layout på de mobile skjermene. Vi har brukt grid flere steder, for eksempel så blir “TabContent” komponenten plassert ved hjelp av grid, og komponentene inne i “TabContent” blir plassert vha. en annen grid. Dette var særlig nyttig da vi ville at «MediaSettings» kun skulle ta opp en liten del på høyreside av nettsiden på større skjermer. Det var også svært lett å inspisere nettsiden vha. google chrome sin inspiser funksjon som hjalp oss å visualiserer hvordan vi ville ha nettsiden.
 
**ViewPort**  
I index.html har vi en <meta> viewport elemtent som gir nettleseren instruksjoner på hvordan å håndtere nettsidens dimensjoner og skalering. I tillegg har vi brukt Viewport width (vw) til å definere blant annet tekststørrelse. 
 
 
<h2>Krav til teknologi</h2>  
 
**React**  
Koden er basert på react, JSX og ES6. De fleste komponentene våres er class, men vi har også brukt funksjonelle komponenter der det er mest hensiktsmessig. «header.js», «mediaSettings.js» og «tabContent.js» er funksjonelle komponenter. Om komponenten ikke har state´s eller trenger tilgang til lifecycle methods, bør man bruke funksjonelle komponenter.  De behøver mindre kode, og er lettere å lese og teste. Resten av komponentene som ikke er nevnt over er klasser, da disse har states og/eller bruker lifecycle methods ( f.eks componentDidUpdate() og componentDidMount()). 

**AJAX**  
For å hente tekst og svg har vi brukt AJAX fetch(), som henter teksten og svg’en som hører til tab’en og kategorien. Fetch API’et er et moderne alternativ til XMLHttpRequest og er enkelt å bruke. Bruken av fetch kan man se i “FetchImage.js” og “FetchText.js”.  Nettleseren cacher automatisk innhold som blir lastet inn, vi kan bekrefte at dette skjer ved hjelp av Network-taben under Inspiser i Chrome (som vist på skjermbildet lenket [her](https://i.imgur.com/eOm8vgF.png)).

**HTML web storage**  
 I App.js er det implementert lagring (“saveFavorite()”) og visning(“displayFavorite()”) av favoritter. Til dette er det brukt HTML localStorage.setItem() for å lagre og localStorage.getItem() til å hente. LocalStorage lagrer data uten utløpsdato. dataen vil ikke slettes når nettleseren lukkes, og vil fortsatt være tilgjengelig i fremtiden. 
Det er også brukt sessionStorage, til å lagre antall ganger knappene “Save favorite” og “show favorite” blir trykket på. SessionStroage lagrer data for en økt, og dataen vil mistes når man lukker fanen(ikke kun refreshe). VI har implementert lagring av antall klikk i en økt i (“clickCounter()”). Denne finner man i App.js. 

**Node.js NPM**  
Prosjektet baserer seg på Node.js og NPM har blitt brukt aktivt til å sette opp, teste, bygge og levere produktet.

**Testing**  
Det er laget 3 snapshot tester med Jest. Komponentene som testes er App.js, TabContent.js og AudioPlayer.js. I test mappen finner man også en mappe med snapshotsene som ble generert fra testen.  Jest er et JavaScript-rammeverk for testing av enheter.  Snapshot tester er veldig nyttige da man kan sjekke at react komponenten ikke endrer seg uventet.  Snapshot testen tar en snapshot og sammenligner snapshoten med en snapshot som lagres med testen. Om testen feiler er snapshotsene forskjellige.  

Vi har testet nettsiden på 3 ulike enheter: vanlig pc-skjerm, iPhone X (og andre smarttelefoner) og iPad. Vi har endret layouten på de ulike skjermtypene. Mer om dette kan man lese om under media-queries. For å sjekke om siden er responsive har vi skalert nettleseren og sjekket at elementene skalerer. VI fant ut at chrome sin inspiser innstilling har mulighet for å se nettsiden med ulike typer skjermer.  Fant ut at denne ikke viste samme resultat som om man tester på en fysisk mobil. Derfor anbefaler vi å teste på det faktiske enhetene: iPhone X og iPad, istede for å bruke chrome sin inspiser innstilling.
 
**Git**  
Vi har aktivt brukt Git (med GitLab) under utviklingen av produktet. Gjøremål har blitt organisert i issues fra starten av, samt at vi har lagt til issues underveis da det kom opp forskjellige ting som måtte løses. For å kunne jobbe organisert har alle under utviklingen jobbet på egne brancher og kun oppdatert master gjennom merge requests på GitLab. Dette har fungert bra med minimale forekomster av merge-konflikter, og de få som har oppstått har vært relativt greie å rydde opp i. Hvordan hver enkelt i gruppa har forholdt seg til Git på egen maskin (command line, editor, 3. part software) har vært opp til den enkelte, og det har fungert veldig bra.




**Lånt kode**  
[(https://alligator.io/react/tabs-component/](https://alligator.io/react/tabs-component/)
Vi googlet etter noen enkle react tabs, og fant denne nettsiden. Vi brukte konseptene de brukte, men la inn litt egen funksjonalitet og endret hele utseendet. 

[(https://www.w3schools.com/html/html5_webstorage.asp](https://www.w3schools.com/html/html5_webstorage.asp)
inspirerte local storage delen vår fra denne nettsiden, og implementerte vår egen versjon av klikktelleren som lå ute på w3school. 

[https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest](https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest)
Brukte denne siden for å lage snapshot test med jest. 










This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





