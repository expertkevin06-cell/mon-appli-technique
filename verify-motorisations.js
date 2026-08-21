// Script de vérification des types de motorisation
// Exécuter avec : node verify-motorisations.js

const fs = require('fs');

// Charger data.js
const dataContent = fs.readFileSync('data.js', 'utf8');

// Extraire MOTORISATIONS_COMPLETES et MOTORISATIONS_MOTO
const motorisationsAutoMatch = dataContent.match(/const MOTORISATIONS_COMPLETES = \{([\s\S]*?)\n\};/);
const motorisationsMotoMatch = dataContent.match(/const MOTORISATIONS_MOTO = \{([\s\S]*?)\n\};/);

if (!motorisationsAutoMatch || !motorisationsMotoMatch) {
  console.error('❌ Impossible de parser les motorisations');
  process.exit(1);
}

// Fonction pour déterminer le type de moteur
function detecterTypeMoteur(motorisation, marque) {
  const motorisationLower = motorisation.toLowerCase();
  
  // Électrique
  if (motorisationLower.includes('electric') || 
      motorisationLower.includes('ev ') || 
      motorisationLower.includes('électrique') ||
      motorisationLower.includes('kw électrique') ||
      motorisationLower.includes('kw électrique')) {
    return 'Électrique';
  }
  
  // Marques 100% électriques
  const marquesElectriques = ['tesla', 'byd', 'xpeng', 'nio', 'li auto', 'zeekr', 'polestar', 'lucid', 'rivian', 'alpine'];
  if (marquesElectriques.includes(marque.toLowerCase())) {
    return 'Électrique';
  }
  
  // Hybride
  if (motorisationLower.includes('hybrid') || 
      motorisationLower.includes('e-tech') || 
      motorisationLower.includes('plug-in') || 
      motorisationLower.includes('phev') || 
      motorisationLower.includes('4xe') || 
      motorisationLower.includes('gte') || 
      motorisationLower.includes('tfsie') || 
      motorisationLower.includes('e-tsi') || 
      motorisationLower.includes('e-hybrid') || 
      motorisationLower.includes('iv') ||
      motorisationLower.includes('mild hybrid') ||
      motorisationLower.includes('micro hybrid')) {
    return 'Hybride';
  }
  
  // Diesel
  if (motorisationLower.includes('diesel') || 
      motorisationLower.includes('tdi') || 
      motorisationLower.includes('dci') || 
      motorisationLower.includes('bluehdi') || 
      motorisationLower.includes('crdi') || 
      motorisationLower.includes('ecoblue') || 
      motorisationLower.includes('multijet') || 
      motorisationLower.includes('i-dtec') ||
      motorisationLower.includes('cdti') ||
      motorisationLower.includes('hdi') ||
      motorisationLower.includes('dti')) {
    return 'Diesel';
  }
  
  // Essence par défaut
  return 'Essence';
}

// Parser et vérifier
function verifierMotorisations(nom, contenu) {
  console.log(`\n🔍 Vérification : ${nom}`);
  console.log('='.repeat(50));
  
  const erreurs = [];
  const corrections = [];
  
  // Regex pour extraire marque, modèle, motorisation
  const regex = /"([^"]+)":\s*\{\s*"([^"]+)":\s*\[([\s\S]*?)\]\s*\}/g;
  let match;
  
  while ((match = regex.exec(contenu)) !== null) {
    const marque = match[1];
    const modele = match[2];
    const motorisationsStr = match[3];
    
    // Extraire chaque motorisation
    const motorisations = motorisationsStr.match(/"([^"]+)"/g) || [];
    
    motorisations.forEach(moto => {
      const motorisation = moto.replace(/"/g, '');
      const typeDetecte = detecterTypeMoteur(motorisation, marque);
      
      // Vérifier si le type est correct
      const estElectrique = typeDetecte === 'Électrique';
      const estHybride = typeDetecte === 'Hybride';
      const estDiesel = typeDetecte === 'Diesel';
      const estEssence = typeDetecte === 'Essence';
      
      // Cas spéciaux à vérifier
      if (marque.toLowerCase() === 'alpine' && !motorisation.toLowerCase().includes('electric') && !motorisation.toLowerCase().includes('e-tech')) {
        // Alpine A110 est essence, A290/A390 sont électriques
        if (modele.includes('A290') || modele.includes('A390')) {
          if (!estElectrique) {
            erreurs.push({
              marque,
              modele,
              motorisation,
              typeActuel: 'Essence/Hybride',
              typeCorrect: 'Électrique',
              raison: `${modele} est 100% électrique`
            });
          }
        }
      }
      
      // Vérifier les incohérences évidentes
      if (motorisation.toLowerCase().includes('electric') && !estElectrique) {
        erreurs.push({
          marque,
          modele,
          motorisation,
          typeActuel: typeDetecte,
          typeCorrect: 'Électrique',
          raison: 'Contient "Electric"'
        });
      }
      
      if (motorisation.toLowerCase().includes('hybrid') && !estHybride && !estElectrique) {
        erreurs.push({
          marque,
          modele,
          motorisation,
          typeActuel: typeDetecte,
          typeCorrect: 'Hybride',
          raison: 'Contient "Hybrid"'
        });
      }
      
      if (motorisation.toLowerCase().includes('diesel') && !estDiesel) {
        erreurs.push({
          marque,
          modele,
          motorisation,
          typeActuel: typeDetecte,
          typeCorrect: 'Diesel',
          raison: 'Contient "Diesel"'
        });
      }
    });
  }
  
  console.log(`✅ ${nom} vérifié`);
  if (erreurs.length > 0) {
    console.log(`❌ ${erreurs.length} erreur(s) détectée(s):`);
    erreurs.forEach((err, idx) => {
      console.log(`  ${idx + 1}. ${err.marque} ${err.modele} - ${err.motorisation}`);
      console.log(`     Type actuel: ${err.typeActuel} → Type correct: ${err.typeCorrect}`);
      console.log(`     Raison: ${err.raison}`);
    });
  } else {
    console.log('✅ Aucune erreur détectée');
  }
  
  return erreurs;
}

// Exécuter la vérification
const erreursAuto = verifierMotorisations('Voitures', motorisationsAutoMatch[1]);
const erreursMoto = verifierMotorisations('Motos', motorisationsMotoMatch[1]);

console.log('\n' + '='.repeat(50));
console.log('📊 RÉSUMÉ');
console.log('='.repeat(50));
console.log(`Voitures: ${erreursAuto.length} erreur(s)`);
console.log(`Motos: ${erreursMoto.length} erreur(s)`);
console.log(`Total: ${erreursAuto.length + erreursMoto.length} erreur(s)`);

if (erreursAuto.length + erreursMoto.length === 0) {
  console.log('\n✅ Toutes les motorisations sont correctes !');
} else {
  console.log('\n️ Des corrections sont nécessaires');
}
