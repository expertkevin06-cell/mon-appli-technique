// ============================================================
// TECHNIQUE AUTO BY KEVIN - Base de données complète
// Généré automatiquement - 2026
// ============================================================

const DATABASE = {
  marques: {
    "Peugeot": { logo: "🇫🇷", couleur: "#1B3A6B" },
    "Renault": { logo: "🇫", couleur: "#FFCC33" },
    "Citroën": { logo: "🇷", couleur: "#CC0000" },
    "Volkswagen": { logo: "🇩🇪", couleur: "#001E50" },
    "BMW": { logo: "🇩🇪", couleur: "#0066B1" },
    "Mercedes": { logo: "🇩🇪", couleur: "#333333" },
    "Audi": { logo: "🇩🇪", couleur: "#BB0A30" },
    "Ford": { logo: "🇺🇸", couleur: "#003478" },
    "Toyota": { logo: "🇯🇵", couleur: "#EB0A1E" },
    "Nissan": { logo: "🇯🇵", couleur: "#C3002F" },
    "Hyundai": { logo: "🇰🇷", couleur: "#002C5F" },
    "Kia": { logo: "🇰🇷", couleur: "#05141F" },
    "Tesla": { logo: "⚡", couleur: "#CC0000" },
    "Dacia": { logo: "🇷", couleur: "#003DA5" },
    "Fiat": { logo: "🇹", couleur: "#9D0A0E" },
    "Opel": { logo: "🇩🇪", couleur: "#FFD700" },
    "Volvo": { logo: "🇸🇪", couleur: "#003057" },
    "Mazda": { logo: "🇵", couleur: "#B00D1E" },
    "Honda": { logo: "🇯🇵", couleur: "#CC0000" },
    "Seat": { logo: "🇪🇸", couleur: "#FFD700" },
    "Skoda": { logo: "🇨🇿", couleur: "#4BA82E" },
    "Mini": { logo: "🇬", couleur: "#000000" },
    "Alfa Romeo": { logo: "🇮🇹", couleur: "#8B0000" },
    "Jaguar": { logo: "🇬🇧", couleur: "#000000" },
    "Alpine": { logo: "🇷", couleur: "#0055A4" },
    "BYD": { logo: "🇨🇳", couleur: "#003DA5" },
    "Jeep": { logo: "🇺🇸", couleur: "#1E5631" }
  },
  
  marquesMoto: {
    "Yamaha": { logo: "🇯🇵", couleur: "#003DA5" },
    "Kawasaki": { logo: "🇯🇵", couleur: "#00A651" },
    "Ducati": { logo: "🇮🇹", couleur: "#CC0000" },
    "KTM": { logo: "🇦", couleur: "#FF6B00" },
    "Suzuki": { logo: "🇯🇵", couleur: "#003DA5" },
    "Triumph": { logo: "🇬🇧", couleur: "#000000" },
    "Harley-Davidson": { logo: "🇸", couleur: "#FF6B00" },
    "Piaggio": { logo: "🇮🇹", couleur: "#003DA5" },
    "Vespa": { logo: "🇮🇹", couleur: "#00A651" },
    "BMW Moto": { logo: "🇪", couleur: "#0066B1" },
    "Honda Moto": { logo: "🇯🇵", couleur: "#CC0000" },
    "Peugeot Moto": { logo: "🇫🇷", couleur: "#1B3A6B" }
  },
  
  fiches: []
};

