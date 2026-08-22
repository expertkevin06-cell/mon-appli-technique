// TECHNIQUE AUTO BY KEVIN - Version minimale fonctionnelle
const DATABASE = {
  marques: {
    "Peugeot": { logo: "🇫🇷", couleur: "#1B3A6B" },
    "Renault": { logo: "🇫🇷", couleur: "#FFCC33" },
    "Citroën": { logo: "🇫🇷", couleur: "#CC0000" },
    "Volkswagen": { logo: "🇩🇪", couleur: "#001E50" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Mercedes": { logo: "🇩", couleur: "#333333" },
    "Audi": { logo: "🇩🇪", couleur: "#BB0A30" },
    "Ford": { logo: "🇺🇸", couleur: "#003478" },
    "Toyota": { logo: "🇯", couleur: "#EB0A1E" },
    "Nissan": { logo: "🇵", couleur: "#C3002F" },
    "Hyundai": { logo: "🇰🇷", couleur: "#002C5F" },
    "Kia": { logo: "🇰🇷", couleur: "#05141F" },
    "Tesla": { logo: "⚡", couleur: "#CC0000" },
    "Dacia": { logo: "🇷🇴", couleur: "#003DA5" },
    "Fiat": { logo: "🇹", couleur: "#9D0A0E" },
    "Opel": { logo: "🇩🇪", couleur: "#FFD700" },
    "Volvo": { logo: "🇸🇪", couleur: "#003057" },
    "Mazda": { logo: "🇵", couleur: "#B00D1E" },
    "Honda": { logo: "🇯🇵", couleur: "#CC0000" },
    "Seat": { logo: "🇪🇸", couleur: "#FFD700" },
    "Skoda": { logo: "🇨", couleur: "#4BA82E" },
    "Mini": { logo: "🇬🇧", couleur: "#000000" },
    "Alfa Romeo": { logo: "🇮🇹", couleur: "#8B0000" },
    "Jaguar": { logo: "🇬", couleur: "#000000" },
    "Alpine": { logo: "🇷", couleur: "#0055A4" },
    "BYD": { logo: "🇨🇳", couleur: "#003DA5" },
    "Jeep": { logo: "🇺🇸", couleur: "#1E5631" }
  },
  marquesMoto: {
    "Yamaha": { logo: "🇯", couleur: "#003DA5" },
    "Kawasaki": { logo: "🇵", couleur: "#00A651" },
    "BMW Moto": { logo: "🇩🇪", couleur: "#0066B1" },
    "Honda Moto": { logo: "🇯", couleur: "#CC0000" }
  },
  fiches: []
};

// Pannes par marque et type moteur
const PANNES = {
  "Peugeot": {
    "Essence": [
      {t:"Courroie distribution 1.2 PureTech",d:"Désagrégation dans l'huile. Rappel 500k véhicules",s:"Remplacement courroie + pompe",g:"Très grave"},
      {t:"Consommation huile 1.2 PureTech",d:"Jusqu'à 1L/1000km",s:"Remplacement segments",g:"Grave"},
      {t:"Turbo 1.2 PureTech",d:"Perte puissance, sifflement",s:"Remplacement turbo",g:"Grave"}
    ],
    "Diesel": [
      {t:"Turbo 1.5 BlueHDi",d:"Perte puissance, fumée bleue",s:"Remplacement turbo",g:"Grave"},
      {t:"FAP 1.5 BlueHDi",d:"Colmatage prématuré",s:"Régénération ou remplacement",g:"Moyenne"},
      {t:"AdBlue défaillant",d:"Démarrage impossible",s:"Remplacement réservoir",g:"Grave"}
    ],
    "Hybride": [
      {t:"Batterie hybride",d:"Perte autonomie",s:"Remplacement modules",g:"Grave"}
    ],
    "Électrique": [
      {t:"Batterie haute tension",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}
    ]
  },
  "Renault": {
    "Essence": [
      {t:"Turbo 1.3 TCe",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"},
      {t:"Chaîne distribution",d:"Allongement avant 100k km",s:"Remplacement kit",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Boîte EDC",d:"À-coups, voyant",s:"Remplacement mécatronique",g:"Grave"},
      {t:"Injecteurs 1.5 dCi",d:"Injecteurs grippés",s:"Remplacement injecteurs",g:"Grave"}
    ],
    "Hybride": [
      {t:"Système E-Tech",d:"Perte autonomie",s:"Diagnostic système",g:"Grave"}
    ],
    "Électrique": [
      {t:"Batterie Zoe",d:"Perte autonomie",s:"Remplacement modules",g:"Grave"}
    ]
  },
  "Volkswagen": {
    "Essence": [
      {t:"Consommation huile TSI",d:"1L/1000km moteurs EA888",s:"Remplacement segments",g:"Grave"},
      {t:"Chaîne distribution",d:"Allongement chaîne",s:"Remplacement kit",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Dieselgate",d:"Logiciel truqueur",s:"Mise à jour logiciel",g:"Grave"},
      {t:"Boîte DSG7",d:"Mécatronique HS",s:"Remplacement",g:"Grave"}
    ],
    "Électrique": [
      {t:"Batterie ID.3",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}
    ]
  },
  "BMW": {
    "Essence": [
      {t:"Chaîne distribution N47",d:"Rupture chaîne",s:"Remplacement kit",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Chaîne N47",d:"Rupture côté boîte",s:"Remplacement kit",g:"Très grave"}
    ]
  },
  "Mercedes": {
    "Essence": [
      {t:"Boîte 7G-Tronic",d:"À-coups, calages",s:"Remplacement boîte",g:"Grave"}
    ],
    "Diesel": [
      {t:"Injecteurs OM651",d:"Injecteurs grippés",s:"Remplacement",g:"Grave"}
    ]
  },
  "Tesla": {
    "Électrique": [
      {t:"Batterie haute tension",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"},
      {t:"Écran tactile",d:"Écran noir, lag",s:"Remplacement MCU",g:"Moyenne"}
    ]
  },
  "Toyota": {
    "Hybride": [
      {t:"Batterie hybride",d:"Perte autonomie",s:"Remplacement modules",g:"Grave"}
    ]
  },
  "Ford": {
    "Essence": [
      {t:"Courroie 1.0 EcoBoost",d:"Courroie dans huile",s:"Remplacement courroie",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Boîte Powershift",d:"À-coups, embrayage",s:"Remplacement",g:"Grave"}
    ]
  },
  "Hyundai": {
    "Diesel": [
      {t:"Injecteurs 1.6 CRDi",d:"Injecteurs grippés",s:"Remplacement",g:"Grave"}
    ]
  },
  "Kia": {
    "Diesel": [
      {t:"Injecteurs 1.6 CRDi",d:"Injecteurs grippés",s:"Remplacement",g:"Grave"}
    ]
  }
};

// Modèles avec motorisations
const MODELES = {
  "Peugeot": {
    "208": ["1.2 PureTech 100ch Essence", "1.5 BlueHDi 100ch Diesel", "e-208 100kW Électrique"],
    "2008": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "e-2008 100kW Électrique"],
    "308": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 180ch Hybride"],
    "3008": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.5 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "e-3008 157kW Électrique"],
    "508": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride"]
  },
  "Renault": {
    "Clio": ["1.0 TCe 100ch Essence", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride"],
    "Megane": ["1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "E-Tech Electric 160kW Électrique"],
    "Captur": ["1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride"]
  },
  "Volkswagen": {
    "Golf": ["1.5 TSI 150ch Essence", "2.0 TDI 150ch Diesel", "1.4 GTE 204ch Hybride"],
    "Polo": ["1.0 TSI 110ch Essence", "1.6 TDI 80ch Diesel"],
    "Tiguan": ["1.5 TSI 150ch Essence", "2.0 TDI 150ch Diesel"]
  },
  "BMW": {
    "Série 1": ["118i 140ch Essence", "118d 150ch Diesel"],
    "Série 3": ["320i 184ch Essence", "320d 190ch Diesel", "330e 292ch Hybride"]
  },
  "Mercedes": {
    "Classe A": ["A180 136ch Essence", "A180d 116ch Diesel", "A250e 218ch Hybride"],
    "Classe C": ["C200 184ch Essence", "C200d 160ch Diesel"]
  },
  "Tesla": {
    "Model 3": ["Standard Range Plus 283ch Électrique", "Long Range 346ch Électrique", "Performance 450ch Électrique"],
    "Model Y": ["Long Range 346ch Électrique", "Performance 450ch Électrique"]
  },
  "Toyota": {
    "Yaris": ["1.5 VVT-i 111ch Essence", "1.5 Hybrid 116ch Hybride"],
    "Corolla": ["1.2 Turbo 116ch Essence", "1.8 Hybrid 122ch Hybride", "2.0 Hybrid 184ch Hybride"]
  },
  "Ford": {
    "Fiesta": ["1.0 EcoBoost 100ch Essence", "1.5 EcoBlue 120ch Diesel"],
    "Focus": ["1.0 EcoBoost 125ch Essence", "1.5 EcoBlue 120ch Diesel"]
  },
  "Hyundai": {
    "i20": ["1.0 T-GDi 100ch Essence", "1.5 CRDi 100ch Diesel"],
    "Tucson": ["1.6 T-GDi 150ch Essence", "1.6 CRDi 136ch Diesel", "1.6 Hybrid 230ch Hybride"]
  },
  "Kia": {
    "Sportage": ["1.6 T-GDi 150ch Essence", "1.6 CRDi 136ch Diesel", "1.6 Hybrid 230ch Hybride"]
  }
};

// Génération des fiches
function genererFiches() {
  let id = 1;
  const annees = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  
  for (const [marque, modeles] of Object.entries(MODELES)) {
    for (const [modele, motorisations] of Object.entries(modeles)) {
      for (const motorisation of motorisations) {
        let typeMoteur = "Essence";
        if (motorisation.toLowerCase().includes('électrique') || motorisation.toLowerCase().includes('electric')) {
          typeMoteur = "Électrique";
        } else if (motorisation.toLowerCase().includes('hybrid')) {
          typeMoteur = "Hybride";
        } else if (motorisation.toLowerCase().includes('diesel') || motorisation.toLowerCase().includes('tdi') || motorisation.toLowerCase().includes('hdi') || motorisation.toLowerCase().includes('dci')) {
          typeMoteur = "Diesel";
        }
        
        const pannesMarque = PANNES[marque];
        const pannes = pannesMarque ? (pannesMarque[typeMoteur] || pannesMarque["Essence"]) : [];
        
        const nbFiches = Math.max(pannes.length, 3);
        for (let i = 0; i < nbFiches; i++) {
          const panne = pannes[i % pannes.length] || {t:"Révision générale",d:"Entretien périodique",s:"Vidange + filtres",g:"Faible"};
          const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
          const anneeFin = Math.min(anneeDebut + 2, 2026);
          
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
            nb_vehicules: 1000 + Math.floor(Math.random() * 50000),
            solution: panne.s,
            cout: Math.random() > 0.5 ? "Gratuit (prise en charge constructeur)" : "Variable selon concession"
          });
        }
      }
    }
  }
  
  console.log('✅ ' + DATABASE.fiches.length + ' fiches générées');
}

genererFiches();

if (typeof window !== 'undefined') {
  window.DATABASE = DATABASE;
  window.saveFichesLocally = function() {
    localStorage.setItem('techauto_fiches', JSON.stringify(DATABASE.fiches));
  };
  window.loadFichesFromLocal = function() {
    const saved = localStorage.getItem('techauto_fiches');
    if (saved) {
      try {
        DATABASE.fiches = JSON.parse(saved);
        console.log('✅ ' + DATABASE.fiches.length + ' fiches chargées');
      } catch (e) {
        console.error('❌ Erreur:', e);
      }
    }
  };
}
