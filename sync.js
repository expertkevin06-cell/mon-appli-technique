// ============================================================
// SYSTÈME DE SYNCHRONISATION - Technique Auto by Kevin
// ============================================================

const SYNC_CONFIG = {
  // URL du fichier source sur GitHub (à adapter avec votre nom d'utilisateur)
  sourceUrl: 'https://raw.githubusercontent.com/expertkevin06-cell/technique-auto-/main/fiches-source.json',
  // Intervalle de synchro auto (en ms) - 5 minutes
  autoSyncInterval: 5 * 60 * 1000,
  // Délai avant première synchro (en ms) - 3 secondes
  initialSyncDelay: 3000
};

let syncStatus = {
  lastSync: null,
  isConnected: navigator.onLine,
  isSyncing: false,
  localChanges: 0
};

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
      indicator.innerHTML = '🔴 Hors ligne';
    }
  }
  
  console.log(`📡 Statut connexion: ${syncStatus.isConnected ? 'EN LIGNE' : 'HORS LIGNE'}`);
}

window.addEventListener('online', () => {
  updateConnectionStatus();
  showToast(' Connexion rétablie');
  // Synchro automatique quand la connexion revient
  setTimeout(() => synchroniserFiches('auto'), 2000);
});

window.addEventListener('offline', () => {
  updateConnectionStatus();
  showToast('🔴 Mode hors ligne activé');
});

// ============================================================
// SYNCHRONISATION AUTOMATIQUE
// ============================================================
function initAutoSync() {
  updateConnectionStatus();
  
  // Première synchro après délai
  setTimeout(() => {
    if (syncStatus.isConnected) {
      synchroniserFiches('auto');
    }
  }, SYNC_CONFIG.initialSyncDelay);
  
  // Synchro périodique
  setInterval(() => {
    if (syncStatus.isConnected && !syncStatus.isSyncing) {
      synchroniserFiches('auto');
    }
  }, SYNC_CONFIG.autoSyncInterval);
}

// ============================================================
// FONCTION DE SYNCHRONISATION PRINCIPALE
// ============================================================
async function synchroniserFiches(mode = 'manuel') {
  if (syncStatus.isSyncing) {
    console.log(' Synchronisation déjà en cours...');
    return;
  }
  
  if (!syncStatus.isConnected) {
    if (mode === 'manuel') {
      showToast('❌ Pas de connexion internet');
    }
    return;
  }
  
  syncStatus.isSyncing = true;
  updateSyncButton(true);
  
  try {
    console.log(`🔄 Début synchronisation (${mode})...`);
    
    // 1. Télécharger les fiches source depuis GitHub
    const response = await fetch(SYNC_CONFIG.sourceUrl + '?t=' + Date.now());
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    const fichesSource = data.fiches || [];
    
    console.log(`📥 ${fichesSource.length} fiches téléchargées depuis GitHub`);
    
    // 2. Sauvegarder les fiches locales (ajouts admin)
    const fichesLocales = JSON.parse(localStorage.getItem('techauto_fiches') || '[]');
    const fichesAdmin = fichesLocales.filter(f => f.id > 1000000000000); // IDs timestamp = ajouts admin
    
    console.log(`💾 ${fichesAdmin.length} fiches admin locales conservées`);
    
    // 3. Fusionner : source + ajouts admin
    const fichesFusionnees = [...fichesSource, ...fichesAdmin];
    
    // 4. Mettre à jour la base
    DATABASE.fiches = fichesFusionnees;
    saveFichesLocally();
    
    // 5. Mettre à jour le statut
    syncStatus.lastSync = new Date();
    syncStatus.localChanges = fichesAdmin.length;
    
    // 6. Rafraîchir l'affichage
    if (typeof applyFilters === 'function') {
      applyFilters();
    }
    
    console.log(`✅ Synchronisation terminée - ${fichesFusionnees.length} fiches totales`);
    
    if (mode === 'manuel') {
      showToast(`✅ Synchronisé - ${fichesFusionnees.length} fiches`);
    }
    
    updateLastSyncDisplay();
    
  } catch (error) {
    console.error('❌ Erreur synchronisation:', error);
    if (mode === 'manuel') {
      showToast('❌ Erreur de synchronisation');
    }
  } finally {
    syncStatus.isSyncing = false;
    updateSyncButton(false);
  }
}