// ============================================================
// MOTORISATIONS COMPLÈTES PAR MARQUE ET MODÈLE
// ============================================================
const MOTORISATIONS = {
  "Peugeot": {
    "208": ["1.2 PureTech 82ch Essence", "1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 100ch Diesel", "e-208 100kW Électrique"],
    "2008": ["1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "e-2008 100kW Électrique"],
    "308": ["1.2 PureTech 110ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 180ch Hybride", "e-308 115kW Électrique"],
    "3008": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "e-3008 157kW Électrique"],
    "408": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 180ch Hybride", "e-408 157kW Électrique"],
    "508": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride"],
    "5008": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "e-5008 157kW Électrique"],
    "Rifter": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Rifter 100kW Électrique"],
    "Partner": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Partner 100kW Électrique"],
    "Expert": ["1.5 BlueHDi 120ch Diesel", "2.0 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "ë-Expert 100kW Électrique"],
    "Traveller": ["1.5 BlueHDi 120ch Diesel", "2.0 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "ë-Traveller 100kW Électrique"],
    "Boxer": ["2.0 BlueHDi 140ch Diesel", "2.0 BlueHDi 165ch Diesel", "2.2 HDi 130ch Diesel", "ë-Boxer 100kW Électrique"]
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
    "Renault 4": ["E-Tech Electric 95kW Électrique", "E-Tech Electric 110kW Électrique", "E-Tech Electric 150ch Électrique", "Iconic 110kW Électrique", "Techno 110kW Électrique", "Esprit Alpine 150kW Électrique"],
    "Trafic": ["1.6 dCi 95ch Diesel", "1.6 dCi 120ch Diesel", "1.6 dCi 125ch Diesel", "1.6 dCi 145ch Diesel", "2.0 Blue dCi 110ch Diesel", "2.0 Blue dCi 120ch Diesel", "2.0 Blue dCi 145ch Diesel", "2.0 Blue dCi 150ch Diesel", "2.0 Blue dCi 170ch Diesel", "E-Tech Electric 110kW Électrique", "E-Tech Electric 125kW Électrique"],
    "Express": ["1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "E-Tech Electric 90kW Électrique"],
    "Kangoo": ["1.3 TCe 100ch Essence", "1.3 TCe 130ch Essence", "1.5 Blue dCi 95ch Diesel", "1.5 Blue dCi 115ch Diesel", "E-Tech Electric 90kW Électrique", "E-Tech Electric 122ch Électrique"],
    "Master": ["2.3 dCi 130ch Diesel", "2.3 dCi 150ch Diesel", "2.3 dCi 170ch Diesel", "E-Tech Electric 105kW Électrique"],
    "Zoe": ["R110 80kW Électrique", "R135 100kW Électrique", "R135 135ch Électrique"]
  },
  
  "Citroën": {
    "C3": ["1.2 PureTech 82ch Essence", "1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "ë-C3 83kW Électrique"],
    "C3 Aircross": ["1.2 PureTech 110ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "1.5 Hybrid 136ch Hybride", "ë-C3 Aircross 83kW Électrique"],
    "C4": ["1.2 PureTech 100ch Essence", "1.2 PureTech 130ch Essence", "1.5 BlueHDi 110ch Diesel", "1.5 BlueHDi 130ch Diesel", "1.6 Hybrid 136ch Hybride", "ë-C4 100kW Électrique"],
    "C5 Aircross": ["1.2 PureTech 130ch Essence", "1.5 BlueHDi 130ch Diesel", "2.0 BlueHDi 180ch Diesel", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "ë-C5 Aircross 165kW Électrique"],
    "Berlingo": ["1.2 PureTech 110ch Essence", "1.5 BlueHDi 100ch Diesel", "1.5 BlueHDi 130ch Diesel", "ë-Berlingo 100kW Électrique"],
    "SpaceTourer": ["1.5 BlueHDi 120ch Diesel", "2.0 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "ë-SpaceTourer 100kW Électrique"],
    "C5 X": ["1.2 PureTech 130ch Essence", "1.6 Hybrid 180ch Hybride", "1.6 Hybrid 225ch Hybride", "2.0 BlueHDi 180ch Diesel", "ë-C5 X 165kW Électrique"],
    "Jumpy": ["1.5 BlueHDi 120ch Diesel", "2.0 BlueHDi 150ch Diesel", "2.0 BlueHDi 180ch Diesel", "ë-Jumpy 100kW Électrique"],
    "Jumper": ["2.0 BlueHDi 140ch Diesel", "2.0 BlueHDi 165ch Diesel", "2.2 HDi 130ch Diesel", "ë-Jumper 100kW Électrique"],
    "Ami": ["Ami 6kW Électrique", "Ami Cargo 6kW Électrique"]
  },
  
  "Volkswagen": {
    "Golf": ["1.0 TSI 90ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "1.4 eTSI 150ch Hybride", "1.4 GTE 204ch Hybride", "Golf R 320ch Essence", "e-Golf 100kW Électrique"],
    "Polo": ["1.0 MPI 65ch Essence", "1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 80ch Diesel", "2.0 TDI 95ch Diesel", "Polo GTI 200ch Essence"],
    "Tiguan": ["1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 245ch Essence", "2.0 TDI 120ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 eTSI 245ch Hybride", "Tiguan R 320ch Essence"],
    "Passat": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 272ch Essence", "1.6 TDI 120ch Diesel", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "1.4 GTE 218ch Hybride"],
    "T-Roc": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "1.6 TDI 115ch Diesel", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "T-Roc R 300ch Essence"],
    "Taigo": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "1.6 TDI 115ch Diesel"],
    "T-Cross": ["1.0 TSI 95ch Essence", "1.0 TSI 110ch Essence", "1.5 TSI 150ch Essence", "1.6 TDI 95ch Diesel", "2.0 TDI 115ch Diesel"],
    "Touran": ["1.5 TSI 130ch Essence", "1.5 TSI 150ch Essence", "2.0 TDI 115ch Diesel", "2.0 TDI 150ch Diesel", "1.4 eTSI 150ch Hybride"],
    "Arteon": ["1.5 TSI 150ch Essence", "2.0 TSI 190ch Essence", "2.0 TSI 272ch Essence", "2.0 TDI 150ch Diesel", "2.0 TDI 190ch Diesel", "2.0 TDI 240ch Diesel", "1.4 GTE 218ch Hybride", "Arteon R 320ch Essence"],
    "ID.3": ["Pure 110kW Électrique", "Pro 150kW Électrique", "Pro Performance 204ch Électrique", "Pro S 204ch Électrique", "GTX 231ch Électrique"],
    "ID.4": ["Pure 125kW Électrique", "Pro 150kW Électrique", "Pro Performance 204ch Électrique", "Pro 4Motion 265ch Électrique", "GTX 299ch Électrique"],
    "ID.5": ["Pro 150kW Électrique", "Pro Performance 204ch Électrique", "GTX 299ch Électrique"],
    "ID.7": ["Pro 210kW Électrique", "Pro S 245ch Électrique", "GTX 340ch Électrique"],
    "ID.Buzz": ["Pro 150kW Électrique", "Pro 204ch Électrique", "GTX 286ch Électrique"],
    "Caddy": ["1.5 TSI 115ch Essence", "2.0 TDI 102ch Diesel", "2.0 TDI 122ch Diesel", "e-Caddy 100kW Électrique"],
    "Crafter": ["2.0 TDI 102ch Diesel", "2.0 TDI 140ch Diesel", "2.0 TDI 177ch Diesel"],
    "Multivan": ["1.5 TSI 136ch Essence", "2.0 TDI 150ch Diesel", "eHybrid 218ch Hybride"],
    "Amarok": ["2.0 TDI 170ch Diesel", "2.0 TDI 205ch Diesel", "3.0 V6 TDI 258ch Diesel"],
    "Touareg": ["2.0 TSI 245ch Essence", "3.0 V6 TSI 340ch Essence", "3.0 V6 TDI 231ch Diesel", "3.0 V6 TDI 286ch Diesel", "R 462ch Hybride"]
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
    "EQE SUV": ["EQE 350+ 292ch Électrique", "EQE 500 408ch Électrique", "AMG EQE53 626ch Électrique"],
    "EQS SUV": ["EQS 450+ 360ch Électrique", "EQS 580 544ch Électrique", "AMG EQS53 687ch Électrique"],
    "EQA": ["EQA250 190ch Électrique", "EQA300 242ch Électrique", "EQA350 292ch Électrique"],
    "EQB": ["EQB250 190ch Électrique", "EQB300 242ch Électrique", "EQB350 292ch Électrique"],
    "EQC": ["EQC 400 408ch Électrique"],
    "EQV": ["EQV 300 204ch Électrique"],
    "Classe V": ["V200d 136ch Diesel", "V220d 163ch Diesel", "V250d 190ch Diesel", "V300d 239ch Diesel"]
  },
  
  "Tesla": {
    "Model 3": ["Standard Range Plus 283ch Électrique", "Long Range RWD 346ch Électrique", "Long Range AWD 346ch Électrique", "Performance 450ch Électrique", "Highland RWD 283ch Électrique", "Highland Long Range 346ch Électrique", "Highland Performance 510ch Électrique"],
    "Model Y": ["Standard Range 283ch Électrique", "Long Range AWD 346ch Électrique", "Performance 450ch Électrique", "Long Range 7 places 346ch Électrique"],
    "Model S": ["Long Range 670ch Électrique", "Plaid 1020ch Électrique"],
    "Model X": ["Long Range 670ch Électrique", "Plaid 1020ch Électrique"],
    "Cybertruck": ["AWD 600ch Électrique", "Cyberbeast 845ch Électrique", "Foundation 600ch Électrique"],
    "Roadster": ["Performance 1000ch Électrique", "Founders Series 1000ch Électrique"]
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
  
  "Dacia": {
    "Sandero": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "1.0 TCe 100ch GPL", "1.0 TCe 100ch E-GPL GPL"],
    "Sandero Stepway": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "1.0 TCe 100ch GPL"],
    "Logan": ["1.0 SCe 65ch Essence", "1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "1.0 TCe 100ch GPL"],
    "Duster": ["1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 130ch Essence", "1.3 TCe 150ch Essence", "1.5 Blue dCi 115ch Diesel", "1.6 LPG 100ch GPL", "1.3 TCe 150ch 4x4 Essence", "Hybrid 140ch Hybride"],
    "Jogger": ["1.0 TCe 90ch Essence", "1.0 TCe 100ch Essence", "1.3 TCe 130ch Essence", "1.5 Blue dCi 115ch Diesel", "Eco-G 100ch GPL", "Hybrid 140ch Hybride"],
    "Spring": ["Electric 45ch Électrique", "Electric 65ch Électrique", "Extreme 65ch Électrique"],
    "Bigster": ["1.2 TCe 130ch Essence", "1.2 TCe 130ch Hybride", "1.5 dCi 115ch Diesel", "Hybrid 140ch Hybride"],
    "Express": ["1.0 TCe 100ch Essence", "1.5 Blue dCi 95ch Diesel", "E-Tech Electric 90kW Électrique"],
    "Dokker": ["1.5 dCi 90ch Diesel", "1.5 dCi 110ch Diesel"],
    "Lodgy": ["1.5 dCi 90ch Diesel", "1.5 dCi 110ch Diesel", "1.6 SCe 100ch Essence"]
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
  
  "Alfa Romeo": {
    "Giulia": ["2.0 Turbo 200ch Essence", "2.0 Turbo 280ch Essence", "2.2 Diesel 160ch Diesel", "2.2 Diesel 190ch Diesel", "2.2 Diesel 210ch Diesel", "Quadrifoglio 510ch Essence", "Quadrifoglio 520ch Essence"],
    "Stelvio": ["2.0 Turbo 200ch Essence", "2.0 Turbo 280ch Essence", "2.2 Diesel 160ch Diesel", "2.2 Diesel 190ch Diesel", "2.2 Diesel 210ch Diesel", "Quadrifoglio 510ch Essence", "Quadrifoglio 520ch Essence"],
    "Tonale": ["1.5 Hybrid 130ch Hybride", "1.5 Hybrid 160ch Hybride", "1.6 Diesel 130ch Diesel", "1.6 Diesel 160ch Diesel", "1.3 Plug-in 190ch Hybride", "1.3 Plug-in 280ch Hybride", "Veloce 280ch Hybride"],
    "Giulietta": ["1.4 Turbo 120ch Essence", "1.4 Turbo 150ch Essence", "1.4 Turbo 170ch Essence", "1.6 Diesel 120ch Diesel", "2.0 Diesel 150ch Diesel", "2.0 Diesel 170ch Diesel", "Quadrifoglio 235ch Essence"],
    "MiTo": ["0.9 TwinAir 85ch Essence", "1.4 78ch Essence", "1.4 Turbo 120ch Essence", "1.4 Turbo 150ch Essence", "1.4 Turbo 170ch Essence", "1.3 Diesel 95ch Diesel", "1.6 Diesel 120ch Diesel", "Quadrifoglio 170ch Essence"],
    "4C": ["1.75 TBi 240ch Essence", "1.75 TBi 280ch Essence", "Spider 240ch Essence"]
  },
  
  "Jaguar": {
    "F-Pace": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride", "SVR 550ch Essence"],
    "E-Pace": ["1.5 P160 160ch Essence", "2.0 P200 200ch Essence", "2.0 P250 250ch Essence", "2.0 D150 150ch Diesel", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "P300e 309ch Hybride"],
    "I-Pace": ["EV400 400ch Électrique", "EV320 320ch Électrique", "Black 400ch Électrique"],
    "XE": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 P380 380ch Essence", "SV Project 8 600ch Essence"],
    "XF": ["2.0 P250 250ch Essence", "2.0 P300 300ch Essence", "3.0 P400 400ch Essence", "2.0 D165 165ch Diesel", "2.0 D200 200ch Diesel", "3.0 D300 300ch Diesel", "P400e 404ch Hybride"],
    "F-Type": ["2.0 P300 300ch Essence", "3.0 P380 380ch Essence", "5.0 P450 450ch Essence", "5.0 P575 575ch Essence", "75th 450ch Essence", "R 575ch Essence", "SVR 575ch Essence"]
  },
  
  "Alpine": {
    "A110": ["1.8 TCe 252ch Essence", "1.8 TCe 292ch Essence", "S 292ch Essence", "R 300ch Essence", "GT 252ch Essence", "Pure 252ch Essence", "Légende GT 292ch Essence"],
    "A110 S": ["1.8 TCe 292ch Essence", "Enstone Edition 292ch Essence", "R 300ch Essence"],
    "A110 R": ["1.8 TCe 300ch Essence", "Le Mans 300ch Essence"],
    "A290": ["E-Tech Electric 160kW Électrique", "E-Tech Electric 180kW Électrique", "E-Tech Electric 220ch Électrique", "E-Tech Electric 245ch Électrique", "Première Edition 220ch Électrique", "GTS 245ch Électrique"],
    "A390": ["E-Tech Electric 250kW Électrique", "E-Tech Electric 300kW Électrique", "E-Tech Electric 360ch Électrique", "E-Tech Electric 400ch Électrique", "GT 360ch Électrique", "GTS 400ch Électrique"]
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
  }
};

// ============================================================
// GÉNÉRATION AUTOMATIQUE DES FICHES
// ============================================================
function detecterTypeMoteur(motorisation, marque, modele) {
  const moto = motorisation.toLowerCase();
  
  if (moto.includes('electric') || moto.includes('électrique') || moto.includes(' kw ') || moto.includes('kwh') || moto.includes('ev ') || moto.includes(' e-') || moto.includes('ë-')) {
    return 'Électrique';
  }
  
  const marquesElectriques = ['tesla', 'byd', 'xpeng', 'nio', 'li auto', 'zeekr', 'polestar', 'lucid', 'rivian'];
  if (marquesElectriques.includes(marque.toLowerCase())) {
    return 'Électrique';
  }
  
  if (marque.toLowerCase() === 'alpine') {
    if (modele && (modele.includes('A290') || modele.includes('A390'))) {
      return 'Électrique';
    }
    return 'Essence';
  }
  
  if (moto.includes('hybrid') || moto.includes('e-tech') || moto.includes('plug-in') || moto.includes('phev') || moto.includes('4xe') || moto.includes(' gte') || moto.includes('tfsie') || moto.includes('e-tsi') || moto.includes('e-hybrid') || moto.includes(' mild hybrid') || moto.includes('mhev')) {
    return 'Hybride';
  }
  
  if (moto.includes('diesel') || moto.includes(' tdi') || moto.includes('dci') || moto.includes('bluehdi') || moto.includes('crdi') || moto.includes('ecoblue') || moto.includes('multijet') || moto.includes('i-dtec') || moto.includes('cdti') || moto.includes('hdi') || moto.includes('dti') || moto.includes('d-4d')) {
    return 'Diesel';
  }
  
  if (moto.includes('gpl') || moto.includes('lpg')) {
    return 'GPL';
  }
  
  return 'Essence';
}

const PANNES = [
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

const annees = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
let id = 1;

for (const [marque, modeles] of Object.entries(MOTORISATIONS)) {
  for (const [modele, motorisations] of Object.entries(modeles)) {
    const nbFiches = Math.min(motorisations.length, 5);
    
    for (let i = 0; i < nbFiches && id <= 3000; i++) {
      const motorisation = motorisations[i];
      const panne = PANNES[Math.floor(Math.random() * 36)];
      const anneeDebut = annees[Math.floor(Math.random() * annees.length)];
      const anneeFin = Math.min(anneeDebut + 2 + Math.floor(Math.random() * 3), 2026);
      const typeMoteur = detecterTypeMoteur(motorisation, marque, modele);
      
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

// ============================================================
// SAUVEGARDE / CHARGEMENT
// ============================================================
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
      console.error('❌ Erreur chargement:', e);
    }
  } else {
    console.log('✅ ' + DATABASE.fiches.length + ' fiches générées');
  }
}

// ============================================================
// INITIALISATION
// ============================================================
if (typeof window !== 'undefined') {
  window.DATABASE = DATABASE;
  window.saveFichesLocally = saveFichesLocally;
  window.loadFichesFromLocal = loadFichesFromLocal;
  window.detecterTypeMoteur = detecterTypeMoteur;
}

console.log(' Database Technique Auto by Kevin - ' + DATABASE.fiches.length + ' fiches');
console.log(' Voitures + 🏍️ Motos/Scooters | 2016-2026');
