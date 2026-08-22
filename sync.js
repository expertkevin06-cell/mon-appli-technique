// ============================================================
// SYSTÈME DE SYNCHRONISATION v2 - Technique Auto by Kevin
// Version corrigée avec débogage avancé
// ============================================================

const SYNC_CONFIG = {
  // ⚠️ IMPORTANT : Remplacez par VOTRE vrai nom de dépôt GitHub
  githubUser: 'expertkevin06-cell',
  githubRepo: 'technique-auto-',
  githubBranch: 'main',
  // Intervalle synchro auto : 10 minutes
  autoSyncInterval: 10 * 60 * 1000,
  // Délai avant première synchro : 5 secondes
  initialSyncDelay: 5000
};

let syncStatus = {
  lastSync: null,
  isConnected: navigator.onLine,
  isSyncing: false,
  syncCount: 0
};

// Construction dynamique de l'URL
function getSyncUrl() {
  return `https://raw.githubusercontent.com/${SYNC_CONFIG.githubUser}/${SYNC_CONFIG.githubRepo}/${SYNC_CONFIG.githubBranch}/fiches-source.json`;
}

// ============================================================
// DÉTECTION DE CONNEXION
// ============================================================
function updateConnectionStatus() {
  syncStatus.isConnected = navigator.onLine;
  const indicator = document.getElementById('sync-indicator');
  
  if (indicator) {
    if (syncStatus.isConnected) {
      indicator.className = 'sync-indicator online';
      indicator.innerHTML = '🟢 En ligne';
    } else {
      indicator.className = 'sync-indicator offline';
      indicator.innerHTML = ' Hors ligne';
    }
  }
}

window.addEventListener('online', () => {
  updateConnectionStatus();
  showToast(' Connexion rétablie');
  setTimeout(() => synchroniserFiches('auto'), 3000);
});

window.addEventListener('offline', () => {
  updateConnectionStatus();
  showToast('🔴 Mode hors ligne activé');
});

// ============================================================
// SYNCHRONISATION PRINCIPALE
// ============================================================
async function synchroniserFiches(mode = 'manuel') {
  if (syncStatus.isSyncing) {
    console.log('⏳ Synchronisation déjà en cours...');
    return;
  }
  
  if (!syncStatus.isConnected) {
    if (mode === 'manuel') {
      showToast('❌ Pas de connexion internet');
    }
    console.log('❌ Pas de connexion - synchro annulée');
    return;
  }
  
  syncStatus.isSyncing = true;
  updateSyncButton(true);
  
  try {
    console.log('🔄 ===== DÉBUT SYNCHRONISATION =====');
    console.log('📡 Mode:', mode);
    console.log('🔗 URL:', getSyncUrl());
    
    // 1. Télécharger le fichier source
    const url = getSyncUrl() + '?t=' + Date.now();
    console.log('📥 Téléchargement depuis:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('✅ Fichier téléchargé avec succès');
    console.log('📊 Structure:', Object.keys(data));
    
    const fichesSource = data.fiches || [];
    console.log(`📋 ${fichesSource.length} fiches dans le fichier source`);
    
    // 2. Récupérer les fiches locales actuelles
    const fichesLocales = JSON.parse(localStorage.getItem('techauto_fiches') || '[]');
    console.log(`💾 ${fichesLocales.length} fiches en local`);
    
    // 3. Identifier les fiches admin (ajouts locaux avec ID timestamp)
    const fichesAdmin = fichesLocales.filter(f => f.id > 1000000000000);
    console.log(`👤 ${fichesAdmin.length} fiches admin locales`);
    
    // 4. Fusion : source + admin
    const fichesFusionnees = [...fichesSource, ...fichesAdmin];
    console.log(` Total après fusion: ${fichesFusionnees.length} fiches`);
    
    // 5. Mettre à jour la base
    DATABASE.fiches = fichesFusionnees;
    saveFichesLocally();
    
    // 6. Statut
    syncStatus.lastSync = new Date();
    syncStatus.syncCount++;
    
    // 7. Rafraîchir l'affichage
    if (typeof applyFilters === 'function') {
      applyFilters();
    }
    
    console.log('✅ ===== SYNCHRONISATION TERMINÉE =====');
    console.log(`📊 Statistiques:`);
    console.log(`   - Fiches source: ${fichesSource.length}`);
    console.log(`   - Fiches admin: ${fichesAdmin.length}`);
    console.log(`   - Total: ${fichesFusionnees.length}`);
    console.log(`   - N° synchro: ${syncStatus.syncCount}`);
    
    if (mode === 'manuel') {
      showToast(`✅ Synchronisé - ${fichesFusionnees.length} fiches`);
    }
    
    updateLastSyncDisplay();
    
  } catch (error) {
    console.error(' ===== ERREUR SYNCHRONISATION =====');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    
    if (mode === 'manuel') {
      showToast('❌ Erreur: ' + error.message);
    }
  } finally {
    syncStatus.isSyncing = false;
    updateSyncButton(false);
  }
}

// ============================================================
// TEST DE CONNEXION
// ============================================================
async function testerConnexion() {
  console.log('🧧 Test de connexion...');
  console.log('🔗 URL test:', getSyncUrl());
  
  try {
    const response = await fetch(getSyncUrl() + '?t=' + Date.now());
    console.log('✅ Serveur accessible - Status:', response.status);
    
    const data = await response.json();
    console.log('✅ JSON valide reçu');
    console.log('📊 Contenu:', data);
    
    showToast('✅ Serveur accessible');
    return true;
  } catch (error) {
    console.error('❌ Test échoué:', error.message);
    showToast('❌ Serveur inaccessible');
    return false;
  }
}

// ============================================================
// SAUVEGARDER VERS GITHUB (téléchargement JSON)
// ============================================================
function sauvegarderVersGitHub() {
  try {
    const data = {
      version: "2.0",
      dateModification: new Date().toISOString(),
      nombreFiches: DATABASE.fiches.length,
      fiches: DATABASE.fiches
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fiches-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast(`💾 ${DATABASE.fiches.length} fiches sauvegardées`);
    console.log('✅ Sauvegarde effectuée');
  } catch (error) {
    console.error('❌ Erreur sauvegarde:', error);
    showToast('❌ Erreur lors de la sauvegarde');
  }
}

// ============================================================
// IMPORTER DES FICHES
// ============================================================
function importerFiches() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        const fiches = data.fiches || data;
        
        if (Array.isArray(fiches)) {
          const existingIds = new Set(DATABASE.fiches.map(f => f.id));
          let nouveauxCount = 0;
          
          fiches.forEach(f => {
            if (!existingIds.has(f.id)) {
              DATABASE.fiches.push(f);
              nouveauxCount++;
            }
          });
          
          saveFichesLocally();
          if (typeof applyFilters === 'function') applyFilters();
          
          showToast(`📥 ${nouveauxCount} nouvelles fiches importées`);
        } else {
          showToast('❌ Format invalide');
        }
      } catch (err) {
        showToast('❌ Erreur import');
      }
    };
    reader.readAsText(file);
  };
  
  input.click();
}