// ============================================================
// SAUVEGARDER LES FICHES LOCALES VERS GITHUB
// ============================================================
async function sauvegarderVersGitHub() {
  if (!syncStatus.isConnected) {
    showToast('❌ Pas de connexion internet');
    return;
  }
  
  try {
    const fichesAdmin = DATABASE.fiches.filter(f => f.id > 1000000000000);
    
    const data = {
      version: "2.0",
      dateCreation: "2026-08-22",
      dateModification: new Date().toISOString(),
      nombreFiches: DATABASE.fiches.length,
      fichesAdmin: fichesAdmin.length,
      fiches: DATABASE.fiches
    };
    
    // Télécharger le fichier JSON
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
// IMPORTER DES FICHES DEPUIS UN FICHIER JSON
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
          // Fusionner avec les fiches existantes
          const existingIds = new Set(DATABASE.fiches.map(f => f.id));
          let nouveauxCount = 0;
          
          fiches.forEach(f => {
            if (!existingIds.has(f.id)) {
              DATABASE.fiches.push(f);
              nouveauxCount++;
            }
          });
          
          saveFichesLocally();
          applyFilters();
          
          showToast(` ${nouveauxCount} nouvelles fiches importées`);
          console.log(`✅ Import: ${nouveauxCount} fiches ajoutées`);
        } else {
          showToast('❌ Format de fichier invalide');
        }
      } catch (err) {
        console.error('❌ Erreur import:', err);
        showToast('❌ Erreur lors de l\'import');
      }
    };
    reader.readAsText(file);
  };
  
  input.click();
}

// ============================================================
// MISE À JOUR DE L'INTERFACE
// ============================================================
function updateSyncButton(isSyncing) {
  const btn = document.getElementById('btn-sync');
  if (btn) {
    if (isSyncing) {
      btn.disabled = true;
      btn.innerHTML = '🔄 Synchronisation...';
    } else {
      btn.disabled = false;
      btn.innerHTML = ' Synchroniser';
    }
  }
}

function updateLastSyncDisplay() {
  const display = document.getElementById('last-sync-display');
  if (display && syncStatus.lastSync) {
    const timeStr = syncStatus.lastSync.toLocaleTimeString('fr-FR');
    const dateStr = syncStatus.lastSync.toLocaleDateString('fr-FR');
    display.innerHTML = `Dernière synchro: ${dateStr} ${timeStr}`;
  }
}

// ============================================================
// CRÉATION DU PANNEAU DE SYNCHRONISATION
// ============================================================
function createSyncPanel() {
  const adminPanel = document.getElementById('admin-panel');
  if (!adminPanel) return;
  
  const syncSection = document.createElement('div');
  syncSection.className = 'sync-section';
  syncSection.innerHTML = `
    <h3 style="color:#c0392b;margin:20px 0 10px;">🔄 Synchronisation</h3>
    <div id="sync-indicator" class="sync-indicator ${syncStatus.isConnected ? 'online' : 'offline'}">
      ${syncStatus.isConnected ? ' En ligne' : '🔴 Hors ligne'}
    </div>
    <div id="last-sync-display" style="color:#888;font-size:0.9em;margin:10px 0;">
      Aucune synchronisation effectuée
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin:15px 0;">
      <button id="btn-sync" class="btn btn-primary" onclick="synchroniserFiches('manuel')">
        🔄 Synchroniser
      </button>
      <button class="btn btn-success" onclick="sauvegarderVersGitHub()">
        💾 Sauvegarder
      </button>
      <button class="btn btn-primary" onclick="importerFiches()">
        📥 Importer JSON
      </button>
    </div>
  `;
  
  adminPanel.insertBefore(syncSection, adminPanel.firstChild);
}

// ============================================================
// INITIALISATION
// ============================================================
if (typeof window !== 'undefined') {
  window.synchroniserFiches = synchroniserFiches;
  window.sauvegarderVersGitHub = sauvegarderVersGitHub;
  window.importerFiches = importerFiches;
  
  // Attendre que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        createSyncPanel();
        initAutoSync();
      }, 2000);
    });
  } else {
    setTimeout(() => {
      createSyncPanel();
      initAutoSync();
    }, 2000);
  }
}

console.log('🔄 Système de synchronisation chargé');
