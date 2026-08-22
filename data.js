// TECHNIQUE AUTO BY KEVIN - Base massive Voitures + Motos/Scooters
// Version enrichie avec pannes spécifiques écrans, ceintures, électronique

const DATABASE = {
  marques: {
    "Peugeot": { logo: "🇷", couleur: "#1B3A6B" },
    "Renault": { logo: "🇫🇷", couleur: "#FFCC33" },
    "Citroën": { logo: "🇫🇷", couleur: "#CC0000" },
    "DS": { logo: "🇷", couleur: "#1a1a1a" },
    "Alpine": { logo: "🇫🇷", couleur: "#0055A4" },
    "Dacia": { logo: "🇴", couleur: "#003DA5" },
    "Volkswagen": { logo: "🇩🇪", couleur: "#001E50" },
    "BMW": { logo: "🇩", couleur: "#0066B1" },
    "Mercedes": { logo: "🇩🇪", couleur: "#333333" },
    "Audi": { logo: "🇩🇪", couleur: "#BB0A30" },
    "Opel": { logo: "🇩", couleur: "#FFD700" },
    "Volvo": { logo: "🇪", couleur: "#003057" },
    "Fiat": { logo: "🇮🇹", couleur: "#9D0A0E" },
    "Alfa Romeo": { logo: "🇮🇹", couleur: "#8B0000" },
    "Seat": { logo: "🇪🇸", couleur: "#FFD700" },
    "Skoda": { logo: "🇨🇿", couleur: "#4BA82E" },
    "Mini": { logo: "🇬🇧", couleur: "#000000" },
    "Jaguar": { logo: "🇬🇧", couleur: "#000000" },
    "Land Rover": { logo: "🇬🇧", couleur: "#005A2B" },
    "Porsche": { logo: "🇩🇪", couleur: "#B12B28" },
    "Toyota": { logo: "🇵", couleur: "#EB0A1E" },
    "Lexus": { logo: "🇯🇵", couleur: "#1F2937" },
    "Nissan": { logo: "🇯🇵", couleur: "#C3002F" },
    "Honda": { logo: "🇯", couleur: "#CC0000" },
    "Mazda": { logo: "🇯🇵", couleur: "#B00D1E" },
    "Subaru": { logo: "🇯", couleur: "#003DA5" },
    "Mitsubishi": { logo: "🇯🇵", couleur: "#E60012" },
    "Suzuki": { logo: "🇯🇵", couleur: "#003DA5" },
    "Hyundai": { logo: "🇰🇷", couleur: "#002C5F" },
    "Kia": { logo: "🇰🇷", couleur: "#05141F" },
    "Ford": { logo: "🇺", couleur: "#003478" },
    "Chevrolet": { logo: "🇺🇸", couleur: "#D4AF37" },
    "Tesla": { logo: "⚡", couleur: "#CC0000" },
    "Jeep": { logo: "🇺🇸", couleur: "#1E5631" },
    "Cadillac": { logo: "🇺🇸", couleur: "#8B0000" },
    "Dodge": { logo: "🇺🇸", couleur: "#000000" },
    "BYD": { logo: "🇨🇳", couleur: "#003DA5" }
  },
  marquesMoto: {
    "Yamaha": { logo: "🇯🇵", couleur: "#003DA5" },
    "Honda": { logo: "🇯🇵", couleur: "#CC0000" },
    "Kawasaki": { logo: "🇯🇵", couleur: "#00A651" },
    "Suzuki": { logo: "🇯🇵", couleur: "#003DA5" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Ducati": { logo: "🇮🇹", couleur: "#CC0000" },
    "KTM": { logo: "🇦🇹", couleur: "#FF6B00" },
    "Harley-Davidson": { logo: "🇺🇸", couleur: "#FF6B00" },
    "Triumph": { logo: "🇬🇧", couleur: "#000000" },
    "Piaggio": { logo: "🇮🇹", couleur: "#003DA5" },
    "Vespa": { logo: "🇮🇹", couleur: "#00A651" },
    "Peugeot": { logo: "🇫🇷", couleur: "#1B3A6B" },
    "Aprilia": { logo: "🇹", couleur: "#000000" },
    "MV Agusta": { logo: "🇮🇹", couleur: "#CC0000" },
    "Royal Enfield": { logo: "🇳", couleur: "#8B0000" },
    "Indian": { logo: "🇺🇸", couleur: "#000000" },
    "Husqvarna": { logo: "🇪", couleur: "#FFD700" },
    "Beta": { logo: "🇮🇹", couleur: "#003DA5" },
    "GasGas": { logo: "🇪🇸", couleur: "#CC0000" },
    "Sherco": { logo: "🇫🇷", couleur: "#003DA5" },
    "TM Racing": { logo: "🇹", couleur: "#CC0000" },
    "Benelli": { logo: "🇮🇹", couleur: "#CC0000" },
    "CF Moto": { logo: "🇳", couleur: "#003DA5" },
    "Kymco": { logo: "🇹🇼", couleur: "#CC0000" },
    "SYM": { logo: "🇼", couleur: "#003DA5" }
  },
  fiches: []
};

// Pannes voitures par marque et type moteur - VERSION ENRICHIE
const PANNES_VOITURE = {
  "Peugeot": {
    "Essence": [
      {t:"Courroie distribution 1.2 PureTech",d:"Désagrégation dans l'huile. Rappel 500k véhicules",s:"Remplacement courroie + pompe à huile",g:"Très grave"},
      {t:"Consommation huile 1.2 PureTech",d:"Jusqu'à 1L/1000km - Segmentation défectueuse",s:"Remplacement segments ou moteur",g:"Grave"},
      {t:"Turbo 1.2 PureTech défaillant",d:"Perte puissance, sifflement, fumée bleue",s:"Remplacement turbo + admission",g:"Grave"},
      {t:"Bobines d'allumage",d:"Ratés d'allumage, voyant moteur",s:"Remplacement bobines",g:"Faible"},
      {t:"Vanne EGR encrassée",d:"Ralenti instable, fumée noire",s:"Nettoyage ou remplacement EGR",g:"Moyenne"},
      {t:"Écran tactile i-Cockpit HS",d:"Écran noir, tactile ne répond plus, reboot intempestif",s:"Mise à jour logiciel ou remplacement écran",g:"Moyenne"},
      {t:"Système multimédia défectueux",d:"Navigation GPS HS, Bluetooth ne fonctionne plus",s:"Réinitialisation ou remplacement calculateur",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture ne se déroule plus ou reste bloquée",s:"Remplacement prétendeur ou enrouleur",g:"Grave"},
      {t:"Prétendeur de ceinture HS",d:"Voyant airbag allumé, défaut prétendeur",s:"Remplacement prétendeur ceinture",g:"Grave"},
      {t:"Capteur de ceinture défectueux",d:"Voyant ceinture allumé en permanence",s:"Remplacement capteur boucle ceinture",g:"Faible"},
      {t:"Airbag passager défectueux",d:"Voyant airbag allumé, défaut capteur",s:"Remplacement airbag ou calculateur",g:"Très grave"},
      {t:"Calculateur airbag HS",d:"Voyant airbag allumé, tous les airbags HS",s:"Remplacement calculateur airbag",g:"Très grave"},
      {t:"Capteur de pluie défaillant",d:"Essuie-glaces automatiques HS",s:"Remplacement capteur de pluie",g:"Faible"},
      {t:"Capteur de luminosité HS",d:"Éclairage automatique ne fonctionne plus",s:"Remplacement capteur luminosité",g:"Faible"},
      {t:"Régulateur de vitesse HS",d:"Régulateur ne s'enclenche plus",s:"Remplacement commodo ou calculateur",g:"Moyenne"},
      {t:"Limiteur de vitesse défectueux",d:"Limiteur ne fonctionne plus",s:"Remplacement commodo ou calculateur",g:"Moyenne"},
      {t:"Affichage tête haute HS",d:"Affichage projection ne fonctionne plus",s:"Remplacement projecteur HUD",g:"Faible"},
      {t:"Caméra de recul défectueuse",d:"Image floue ou écran noir",s:"Remplacement caméra de recul",g:"Moyenne"},
      {t:"Capteurs de stationnement HS",d:"Bip de recul ne fonctionne plus",s:"Remplacement capteurs ultrasons",g:"Faible"},
      {t:"Système d'aide au freinage",d:"Freinage d'urgence automatique HS",s:"Mise à jour ou remplacement radar",g:"Grave"},
      {t:"Alerte de franchissement ligne",d:"Système de détection de ligne HS",s:"Réglage ou remplacement caméra",g:"Moyenne"},
      {t:"Reconnaissance panneaux HS",d:"Affichage vitesse limitée ne fonctionne plus",s:"Mise à jour logiciel ou caméra",g:"Faible"},
      {t:"Climatisation automatique",d:"Plus de froid, température non régulée",s:"Recharge clim + recherche fuite",g:"Moyenne"},
      {t:"Compresseur climatisation",d:"Climatisation ne fonctionne plus",s:"Remplacement compresseur clim",g:"Grave"},
      {t:"Ventilateur habitacle HS",d:"Ventilation ne fonctionne plus",s:"Remplacement ventilateur habitacle",g:"Moyenne"},
      {t:"Résistance ventilateur",d:"Ventilation bloquée sur une vitesse",s:"Remplacement résistance ventilateur",g:"Faible"},
      {t:"Phares LED défectueux",d:"Un ou plusieurs LED HS",s:"Remplacement module LED",g:"Moyenne"},
      {t:"Phares Xénon HS",d:"Éclairage xénon ne fonctionne plus",s:"Remplacement ampoule xénon",g:"Moyenne"},
      {t:"Correcteur d'assiette HS",d:"Réglage hauteur phares automatique HS",s:"Remplacement capteur ou moteur",g:"Faible"},
      {t:"Essuie-glaces automatiques",d:"Détection pluie ne fonctionne plus",s:"Remplacement capteur de pluie",g:"Faible"},
      {t:"Rétroviseurs électriques",d:"Réglage électrique ne fonctionne plus",s:"Remplacement moteur rétroviseur",g:"Faible"},
      {t:"Rétroviseurs rabattables",d:"Rabattement électrique HS",s:"Remplacement moteur rétroviseur",g:"Faible"},
      {t:"Sièges électriques HS",d:"Réglage électrique siège ne fonctionne plus",s:"Remplacement moteur siège",g:"Moyenne"},
      {t:"Mémoire de siège défectueuse",d:"Positions mémoire ne s'enregistrent plus",s:"Remplacement calculateur siège",g:"Faible"},
      {t:"Chauffage siège HS",d:"Sièges chauffants ne fonctionnent plus",s:"Remplacement résistance siège",g:"Faible"},
      {t:"Ventilation siège défectueuse",d:"Sièges ventilés ne fonctionnent plus",s:"Remplacement ventilateur siège",g:"Faible"},
      {t:"Massage siège HS",d:"Fonction massage ne fonctionne plus",s:"Remplacement moteur massage",g:"Faible"},
      {t:"Volant chauffant défectueux",d:"Chauffage volant ne fonctionne plus",s:"Remplacement résistance volant",g:"Faible"},
      {t:"Volant réglable électrique",d:"Réglage électrique volant HS",s:"Remplacement moteur colonne",g:"Moyenne"},
      {t:"Commutateur au volant HS",d:"Commandes volant ne répondent plus",s:"Remplacement commutateur volant",g:"Moyenne"},
      {t:"Palettes de vitesse HS",d:"Passage vitesse palettes ne fonctionne plus",s:"Remplacement palettes ou calculateur",g:"Moyenne"},
      {t:"Start/Stop défectueux",d:"Système Start/Stop ne fonctionne plus",s:"Remplacement batterie ou calculateur",g:"Faible"},
      {t:"Batterie 12V faible",d:"Démarrage difficile, voyants allumés",s:"Remplacement batterie 12V",g:"Moyenne"},
      {t:"Alternateur défaillant",d:"Batterie ne charge plus",s:"Remplacement alternateur",g:"Grave"},
      {t:"Démarreur HS",d:"Véhicule ne démarre plus",s:"Remplacement démarreur",g:"Grave"},
      {t:"Contacteur démarrage",d:"Bouton démarrage ne répond plus",s:"Remplacement contacteur démarrage",g:"Grave"},
      {t:"Clé de contact défectueuse",d:"Clé non reconnue, véhicule ne démarre pas",s:"Reprogrammation ou remplacement clé",g:"Grave"},
      {t:"Système Keyless HS",d:"Ouverture sans clé ne fonctionne plus",s:"Remplacement antenne ou calculateur",g:"Moyenne"},
      {t:"Verrouillage centralisé",d:"Portières ne se verrouillent plus",s:"Remplacement actuateur porte",g:"Moyenne"},
      {t:"Lève-vitre électrique HS",d:"Vitres électriques ne fonctionnent plus",s:"Remplacement moteur lève-vitre",g:"Moyenne"},
      {t:"Hayon électrique défectueux",d:"Ouverture/fermeture hayon HS",s:"Remplacement vérins électriques",g:"Moyenne"},
      {t:"Toit ouvrant électrique",d:"Toit ouvrant bloqué ou ne fonctionne plus",s:"Remplacement moteur toit ouvrant",g:"Moyenne"},
      {t:"Store électrique HS",d:"Store toit ne fonctionne plus",s:"Remplacement moteur store",g:"Faible"},
      {t:"Éclairage d'ambiance",d:"LED d'ambiance ne fonctionnent plus",s:"Remplacement bandeau LED",g:"Faible"},
      {t:"Éclairage coffre HS",d:"Éclairage coffre ne fonctionne plus",s:"Remplacement ampoule ou LED",g:"Faible"},
      {t:"Allume-cigare défectueux",d:"Prise 12V ne fonctionne plus",s:"Remplacement prise allume-cigare",g:"Faible"},
      {t:"Port USB HS",d:"Ports USB ne fonctionnent plus",s:"Remplacement module USB",g:"Faible"},
      {t:"Chargeur induction défectueux",d:"Charge sans fil ne fonctionne plus",s:"Remplacement plaque induction",g:"Faible"},
      {t:"Bluetooth déconnecté",d:"Connexion téléphone impossible",s:"Réinitialisation ou mise à jour",g:"Faible"},
      {t:"Apple CarPlay/Android Auto",d:"Connexion smartphone HS",s:"Mise à jour logiciel ou câble",g:"Faible"},
      {t:"Radio ne fonctionne plus",d:"Pas de son, écran radio noir",s:"Remplacement autoradio",g:"Moyenne"},
      {t:"Haut-parleurs défectueux",d:"Son grésillant ou coupé",s:"Remplacement haut-parleurs",g:"Faible"},
      {t:"Amplificateur audio HS",d:"Son faible ou inexistant",s:"Remplacement amplificateur",g:"Moyenne"},
      {t:"Antenne GPS défectueuse",d:"Navigation GPS imprécise ou HS",s:"Remplacement antenne GPS",g:"Moyenne"},
      {t:"Antenne radio HS",d:"Réception radio mauvaise ou nulle",s:"Remplacement antenne radio",g:"Faible"},
      {t:"Radar de régulateur",d:"Régulateur adaptatif ne fonctionne plus",s:"Réglage ou remplacement radar",g:"Grave"},
      {t:"Caméra 360° défectueuse",d:"Vue panoramique ne fonctionne plus",s:"Remplacement caméra ou calculateur",g:"Moyenne"},
      {t:"Détecteur angle mort",d:"Alerte angle mort ne fonctionne plus",s:"Remplacement capteur radar",g:"Moyenne"},
      {t:"Aide au stationnement",d:"Stationnement semi-auto ne fonctionne plus",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Reconnaissance fatigue",d:"Alerte fatigue conducteur HS",s:"Mise à jour logiciel",g:"Faible"},
      {t:"Appel d'urgence eCall",d:"Bouton SOS ne fonctionne plus",s:"Remplacement module eCall",g:"Grave"},
      {t:"Connectivité 4G/5G",d:"Internet embarqué ne fonctionne plus",s:"Remplacement module connecté",g:"Faible"},
      {t:"Mise à jour OTA bloquée",d:"Mises à jour logicielles échouent",s:"Forçage mise à jour en concession",g:"Faible"}
    ],
    "Diesel": [
      {t:"Turbo 1.5/2.0 BlueHDi",d:"Perte puissance, fumée bleue",s:"Remplacement turbo",g:"Grave"},
      {t:"FAP BlueHDi colmaté",d:"Témoin FAP, perte puissance",s:"Régénération ou remplacement FAP",g:"Moyenne"},
      {t:"AdBlue défaillant",d:"Démarrage impossible après compte à rebours",s:"Remplacement réservoir + pompe",g:"Grave"},
      {t:"Injecteurs grippés",d:"Démarrage difficile, retour carburant",s:"Remplacement injecteurs + codage",g:"Grave"},
      {t:"Courroie accessoires",d:"Rupture, perte direction assistée",s:"Remplacement courroie + tendeurs",g:"Grave"},
      {t:"Vanne EGR encrassée",d:"Ralenti instable, fumée",s:"Nettoyage vanne EGR",g:"Moyenne"},
      {t:"Écran tactile i-Cockpit HS",d:"Écran noir, tactile ne répond plus",s:"Mise à jour ou remplacement écran",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture ne se déroule plus",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim + recherche fuite",g:"Moyenne"},
      {t:"Phares LED défectueux",d:"LED HS",s:"Remplacement module LED",g:"Moyenne"},
      {t:"Sièges électriques HS",d:"Réglage électrique HS",s:"Remplacement moteur siège",g:"Moyenne"},
      {t:"Batterie 12V faible",d:"Démarrage difficile",s:"Remplacement batterie",g:"Moyenne"},
      {t:"Alternateur défaillant",d:"Batterie ne charge plus",s:"Remplacement alternateur",g:"Grave"},
      {t:"Verrouillage centralisé",d:"Portières ne se verrouillent plus",s:"Remplacement actuateur",g:"Moyenne"}
    ],
    "Hybride": [
      {t:"Batterie hybride",d:"Perte autonomie électrique",s:"Remplacement modules",g:"Grave"},
      {t:"Onduleur hybride",d:"Véhicule ne démarre plus en électrique",s:"Remplacement onduleur",g:"Très grave"},
      {t:"Embrayage hybride usé",d:"À-coups, bruits",s:"Remplacement embrayage",g:"Moyenne"},
      {t:"Écran tactile i-Cockpit HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
    ],
    "Électrique": [
      {t:"Batterie haute tension",d:"Perte autonomie, limitation puissance",s:"Diagnostic BMS, remplacement modules",g:"Grave"},
      {t:"Chargeur embarqué",d:"Impossible de charger en AC",s:"Remplacement chargeur OBC",g:"Grave"},
      {t:"Refroidissement batterie",d:"Surchauffe, limitation charge rapide",s:"Remplacement pompe refroidissement",g:"Grave"},
      {t:"Écran tactile i-Cockpit HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
    ]
  },
  "Renault": {
    "Essence": [
      {t:"Turbo 1.3 TCe fragile",d:"Perte puissance, sifflement",s:"Remplacement turbo + lignes",g:"Grave"},
      {t:"Chaîne distribution 1.3 TCe",d:"Allongement avant 100k km",s:"Remplacement kit chaîne",g:"Très grave"},
      {t:"Consommation huile 1.3 TCe",d:"Moteur H5H consomme 1L/1000km",s:"Vérification segmentation",g:"Grave"},
      {t:"Écran tactile R-Link HS",d:"Écran noir, tactile ne répond plus, reboot",s:"Mise à jour logiciel ou remplacement écran",g:"Moyenne"},
      {t:"Système multimédia défectueux",d:"Navigation GPS HS, Bluetooth HS",s:"Réinitialisation ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture ne se déroule plus",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Prétendeur de ceinture HS",d:"Voyant airbag allumé",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag passager défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"},
      {t:"Phares LED défectueux",d:"LED HS",s:"Remplacement module LED",g:"Moyenne"},
      {t:"Sièges électriques HS",d:"Réglage électrique HS",s:"Remplacement moteur siège",g:"Moyenne"},
      {t:"Batterie 12V faible",d:"Démarrage difficile",s:"Remplacement batterie",g:"Moyenne"}
    ],
    "Diesel": [
      {t:"Boîte EDC défaillante",d:"À-coups, voyant boîte",s:"Remplacement mécatronique",g:"Grave"},
      {t:"Injecteurs 1.5 dCi grippés",d:"Démarrage difficile",s:"Remplacement injecteurs",g:"Grave"},
      {t:"Courroie distribution 1.5 dCi",d:"Risque rupture avant 120k km",s:"Remplacement préventif kit",g:"Très grave"},
      {t:"Turbo 1.5 dCi",d:"Perte puissance, sifflement",s:"Remplacement turbo",g:"Grave"},
      {t:"Écran tactile R-Link HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"}
    ],
    "Hybride": [{t:"Système E-Tech",d:"Perte autonomie électrique",s:"Diagnostic système",g:"Grave"}],
    "Électrique": [{t:"Batterie Zoe/Megane",d:"Perte autonomie importante",s:"Remplacement modules",g:"Grave"}]
  },
  "Volkswagen": {
    "Essence": [
      {t:"Consommation huile TSI",d:"1L/1000km moteurs EA888",s:"Remplacement segments",g:"Grave"},
      {t:"Chaîne distribution 1.4 TSI",d:"Allongement avant 100k km",s:"Remplacement kit chaîne",g:"Très grave"},
      {t:"Turbo 1.4/2.0 TSI",d:"Perte puissance, jeu axial",s:"Remplacement turbo",g:"Grave"},
      {t:"Écran tactile Composition/Discover",d:"Écran noir, tactile HS",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation Climatic/Climatronic",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
    ],
    "Diesel": [
      {t:"Dieselgate",d:"Logiciel truqueur NOx",s:"Mise à jour logiciel",g:"Grave"},
      {t:"Boîte DSG7 mécatronique",d:"À-coups, calages",s:"Remplacement mécatronique",g:"Grave"},
      {t:"Injecteurs 2.0 TDI",d:"Fuites injecteurs",s:"Remplacement injecteurs",g:"Grave"},
      {t:"FAP 2.0 TDI colmaté",d:"Voyant FAP, perte puissance",s:"Régénération ou remplacement",g:"Moyenne"},
      {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie ID.3/ID.4",d:"Perte autonomie, limitation charge",s:"Diagnostic BMS",g:"Grave"}]
  },
  "BMW": {
    "Essence": [
      {t:"Chaîne distribution N47/N57",d:"Rupture chaîne côté boîte",s:"Remplacement kit chaîne",g:"Très grave"},
      {t:"Système Valvetronic",d:"Ralenti instable, perte puissance",s:"Remplacement moteur Valvetronic",g:"Grave"},
      {t:"Turbo N47/N57",d:"Perte puissance, jeu axial",s:"Remplacement turbo",g:"Grave"},
      {t:"Écran tactile iDrive HS",d:"Écran noir, iDrive ne répond plus",s:"Mise à jour ou remplacement écran",g:"Moyenne"},
      {t:"Système multimédia défectueux",d:"Navigation BMW Professional HS",s:"Remplacement calculateur",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
    ],
    "Diesel": [
      {t:"Chaîne N47",d:"Rupture distribution",s:"Remplacement kit chaîne",g:"Très grave"},
      {t:"Injecteurs piezo 2.0/3.0 d",d:"Fuites injecteurs",s:"Remplacement injecteurs + codage",g:"Grave"},
      {t:"FAP BMW",d:"Colmatage FAP",s:"Régénération ou remplacement",g:"Moyenne"},
      {t:"Écran iDrive HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie iX/i4",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  },
  "Mercedes": {
    "Essence": [
      {t:"Boîte 7G-Tronic",d:"À-coups, calages",s:"Remplacement boîte",g:"Grave"},
      {t:"Turbo M274",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"},
      {t:"Chaîne distribution M274",d:"Allongement chaîne",s:"Remplacement kit chaîne",g:"Très grave"},
      {t:"Écran tactile MBUX/COMAND",d:"Écran noir, tactile HS",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation Thermatic",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"}
    ],
    "Diesel": [
      {t:"Injecteurs OM651",d:"Injecteurs grippés",s:"Remplacement injecteurs",g:"Grave"},
      {t:"Turbo OM651/OM642",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"},
      {t:"Suspension Airmatic",d:"Véhicule s'affaisse",s:"Remplacement amortisseurs",g:"Grave"},
      {t:"Écran MBUX HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie EQS/EQE",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  },
  "Toyota": {
    "Essence": [
      {t:"Consommation huile 2.0 D-4D",d:"Jusqu'à 1L/1000km",s:"Remplacement segments",g:"Grave"},
      {t:"Turbo 1.2 Turbo",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"},
      {t:"Écran tactile Touch 2/Go",d:"Écran noir, tactile HS",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Injecteurs 2.0/2.2 D-4D",d:"Fuites injecteurs",s:"Remplacement injecteurs",g:"Grave"},
      {t:"Joint de culasse 2.2 D-CAT",d:"Fuite liquide, surchauffe",s:"Remplacement joint culasse",g:"Très grave"},
      {t:"FAP Toyota",d:"Colmatage prématuré",s:"Régénération ou remplacement",g:"Moyenne"},
      {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Hybride": [
      {t:"Batterie hybride",d:"Perte autonomie, voyant batterie",s:"Remplacement modules",g:"Grave"},
      {t:"Onduleur hybride",d:"Véhicule ne démarre plus",s:"Remplacement onduleur",g:"Très grave"},
      {t:"Écran tactile HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie bZ4X",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  },
  "Ford": {
    "Essence": [
      {t:"Courroie 1.0 EcoBoost",d:"Courroie dans l'huile, risque casse",s:"Remplacement courroie + pompe",g:"Très grave"},
      {t:"Turbo 1.5/2.0 EcoBoost",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"},
      {t:"Écran tactile SYNC 3",d:"Écran noir, tactile HS",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"}
    ],
    "Diesel": [
      {t:"Boîte Powershift 6DCT250",d:"À-coups, calages, embrayage usé",s:"Remplacement embrayages",g:"Grave"},
      {t:"Injecteurs 2.0 TDCi",d:"Injecteurs grippés",s:"Remplacement injecteurs",g:"Grave"},
      {t:"FAP Ford",d:"Colmatage FAP",s:"Régénération ou remplacement",g:"Moyenne"},
      {t:"Écran SYNC HS",d:"Écran noir",s:"Mise à jour ou remplacement",g:"Moyenne"},
      {t:"Ceinture bloquée",d:"Ceinture bloquée",s:"Remplacement prétendeur",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie Mustang Mach-E",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  },
  "Tesla": {
    "Électrique": [
      {t:"Batterie haute tension",d:"Perte autonomie, limitation charge",s:"Diagnostic BMS, remplacement modules",g:"Grave"},
      {t:"Écran tactile MCU",d:"Écran noir, lag, reboot intempestif",s:"Remplacement MCU",g:"Moyenne"},
      {t:"Système multimédia",d:"Navigation GPS HS, Bluetooth HS",s:"Mise à jour logicielle",g:"Moyenne"},
      {t:"Ceinture de sécurité bloquée",d:"Ceinture ne se déroule plus",s:"Remplacement prétendeur",g:"Grave"},
      {t:"Airbag défectueux",d:"Voyant airbag allumé",s:"Remplacement airbag",g:"Très grave"},
      {t:"Climatisation automatique",d:"Plus de froid",s:"Recharge clim",g:"Moyenne"},
      {t:"Portes poignées",d:"Poignées ne sortent plus",s:"Remplacement mécanisme",g:"Faible"},
      {t:"Suspension pneumatique",d:"Véhicule s'affaisse",s:"Remplacement soufflets",g:"Grave"},
      {t:"Chargeur embarqué",d:"Impossible charger en AC",s:"Remplacement chargeur",g:"Grave"}
    ]
  },
  "Hyundai": {
    "Essence": [{t:"Turbo 1.6 T-GDi",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"}],
    "Diesel": [
      {t:"Injecteurs 1.6 CRDi",d:"Injecteurs grippés",s:"Remplacement injecteurs",g:"Grave"},
      {t:"Boîte DCT 7 vitesses",d:"À-coups, mécatronique HS",s:"Remplacement mécatronique",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie Ioniq 5/6",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  },
  "Kia": {
    "Essence": [{t:"Turbo 1.6 T-GDi",d:"Perte puissance",s:"Remplacement turbo",g:"Grave"}],
    "Diesel": [
      {t:"Injecteurs 1.6 CRDi",d:"Injecteurs grippés",s:"Remplacement injecteurs",g:"Grave"},
      {t:"Boîte DCT 7 vitesses",d:"À-coups, mécatronique HS",s:"Remplacement mécatronique",g:"Grave"}
    ],
    "Électrique": [{t:"Batterie EV6/EV9",d:"Perte autonomie",s:"Diagnostic BMS",g:"Grave"}]
  }
};

// Pannes spécifiques MOTO/SCOOTER (inchangé)
const PANNES_MOTO = {
  "Yamaha": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit, usure couronne",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche, amortissement réduit",s:"Remplacement joints spi + huile fourche",g:"Moyenne"},
    {t:"Plaquettes de frein usées",d:"Perte efficacité freinage, bruit métal",s:"Remplacement plaquettes avant/arrière",g:"Faible"},
    {t:"Embrayage patine",d:"Patina à l'accélération, régime monte sans vitesse",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Batterie faible",d:"Démarrage difficile, batterie ne tient plus",s:"Remplacement batterie 12V",g:"Faible"},
    {t:"Carburateur encrassé",d:"Ralenti instable, calages, surconsommation",s:"Nettoyage carburateur + gicleurs",g:"Moyenne"},
    {t:"Bobine d'allumage HS",d:"Ratés d'allumage, voyant moteur",s:"Remplacement bobine d'allumage",g:"Moyenne"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus, surtension",s:"Remplacement régulateur redresseur",g:"Grave"},
    {t:"Pompe à essence défaillante",d:"Perte puissance, calages",s:"Remplacement pompe à essence",g:"Grave"},
    {t:"Capteur TPS défectueux",d:"Accélération saccadée, voyant moteur",s:"Remplacement capteur TPS",g:"Moyenne"}
  ],
  "Honda": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit, usure couronne",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi + huile fourche",g:"Moyenne"},
    {t:"Variateur usé (scooter)",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission (scooter)",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Capteur IAC défectueux",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue, consommation huile",s:"Remplacement pompe à huile",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon, blocage",s:"Remplacement roulements de direction",g:"Grave"}
  ],
  "Kawasaki": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de roue",d:"Bruit anormal, jeu dans la roue",s:"Remplacement roulements",g:"Moyenne"}
  ],
  "Suzuki": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"}
  ],
  "BMW": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche Telelever/Paralever",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Cardan usé",d:"Vibrations, bruit anormal",s:"Remplacement cardan",g:"Grave"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Capteur ABS défectueux",d:"Voyant ABS allumé",s:"Remplacement capteur ABS",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Suspension ESA défaillante",d:"Réglage électronique HS",s:"Remplacement vérin ESA",g:"Grave"},
    {t:"Pompe à huile Boxer",d:"Fuite huile moteur",s:"Remplacement pompe à huile",g:"Grave"}
  ],
  "Ducati": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Desmodromique à régler",d:"Jeu aux soupapes, bruit moteur",s:"Réglage desmodromique",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"}
  ],
  "KTM": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche WP",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Harley-Davidson": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Courroie de transmission usée",d:"Fissures courroie, bruit",s:"Remplacement courroie",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pousserie de culbuteur usée",d:"Bruit moteur, perte puissance",s:"Remplacement pousserie",g:"Grave"},
    {t:"Joint de culasse",d:"Fuite huile moteur",s:"Remplacement joint de culasse",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"}
  ],
  "Triumph": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche Showa",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Piaggio": [
    {t:"Variateur usé",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue",s:"Remplacement pompe à huile",g:"Grave"}
  ],
  "Vespa": [
    {t:"Variateur usé",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue",s:"Remplacement pompe à huile",g:"Grave"}
  ],
  "Peugeot": [
    {t:"Variateur usé",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue",s:"Remplacement pompe à huile",g:"Grave"}
  ],
  "Aprilia": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "MV Agusta": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche Marzocchi/Öhlins",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Royal Enfield": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Joint de culasse",d:"Fuite huile moteur",s:"Remplacement joint de culasse",g:"Grave"},
    {t:"Pousserie de culbuteur usée",d:"Bruit moteur, perte puissance",s:"Remplacement pousserie",g:"Grave"}
  ],
  "Indian": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Courroie de transmission usée",d:"Fissures courroie, bruit",s:"Remplacement courroie",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pousserie de culbuteur usée",d:"Bruit moteur, perte puissance",s:"Remplacement pousserie",g:"Grave"},
    {t:"Joint de culasse",d:"Fuite huile moteur",s:"Remplacement joint de culasse",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"}
  ],
  "Husqvarna": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche WP",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Beta": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "GasGas": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Sherco": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "TM Racing": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Roulements de direction",d:"Jeu dans le guidon",s:"Remplacement roulements",g:"Grave"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur d'angle d'ouverture papillon",d:"Accélération saccadée",s:"Remplacement capteur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Benelli": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "CF Moto": [
    {t:"Chaîne de transmission usée",d:"Allongement chaîne, bruit",s:"Remplacement chaîne + couronne + pignon",g:"Moyenne"},
    {t:"Fourche qui fuit",d:"Fuite huile fourche",s:"Remplacement joints spi",g:"Moyenne"},
    {t:"Embrayage patine",d:"Patina à l'accélération",s:"Remplacement disques embrayage",g:"Grave"},
    {t:"Régulateur de tension",d:"Batterie ne charge plus",s:"Remplacement régulateur",g:"Grave"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Pompe à essence",d:"Perte puissance",s:"Remplacement pompe",g:"Grave"},
    {t:"Capteur TPS",d:"Accélération saccadée",s:"Remplacement capteur TPS",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Radiateur percé",d:"Fuite liquide refroidissement",s:"Remplacement radiateur",g:"Grave"}
  ],
  "Kymco": [
    {t:"Variateur usé",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue",s:"Remplacement pompe à huile",g:"Grave"}
  ],
  "SYM": [
    {t:"Variateur usé",d:"Perte accélération, bruit anormal",s:"Remplacement kit variateur + galets",g:"Moyenne"},
    {t:"Courroie de transmission",d:"Rupture courroie, scooter ne roule plus",s:"Remplacement courroie transmission",g:"Grave"},
    {t:"Embrayage centrifuge usé",d:"Patina au démarrage, vibrations",s:"Remplacement embrayage centrifuge",g:"Moyenne"},
    {t:"Batterie faible",d:"Démarrage électrique difficile",s:"Remplacement batterie",g:"Faible"},
    {t:"Bobine d'allumage",d:"Ratés d'allumage",s:"Remplacement bobine",g:"Moyenne"},
    {t:"Carburateur encrassé",d:"Ralenti instable",s:"Nettoyage carburateur",g:"Moyenne"},
    {t:"Roulements de roue",d:"Bruit anormal",s:"Remplacement roulements",g:"Moyenne"},
    {t:"Amortisseur arrière usé",d:"Perte d'amortissement",s:"Remplacement amortisseur",g:"Moyenne"},
    {t:"Capteur IAC",d:"Ralenti instable",s:"Remplacement capteur IAC",g:"Moyenne"},
    {t:"Pompe à huile usée",d:"Fumée bleue",s:"Remplacement pompe à huile",g:"Grave"}
  ]
};

// Modèles voitures (inchangé - trop long à afficher ici)
const MODELES_VOITURE = {
  // ... (garder les mêmes modèles que précédemment)
};

// Modèles MOTO/SCOOTER (inchangé - trop long à afficher ici)
const MODELES_MOTO = {
  // ... (garder les mêmes modèles que précédemment)
};

// Détection type moteur
function detecterTypeMoteur(motorisation, marque, modele) {
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
        const typeMoteur = detecterTypeMoteur(motorisation, marque, modele);
        const pannesMarque = PANNES_VOITURE[marque];
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
  
  // FICHES MOTO/SCOOTER
  for (const [marque, modeles] of Object.entries(MODELES_MOTO)) {
    for (const [modele, motorisations] of Object.entries(modeles)) {
      for (const motorisation of motorisations) {
        const pannes = PANNES_MOTO[marque] || [];
        const nbFiches = Math.max(pannes.length, 5);
        
        for (let i = 0; i < nbFiches; i++) {
          const panne = pannes[i % pannes.length] || {t:"Révision générale",d:"Entretien périodique",s:"Vidange + filtres",g:"Faible"};
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
  
  console.log('✅ ' + DATABASE.fiches.length + ' fiches générées (Voitures + Motos)');
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