// ============================================================
// INTERFACE
// ============================================================
function updateSyncButton(isSyncing) {
  const btn = document.getElementById('btn-sync');
  if (btn) {
    btn.disabled = isSyncing;
    btn.innerHTML = isSyncing ? '🔄 Synchronisation...' : '🔄 Synchroniser';
  }
}

function updateLastSyncDisplay() {
  const display = document.getElementById('last-sync-display');
  if (display && syncStatus.lastSync) {
    const timeStr = syncStatus.lastSync.toLocaleTimeString('fr-FR');
    const dateStr = syncStatus.lastSync.toLocaleDateString('fr-FR');
    display.innerHTML = `Dernière synchro: ${dateStr} à ${timeStr} (${syncStatus.syncCount} synchro(s))`;
  }
}

function createSyncPanel() {
  const adminPanel = document.getElementById('admin-panel');
  if (!adminPanel) {
    console.warn('⚠️ Panneau admin non trouvé');
    return;
  }
  
  const syncSection = document.createElement('div');
  syncSection.className = 'sync-section';
  syncSection.innerHTML = `
    <h3 style="color:#c0392b;margin:20px 0 10px;">🔄 Synchronisation</h3>
    <div id="sync-indicator" class="sync-indicator ${syncStatus.isConnected ? 'online' : 'offline'}">
      ${syncStatus.isConnected ? '🟢 En ligne' : ' Hors ligne'}
    </div>
    <div id="last-sync-display" style="color:#888;font-size:0.9em;margin:10px 0;">
      Aucune synchronisation effectuée
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin:15px 0;">
      <button id="btn-sync" class="btn btn-primary" onclick="synchroniserFiches('manuel')">
        🔄 Synchroniser
      </button>
      <button class="btn btn-success" onclick="testerConnexion()">
        🧪 Tester connexion
      </button>
      <button class="btn btn-primary" onclick="sauvegarderVersGitHub()">
        💾 Sauvegarder
      </button>
      <button class="btn btn-primary" onclick="importerFiches()">
        📥 Importer JSON
      </button>
    </div>
    <div style="font-size:0.8em;color:#666;margin-top:10px;">
       Astuce: Ouvrez la console (F12) pour voir les logs détaillés
    </div>
  `;
  
  adminPanel.insertBefore(syncSection, adminPanel.firstChild);
  console.log('✅ Panneau de synchronisation créé');
}

// ============================================================
// INITIALISATION
// ============================================================
function initSync() {
  console.log('🔄 ===== INITIALISATION SYNCHRO =====');
  console.log(' Utilisateur:', SYNC_CONFIG.githubUser);
  console.log('📁 Dépôt:', SYNC_CONFIG.githubRepo);
  console.log('🌿 Branche:', SYNC_CONFIG.githubBranch);
  console.log('🔗 URL:', getSyncUrl());
  
  updateConnectionStatus();
  createSyncPanel();
  
  // Synchro auto au démarrage
  setTimeout(() => {
    if (syncStatus.isConnected) {
      console.log(' Lancement synchro auto...');
      synchroniserFiches('auto');
    } else {
      console.log('⏸️ Pas de connexion - synchro auto reportée');
    }
  }, SYNC_CONFIG.initialSyncDelay);
  
  // Synchro périodique
  setInterval(() => {
    if (syncStatus.isConnected && !syncStatus.isSyncing) {
      console.log('⏰ Synchro périodique déclenchée');
      synchroniserFiches('auto');
    }
  }, SYNC_CONFIG.autoSyncInterval);
  
  console.log('✅ Synchro initialisée');
}

// Export global
if (typeof window !== 'undefined') {
  window.synchroniserFiches = synchroniserFiches;
  window.sauvegarderVersGitHub = sauvegarderVersGitHub;
  window.importerFiches = importerFiches;
  window.testerConnexion = testerConnexion;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initSync, 2000);
    });
  } else {
    setTimeout(initSync, 2000);
  }
}

console.log('🔄 Système de synchronisation v2 chargé');
