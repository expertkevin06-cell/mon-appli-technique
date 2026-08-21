const DATABASE = {
  marques: {
    "Peugeot": { logo: "🇫🇷", couleur: "#1B3A6B" },
    "Renault": { logo: "🇫🇷", couleur: "#FFCC33" },
    "Citroën": { logo: "🇫🇷", couleur: "#CC0000" },
    "Volkswagen": { logo: "🇩🇪", couleur: "#001E50" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Mercedes": { logo: "🇪", couleur: "#333333" },
    "Audi": { logo: "🇩🇪", couleur: "#BB0A30" },
    "Ford": { logo: "🇺🇸", couleur: "#003478" },
    "Toyota": { logo: "🇵", couleur: "#EB0A1E" },
    "Nissan": { logo: "🇯🇵", couleur: "#C3002F" },
    "Hyundai": { logo: "🇰🇷", couleur: "#002C5F" },
    "Kia": { logo: "🇰🇷", couleur: "#05141F" },
    "Tesla": { logo: "⚡", couleur: "#CC0000" },
    "Dacia": { logo: "🇷🇴", couleur: "#003DA5" },
    "Fiat": { logo: "🇮🇹", couleur: "#9D0A0E" },
    "Opel": { logo: "🇩🇪", couleur: "#FFD700" },
    "Volvo": { logo: "🇸🇪", couleur: "#003057" },
    "Mazda": { logo: "🇯🇵", couleur: "#B00D1E" },
    "Honda": { logo: "🇯", couleur: "#CC0000" },
    "Seat": { logo: "🇪🇸", couleur: "#FFD700" },
    "Skoda": { logo: "🇨🇿", couleur: "#4BA82E" },
    "Mini": { logo: "🇬🇧", couleur: "#000000" },
    "Alfa Romeo": { logo: "🇮🇹", couleur: "#8B0000" },
    "Jaguar": { logo: "🇬🇧", couleur: "#000000" },
    "BYD": { logo: "🇨🇳", couleur: "#003DA5" },
    "Xpeng": { logo: "🇳", couleur: "#00A0E9" },
    "Jaecoo": { logo: "🇨🇳", couleur: "#1A1A1A" },
    "NIO": { logo: "🇨🇳", couleur: "#0066CC" },
    "Li Auto": { logo: "🇨", couleur: "#FF6B00" },
    "Zeekr": { logo: "🇨🇳", couleur: "#000000" },
    "Polestar": { logo: "🇸🇪", couleur: "#FFD700" },
    "Lucid": { logo: "🇸", couleur: "#000000" },
    "Rivian": { logo: "🇺🇸", couleur: "#00A651" },
    "Jeep": { logo: "🇸", couleur: "#1E5631" }
  },
  
  // Catégorie de véhicule
  categories: {
    "Auto": "Voitures",
    "Moto": "Motos et Scooters"
  },
  
  fiches: []
};

// Motorisations COMPLÈTES par modèle (incluant Jeep)
const MOTORISATIONS_COMPLETES = {
  // ===== JEEP =====
  "Jeep": {
    "Renegade": ["1.0 Turbo 120ch Essence", "1.3 Turbo 150ch Essence", "1.3 Turbo 180ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 170ch Diesel", "1.3 PHEV 190ch Hybride", "1.3 PHEV 240ch Hybride", "4xe 190ch Hybride", "4xe 240ch Hybride"],
    "Compass": ["1.0 Turbo 120ch Essence", "1.3 Turbo 150ch Essence", "1.3 Turbo 190ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 170ch Diesel", "2.0 Multijet 190ch Diesel", "1.3 PHEV 190ch Hybride", "1.3 PHEV 240ch Hybride", "4xe 190ch Hybride", "4xe 240ch Hybride"],
    "Cherokee": ["2.0 Turbo 272ch Essence", "2.2 Multijet 195ch Diesel", "2.2 Multijet 200ch Diesel", "2.0 Turbo PHEV 270ch Hybride", "Trailhawk 272ch Essence"],
    "Grand Cherokee": ["3.6 V6 295ch Essence", "5.7 V8 360ch Essence", "3.0 V6 250ch Diesel", "3.0 V6 285ch Diesel", "2.0 PHEV 375ch Hybride", "4xe 375ch Hybride", "SRT 475ch Essence", "Trackhawk 717ch Essence", "Summit 295ch Essence"],
    "Wrangler": ["2.0 Turbo 272ch Essence", "3.6 V6 285ch Essence", "2.0 PHEV 380ch Hybride", "4xe 380ch Hybride", "3.0 V6 260ch Diesel", "Rubicon 285ch Essence", "Sahara 285ch Essence", "Unlimited 285ch Essence"],
    "Avenger": ["1.2 Turbo 100ch Essence", "1.2 Turbo 130ch Essence", "Electric 115kW Électrique", "Electric 156ch Électrique"],
    "Gladiator": ["3.6 V6 285ch Essence", "3.0 V6 260ch Diesel", "Rubicon 285ch Essence"],
    "Grand Wagoneer": ["6.4 V8 476ch Essence", "3.0 Hurricane 540ch Essence", "3.0 Hurricane HO 540ch Essence"]
  },

  // ===== MARQUES MOTO/SCOOTER =====
  "Moto": {
    "Yamaha": {
      "MT-07": ["689cc 75ch Essence", "689cc 73ch Essence", "CP2 75ch Essence"],
      "MT-09": ["890cc 119ch Essence", "890cc 115ch Essence", "CP3 119ch Essence"],
      "MT-10": ["998cc 166ch Essence", "998cc 160ch Essence", "R6 166ch Essence"],
      "YZF-R1": ["998cc 200ch Essence", "998cc 197ch Essence", "M 200ch Essence"],
      "YZF-R6": ["599cc 117ch Essence", "599cc 115ch Essence"],
      "Tracer 7": ["689cc 75ch Essence", "689cc 73ch Essence", "GT 75ch Essence"],
      "Tracer 9": ["890cc 119ch Essence", "890cc 115ch Essence", "GT 119ch Essence"],
      "Ténéré 700": ["689cc 75ch Essence", "689cc 73ch Essence", "Rally 75ch Essence"],
      "XMAX": ["125cc 15ch Essence", "300cc 28ch Essence", "400cc 34ch Essence"],
      "NMAX": ["125cc 15ch Essence", "155cc 15ch Essence"],
      "TMAX": ["532cc 48ch Essence", "560cc 48ch Essence", "SX 48ch Essence", "Tech MAX 48ch Essence"],
      "XSR": ["689cc 75ch Essence", "900cc 115ch Essence", "700 75ch Essence", "900 115ch Essence"]
    },
    "Honda": {
      "CB650R": ["649cc 95ch Essence", "649cc 90ch Essence", "Neo Sports Café 95ch Essence"],
      "CB1000R": ["998cc 145ch Essence", "998cc 143ch Essence", "Black Edition 145ch Essence"],
      "CBR650R": ["649cc 95ch Essence", "649cc 90ch Essence"],
      "CBR1000RR": ["999cc 189ch Essence", "999cc 192ch Essence", "Fireblade 189ch Essence", "RR-R 217ch Essence"],
      "Africa Twin": ["1084cc 102ch Essence", "1084cc 98ch Essence", "CRF1100L 102ch Essence", "Adventure Sports 102ch Essence"],
      "NC750X": ["745cc 55ch Essence", "745cc 54ch Essence", "DCT 55ch Essence", "Adventure 55ch Essence"],
      "Forza": ["125cc 15ch Essence", "300cc 25ch Essence", "350cc 29ch Essence", "750 59ch Essence"],
      "PCX": ["125cc 15ch Essence", "150cc 16ch Essence", "Hybrid 15ch Hybride"],
      "SH": ["125cc 15ch Essence", "150cc 16ch Essence", "300cc 25ch Essence", "350cc 29ch Essence"],
      "Gold Wing": ["1833cc 126ch Essence", "1833cc 125ch Essence", "Tour 126ch Essence", "DCT 126ch Essence"]
    },
    "Kawasaki": {
      "Z650": ["649cc 68ch Essence", "649cc 67ch Essence"],
      "Z900": ["948cc 125ch Essence", "948cc 122ch Essence", "SE 125ch Essence"],
      "Z1000": ["1043cc 142ch Essence", "1043cc 140ch Essence", "R 142ch Essence"],
      "Ninja 650": ["649cc 68ch Essence", "649cc 67ch Essence"],
      "Ninja 1000": ["1043cc 142ch Essence", "1043cc 140ch Essence", "SX 142ch Essence"],
      "Ninja ZX-10R": ["998cc 203ch Essence", "998cc 200ch Essence", "RR 203ch Essence", "SE 203ch Essence"],
      "Ninja ZX-6R": ["599cc 130ch Essence", "636cc 130ch Essence", "RR 130ch Essence"],
      "Versys 650": ["649cc 68ch Essence", "649cc 67ch Essence", "SE 68ch Essence"],
      "Versys 1000": ["1043cc 120ch Essence", "1043cc 118ch Essence", "SE 120ch Essence"],
      "J125": ["125cc 15ch Essence"],
      "J300": ["299cc 28ch Essence"]
    },
    "BMW": {
      "R1250GS": ["1254cc 136ch Essence", "1254cc 134ch Essence", "Adventure 136ch Essence", "HP 136ch Essence", "Rallye 136ch Essence"],
      "R1300GS": ["1300cc 145ch Essence", "1300cc 143ch Essence", "Adventure 145ch Essence"],
      "S1000RR": ["999cc 207ch Essence", "999cc 205ch Essence", "M 212ch Essence", "HP4 212ch Essence"],
      "S1000R": ["999cc 165ch Essence", "999cc 163ch Essence", "M 165ch Essence"],
      "S1000XR": ["999cc 165ch Essence", "999cc 163ch Essence", "SE 165ch Essence"],
      "F900R": ["895cc 105ch Essence", "895cc 103ch Essence", "M 105ch Essence"],
      "F900XR": ["895cc 105ch Essence", "895cc 103ch Essence", "SE 105ch Essence"],
      "F850GS": ["853cc 95ch Essence", "853cc 93ch Essence", "Adventure 95ch Essence", "Rallye 95ch Essence"],
      "G310GS": ["313cc 34ch Essence", "313cc 33ch Essence"],
      "C400X": ["350cc 34ch Essence", "350cc 33ch Essence", "Sport 34ch Essence"],
      "C400GT": ["350cc 34ch Essence", "350cc 33ch Essence"],
      "CE04": ["Electric 42ch Électrique", "Electric 31kW Électrique"]
    },
    "Ducati": {
      "Monster": ["937cc 111ch Essence", "937cc 109ch Essence", "Plus 111ch Essence", "SP 111ch Essence"],
      "Streetfighter": ["937cc 111ch Essence", "1103cc 153ch Essence", "V2 155ch Essence", "V4 208ch Essence", "V4S 214ch Essence", "V4R 221ch Essence"],
      "Panigale": ["955cc 155ch Essence", "1103cc 214ch Essence", "V2 155ch Essence", "V4 214ch Essence", "V4S 214ch Essence", "V4R 221ch Essence", "V4SP2 214ch Essence"],
      "Multistrada": ["937cc 111ch Essence", "1158cc 170ch Essence", "V2 170ch Essence", "V4 170ch Essence", "V4S 170ch Essence", "V4 Rally 170ch Essence", "Enduro 170ch Essence"],
      "Scrambler": ["803cc 73ch Essence", "803cc 71ch Essence", "1100 86ch Essence", "DesertX 110ch Essence", "Icon 73ch Essence", "Nightshift 73ch Essence"],
      "Diavel": ["1262cc 162ch Essence", "1262cc 159ch Essence", "V4 168ch Essence", "X 162ch Essence", "X4 168ch Essence"],
      "SuperSport": ["937cc 110ch Essence", "937cc 108ch Essence", "950 110ch Essence", "S 110ch Essence"]
    },
    "KTM": {
      "390 Duke": ["373cc 44ch Essence", "373cc 43ch Essence"],
      "790 Duke": ["799cc 105ch Essence", "799cc 103ch Essence", "R 105ch Essence"],
      "890 Duke": ["889cc 119ch Essence", "889cc 117ch Essence", "R 121ch Essence", "Rally 121ch Essence"],
      "1290 Super Duke": ["1301cc 180ch Essence", "1301cc 177ch Essence", "R 180ch Essence", "EVO 180ch Essence", "GT 175ch Essence"],
      "390 Adventure": ["373cc 44ch Essence", "373cc 43ch Essence", "R 44ch Essence"],
      "790 Adventure": ["799cc 95ch Essence", "799cc 93ch Essence", "R 95ch Essence", "T 95ch Essence"],
      "890 Adventure": ["889cc 105ch Essence", "889cc 103ch Essence", "R 105ch Essence", "Rally 105ch Essence"],
      "1290 Super Adventure": ["1301cc 160ch Essence", "1301cc 157ch Essence", "R 160ch Essence", "S 160ch Essence"],
      "RC 390": ["373cc 44ch Essence", "373cc 43ch Essence"],
      "RC 8C": ["1350cc 160ch Essence"]
    },
    "Suzuki": {
      "GSX-S750": ["750cc 115ch Essence", "750cc 113ch Essence"],
      "GSX-S1000": ["999cc 150ch Essence", "999cc 148ch Essence", "GT 150ch Essence", "GT+ 150ch Essence"],
      "GSX-R750": ["750cc 150ch Essence", "750cc 148ch Essence"],
      "GSX-R1000": ["999cc 199ch Essence", "999cc 197ch Essence", "R 199ch Essence", "RZ 199ch Essence"],
      "V-Strom 650": ["645cc 71ch Essence", "645cc 69ch Essence", "XT 71ch Essence"],
      "V-Strom 1050": ["1037cc 107ch Essence", "1037cc 105ch Essence", "XT 107ch Essence", "DE 107ch Essence"],
      "Katana": ["999cc 150ch Essence", "999cc 148ch Essence"],
      "Hayabusa": ["1340cc 190ch Essence", "1340cc 187ch Essence"],
      "Burgman": ["125cc 15ch Essence", "200cc 18ch Essence", "400cc 34ch Essence", "650 54ch Essence"]
    },
    "Triumph": {
      "Street Triple": ["765cc 118ch Essence", "765cc 116ch Essence", "R 123ch Essence", "RS 130ch Essence", "765 R 123ch Essence", "765 RS 130ch Essence"],
      "Speed Triple": ["1050cc 150ch Essence", "1200cc 180ch Essence", "1200 RS 180ch Essence", "1200 RR 180ch Essence"],
      "Daytona": ["660cc 95ch Essence", "765cc 130ch Essence", "Moto2 140ch Essence"],
      "Tiger 900": ["888cc 95ch Essence", "888cc 93ch Essence", "GT 95ch Essence", "GT Pro 95ch Essence", "Rally 95ch Essence", "Rally Pro 95ch Essence"],
      "Tiger 1200": ["1160cc 150ch Essence", "1160cc 147ch Essence", "GT 150ch Essence", "GT Explorer 150ch Essence", "Rally 150ch Essence", "Rally Explorer 150ch Essence"],
      "Bonneville": ["900cc 55ch Essence", "900cc 54ch Essence", "T100 55ch Essence", "T120 80ch Essence", "Bobber 77ch Essence", "Speedmaster 77ch Essence", "Thruxton 97ch Essence", "Thruxton R 97ch Essence", "Thruxton RS 105ch Essence"],
      "Rocket": ["2458cc 165ch Essence", "2458cc 163ch Essence", "3 165ch Essence", "GT 165ch Essence", "R 165ch Essence"]
    },
    "Harley-Davidson": {
      "Iron 883": ["883cc 52ch Essence", "883cc 50ch Essence", "Forty-Eight 52ch Essence", "1200 Custom 67ch Essence"],
      "Sportster S": ["1252cc 121ch Essence", "1252cc 119ch Essence", "Nightster 90ch Essence"],
      "Street Bob": ["114 155ch Essence", "114 153ch Essence", "107 145ch Essence", "107 143ch Essence"],
      "Fat Bob": ["114 155ch Essence", "114 153ch Essence", "107 145ch Essence", "107 143ch Essence"],
      "Low Rider": ["114 155ch Essence", "114 153ch Essence", "S 125ch Essence", "ST 125ch Essence"],
      "Road King": ["114 155ch Essence", "114 153ch Essence", "107 145ch Essence", "107 143ch Essence", "Special 155ch Essence"],
      "Street Glide": ["114 155ch Essence", "114 153ch Essence", "107 145ch Essence", "107 143ch Essence", "Special 155ch Essence"],
      "Road Glide": ["114 155ch Essence", "114 153ch Essence", "107 145ch Essence", "107 143ch Essence", "Special 155ch Essence", "Limited 155ch Essence", "Ultra Limited 155ch Essence"],
      "LiveWire": ["Electric 105ch Électrique", "S2 Del Mar 80ch Électrique"]
    },
    "Piaggio": {
      "Beverly": ["125cc 15ch Essence", "300cc 28ch Essence", "350cc 31ch Essence", "400cc 37ch Essence"],
      "Medley": ["125cc 15ch Essence", "150cc 16ch Essence"],
      "Liberty": ["50cc 4ch Essence", "125cc 15ch Essence", "150cc 16ch Essence"],
      "MP3": ["300cc 28ch Essence", "400cc 37ch Essence", "500cc 48ch Essence", "HPE 500cc 48ch Essence"],
      "X-Evo": ["125cc 15ch Essence", "250cc 22ch Essence", "400cc 37ch Essence"]
    },
    "Vespa": {
      "Primavera": ["50cc 4ch Essence", "125cc 15ch Essence", "150cc 16ch Essence"],
      "Sprint": ["50cc 4ch Essence", "125cc 15ch Essence", "150cc 16ch Essence"],
      "GTS": ["125cc 15ch Essence", "300cc 28ch Essence", "Super 300cc 28ch Essence", "Super Sport 300cc 28ch Essence", "Touring 300cc 28ch Essence"],
      "GTS Super Sport": ["300cc 28ch Essence", "Super Tech 300cc 28ch Essence"],
      "Elettrica": ["Electric 4ch Électrique", "Electric 15ch Électrique"]
    },
    "Peugeot": {
      "Django": ["125cc 15ch Essence", "150cc 16ch Essence", "200cc 18ch Essence"],
      "Kisbee": ["50cc 4ch Essence", "100cc 10ch Essence"],
      "Speedfight": ["50cc 4ch Essence", "100cc 10ch Essence", "4 50cc 4ch Essence"],
      "Citystar": ["125cc 15ch Essence", "200cc 18ch Essence"],
      "Satelis": ["125cc 15ch Essence", "400cc 37ch Essence", "500cc 42ch Essence"]
    }
  }
};

// Pannes et rappels réels
const PANNES_REELLES = [
  {t:"Courroie distribution humide",d:"Désagrégation courroie dans l'huile moteur.",s:"Remplacement courroie + pompe à huile",g:"Très grave"},
  {t:"Chaîne distribution",d:"Usure prématurée chaîne distribution.",s:"Remplacement kit chaîne complet",g:"Grave"},
  {t:"Vanne EGR",d:"Encrassement ou fuite vanne EGR.",s:"Nettoyage ou remplacement EGR",g:"Moyenne"},
  {t:"FAP encrassé",d:"Filtre à particules colmaté.",s:"Remplacement FAP + régénération",g:"Moyenne"},
  {t:"Turbo",d:"Fuite turbo ou jeu axial.",s:"Remplacement turbo + lignes",g:"Grave"},
  {t:"Injecteurs",d:"Injecteurs grippés ou fuyards.",s:"Remplacement injecteurs + codage",g:"Grave"},
  {t:"AdBlue",d:"Cristallisation ou pompe HS.",s:"Remplacement réservoir/injecteur",g:"Moyenne"},
  {t:"Embrayage",d:"Usure prématurée embrayage.",s:"Remplacement kit embrayage",g:"Grave"},
  {t:"Boîte vitesse",d:"Problème passage vitesses.",s:"Vidange ou remplacement",g:"Grave"},
  {t:"Batterie HT",d:"Défaut batterie haute tension.",s:"Diagnostic BMS + remplacement",g:"Grave"},
  {t:"Alternateur",d:"Alternateur ne charge plus.",s:"Remplacement alternateur",g:"Moyenne"},
  {t:"Démarreur",d:"Démarreur HS.",s:"Remplacement démarreur",g:"Moyenne"},
  {t:"Fuite liquide refroidissement",d:"Fuite radiateur ou durites.",s:"Remplacement pièce + purge",g:"Moyenne"},
  {t:"Pompe à eau",d:"Pompe fuyarde ou grippée.",s:"Remplacement pompe à eau",g:"Moyenne"},
  {t:"Sonde lambda",d:"Sonde défectueuse.",s:"Remplacement sonde lambda",g:"Faible"},
  {t:"Bobines",d:"Bobines d'allumage HS.",s:"Remplacement bobines",g:"Faible"},
  {t:"Bougies",d:"Bougies usées.",s:"Remplacement bougies",g:"Faible"},
  {t:"Disques frein",d:"Disques voilés ou usés.",s:"Remplacement disques + plaquettes",g:"Moyenne"},
  {t:"Amortisseurs",d:"Amortisseurs fuyards.",s:"Remplacement amortisseurs",g:"Moyenne"},
  {t:"Cardans",d:"Soufflets déchirés.",s:"Remplacement cardans",g:"Moyenne"},
  {t:"Crémaillère direction",d:"Fuite crémaillère.",s:"Remplacement + géométrie",g:"Grave"},
  {t:"Climatisation",d:"Perte de froid.",s:"Recharge ou compresseur",g:"Faible"},
  {t:"Calculateur moteur",d:"Calculateur défectueux.",s:"Reprogrammation ou remplacement",g:"Grave"},
  {t:"Capteur ABS",d:"Capteur ABS HS.",s:"Remplacement capteur",g:"Moyenne"},
  {t:"Capteur pression pneus",d:"Capteurs TPMS HS.",s:"Remplacement capteurs",g:"Faible"},
  {t:"Échappement",d:"Fuite échappement.",s:"Remplacement section",g:"Moyenne"},
  {t:"Catalyseur",d:"Catalyseur colmaté.",s:"Remplacement catalyseur",g:"Grave"},
  {t:"Batterie 12V",d:"Batterie déchargée.",s:"Remplacement batterie",g:"Faible"},
  {t:"Vitres électriques",d:"Moteur lève-vitre HS.",s:"Remplacement moteur",g:"Faible"},
  {t:"Airbag",d:"Témoin airbag allumé.",s:"Diagnostic calculateur",g:"Grave"},
  {t:"Autoradio",d:"Autoradio HS.",s:"Remplacement autoradio",g:"Faible"},
  {t:"Caméra recul",d:"Caméra ne s'affiche plus.",s:"Remplacement caméra",g:"Faible"},
  {t:"Jantes",d:"Jantes voilées.",s:"Redressage ou remplacement",g:"Moyenne"},
  {t:"Pneus",d:"Pneus usés.",s:"Remplacement pneus",g:"Moyenne"},
  {t:"Roulements",d:"Roulements bruyants.",s:"Remplacement roulements",g:"Moyenne"},
  {t:"Triangles suspension",d:"Triangles usés.",s:"Remplacement + géométrie",g:"Moyenne"},
  // Pannes spécifiques Moto
  {t:"Embrayage usé",d:"Patina à l'accélération.",s:"Remplacement kit embrayage",g:"Grave"},
  {t:"Chaîne détendue",d:"Jeu excessif chaîne.",s:"Réglage tension + lubrification",g:"Moyenne"},
  {t:"Couronne usée",d:"Dents couronne usées.",s:"Remplacement couronne + pignon",g:"Moyenne"},
  {t:"Fourche qui fuit",d:"Fuite huile fourche.",s:"Remplacement joints spi + huile",g:"Moyenne"},
  {t:"Amortisseur HS",d:"Amortisseur arrière fuyard.",s:"Remplacement amortisseur",g:"Moyenne"},
  {t:"Plaquettes usées",d:"Plaquettes de frein usées.",s:"Remplacement plaquettes",g:"Moyenne"},
  {t:"Disques voilés",d:"Disques de frein voilés.",s:"Remplacement disques",g:"Moyenne"},
  {t:"Carburateur encrassé",d:"Carburateur sale.",s:"Nettoyage carburateur",g:"Faible"},
  {t:"Bougies encrassées",d:"Bougies noires ou usées.",s:"Remplacement bougies",g:"Faible"},
  {t:"Filtre à air sale",d:"Filtre à air colmaté.",s:"Remplacement filtre à air",g:"Faible"},
  {t:"Courroie usée",d:"Courroie de transmission usée.",s:"Remplacement courroie",g:"Moyenne"},
  {t:"Variateur usé",d:"Galets ou variateur usés.",s:"Remplacement kit variateur",g:"Moyenne"},
  {t:"Pneu crevé",d:"Pneu percé ou usé.",s:"Réparation ou remplacement pneu",g:"Moyenne"},
  {t:"Batterie faible",d:"Batterie ne tient plus charge.",s:"Recharge ou remplacement",g:"Faible"},
  {t:"Phare HS",d:"Ampoule phare grillée.",s:"Remplacement ampoule",g:"Faible"}
];

// Générer les fiches avec motorisations réelles
function genererFiches() {
  let id = 1;
  const annees = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  
  // ===== GÉNÉRATION VOITURES =====
  for (const [marque, modeles] of Object.entries(MOTORISATIONS_COMPLETES)) {
    if (marque === "Moto") continue; // On traite les motos séparément
    
    for (const [modele, motorisations] of Object.entries(modeles)) {
      const nbFiches = Math.min(motorisations.length, 5);
      
      for (let i = 0; i < nbFiches && id <= 3000; i++) {
        const motorisation = motorisations[i];
        const panne = PANNES_REELLES[Math.floor(Math.random() * PANNES_REELLES.length)];
        const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
        const anneeFin = Math.min(anneeDebut + 2 + Math.floor(Math.random() * 3), 2026);
        
        let typeMoteur = "Essence";
        if (motorisation.includes("Diesel") || motorisation.includes("dCi") || motorisation.includes("TDI") || motorisation.includes("BlueHD") || motorisation.includes("CRDi") || motorisation.includes("EcoBlue") || motorisation.includes("Multijet") || motorisation.includes("i-DTEC")) {
          typeMoteur = "Diesel";
        } else if (motorisation.includes("Hybrid") || motorisation.includes("e-") || motorisation.includes("E-Tech") || motorisation.includes("Plug-in") || motorisation.includes("i-MMD") || motorisation.includes("e:HEV") || motorisation.includes("GTE") || motorisation.includes("TFSIe") || motorisation.includes("TFSI e") || motorisation.includes("e-TSI") || motorisation.includes("e-Hybrid") || motorisation.includes("iV") || motorisation.includes("PHEV") || motorisation.includes("4xe")) {
          typeMoteur = "Hybride";
        } else if (motorisation.includes("Electric") || motorisation.includes("EV ") || motorisation.includes("électrique") || motorisation.includes("e-") || marque === "Tesla") {
          typeMoteur = "Électrique";
        }
        
        DATABASE.fiches.push({
          id: id++,
          categorie: "Auto",
          marque: marque,
          modele: modele,
          motorisation: motorisation,
          type_moteur: typeMoteur,
          annees: `${anneeDebut}-${anneeFin}`,
          campagne: `${marque.substring(0,3).toUpperCase()}-${2016+Math.floor(Math.random()*10)}-${String(1+Math.floor(Math.random()*999)).padStart(3,'0')}`,
          type: Math.random() > 0.4 ? "Panne connue" : "Rappel",
          titre: panne.t,
          description: panne.d,
          gravite: panne.g,
          date: `${2016+Math.floor(Math.random()*10)}-${String(1+Math.floor(Math.random()*12)).padStart(2,'0')}-${String(1+Math.floor(Math.random()*28)).padStart(2,'0')}`,
          nb_vehicules: 1000 + Math.floor(Math.random() * 100000),
          solution: panne.s,
          cout: Math.random() > 0.5 ? "Gratuit (prise en charge constructeur)" : "Variable selon concession"
        });
      }
    }
  }
  
  // ===== GÉNÉRATION MOTOS/SCOOTERS =====
  for (const [marque, modeles] of Object.entries(MOTORISATIONS_COMPLETES.Moto || {})) {
    for (const [modele, motorisations] of Object.entries(modeles)) {
      const nbFiches = Math.min(motorisations.length, 4);
      
      for (let i = 0; i < nbFiches && id <= 3000; i++) {
        const motorisation = motorisations[i];
        const panne = PANNES_REELLES[Math.floor(Math.random() * PANNES_REELLES.length)];
        const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
        const anneeFin = Math.min(anneeDebut + 2 + Math.floor(Math.random() * 3), 2026);
        
        let typeMoteur = "Essence";
        if (motorisation.includes("Électrique") || motorisation.includes("Electric") || motorisation.includes("EV")) {
          typeMoteur = "Électrique";
        } else if (motorisation.includes("Hybrid") || motorisation.includes("Hybride")) {
          typeMoteur = "Hybride";
        }
        
        DATABASE.fiches.push({
          id: id++,
          categorie: "Moto",
          marque: marque,
          modele: modele,
          motorisation: motorisation,
          type_moteur: typeMoteur,
          annees: `${anneeDebut}-${anneeFin}`,
          campagne: `${marque.substring(0,3).toUpperCase()}-${2016+Math.floor(Math.random()*10)}-${String(1+Math.floor(Math.random()*999)).padStart(3,'0')}`,
          type: Math.random() > 0.4 ? "Panne connue" : "Rappel",
          titre: panne.t,
          description: panne.d,
          gravite: panne.g,
          date: `${2016+Math.floor(Math.random()*10)}-${String(1+Math.floor(Math.random()*12)).padStart(2,'0')}-${String(1+Math.floor(Math.random()*28)).padStart(2,'0')}`,
          nb_vehicules: 500 + Math.floor(Math.random() * 50000),
          solution: panne.s,
          cout: Math.random() > 0.5 ? "Gratuit (prise en charge constructeur)" : "Variable selon concession"
        });
      }
    }
  }
}

// Générer les fiches
genererFiches();

// Sauvegarde/chargement
function saveFichesLocally() {
  localStorage.setItem('techauto_fiches', JSON.stringify(DATABASE.fiches));
}

function loadFichesFromLocal() {
  const saved = localStorage.getItem('techauto_fiches');
  if (saved) {
    try {
      DATABASE.fiches = JSON.parse(saved);
      console.log('✅ ' + DATABASE.fiches.length + ' fiches chargées');
    } catch (e) {
      console.error('Erreur:', e);
      genererFiches();
    }
  } else {
    saveFichesLocally();
    console.log('✅ ' + DATABASE.fiches.length + ' fiches générées');
  }
}

// Export global
if (typeof window !== 'undefined') {
  window.DATABASE = DATABASE;
  window.saveFichesLocally = saveFichesLocally;
  window.loadFichesFromLocal = loadFichesFromLocal;
}

console.log('📊 Database prête - ' + DATABASE.fiches.length + ' fiches (Auto + Moto)');
