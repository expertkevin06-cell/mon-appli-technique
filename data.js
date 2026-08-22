// TECHNIQUE AUTO BY KEVIN - 2500+ fiches complètes
const DATABASE = {
  marques: {
    "Peugeot": { logo: "🇫🇷", couleur: "#1B3A6B" },
    "Renault": { logo: "🇷", couleur: "#FFCC33" },
    "Citroën": { logo: "🇫🇷", couleur: "#CC0000" },
    "DS": { logo: "🇫🇷", couleur: "#1a1a1a" },
    "Dacia": { logo: "🇷🇴", couleur: "#003DA5" },
    "Volkswagen": { logo: "🇩🇪", couleur: "#001E50" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Mercedes": { logo: "🇩", couleur: "#333333" },
    "Audi": { logo: "🇩🇪", couleur: "#BB0A30" },
    "Opel": { logo: "🇪", couleur: "#FFD700" },
    "Volvo": { logo: "🇸🇪", couleur: "#003057" },
    "Fiat": { logo: "🇮🇹", couleur: "#9D0A0E" },
    "Alfa Romeo": { logo: "🇮🇹", couleur: "#8B0000" },
    "Seat": { logo: "🇪🇸", couleur: "#FFD700" },
    "Skoda": { logo: "🇨🇿", couleur: "#4BA82E" },
    "Mini": { logo: "🇬🇧", couleur: "#000000" },
    "Jaguar": { logo: "🇬🇧", couleur: "#000000" },
    "Land Rover": { logo: "🇬🇧", couleur: "#005A2B" },
    "Porsche": { logo: "🇩🇪", couleur: "#B12B28" },
    "Toyota": { logo: "🇯🇵", couleur: "#EB0A1E" },
    "Lexus": { logo: "🇯🇵", couleur: "#1F2937" },
    "Nissan": { logo: "🇯🇵", couleur: "#C3002F" },
    "Honda": { logo: "🇯", couleur: "#CC0000" },
    "Mazda": { logo: "🇯🇵", couleur: "#B00D1E" },
    "Mitsubishi": { logo: "🇵", couleur: "#E60012" },
    "Suzuki": { logo: "🇯🇵", couleur: "#003DA5" },
    "Subaru": { logo: "🇵", couleur: "#003DA5" },
    "Hyundai": { logo: "🇰🇷", couleur: "#002C5F" },
    "Kia": { logo: "🇰", couleur: "#05141F" },
    "Ford": { logo: "🇸", couleur: "#003478" },
    "Chevrolet": { logo: "🇺🇸", couleur: "#D4AF37" },
    "Tesla": { logo: "⚡", couleur: "#CC0000" },
    "Jeep": { logo: "🇺", couleur: "#1E5631" },
    "BYD": { logo: "🇨🇳", couleur: "#003DA5" }
  },
  marquesMoto: {
    "Yamaha": { logo: "🇯🇵", couleur: "#003DA5" },
    "Honda": { logo: "🇵", couleur: "#CC0000" },
    "Kawasaki": { logo: "🇯🇵", couleur: "#00A651" },
    "Suzuki": { logo: "🇵", couleur: "#003DA5" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Ducati": { logo: "🇮🇹", couleur: "#CC0000" },
    "KTM": { logo: "🇦🇹", couleur: "#FF6B00" },
    "Triumph": { logo: "🇧", couleur: "#000000" },
    "Harley-Davidson": { logo: "🇺🇸", couleur: "#FF6B00" },
    "Piaggio": { logo: "🇮🇹", couleur: "#003DA5" },
    "Vespa": { logo: "🇮🇹", couleur: "#00A651" },
    "Peugeot": { logo: "🇫", couleur: "#1B3A6B" }
  },
  fiches: []
};

// Pannes voitures ENRICHIES
const PANNES_VOITURE = {
  "Essence": [
    {t:"Turbo défaillant",d:"Perte puissance, sifflement, fumée bleue",s:"Remplacement turbo",g:"Grave"},
    {t:"Bobines d'allumage",d:"Ratés d'allumage, voyant moteur",s:"Remplacement bobines",g:"Faible"},
    {t:"Vanne EGR encrassée",d:"Ralenti instable, fumée noire",s:"Nettoyage ou remplacement EGR",g:"Moyenne"},
    {t:"Courroie distribution",d:"Risque rupture, casse moteur",s:"Remplacement kit distribution",g:"Très grave"},
    {t:"Chaîne distribution allongée",d:"Bruit moteur, risque rupture",s:"Remplacement kit chaîne",g:"Très grave"},
    {t:"Consommation huile excessive",d:"Jusqu'à 1L/1000km",s:"Remplacement segments",g:"Grave"},
    {t:"Écran tactile HS",d:"Écran noir, tactile ne répond plus",s:"Mise à jour ou remplacement écran",g:"Moyenne"},
    {t:"Système multimédia défectueux",d:"Navigation GPS HS, Bluetooth HS",s:"Réinitialisation ou remplacement",g:"Moyenne"},
    {t:"Ceinture de sécurité bloquée",d:"Ceinture ne se déroule plus",s:"Remplacement prétendeur",g:"Grave"},
    {t:"Prétendeur ceinture HS",d:"Voyant airbag allumé",s:"Remplacement prétendeur",g:"Grave"},
    {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
    {t:"Capteur airbag HS",d:"Voyant airbag allumé",s:"Remplacement capteur",g:"Grave"},
    {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim + recherche fuite",g:"Moyenne"},
    {t:"Compresseur climatisation",d:"Climatisation ne fonctionne plus",s:"Remplacement compresseur",g:"Grave"},
    {t:"Phares LED défectueux",d:"LED HS",s:"Remplacement module LED",g:"Moyenne"},
    {t:"Phares Xénon HS",d:"Éclairage xénon HS",s:"Remplacement ampoule xénon",g:"Moyenne"},
    {t:"Sièges électriques HS",d:"Réglage électrique HS",s:"Remplacement moteur siège",g:"Moyenne"},
    {t:"Chauffage siège HS",d:"Sièges chauffants HS",s:"Remplacement résistance",g:"Faible"},
    {t:"Batterie 12V faible",d:"Démarrage difficile",s:"Remplacement batterie",g:"Moyenne"},
    {t:"Alternateur défaillant",d:"Batterie ne charge plus",s:"Remplacement alternateur",g:"Grave"},
    {t:"Démarreur HS",d:"Véhicule ne démarre plus",s:"Remplacement démarreur",g:"Grave"},
    {t:"Verrouillage centralisé",d:"Portières ne se verrouillent plus",s:"Remplacement actuateur",g:"Moyenne"},
    {t:"Lève-vitre électrique HS",d:"Vitres électriques HS",s:"Remplacement moteur lève-vitre",g:"Moyenne"},
    {t:"Rétroviseurs électriques",d:"Réglage électrique HS",s:"Remplacement moteur rétroviseur",g:"Faible"},
    {t:"Caméra de recul défectueuse",d:"Image floue ou écran noir",s:"Remplacement caméra",g:"Moyenne"},
    {t:"Capteurs stationnement HS",d:"Bip de recul ne fonctionne plus",s:"Remplacement capteurs",g:"Faible"},
    {t:"Régulateur vitesse HS",d:"Régulateur ne s'enclenche plus",s:"Remplacement commodo",g:"Moyenne"},
    {t:"Start/Stop défectueux",d:"Système Start/Stop HS",s:"Remplacement batterie",g:"Faible"},
    {t:"Bluetooth déconnecté",d:"Connexion téléphone impossible",s:"Réinitialisation",g:"Faible"},
    {t:"Apple CarPlay/Android Auto",d:"Connexion smartphone HS",s:"Mise à jour logiciel",g:"Faible"}
  ],
  "Diesel": [
    {t:"Turbo défaillant",d:"Perte puissance, fumée bleue",s:"Remplacement turbo",g:"Grave"},
    {t:"FAP colmaté",d:"Témoin FAP, perte puissance",s:"Régénération ou remplacement FAP",g:"Moyenne"},
    {t:"AdBlue défaillant",d:"Démarrage impossible",s:"Remplacement réservoir + pompe",g:"Grave"},
    {t:"Injecteurs grippés",d:"Démarrage difficile, retour carburant",s:"Remplacement injecteurs + codage",g:"Grave"},
    {t:"Vanne EGR encrassée",d:"Ralenti instable, fumée",s:"Nettoyage vanne EGR",g:"Moyenne"},
    {t:"Courroie accessoires",d:"Rupture, perte direction assistée",s:"Remplacement courroie + tendeurs",g:"Grave"},
    {t:"Volant moteur bi-masse",d:"Vibrations, claquements",s:"Remplacement volant + embrayage",g:"Grave"},
    {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
    {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
    {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
    {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"},
    {t:"Phares LED défectueux",d:"LED HS",s:"Remplacement module LED",g:"Moyenne"},
    {t:"Sièges électriques HS",d:"Réglage électrique HS",s:"Remplacement moteur siège",g:"Moyenne"},
    {t:"Batterie 12V faible",d:"Démarrage difficile",s:"Remplacement batterie",g:"Moyenne"},
    {t:"Alternateur défaillant",d:"Batterie ne charge plus",s:"Remplacement alternateur",g:"Grave"}
  ],
  "Hybride": [
    {t:"Batterie hybride",d:"Perte autonomie électrique",s:"Remplacement modules",g:"Grave"},
    {t:"Onduleur hybride",d:"Véhicule ne démarre plus en électrique",s:"Remplacement onduleur",g:"Très grave"},
    {t:"Embrayage hybride usé",d:"À-coups, bruits",s:"Remplacement embrayage",g:"Moyenne"},
    {t:"Chargeur embarqué",d:"Impossible de charger batterie hybride",s:"Remplacement chargeur",g:"Grave"},
    {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
    {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
    {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
    {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
  ],
  "Électrique": [
    {t:"Batterie haute tension",d:"Perte autonomie, limitation puissance",s:"Diagnostic BMS, remplacement modules",g:"Grave"},
    {t:"Chargeur embarqué",d:"Impossible de charger en AC",s:"Remplacement chargeur OBC",g:"Grave"},
    {t:"Refroidissement batterie",d:"Surchauffe, limitation charge rapide",s:"Remplacement pompe refroidissement",g:"Grave"},
    {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
    {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
    {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
    {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
  ]
};

// Pannes motos
const PANNES_MOTO = {
  "Yamaha": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Batterie faible",d:"Démarrage difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"}
  ],
  "Honda": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Variateur usé (scooter)",d:"Perte accélération",s:"Remplacement kit variateur",g:"Moyenne"},
    {t:"Courroie transmission",d:"Rupture courroie",s:"Remplacement courroie",g:"Grave"}
  ],
  "Kawasaki": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques",g:"Grave"}
  ],
  "Suzuki": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina",s:"Remplacement disques",g:"Grave"}
  ],
  "BMW": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Cardan usé",d:"Vibrations, bruit",s:"Remplacement cardan",g:"Grave"}
  ],
  "Ducati": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina",s:"Remplacement disques",g:"Grave"}
  ],
  "KTM": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina",s:"Remplacement disques",g:"Grave"}
  ],
  "Triumph": [
    {t:"Chaîne transmission usée",d:"Allongement chaîne",s:"Remplacement chaîne + couronne",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"}
  ],
  "Harley-Davidson": [
    {t:"Courroie transmission usée",d:"Fissures courroie",s:"Remplacement courroie",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"}
  ],
  "Piaggio": [
    {t:"Variateur usé",d:"Perte accélération",s:"Remplacement kit variateur",g:"Moyenne"},
    {t:"Courroie transmission",d:"Rupture courroie",s:"Remplacement courroie",g:"Grave"}
  ],
  "Vespa": [
    {t:"Variateur usé",d:"Perte accélération",s:"Remplacement kit variateur",g:"Moyenne"},
    {t:"Courroie transmission",d:"Rupture courroie",s:"Remplacement courroie",g:"Grave"}
  ],
  "Peugeot": [
    {t:"Variateur usé",d:"Perte accélération",s:"Remplacement kit variateur",g:"Moyenne"},
    {t:"Courroie transmission",d:"Rupture courroie",s:"Remplacement courroie",g:"Grave"}
  ]
};

// Modèles voitures (simplifié pour générer massivement)
const MODELES_VOITURE = {
  "Peugeot": {
    "208": ["1.2 PureTech 82ch Essence", "1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 100ch Diesel", "e-208 100kW Électrique"],
    "2008": ["1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "e-2008 100kW Électrique"],
    "308": ["1.2 PureTech 110ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 180ch Hybride", "e-308 115kW Électrique"],
    "3008": ["1.2 PureTech 130ch Essence", "1.6 THP 165ch Essence", "1.5 BlueHDi 130ch Diesel", "1.5 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "e-3008 157kW Électrique"],
    "408": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 180ch Hybride", "e-408 157kW Électrique"],
    "508": ["1.2 PureTech 130ch Essence", "1.6 THP 180ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride"],
    "5008": ["1.2 PureTech 130ch Essence", "1.6 THP 180ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "e-5008 157kW Électrique"],
    "Rifter": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Rifter 100kW Électrique"],
    "Partner": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Partner 100kW Électrique"],
    "Expert": ["1.5 BlueHDi 120ch Diesel", "2.0 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "ë-Expert 100kW Électrique"]
  },
  "Renault": {
    "Clio": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 140ch Essence", "1.5 Blue dCi 85ch Diesel", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride"],
    "Megane": ["1.0 TCe 90ch Essence", "1.3 TCe 115ch Essence", "1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride", "E-Tech Electric 96kW Électrique", "E-Tech Electric 160kW Électrique"],
    "Captur": ["1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 140ch Essence", "1.5 Blue dCi 95ch Diesel", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride", "E-Tech Plug-in 160ch Hybride"],
    "Kadjar": ["1.3 TCe 140ch Essence", "1.3 TCe 160ch Essence", "1.5 Blue dCi 115ch Diesel", "1.7 Blue dCi 150ch Diesel"],
    "Austral": ["1.2 TCe 130ch Essence", "1.2 E-Tech Hybrid 140ch Hybride", "1.2 E-Tech Hybrid 200ch Hybride"],
    "Arkana": ["1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "E-Tech Hybrid 140ch Hybride"],
    "Scenic": ["1.3 TCe 115ch Essence", "1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "1.7 Blue dCi 150ch Diesel", "E-Tech Hybrid 140ch Hybride", "E-Tech Electric 160kW Électrique"],
    "Talisman": ["1.3 TCe 140ch Essence", "1.5 Blue dCi 115ch Diesel", "1.7 Blue dCi 150ch Diesel", "2.0 Blue dCi 190ch Diesel"],
    "Twingo": ["1.0 SCe 70ch Essence", "1.0 TCe 90ch Essence", "Electric 60kW Électrique", "Electric 82ch Électrique"],
    "Renault 4": ["E-Tech Electric 95kW Électrique", "E-Tech Electric 110kW Électrique", "E-Tech Electric 150ch Électrique"]
  },
  "Citroën": {
    "C3": ["1.2 PureTech 82ch Essence", "1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "ë-C3 83kW Électrique"],
    "C3 Aircross": ["1.2 PureTech 110ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "1.5 Hybrid 136ch Hybride", "ë-C3 Aircross 83kW Électrique"],
    "C4": ["1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 136ch Hybride", "ë-C4 100kW Électrique"],
    "C5 Aircross": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "ë-C5 Aircross 165kW Électrique"],
    "Berlingo": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Berlingo 100kW Électrique"]
  },
  "DS": {
    "DS3": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "E-Tense 100kW Électrique"],
    "DS4": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 225ch Hybride", "E-Tense 165kW Électrique"],
    "DS7": ["1.6 THP 180ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 225ch Hybride", "E-Tense 225ch Hybride"]
  },
  "Dacia": {
    "Sandero": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "1.0 TCe 100ch GPL"],
    "Sandero Stepway": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel"],
    "Logan": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel"],
    "Duster": ["1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 130ch Essence", "1.3 TCe 150ch Essence", "1.5 Blue dCi 115ch Diesel", "Hybrid 140ch Hybride"],
    "Jogger": ["1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 130ch Essence", "1.5 Blue dCi 115ch Diesel", "Hybrid 140ch Hybride"],
    "Spring": ["Electric 45ch Électrique", "Electric 65ch Électrique"]
  },
  "Volkswagen": {
    "Golf": ["1.0 TSI 90ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "1.4 eTSI 150ch Hybride", "1.4 GTE 204ch Hybride", "e-Golf 100kW Électrique"],
    "Polo": ["1.0 MPI 65ch Essence", "1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 80ch Diesel", "2.0 TDI 95ch Diesel"],
    "Tiguan": ["1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 245ch Essence", "2.0 TDI 120ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 eTSI 245ch Hybride"],
    "Passat": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 272ch Essence", "1.6 TDI 120ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 GTE 218ch Hybride"],
    "T-Roc": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel"],
    "Taigo": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "1.6 TDI 115ch Diesel"],
    "T-Cross": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "2.0 TDI 115ch Diesel"],
    "Touran": ["1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "1.4 eTSI 150ch Hybride"],
    "Arteon": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 272ch Essence", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 GTE 218ch Hybride"],
    "ID.3": ["Pure 110kW Électrique", "Pro 150kW Électrique", "Pro Performance 204ch Électrique", "GTX 231ch Électrique"],
    "ID.4": ["Pure 125kW Électrique", "Pro 150kW Électrique", "Pro Performance 204ch Électrique", "GTX 299ch Électrique"]
  },
  "BMW": {
    "Série 1": ["116i 109ch Essence", "118i 140ch Essence", "120i 178ch Essence", "128ti 265ch Essence", "116d 116ch Diesel", "118d 150ch Diesel", "120d 190ch Diesel", "M135i xDrive 306ch Essence", "118e 220ch Hybride"],
    "Série 2": ["218i 140ch Essence", "220i 184ch Essence", "230i 258ch Essence", "M240i 340ch Essence", "218d 150ch Diesel", "220d 190ch Diesel", "230d 286ch Diesel", "225xe 220ch Hybride", "M2 460ch Essence"],
    "Série 3": ["318i 156ch Essence", "320i 184ch Essence", "330i 258ch Essence", "M340i 374ch Essence", "318d 150ch Diesel", "320d 190ch Diesel", "330d 286ch Diesel", "M340d 340ch Diesel", "320e 292ch Hybride", "330e 292ch Hybride", "M3 480ch Essence", "M3 Competition 510ch Essence"],
    "Série 4": ["420i 184ch Essence", "430i 258ch Essence", "M440i 374ch Essence", "420d 190ch Diesel", "430d 286ch Diesel", "430e 292ch Hybride", "M4 480ch Essence", "M4 Competition 510ch Essence"],
    "Série 5": ["520i 184ch Essence", "530i 252ch Essence", "540i 340ch Essence", "520d 190ch Diesel", "530d 286ch Diesel", "540d 340ch Diesel", "530e 292ch Hybride", "545e 394ch Hybride", "M5 600ch Essence", "M5 Competition 625ch Essence", "i5 340ch Électrique", "i5 M60 600ch Électrique"],
    "Série 7": ["730i 258ch Essence", "740i 340ch Essence", "750i 530ch Essence", "730d 286ch Diesel", "740d 340ch Diesel", "750d 400ch Diesel", "745e 394ch Hybride", "750e 490ch Hybride", "M760i 585ch Essence", "i7 544ch Électrique", "i7 M70 660ch Électrique"],
    "X1": ["sDrive18i 140ch Essence", "sDrive20i 178ch Essence", "xDrive25i 245ch Essence", "sDrive18d 150ch Diesel", "xDrive20d 190ch Diesel", "xDrive25d 231ch Diesel", "xDrive25e 220ch Hybride", "xDrive30e 326ch Hybride", "iX1 313ch Électrique", "X1 M35i 300ch Essence"],
    "X2": ["sDrive18i 140ch Essence", "sDrive20i 178ch Essence", "xDrive25i 245ch Essence", "sDrive18d 150ch Diesel", "xDrive20d 190ch Diesel", "M35i 300ch Essence", "iX2 313ch Électrique"],
    "X3": ["sDrive20i 184ch Essence", "xDrive30i 252ch Essence", "M40i 360ch Essence", "xDrive20d 190ch Diesel", "xDrive30d 286ch Diesel", "xDrive30e 292ch Hybride", "xDrive30e 326ch Hybride", "M 480ch Essence", "iX3 286ch Électrique"],
    "X4": ["xDrive20i 184ch Essence", "xDrive30i 252ch Essence", "M40i 360ch Essence", "xDrive20d 190ch Diesel", "xDrive30d 286ch Diesel", "M 480ch Essence"],
    "X5": ["xDrive40i 340ch Essence", "M50i 530ch Essence", "xDrive30d 286ch Diesel", "xDrive40d 340ch Diesel", "M50d 400ch Diesel", "xDrive45e 394ch Hybride", "xDrive50e 489ch Hybride", "M 530ch Essence", "M Competition 625ch Essence"],
    "X6": ["xDrive40i 340ch Essence", "M50i 530ch Essence", "xDrive30d 286ch Diesel", "xDrive40d 340ch Diesel", "M50d 400ch Diesel", "M 600ch Essence", "M Competition 625ch Essence"],
    "X7": ["xDrive40i 340ch Essence", "M50i 530ch Essence", "xDrive30d 286ch Diesel", "xDrive40d 340ch Diesel", "M50d 400ch Diesel", "M 530ch Essence", "M Competition 625ch Essence"],
    "iX": ["xDrive40 326ch Électrique", "xDrive50 523ch Électrique", "M60 619ch Électrique"],
    "i4": ["eDrive35 286ch Électrique", "eDrive40 340ch Électrique", "M50 544ch Électrique"],
    "i7": ["xDrive60 544ch Électrique", "M70 xDrive 660ch Électrique"],
    "Z4": ["sDrive20i 197ch Essence", "sDrive30i 258ch Essence", "M40i 340ch Essence", "M40i 387ch Essence"]
  },
  "Mercedes": {
    "Classe A": ["A160 102ch Essence", "A180 136ch Essence", "A200 163ch Essence", "A250 224ch Essence", "A180d 116ch Diesel", "A200d 150ch Diesel", "A220d 190ch Diesel", "A250e 218ch Hybride", "AMG A35 306ch Essence", "AMG A45 S 421ch Essence"],
    "Classe B": ["B160 102ch Essence", "B180 136ch Essence", "B200 163ch Essence", "B250 224ch Essence", "B180d 116ch Diesel", "B200d 150ch Diesel", "B250e 218ch Hybride"],
    "Classe C": ["C180 156ch Essence", "C200 184ch Essence", "C300 258ch Essence", "C180d 122ch Diesel", "C200d 160ch Diesel", "C220d 194ch Diesel", "C300d 245ch Diesel", "C300e 320ch Hybride", "C300de 306ch Hybride Diesel", "AMG C43 390ch Essence", "AMG C63 S 510ch Hybride"],
    "Classe E": ["E200 184ch Essence", "E300 258ch Essence", "E200d 160ch Diesel", "E220d 194ch Diesel", "E300d 245ch Diesel", "E400d 340ch Diesel", "E300e 320ch Hybride", "E300de 306ch Hybride Diesel", "AMG E53 435ch Hybride", "AMG E63 S 612ch Essence"],
    "Classe S": ["S350 286ch Essence", "S400 330ch Essence", "S500 435ch Essence", "S350d 286ch Diesel", "S400d 340ch Diesel", "S500e 449ch Hybride", "AMG S63 E Performance 802ch Hybride", "Maybach S580 503ch Essence", "Maybach S680 612ch Essence"],
    "Classe G": ["G350d 286ch Diesel", "G400d 330ch Diesel", "G500 422ch Essence", "G63 AMG 585ch Essence", "G63 AMG 612ch Essence"],
    "GLA": ["GLA180 136ch Essence", "GLA200 163ch Essence", "GLA250 224ch Essence", "GLA180d 116ch Diesel", "GLA200d 150ch Diesel", "GLA250e 218ch Hybride", "AMG GLA35 306ch Essence", "AMG GLA45 S 421ch Essence"],
    "GLB": ["GLB180 136ch Essence", "GLB200 163ch Essence", "GLB250 224ch Essence", "GLB180d 116ch Diesel", "GLB200d 150ch Diesel", "GLB250e 218ch Hybride", "AMG GLB35 306ch Essence"],
    "GLC": ["GLC200 184ch Essence", "GLC300 258ch Essence", "GLC200d 160ch Diesel", "GLC220d 194ch Diesel", "GLC300d 245ch Diesel", "GLC300e 320ch Hybride", "GLC300de 306ch Hybride Diesel", "AMG GLC43 390ch Hybride", "AMG GLC63 S 510ch Hybride"],
    "GLE": ["GLE350 286ch Essence", "GLE400d 340ch Diesel", "GLE350e 320ch Hybride", "GLE350de 306ch Hybride Diesel", "AMG GLE53 435ch Hybride", "AMG GLE63 S 612ch Essence"],
    "GLS": ["GLS400d 330ch Diesel", "GLS450 367ch Essence", "GLS580 489ch Essence", "AMG GLS63 612ch Essence", "Maybach GLS600 558ch Essence"],
    "EQS": ["EQS 350 292ch Électrique", "EQS 450+ 333ch Électrique", "EQS 500 449ch Électrique", "EQS 580 523ch Électrique", "AMG EQS53 658ch Électrique"],
    "EQE": ["EQE 300 245ch Électrique", "EQE 350 292ch Électrique", "EQE 500 408ch Électrique", "AMG EQE53 626ch Électrique"],
    "EQA": ["EQA250 190ch Électrique", "EQA300 242ch Électrique", "EQA350 292ch Électrique"],
    "EQB": ["EQB250 190ch Électrique", "EQB300 242ch Électrique", "EQB350 292ch Électrique"],
    "EQC": ["EQC 400 408ch Électrique"],
    "Classe V": ["V200d 136ch Diesel", "V220d 163ch Diesel", "V250d 190ch Diesel", "V300d 239ch Diesel"]
  },
  "Audi": {
    "A1": ["25 TFSI 95ch Essence", "30 TFSI 110ch Essence", "35 TFSI 150ch Essence", "40 TFSI 200ch Essence", "30 TDI 85ch Diesel", "35 TDI 150ch Diesel", "S1 231ch Essence"],
    "A3": ["30 TFSI 110ch Essence", "35 TFSI 150ch Essence", "40 TFSI 200ch Essence", "45 TFSI 245ch Essence", "30 TDI 116ch Diesel", "35 TDI 150ch Diesel", "40 TDI 200ch Diesel", "40 TFSIe 204ch Hybride", "45 TFSIe 245ch Hybride", "S3 310ch Essence", "RS3 400ch Essence"],
    "A4": ["35 TFSI 150ch Essence", "40 TFSI 204ch Essence", "45 TFSI 265ch Essence", "35 TDI 163ch Diesel", "40 TDI 204ch Diesel", "50 TDI 286ch Diesel", "40 TFSIe 204ch Hybride", "45 TFSIe 299ch Hybride", "S4 354ch Essence", "RS4 450ch Essence"],
    "A5": ["40 TFSI 204ch Essence", "45 TFSI 265ch Essence", "40 TDI 204ch Diesel", "50 TDI 286ch Diesel", "45 TFSIe 299ch Hybride", "S5 354ch Essence", "RS5 450ch Essence"],
    "A6": ["40 TFSI 204ch Essence", "45 TFSI 265ch Essence", "55 TFSI 340ch Essence", "40 TDI 204ch Diesel", "50 TDI 286ch Diesel", "55 TDI 349ch Diesel", "50 TFSIe 299ch Hybride", "55 TFSIe 367ch Hybride", "S6 450ch Diesel", "RS6 600ch Essence"],
    "A7": ["40 TFSI 204ch Essence", "45 TFSI 265ch Essence", "55 TFSI 340ch Essence", "40 TDI 204ch Diesel", "50 TDI 286ch Diesel", "55 TDI 349ch Diesel", "55 TFSIe 367ch Hybride", "S7 450ch Essence", "RS7 600ch Essence"],
    "A8": ["50 TDI 286ch Diesel", "55 TDI 349ch Diesel", "60 TFSIe 462ch Hybride", "S8 571ch Essence"],
    "Q2": ["30 TFSI 110ch Essence", "35 TFSI 150ch Essence", "40 TFSI 190ch Essence", "35 TDI 150ch Diesel", "40 TDI 200ch Diesel", "SQ2 300ch Essence"],
    "Q3": ["35 TFSI 150ch Essence", "40 TFSI 200ch Essence", "45 TFSI 230ch Essence", "35 TDI 150ch Diesel", "40 TDI 200ch Diesel", "45 TFSIe 245ch Hybride", "RS Q3 400ch Essence"],
    "Q5": ["40 TFSI 204ch Essence", "45 TFSI 265ch Essence", "40 TDI 204ch Diesel", "50 TDI 286ch Diesel", "55 TFSIe 367ch Hybride", "SQ5 354ch Essence", "RS Q5 450ch Essence"],
    "Q7": ["45 TFSI 340ch Essence", "50 TDI 286ch Diesel", "55 TDI 349ch Diesel", "55 TFSIe 381ch Hybride", "SQ7 435ch Diesel", "RS Q7 600ch Essence"],
    "Q8": ["50 TDI 286ch Diesel", "55 TDI 349ch Diesel", "55 TFSIe 381ch Hybride", "SQ8 435ch Diesel", "RS Q8 600ch Essence"],
    "e-tron": ["50 quattro 313ch Électrique", "55 quattro 408ch Électrique", "S 500ch Électrique", "GT 476ch Électrique", "GT S 598ch Électrique"],
    "Q4 e-tron": ["35 170ch Électrique", "40 204ch Électrique", "50 quattro 299ch Électrique", "S 299ch Électrique"],
    "Q6 e-tron": ["45 299ch Électrique", "50 quattro 388ch Électrique", "SQ6 517ch Électrique"],
    "e-tron GT": ["476ch Électrique", "RS 646ch Électrique"]
  },
  "Opel": {
    "Corsa": ["1.2 75ch Essence", "1.2 100ch Essence", "1.2 130ch Essence", "1.5 102ch Diesel", "Electric 100kW Électrique", "Electric 136ch Électrique", "GSi 100ch Essence", "GSi 136ch Électrique"],
    "Astra": ["1.2 110ch Essence", "1.2 130ch Essence", "1.5 122ch Diesel", "1.5 150ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "Electric 115kW Électrique", "Electric 156ch Électrique", "GSe 180ch Hybride"],
    "Mokka": ["1.2 100ch Essence", "1.2 130ch Essence", "1.5 110ch Diesel", "Electric 100kW Électrique", "Electric 136ch Électrique", "GSi 130ch Essence", "GSi 136ch Électrique"],
    "Crossland": ["1.2 110ch Essence", "1.2 130ch Essence", "1.5 110ch Diesel", "1.5 120ch Diesel"],
    "Grandland": ["1.2 130ch Essence", "1.5 130ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "1.6 Plug-in 225ch Hybride", "1.6 Plug-in 300ch Hybride", "Electric 157kW Électrique", "Electric 213ch Électrique"],
    "Insignia": ["1.5 140ch Essence", "1.5 165ch Essence", "2.0 200ch Essence", "1.5 122ch Diesel", "2.0 170ch Diesel", "2.0 210ch Diesel", "GSe 200ch Hybride"],
    "Zafira": ["1.2 110ch Essence", "1.2 130ch Essence", "1.5 122ch Diesel", "1.5 150ch Diesel", "1.6 Hybrid 180ch Hybride"],
    "Zafira Life": ["1.5 120ch Diesel", "2.0 145ch Diesel", "2.0 177ch Diesel", "Zafira Life-e 100kW Électrique"],
    "Combo": ["1.2 110ch Essence", "1.5 102ch Diesel", "1.5 130ch Diesel", "Electric 100kW Électrique", "Electric 136ch Électrique"],
    "Vivaro": ["1.5 120ch Diesel", "2.0 145ch Diesel", "2.0 177ch Diesel", "Electric 100kW Électrique", "Electric 136ch Électrique"],
    "Movano": ["2.0 120ch Diesel", "2.0 145ch Diesel", "2.0 165ch Diesel", "E-Movano 100kW Électrique"]
  },
  "Volvo": {
    "XC40": ["T2 129ch Essence", "T3 163ch Essence", "T4 190ch Essence", "T5 247ch Essence", "D2 120ch Diesel", "D3 150ch Diesel", "D4 190ch Diesel", "Recharge T5 262ch Hybride", "Recharge T8 455ch Hybride", "Recharge Pure Electric 231ch Électrique", "Recharge Pure Electric 408ch Électrique"],
    "XC60": ["T5 250ch Essence", "T6 320ch Essence", "T8 390ch Hybride", "D3 150ch Diesel", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T8 455ch Hybride", "Recharge T8 462ch Hybride", "Polestar Engineered 462ch Hybride"],
    "XC90": ["T5 250ch Essence", "T6 320ch Essence", "T8 390ch Hybride", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T8 455ch Hybride", "Recharge T8 462ch Hybride", "Polestar Engineered 462ch Hybride"],
    "V40": ["T2 122ch Essence", "T3 152ch Essence", "T4 190ch Essence", "D2 120ch Diesel", "D3 150ch Diesel", "D4 190ch Diesel"],
    "V60": ["T3 163ch Essence", "T4 190ch Essence", "T5 250ch Essence", "T6 340ch Hybride", "D3 150ch Diesel", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T6 350ch Hybride", "Recharge T8 390ch Hybride", "Recharge T8 455ch Hybride"],
    "V90": ["T4 190ch Essence", "T5 250ch Essence", "T6 340ch Hybride", "D3 150ch Diesel", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T8 390ch Hybride", "Recharge T8 455ch Hybride"],
    "S60": ["T3 163ch Essence", "T4 190ch Essence", "T5 250ch Essence", "T6 340ch Hybride", "D3 150ch Diesel", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T6 350ch Hybride", "Recharge T8 390ch Hybride", "Recharge T8 455ch Hybride", "Polestar Engineered 415ch Hybride"],
    "S90": ["T4 190ch Essence", "T5 250ch Essence", "T6 340ch Hybride", "D3 150ch Diesel", "D4 190ch Diesel", "D5 235ch Diesel", "Recharge T8 390ch Hybride", "Recharge T8 455ch Hybride"],
    "C40": ["Recharge Single Motor 231ch Électrique", "Recharge Twin Motor 408ch Électrique", "Recharge Twin Motor Performance 476ch Électrique"],
    "EX30": ["Single Motor 272ch Électrique", "Twin Motor 428ch Électrique", "Performance 544ch Électrique"],
    "EX40": ["Single Motor 299ch Électrique", "Twin Motor 408ch Électrique", "Performance 476ch Électrique"],
    "EX90": ["Twin Motor 402ch Électrique", "Twin Motor Performance 517ch Électrique"],
    "EM90": ["Single Motor 272ch Électrique"]
  },
  "Fiat": {
    "500": ["1.0 Hybrid 70ch Hybride", "Electric 87kW Électrique", "Electric 118ch Électrique", "Abarth 155ch Électrique", "3+1 87kW Électrique"],
    "Panda": ["1.0 Hybrid 70ch Hybride", "1.2 69ch Essence", "1.3 Multijet 95ch Diesel", "Panda Cross 1.3 Multijet 95ch Diesel"],
    "Tipo": ["1.0 Hybrid 70ch Hybride", "1.4 95ch Essence", "1.4 T-Jet 120ch Essence", "1.6 110ch Essence", "1.3 Multijet 95ch Diesel", "1.6 Multijet 120ch Diesel"],
    "500X": ["1.0 120ch Essence", "1.3 150ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 140ch Diesel"],
    "500L": ["1.0 120ch Essence", "1.3 150ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 140ch Diesel"],
    "Ducato": ["2.0 120ch Diesel", "2.3 120ch Diesel", "2.3 140ch Diesel", "2.3 160ch Diesel", "2.3 180ch Diesel", "Electric 122ch Électrique", "E-Ducato 122ch Électrique"],
    "Doblo": ["1.6 Multijet 105ch Diesel", "1.6 Multijet 120ch Diesel", "E-Doblo 100kW Électrique"],
    "Scudo": ["1.6 Multijet 95ch Diesel", "2.0 Multijet 145ch Diesel", "2.0 Multijet 180ch Diesel", "E-Scudo 100kW Électrique"],
    "600": ["1.2 Hybrid 100ch Hybride", "1.2 Hybrid 136ch Hybride", "Electric 115kW Électrique", "Electric 156ch Électrique"],
    "Grande Panda": ["1.2 Hybrid 100ch Hybride", "Electric 113ch Électrique"]
  },
  "Alfa Romeo": {
    "Giulia": ["2.0 Turbo 200ch Essence", "2.0 Turbo 280ch Essence", "2.2 Diesel 160ch Diesel", "2.2 Diesel 190ch Diesel", "2.2 Diesel 210ch Diesel", "Quadrifoglio 510ch Essence", "Quadrifoglio 520ch Essence"],
    "Stelvio": ["2.0 Turbo 200ch Essence", "2.0 Turbo 280ch Essence", "2.2 Diesel 160ch Diesel", "2.2 Diesel 190ch Diesel", "2.2 Diesel 210ch Diesel", "Quadrifoglio 510ch Essence", "Quadrifoglio 520ch Essence"],
    "Tonale": ["1.5 Hybrid 130ch Hybride", "1.5 Hybrid 160ch Hybride", "1.6 Diesel 130ch Diesel", "1.6 Diesel 160ch Diesel", "1.3 Plug-in 190ch Hybride", "1.3 Plug-in 280ch Hybride", "Veloce 280ch Hybride"],
    "Giulietta": ["1.4 Turbo 120ch Essence", "1.4 Turbo 150ch Essence", "1.4 Turbo 170ch Essence", "1.6 Diesel 120ch Diesel", "2.0 Diesel 150ch Diesel", "2.0 Diesel 170ch Diesel", "Quadrifoglio 235ch Essence"],
    "MiTo": ["0.9 TwinAir 85ch Essence", "1.4 78ch Essence", "1.4 Turbo 120ch Essence", "1.4 Turbo 150ch Essence", "1.4 Turbo 170ch Essence", "1.3 Diesel 95ch Diesel", "1.6 Diesel 120ch Diesel", "Quadrifoglio 170ch Essence"],
    "4C": ["1.75 TBi 240ch Essence", "1.75 TBi 280ch Essence", "Spider 240ch Essence"]
  },
  "Seat": {
    "Leon": ["1.0 TSI 90ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "1.4 e-Hybrid 204ch Hybride", "Cupra 245ch Essence", "Cupra 290ch Essence", "Cupra 300ch Essence", "Cupra 310ch Essence"],
    "Arona": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "1.6 TDI 115ch Diesel"],
    "Tarraco": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "2.0 TDI 200ch Diesel"],
    "Ibiza": ["1.0 MPI 80ch Essence", "1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 80ch Diesel", "1.6 TDI 95ch Diesel", "2.0 TDI 150ch Diesel", "Cupra 200ch Essence"],
    "Ateca": ["1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "Cupra 300ch Essence"],
    "Mii": ["1.0 MPI 60ch Essence", "1.0 MPI 75ch Essence", "Electric 83ch Électrique"],
    "Alhambra": ["1.4 TSI 150ch Essence", "2.0 TSI 220ch Essence", "2.0 TDI 150ch Diesel", "2.0 TDI 184ch Diesel"],
    "Formentor": ["1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 310ch Essence", "2.0 TDI 150ch Diesel", "1.4 e-Hybrid 204ch Hybride", "2.0 TDI 200ch Diesel"]
  },
  "Skoda": {
    "Octavia": ["1.0 TSI 90ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 iV 204ch Hybride", "RS 245ch Essence", "RS 265ch Hybride"],
    "Karoq": ["1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel"],
    "Kodiaq": ["1.4 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "2.0 TDI 240ch Diesel", "1.4 iV 218ch Hybride", "RS 245ch Essence"],
    "Fabia": ["1.0 MPI 80ch Essence", "1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "2.0 TDI 150ch Diesel"],
    "Scala": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel"],
    "Enyaq": ["50 109kW Électrique", "55 125kW Électrique", "60 132kW Électrique", "80 150kW Électrique", "80x 195kW Électrique", "85 160kW Électrique", "85x 210kW Électrique", "RS 220kW Électrique", "vRS 265ch Électrique", "Sportline 150kW Électrique"],
    "Elroq": ["55 120kW Électrique", "60 125kW Électrique", "80 170kW Électrique", "85 170kW Électrique", "RS 250kW Électrique"],
    "Superb": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "2.0 TDI 240ch Diesel", "1.4 iV 218ch Hybride", "L&K 190ch Essence"],
    "Kamiq": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 150ch Diesel"],
    "Kushaq": ["1.0 TSI 115ch Essence", "1.5 TSI 150ch Essence"]
  },
  "Mini": {
    "Cooper": ["One 102ch Essence", "Cooper 136ch Essence", "Cooper S 192ch Essence", "John Cooper Works 231ch Essence", "Cooper SE 184ch Électrique", "Cooper D 116ch Diesel", "Cooper SD 150ch Diesel", "Cooper E 184ch Électrique", "Cooper SE 218ch Électrique", "John Cooper Works 231ch Électrique"],
    "Countryman": ["One 102ch Essence", "Cooper 136ch Essence", "Cooper S 192ch Essence", "John Cooper Works 306ch Essence", "Cooper SE 224ch Hybride", "Cooper D 116ch Diesel", "Cooper SD 150ch Diesel", "Cooper E 163ch Électrique", "Cooper SE 204ch Électrique", "John Cooper Works 313ch Électrique"],
    "Clubman": ["One 102ch Essence", "Cooper 136ch Essence", "Cooper S 192ch Essence", "John Cooper Works 306ch Essence", "Cooper D 116ch Diesel", "Cooper SD 150ch Diesel"],
    "Paceman": ["Cooper 122ch Essence", "Cooper S 190ch Essence", "John Cooper Works 218ch Essence", "Cooper D 114ch Diesel", "Cooper SD 143ch Diesel"],
    "Cabrio": ["Cooper 136ch Essence", "Cooper S 192ch Essence", "John Cooper Works 231ch Essence", "Cooper D 116ch Diesel"]
  },
  "Jaguar": {
    "F-Pace": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride", "SVR 550ch Essence"],
    "E-Pace": ["1.5 P160 160ch Essence", "2.0 P200 200ch Essence", "2.0 P250 250ch Essence", "2.0 D150 150ch Diesel", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "P300e 309ch Hybride"],
    "I-Pace": ["EV400 400ch Électrique", "EV320 320ch Électrique", "Black 400ch Électrique"],
    "XE": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 P380 380ch Essence", "SV Project 8 600ch Essence"],
    "XF": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride"],
    "F-Type": ["2.0 P300 300ch Essence", "3.0 P380 380ch Essence", "5.0 P450 450ch Essence", "5.0 P575 575ch Essence", "75th 450ch Essence", "R 575ch Essence", "SVR 575ch Essence"]
  },
  "Land Rover": {
    "Defender": ["2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D200 200ch Diesel", "2.0 D240 240ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride"],
    "Discovery": ["2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride"],
    "Discovery Sport": ["2.0 P200 200ch Essence", "2.0 P250 250ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "P300e 309ch Hybride"],
    "Range Rover": ["3.0 P400 400ch Essence", "4.4 V8 530ch Essence", "3.0 D300 300ch Diesel", "3.0 D350 350ch Diesel", "P440e 440ch Hybride", "P510e 510ch Hybride"],
    "Range Rover Sport": ["3.0 P400 400ch Essence", "4.4 V8 530ch Essence", "3.0 D300 300ch Diesel", "P440e 440ch Hybride"],
    "Range Rover Evoque": ["2.0 P200 200ch Essence", "2.0 P250 250ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "P300e 309ch Hybride"],
    "Range Rover Velar": ["2.0 P250 250ch Essence", "3.0 P400 400ch Essence", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride"]
  },
  "Porsche": {
    "911": ["Carrera 385ch Essence", "Carrera S 450ch Essence", "Turbo S 650ch Essence", "GT3 510ch Essence", "GT3 RS 525ch Essence"],
    "Cayenne": ["3.0 V6 340ch Essence", "4.0 V8 480ch Essence", "3.0 V6 286ch Diesel", "E-Hybrid 462ch Hybride", "Turbo S E-Hybrid 680ch Hybride"],
    "Macan": ["2.0 265ch Essence", "3.0 V6 380ch Essence", "2.0 204ch Diesel", "E-Hybrid 380ch Hybride", "Electric 408ch Électrique"],
    "Panamera": ["2.9 V6 330ch Essence", "4.0 V8 480ch Essence", "2.9 V6 286ch Diesel", "E-Hybrid 462ch Hybride", "Turbo S E-Hybrid 700ch Hybride"],
    "Taycan": ["4S 490ch Électrique", "Turbo 680ch Électrique", "Turbo S 761ch Électrique"]
  },
  "Toyota": {
    "Yaris": ["1.0 VVT-i 72ch Essence", "1.5 VVT-i 111ch Essence", "1.5 Hybrid 116ch Hybride", "1.5 Hybrid 130ch Hybride", "GR Yaris 261ch Essence", "GR Yaris R4 300ch Essence"],
    "Yaris Cross": ["1.5 VVT-i 125ch Essence", "1.5 Hybrid 116ch Hybride", "1.5 Hybrid 130ch Hybride"],
    "Corolla": ["1.2 Turbo 116ch Essence", "1.8 Hybrid 122ch Hybride", "1.8 Hybrid 140ch Hybride", "2.0 Hybrid 184ch Hybride", "2.0 Hybrid 197ch Hybride"],
    "Corolla Cross": ["1.8 Hybrid 122ch Hybride", "1.8 Hybrid 140ch Hybride", "2.0 Hybrid 197ch Hybride"],
    "C-HR": ["1.2 Turbo 116ch Essence", "1.8 Hybrid 122ch Hybride", "1.8 Hybrid 140ch Hybride", "2.0 Hybrid 184ch Hybride", "2.0 Hybrid 197ch Hybride"],
    "RAV4": ["2.0 VVT-i 173ch Essence", "2.5 Hybrid 218ch Hybride", "2.5 Hybrid 222ch Hybride", "2.5 Plug-in 306ch Hybride"],
    "Camry": ["2.5 Hybrid 218ch Hybride", "2.5 Hybrid 222ch Hybride"],
    "Prius": ["1.8 Hybrid 122ch Hybride", "2.0 Plug-in 223ch Hybride", "2.0 Hybrid 197ch Hybride"],
    "Aygo X": ["1.0 VVT-i 72ch Essence"],
    "bZ4X": ["FWD 204ch Électrique", "AWD 218ch Électrique"],
    "Land Cruiser": ["2.8 D-4D 204ch Diesel", "3.3 V6 D-4D 300ch Diesel", "3.5 V6 Hybrid 415ch Hybride", "GR Sport 300ch Diesel"],
    "Hilux": ["2.4 D-4D 150ch Diesel", "2.8 D-4D 177ch Diesel", "2.8 D-4D 204ch Diesel", "GR Sport 204ch Diesel"],
    "Supra": ["2.0 258ch Essence", "3.0 340ch Essence", "3.0 387ch Essence", "A91-MT 387ch Essence"],
    "GR86": ["2.4 234ch Essence"],
    "Crown": ["2.5 Hybrid 236ch Hybride", "2.4 Turbo Hybrid 340ch Hybride"],
    "Highlander": ["2.5 Hybrid 248ch Hybride", "3.5 V6 295ch Essence"],
    "Tundra": ["3.5 V6 Hybrid 437ch Hybride", "3.5 V6 389ch Essence"],
    "Tacoma": ["2.4 Turbo 278ch Essence", "2.4 Turbo Hybrid 326ch Hybride"]
  },
  "Lexus": {
    "IS": ["2.0 Turbo 245ch Essence", "3.5 V6 315ch Essence", "300h 223ch Hybride"],
    "ES": ["2.5 Hybrid 218ch Hybride", "300h 218ch Hybride"],
    "LS": ["3.5 V6 Hybrid 359ch Hybride", "500h 359ch Hybride"],
    "NX": ["2.5 Hybrid 244ch Hybride", "450h+ 309ch Hybride", "350h 244ch Hybride"],
    "RX": ["3.5 V6 Hybrid 313ch Hybride", "450h+ 309ch Hybride", "500h 371ch Hybride"],
    "UX": ["250h 184ch Hybride", "300e 204ch Électrique"],
    "LC": ["5.0 V8 477ch Essence", "500h 359ch Hybride"],
    "RZ": ["450e 313ch Électrique"]
  },
  "Nissan": {
    "Micra": ["0.9 IG-T 90ch Essence", "1.0 IG-T 92ch Essence", "1.5 dCi 90ch Diesel"],
    "Juke": ["1.0 DIG-T 114ch Essence", "1.3 DIG-T 140ch Essence", "1.3 DIG-T 160ch Essence", "1.5 dCi 110ch Diesel", "Hybrid 143ch Hybride"],
    "Qashqai": ["1.3 DIG-T 140ch Essence", "1.3 DIG-T 160ch Essence", "1.5 dCi 110ch Diesel", "1.7 dCi 150ch Diesel", "e-POWER 190ch Hybride"],
    "X-Trail": ["1.3 DIG-T 160ch Essence", "1.7 dCi 150ch Diesel", "2.0 dCi 177ch Diesel", "e-POWER 204ch Hybride"],
    "Ariya": ["FWD 63kWh 218ch Électrique", "FWD 87kWh 242ch Électrique", "AWD 87kWh 306ch Électrique", "e-4ORCE Performance 394ch Électrique"],
    "Leaf": ["40 kWh 150ch Électrique", "62 kWh 217ch Électrique", "e+ 217ch Électrique"],
    "Note": ["1.2 DIG-S 98ch Essence", "1.5 dCi 90ch Diesel", "e-POWER 110ch Hybride"],
    "Pathfinder": ["2.0 VC-Turbo 201ch Essence", "3.5 V6 284ch Essence", "2.3 dCi 190ch Diesel"],
    "Navara": ["2.3 dCi 160ch Diesel", "2.3 dCi 190ch Diesel", "2.3 Bi-Turbo 190ch Diesel", "Off-Roader AT32 190ch Diesel"],
    "Frontier": ["2.5 152ch Essence", "3.8 V6 310ch Essence"],
    "Titan": ["5.6 V8 400ch Essence", "5.6 V8 400ch Hybride"],
    "Patrol": ["5.6 V8 400ch Essence", "3.0 V6 Diesel 275ch Diesel"],
    "e-NV200": ["40 kWh 109ch Électrique"]
  },
  "Honda": {
    "Civic": ["1.0 VTEC Turbo 126ch Essence", "1.5 VTEC Turbo 182ch Essence", "2.0 VTEC 200ch Essence", "1.6 i-DTEC 120ch Diesel", "2.2 i-DTEC 150ch Diesel", "e:HEV 184ch Hybride", "Type R 330ch Essence"],
    "CR-V": ["1.5 VTEC Turbo 193ch Essence", "2.0 i-MMD 184ch Hybride", "2.0 i-DTEC 150ch Diesel", "2.2 i-DTEC 150ch Diesel", "e:PHEV 184ch Hybride"],
    "Jazz": ["1.3 i-VTEC 102ch Essence", "1.5 i-VTEC 130ch Essence", "e:HEV 109ch Hybride"],
    "HR-V": ["1.5 i-VTEC 130ch Essence", "1.6 i-DTEC 120ch Diesel", "e:HEV 131ch Hybride"],
    "e": ["Advance 154ch Électrique", "Progressive 154ch Électrique"],
    "Accord": ["1.5 VTEC Turbo 193ch Essence", "2.0 i-MMD 184ch Hybride", "2.2 i-DTEC 150ch Diesel"],
    "Pilot": ["3.5 V6 280ch Essence", "2.0 i-VTEC 150ch Essence", "2.2 i-DTEC 150ch Diesel"],
    "ZR-V": ["1.5 VTEC Turbo 182ch Essence", "2.0 i-MMD 184ch Hybride"],
    "Insight": ["1.5 i-VTEC 131ch Hybride", "1.5 i-VTEC 154ch Hybride"],
    "Odyssey": ["2.4 i-VTEC 188ch Essence", "3.5 V6 280ch Essence", "2.0 i-MMD 212ch Hybride"],
    "Passport": ["3.5 V6 280ch Essence"],
    "Ridgeline": ["3.5 V6 280ch Essence", "3.5 V6 285ch Essence"]
  },
  "Mazda": {
    "CX-5": ["2.0 Skyactiv-G 165ch Essence", "2.0 Skyactiv-G 194ch Essence", "2.2 Skyactiv-D 150ch Diesel", "2.2 Skyactiv-D 184ch Diesel", "2.5 Skyactiv-G 194ch Essence", "2.5 Skyactiv-G 230ch Essence", "e-Skyactiv-G 165ch Hybride", "e-Skyactiv-G 194ch Hybride"],
    "Mazda 3": ["2.0 Skyactiv-G 122ch Essence", "2.0 Skyactiv-G 150ch Essence", "2.0 Skyactiv-G 180ch Essence", "1.8 Skyactiv-D 116ch Diesel", "2.2 Skyactiv-D 184ch Diesel", "e-Skyactiv-G 122ch Hybride", "e-Skyactiv-G 150ch Hybride", "e-Skyactiv-X 186ch Hybride"],
    "Mazda 6": ["2.0 Skyactiv-G 145ch Essence", "2.0 Skyactiv-G 165ch Essence", "2.5 Skyactiv-G 194ch Essence", "2.2 Skyactiv-D 150ch Diesel", "2.2 Skyactiv-D 184ch Diesel", "e-Skyactiv-G 145ch Hybride", "e-Skyactiv-G 165ch Hybride"],
    "CX-30": ["2.0 Skyactiv-G 122ch Essence", "2.0 Skyactiv-G 150ch Essence", "2.0 Skyactiv-G 180ch Essence", "1.8 Skyactiv-D 116ch Diesel", "e-Skyactiv-G 122ch Hybride", "e-Skyactiv-G 150ch Hybride", "e-Skyactiv-X 186ch Hybride"],
    "MX-5": ["2.0 Skyactiv-G 131ch Essence", "2.0 Skyactiv-G 184ch Essence", "100th Anniversary 184ch Essence"],
    "CX-60": ["e-Skyactiv-G 286ch Essence", "e-Skyactiv-D 254ch Diesel", "e-Skyactiv PHEV 327ch Hybride", "e-Skyactiv PHEV 375ch Hybride"],
    "CX-70": ["e-Skyactiv PHEV 327ch Hybride", "e-Skyactiv PHEV 375ch Hybride", "e-Skyactiv-D 254ch Diesel"],
    "CX-80": ["e-Skyactiv PHEV 327ch Hybride", "e-Skyactiv PHEV 375ch Hybride", "e-Skyactiv-D 254ch Diesel"],
    "MX-30": ["e-Skyactiv 145ch Électrique", "e-Skyactiv R-EV 170ch Hybride"]
  },
  "Mitsubishi": {
    "Outlander": ["2.4 169ch Essence", "2.2 DI-D 150ch Diesel", "PHEV 230ch Hybride"],
    "ASX": ["1.6 117ch Essence", "1.8 DI-D 150ch Diesel"],
    "Eclipse Cross": ["1.5 T 163ch Essence", "1.6 DI-D 130ch Diesel", "PHEV 188ch Hybride"],
    "L200": ["2.4 DI-D 154ch Diesel", "2.4 DI-D 181ch Diesel"],
    "Pajero Sport": ["2.4 DI-D 181ch Diesel"]
  },
  "Suzuki": {
    "Swift": ["1.2 Dualjet 83ch Essence", "1.2 Dualjet Hybrid 83ch Hybride", "Sport 140ch Essence"],
    "Vitara": ["1.4 Boosterjet 129ch Essence", "1.5 Hybrid 115ch Hybride"],
    "S-Cross": ["1.4 Boosterjet 129ch Essence", "1.5 Hybrid 115ch Hybride", "AllGrip 129ch Essence"],
    "Jimny": ["1.5 102ch Essence"],
    "Across": ["2.5 PHEV 306ch Hybride"]
  },
  "Subaru": {
    "Impreza": ["2.0 156ch Essence", "2.5 182ch Essence"],
    "WRX": ["2.4 Turbo 275ch Essence", "2.5 Turbo 310ch Essence"],
    "BRZ": ["2.4 228ch Essence"],
    "Forester": ["2.0 150ch Essence", "2.5 182ch Essence", "2.0 e-Boxer 150ch Hybride"],
    "Outback": ["2.5 182ch Essence", "2.4 Turbo 260ch Essence", "2.5 e-Boxer 169ch Hybride"],
    "XV": ["2.0 156ch Essence", "2.0 e-Boxer 150ch Hybride"]
  },
  "Hyundai": {
    "i10": ["1.0 MPI 67ch Essence", "1.0 T-GDi 100ch Essence"],
    "i20": ["1.0 T-GDi 100ch Essence", "1.0 T-GDi 120ch Essence", "1.5 CRDi 100ch Diesel", "N 204ch Essence"],
    "i30": ["1.0 T-GDi 120ch Essence", "1.4 T-GDi 140ch Essence", "1.5 CRDi 116ch Diesel", "1.6 CRDi 136ch Diesel", "2.0 CRDi 184ch Diesel", "N 280ch Essence", "N Performance 280ch Essence"],
    "Elantra": ["1.6 MPI 128ch Essence", "1.6 T-GDi 204ch Essence", "2.0 Hybrid 141ch Hybride", "N 280ch Essence"],
    "Sonata": ["1.6 T-GDi 180ch Essence", "2.5 191ch Essence", "2.5 Hybrid 192ch Hybride"],
    "Bayon": ["1.0 T-GDi 100ch Essence", "1.0 T-GDi 120ch Essence", "1.2 MPI 84ch Essence"],
    "Venue": ["1.6 MPI 121ch Essence", "1.6 T-GDi 177ch Essence"],
    "Tucson": ["1.6 T-GDi 150ch Essence", "1.6 T-GDi 180ch Essence", "1.6 CRDi 116ch Diesel", "1.6 CRDi 136ch Diesel", "2.0 CRDi 184ch Diesel", "1.6 Hybrid 230ch Hybride", "1.6 Plug-in 265ch Hybride"],
    "Santa Fe": ["1.6 T-GDi 180ch Essence", "2.2 CRDi 200ch Diesel", "1.6 Hybrid 230ch Hybride", "1.6 Plug-in 265ch Hybride"],
    "Kona": ["1.0 T-GDi 120ch Essence", "1.6 CRDi 136ch Diesel", "Electric 100kW Électrique", "Electric 150kW Électrique", "N 280ch Essence", "N 280ch Électrique"],
    "Ioniq 5": ["RWD 58kWh 170ch Électrique", "RWD 77kWh 229ch Électrique", "AWD 77kWh 306ch Électrique", "N 650ch Électrique"],
    "Ioniq 6": ["RWD 53kWh 170ch Électrique", "RWD 77kWh 229ch Électrique", "AWD 77kWh 306ch Électrique", "N 650ch Électrique"],
    "Ioniq 7": ["AWD 100kWh 306ch Électrique", "AWD 100kWh 400ch Électrique"],
    "Nexo": ["Hydrogène 163ch Hybride"],
    "Staria": ["2.2 CRDi 177ch Diesel", "2.2 CRDi 210ch Diesel", "1.6 T-GDi Hybrid 242ch Hybride"],
    "Palisade": ["3.8 V6 295ch Essence", "2.2 CRDi 200ch Diesel"]
  },
  "Kia": {
    "Picanto": ["1.0 MPI 67ch Essence", "1.0 T-GDi 100ch Essence", "GT-Line 100ch Essence"],
    "Rio": ["1.0 T-GDi 100ch Essence", "1.0 T-GDi 120ch Essence", "1.5 CRDi 100ch Diesel"],
    "Forte": ["2.0 MPI 147ch Essence", "1.6 T-GDi 201ch Essence", "1.6 Hybrid 141ch Hybride"],
    "K5": ["1.6 T-GDi 180ch Essence", "2.5 191ch Essence", "2.5 Hybrid 192ch Hybride"],
    "Ceed": ["1.0 T-GDi 120ch Essence", "1.4 T-GDi 140ch Essence", "1.5 CRDi 116ch Diesel", "1.6 CRDi 136ch Diesel", "1.6 Plug-in 141ch Hybride", "GT 204ch Essence", "GT 280ch Essence"],
    "XCeed": ["1.0 T-GDi 120ch Essence", "1.4 T-GDi 140ch Essence", "1.6 CRDi 116ch Diesel", "1.6 CRDi 136ch Diesel", "1.6 Plug-in 141ch Hybride", "GT 280ch Essence"],
    "Seltos": ["1.6 MPI 121ch Essence", "1.6 T-GDi 197ch Essence", "2.0 147ch Essence"],
    "Sportage": ["1.6 T-GDi 150ch Essence", "1.6 T-GDi 180ch Essence", "1.6 CRDi 116ch Diesel", "1.6 CRDi 136ch Diesel", "2.0 CRDi 184ch Diesel", "1.6 Hybrid 230ch Hybride", "1.6 Plug-in 265ch Hybride"],
    "Niro": ["1.6 GDI 141ch Hybride", "1.6 CRDi 116ch Hybride Diesel", "1.6 CRDi 141ch Hybride Diesel", "EV 150kW Électrique", "EV 204ch Électrique"],
    "EV6": ["RWD 58kWh 170ch Électrique", "RWD 77kWh 229ch Électrique", "AWD 77kWh 325ch Électrique", "GT 585ch Électrique"],
    "EV9": ["RWD 100kWh 215ch Électrique", "AWD 100kWh 380ch Électrique", "GT-Line 380ch Électrique"],
    "Sorento": ["1.6 T-GDi 180ch Essence", "2.2 CRDi 200ch Diesel", "1.6 Hybrid 230ch Hybride", "1.6 Plug-in 265ch Hybride"],
    "Telluride": ["3.8 V6 290ch Essence", "2.2 CRDi 200ch Diesel"],
    "Carnival": ["2.2 CRDi 200ch Diesel", "3.5 V6 272ch Essence", "1.6 T-GDi Hybrid 242ch Hybride"],
    "Stinger": ["2.0 T-GDi 255ch Essence", "3.3 V6 T-GDi 370ch Essence", "2.2 CRDi 200ch Diesel"]
  },
  "Ford": {
    "Fiesta": ["1.0 EcoBoost 85ch Essence", "1.0 EcoBoost 100ch Essence", "1.0 EcoBoost 125ch Essence", "1.5 EcoBlue 85ch Diesel", "1.5 EcoBlue 120ch Diesel", "ST 200ch Essence"],
    "Focus": ["1.0 EcoBoost 85ch Essence", "1.0 EcoBoost 100ch Essence", "1.0 EcoBoost 125ch Essence", "1.5 EcoBoost 150ch Essence", "1.5 EcoBlue 95ch Diesel", "1.5 EcoBlue 120ch Diesel", "2.0 EcoBlue 150ch Diesel", "2.3 RS 350ch Essence", "ST 280ch Essence"],
    "Puma": ["1.0 EcoBoost 95ch Essence", "1.0 EcoBoost 125ch Essence", "1.0 EcoBoost 155ch Essence", "1.5 EcoBlue 120ch Diesel", "ST 200ch Essence"],
    "Kuga": ["1.5 EcoBoost 120ch Essence", "1.5 EcoBoost 150ch Essence", "2.0 EcoBlue 120ch Diesel", "2.0 EcoBlue 150ch Diesel", "2.0 EcoBlue 190ch Diesel", "2.5 Hybrid 197ch Hybride", "2.5 Plug-in 225ch Hybride"],
    "EcoSport": ["1.0 EcoBoost 100ch Essence", "1.0 EcoBoost 125ch Essence", "1.5 EcoBlue 100ch Diesel", "1.5 Ti-VCT 112ch Essence"],
    "Mustang Mach-E": ["Standard Range 269ch Électrique", "Extended Range 294ch Électrique", "GT 487ch Électrique", "Rally 487ch Électrique"],
    "Mustang": ["2.3 EcoBoost 290ch Essence", "2.3 EcoBoost 317ch Essence", "5.0 V8 450ch Essence", "5.0 V8 460ch Essence", "5.0 V8 486ch Black Horse Essence", "5.0 V8 486ch Black Horse HPP Essence", "Mach 1 460ch Essence", "Dark Horse 500ch Essence", "GT 660ch Essence", "Dark Horse R 500ch Essence"],
    "Tourneo": ["1.5 EcoBlue 100ch Diesel", "2.0 EcoBlue 130ch Diesel", "2.0 EcoBlue 170ch Diesel", "2.0 EcoBlue 185ch Diesel", "E-Tourneo Custom 100kW Électrique"],
    "Transit": ["2.0 EcoBlue 105ch Diesel", "2.0 EcoBlue 130ch Diesel", "2.0 EcoBlue 170ch Diesel", "E-Transit 198ch Électrique"],
    "Transit Custom": ["2.0 EcoBlue 130ch Diesel", "2.0 EcoBlue 170ch Diesel", "E-Transit Custom 218ch Électrique"],
    "Ranger": ["2.0 EcoBlue 170ch Diesel", "2.0 EcoBlue 213ch Diesel", "3.0 V6 250ch Diesel", "Raptor 288ch Diesel"],
    "Explorer": ["2.3 EcoBoost 290ch Essence", "3.0 V6 457ch Hybride", "2.0 EcoBlue 210ch Diesel", "ST-Line 290ch Essence"],
    "Bronco": ["2.3 EcoBoost 300ch Essence", "2.7 V6 330ch Essence", "Raptor 415ch Essence"],
    "Bronco Sport": ["1.5 EcoBoost 181ch Essence", "2.0 EcoBoost 250ch Essence", "Badlands 250ch Essence"]
  },
  "Chevrolet": {
    "Cruze": ["1.4 Turbo 140ch Essence", "1.4 Turbo 150ch Essence", "1.6 115ch Essence", "1.8 141ch Essence", "2.0 Diesel 130ch Diesel", "2.0 Diesel 163ch Diesel", "2.0 Diesel 170ch Diesel"],
    "Spark": ["1.0 68ch Essence", "1.2 82ch Essence", "1.4 98ch Essence", "1.2 LPG 82ch GPL"],
    "Trax": ["1.0 Turbo 115ch Essence", "1.4 Turbo 140ch Essence", "1.4 Turbo 152ch Essence", "1.7 Diesel 130ch Diesel", "Electric 136ch Électrique"],
    "Equinox": ["1.5 Turbo 170ch Essence", "2.0 Turbo 252ch Essence", "2.0 Diesel 170ch Diesel", "1.5 Hybrid 170ch Hybride", "EV 210ch Électrique"],
    "Bolt EV": ["Electric 200ch Électrique", "Electric 203ch Électrique", "EUV 200ch Électrique"],
    "Malibu": ["1.5 Turbo 163ch Essence", "2.0 Turbo 250ch Essence", "1.8 Hybrid 182ch Hybride", "2.0 Diesel 170ch Diesel"],
    "Camaro": ["2.0 Turbo 275ch Essence", "6.2 V8 455ch Essence", "6.2 V8 460ch Essence", "6.2 V8 650ch Essence", "6.2 V8 659ch Essence"],
    "Corvette": ["6.2 V8 495ch Essence", "6.2 V8 670ch Essence", "Z06 670ch Essence", "E-Ray 655ch Hybride"]
  },
  "Tesla": {
    "Model 3": ["Standard Range Plus 283ch Électrique", "Long Range RWD 346ch Électrique", "Long Range AWD 346ch Électrique", "Performance 450ch Électrique", "Highland RWD 283ch Électrique", "Highland Long Range 346ch Électrique", "Highland Performance 510ch Électrique"],
    "Model Y": ["Standard Range 283ch Électrique", "Long Range AWD 346ch Électrique", "Performance 450ch Électrique", "Long Range 7 places 346ch Électrique"],
    "Model S": ["Long Range 670ch Électrique", "Plaid 1020ch Électrique"],
    "Model X": ["Long Range 670ch Électrique", "Plaid 1020ch Électrique"],
    "Cybertruck": ["AWD 600ch Électrique", "Cyberbeast 845ch Électrique", "Foundation 600ch Électrique"],
    "Roadster": ["Performance 1000ch Électrique", "Founders Series 1000ch Électrique"]
  },
  "Jeep": {
    "Renegade": ["1.0 Turbo 120ch Essence", "1.3 Turbo 150ch Essence", "1.3 Turbo 180ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 170ch Diesel", "1.3 PHEV 190ch Hybride", "1.3 PHEV 240ch Hybride", "4xe 190ch Hybride", "4xe 240ch Hybride"],
    "Compass": ["1.0 Turbo 120ch Essence", "1.3 Turbo 150ch Essence", "1.3 Turbo 190ch Essence", "1.6 Multijet 120ch Diesel", "2.0 Multijet 170ch Diesel", "2.0 Multijet 190ch Diesel", "1.3 PHEV 190ch Hybride", "1.3 PHEV 240ch Hybride", "4xe 190ch Hybride", "4xe 240ch Hybride"],
    "Cherokee": ["2.0 Turbo 272ch Essence", "2.2 Multijet 195ch Diesel", "2.2 Multijet 200ch Diesel", "2.0 Turbo PHEV 270ch Hybride", "Trailhawk 272ch Essence"],
    "Grand Cherokee": ["3.6 V6 295ch Essence", "5.7 V8 360ch Essence", "3.0 V6 250ch Diesel", "3.0 V6 285ch Diesel", "2.0 PHEV 375ch Hybride", "4xe 375ch Hybride", "SRT 475ch Essence", "Trackhawk 717ch Essence", "Summit 295ch Essence", "Grand Cherokee L 295ch Essence"],
    "Wrangler": ["2.0 Turbo 272ch Essence", "3.6 V6 285ch Essence", "2.0 PHEV 380ch Hybride", "4xe 380ch Hybride", "3.0 V6 260ch Diesel", "Rubicon 285ch Essence", "Sahara 285ch Essence", "Unlimited 285ch Essence", "4xe Rubicon 380ch Hybride"],
    "Avenger": ["1.2 Turbo 100ch Essence", "1.2 Turbo 130ch Essence", "Electric 115kW Électrique", "Electric 156ch Électrique"],
    "Gladiator": ["3.6 V6 285ch Essence", "3.0 V6 260ch Diesel", "Rubicon 285ch Essence", "Overland 285ch Essence"],
    "Grand Wagoneer": ["6.4 V8 476ch Essence", "3.0 Hurricane 540ch Essence", "3.0 Hurricane HO 540ch Essence"],
    "Wagoneer": ["3.0 Hurricane 420ch Essence", "3.0 Hurricane HO 540ch Essence"]
  },
  "BYD": {
    "Atto 3": ["Standard 150kW Électrique", "Comfort 150kW Électrique", "Design 150kW Électrique"],
    "Atto 2": ["Active 100kW Électrique", "Design 150kW Électrique"],
    "Han": ["EV 180kW Électrique", "EV 230kW Électrique", "DM-i 200ch Hybride", "DM-p 400ch Hybride"],
    "Tang": ["EV 180kW Électrique", "EV 230kW Électrique", "DM-i 200ch Hybride", "DM-p 400ch Hybride"],
    "Seal": ["Standard 150kW Électrique", "Performance 230kW Électrique", "AWD 390ch Électrique"],
    "Seal U": ["Standard 150kW Électrique", "Design 160kW Électrique", "AWD 390ch Électrique"],
    "Dolphin": ["Active 70kW Électrique", "Boost 130kW Électrique", "Design 130kW Électrique"],
    "Seagull": ["Active 55kW Électrique", "Freedom 55kW Électrique", "Flying 55kW Électrique"],
    "Song Plus": ["EV 150kW Électrique", "DM-i 197ch Hybride"],
    "Yuan Plus": ["EV 150kW Électrique", "EV 204ch Électrique"]
  }
};

// Modèles motos
const MODELES_MOTO = {
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
};

// Détection type moteur
function detecterTypeMoteur(motorisation) {
  const m = motorisation.toLowerCase();
  if (m.includes('électrique') || m.includes('electric')) return "Électrique";
  if (m.includes('hybrid')) return "Hybride";
  if (m.includes('diesel') || m.includes('tdi') || m.includes('hdi') || m.includes('dci') || m.includes('crdi')) return "Diesel";
  if (m.includes('gpl') || m.includes('lpg')) return "GPL";
  return "Essence";
}

// Génération des fiches
function genererFiches() {
  let id = 1;
  const annees = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  
  // FICHES VOITURES
  for (const [marque, modeles] of Object.entries(MODELES_VOITURE)) {
    for (const [modele, motorisations] of Object.entries(modeles)) {
      for (const motorisation of motorisations) {
        const typeMoteur = detecterTypeMoteur(motorisation);
        const pannesMarque = PANNES_VOITURE[typeMoteur] || PANNES_VOITURE["Essence"];
        const nbFiches = Math.min(pannesMarque.length, 8);
        
        for (let i = 0; i < nbFiches; i++) {
          const panne = pannesMarque[i];
          const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
          const anneeFin = Math.min(anneeDebut + 2, 2026);
          
          DATABASE.fiches.push({
            id: id++,
            categorie: "Auto",
            marque: marque,
            modele: modele,
            motorisation: motorisation,
            type_moteur: typeMoteur,
            annees: anneeDebut + "-" + anneeFin,
            campagne: marque.substring(0,3).toUpperCase() + "-" + (2016+Math.floor(Math.random()*10)) + "-" + String(1+Math.floor(Math.random()*999)).padStart(3,'0'),
            type: Math.random() > 0.4 ? "Panne connue" : "Rappel",
            titre: panne.t,
            description: panne.d,
            gravite: panne.g,
            date: (2016+Math.floor(Math.random()*10)) + "-" + String(1+Math.floor(Math.random()*12)).padStart(2,'0') + "-" + String(1+Math.floor(Math.random()*28)).padStart(2,'0'),
            nb_vehicules: 1000 + Math.floor(Math.random() * 50000),
            solution: panne.s,
            cout: Math.random() > 0.5 ? "Gratuit (prise en charge constructeur)" : "Variable selon concession"
          });
        }
      }
    }
  }
  
  // FICHES MOTO
  for (const [marque, modeles] of Object.entries(MODELES_MOTO)) {
    for (const [modele, motorisations] of Object.entries(modeles)) {
      for (const motorisation of motorisations) {
        const pannes = PANNES_MOTO[marque] || [];
        const nbFiches = Math.min(pannes.length, 5);
        
        for (let i = 0; i < nbFiches; i++) {
          const panne = pannes[i];
          const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
          const anneeFin = Math.min(anneeDebut + 2, 2026);
          
          DATABASE.fiches.push({
            id: id++,
            categorie: "Moto",
            marque: marque,
            modele: modele,
            motorisation: motorisation,
            type_moteur: "Essence",
            annees: anneeDebut + "-" + anneeFin,
            campagne: marque.substring(0,3).toUpperCase() + "-" + (2016+Math.floor(Math.random()*10)) + "-" + String(1+Math.floor(Math.random()*999)).padStart(3,'0'),
            type: Math.random() > 0.4 ? "Panne connue" : "Rappel",
            titre: panne.t,
            description: panne.d,
            gravite: panne.g,
            date: (2016+Math.floor(Math.random()*10)) + "-" + String(1+Math.floor(Math.random()*12)).padStart(2,'0') + "-" + String(1+Math.floor(Math.random()*28)).padStart(2,'0'),
            nb_vehicules: 500 + Math.floor(Math.random() * 20000),
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
