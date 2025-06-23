function Result()  {
let name = document.getElementById('name').value.trim().toLowerCase();
let output = document.getElementById('output');
let message = "";
const firstmark = parseFloat(document.getElementById('firstmark').value) || 0;
const secondmark = parseFloat(document.getElementById('secondmark').value) || 0;
const creditmark = parseFloat(document.getElementById('creditmark').value) || 0;
const esito = document.getElementById('esito');
let media = ((creditmark/2)+firstmark+secondmark)/3;
let stima = creditmark + firstmark + secondmark + media;
let picture = document.getElementById('picture');
let nomeGestito = false;
let imageSet = false;
picture.style.display = "none";
picture.src = "";

if (!name.includes(" ")) {
  output.textContent = "Ti sei dimenticato di mettere nome e cognome";
  return;
}


if (name === "beatrice bertazza") {
   message = "Uscirai con un buon 90/100, Luana è rimasta impressa dal tuo tema e deciderà di premiarti. Daje";
   nomeGestito = true;
} else if (name === "ingrid busetti") {
   message = "Luana sarà sconcertata dal tuo voto di diritto. Ma niente paura, Portolan e Casagrande saranno lì a sostenerti e decideranno di premiare il tuo impegno. Forza Ingrid!";
   stima -= 30;
   nomeGestito = true;
} else if (name === "luca dagostin") {
   message = "I prof rimarranno stupefatti dalla tua abilità di utilizzare l'arte del Freestyle. Uscirai con un ottimo voto.";
   nomeGestito = true;
} else if (name === "marco depeder") {
   message = "Il tuo orale partirà bene, ma ad un certo punto Menapace ti interromperà per correggerti. A quel punto tu giustamente inizierai ad insultarla con termini tipo Muori, Esplodi, Sciopa. Ti prego non farlo o non arriverai al 60. Se riuscirai a trattenerti avrai un voto attorno al 65. Ti si vuole bene Marco <3" ;
   nomeGestito = true;
} else if (name === "nicola gabardi") {
   message = "Agli scritti hai stupito tutti i professori. Peccato che ti ritroverai Casagranda agli orali che ti accuserà di essere eccentrico e supponente. Ti leverà qualche voto ma alla fin dei conti il tuo voto sarà comunque tra l'80 e il 90.";
   nomeGestito = true;
} else if (name === "angela larentis") {
   message = "Non sai manco fare l'impostore su Among Us, figuriamoci sostenere un esame di Stato. Si scherza Angela, te la caverai alla grande e uscirai con un buon voto finale.";
   nomeGestito = true;
} else if (name === "edoardo paci") {
   message = "Ti uscirà uno spunto sulla guerra tra Israele e Palestina. Insomma lo spunto perfetto. Con la tua conoscenza e abilità retorica stupirai l'intera commissione. Grande Edo <3";
   nomeGestito = true;
} else if (name === "federico paternoster") {
   message = "I professori ti accuseranno di essere un comunista, ancora prima che tu possa iniziare a parlare. Tuttavia con la tua abilità retorica e conoscenza della filosofia riuscirai a dimostrare loro che hanno torto: tu sei troppo joker per essere comunista.";
   nomeGestito = true;
} else if (name === "veronica paternoster") {
   message = "I prof rimarranno inondati da tutte le nozioni che dimostrerai di sapere. Uscirai con un ottimo voto, e in ogni caso sarai contenta di esserti liberata del Liceo Russell.";
   nomeGestito = true;
} else if (name === "andrea sampieri") {
   message = "Ti uscirà uno spunto tratto da Pulp Fiction. Insomma, lo spunto perfetto per te. Lascerai a bocca aperta tutta la commissione e riuscirai a convertire Portolan alla religione del Quentinesimo.";
   nomeGestito = true;
} else if (name === "yara yousfi") {
   message = "Con apollineo e dionisiaco stupirai l'intera commissione. Casagrande muto, ottimo voto garantito.";
   nomeGestito = true;
} else if (name === "andrea zanetti") {
   message = "Il professore di italiano ti farà i complimenti per l'eccellente voto di italiano. Inoltre, appena scoprirà che fai parte delle BR, ti farà i complimenti per la missione Aldo Moro. 100/100 con Lode, daje così. Ah, sei stato allallato.";
   nomeGestito = true;
} else if (name === "victoria zappini") {
   message = "Menapace ti farà uno dei suoi soliti interrogatori. Ma alla fine andrà tutto bene. Forza Vic";
   nomeGestito = true;
} else if (name === "fabrizio andreis") {
   message = "Fabrizio ha creato questo programma, non so dirti con quale voto uscirà ma mi ha detto che non gliene frega un cazzo del voto.";
   nomeGestito = true;
} else if (name === "marco latino") {
   message = "Latino? L'esame di maturità l'ha fatto tanti anni fa. Gli era andato di merda, ma questo è un altro discorso.";
   nomeGestito = true;
} 

if (name === "federico smash") {
   message = "Smash, hai sbloccato un easter egg. Rarità easter egg: raro"; 
   picture.src = "image/federico.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "latino gangster") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: leggendario cosa nostra"; 
   picture.src = "image/latino.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
} 

if (name === "zanetti palestrato") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: epico"; 
   picture.src = "image/zanetti.png";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "seppi palestrato") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: epico"; 
   picture.src = "image/seppi.jpg";
   picture.style.display = "block";
     imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "portopalo carletto") {
   message = "Hai sbloccato un easter egg sgravato. Rarità easter egg: denunciabile"; 
   picture.src = "image/portolan.jpg";
   picture.style.display = "block";
    imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "federico interista") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: Raro. Federico è sceso in campo ma si è beccato 5 pere :("; 
   picture.src = "image/interista.jpg";
   picture.style.display = "block";
    imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
} 

if (name === "zattoni erutta") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: boh facciamo epica"; 
   picture.src = "image/zattoni.webp";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "sampieri sampdoria") {
   message = "Hai sbloccato l'easter egg più bello di tutti. Rarità easter egg: Leggendaria"; 
   picture.src = "image/sampieri.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "federico mafioso") {
   message = "Hai sbloccato un easter egg di cultura. Rarità easter egg: Epica"; 
   picture.src = "image/mafioso.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "michele retrosi") {
   message = "Hai sbloccato un easter egg sgravato. Rarità easter egg: Da denuncia. Ti prego non farlo scoprire a Retrosi o sono morto."; 
   picture.src = "image/retrosi.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (name === "vitelli sborelli") {
   message = "Hai sbloccato un easter egg. Rarità easter egg: Epico. Forza African Skuldroppaut. Vitelli portaci al mondiale per club."; 
   picture.src = "image/vitelli.jpg";
   picture.style.display = "block";
   imageSet = true;
   esito.textContent = "";
   nomeGestito = true;
}

if (!imageSet) {
picture.src = "";
picture.style.display = "none";
}

if (nomeGestito && !imageSet) {
esito.textContent = `Scherzi a parte, ecco la stima del voto finale calcolata matematicamente in base ai voti e crediti inseriti: ${stima.toFixed(2)}`;
} else {
esito.textContent = "";
}

output.textContent = message;

}

function Reset() {
  document.getElementById('name').value = "";
  document.getElementById('firstmark').value = "";
  document.getElementById('secondmark').value = "";
  document.getElementById('output').textContent = "PREDICT: ";
  document.getElementById('esito').textContent = "";
  document.getElementById('picture').style.display = "none";
  document.getElementById('picture').src = "";
}
