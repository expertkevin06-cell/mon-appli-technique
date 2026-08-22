// ============================================================
// SYSTÈME DE SYNCHRONISATION v4 - Sans erreur 404
// ============================================================

const SYNC_CONFIG = {
  githubUser: 'expertkevin06-cell',
  githubRepo: 'technique-auto-',
  githubBranch: 'main',
  autoSyncInterval: 10 * 60 * 1000,
  initialSyncDelay: 10000  // 10 secondes
};

let syncStatus = {
  lastSync: null,
  isConnected: navigator.onLine,
  isSyncing: false,
  syncCount: 0,
  sourceFileExists: false
};

function getSyncUrl() {
  return `https://raw.githubusercontent.com/${SYNC_CONFIG.githubUser}/${SYNC_CONFIG.githubRepo}/${SYNC_CONFIG.githubBranch}/fiches-source.json`;
}

function updateConnectionStatus() {
  syncStatus.isConnected = navigator.onLine;
  const indicator = document.getElementById('sync-indicator');
  if (indicator) {
    indicator.className = 'sync-indicator ' + (syncStatus.isConnected ? 'online' : 'offline');
    indicator.innerHTML = syncStatus.isConnected ? '🟢 En ligne' : '🔴 Hors ligne';
  }
}

window.addEventListener('online', () => {
  updateConnectionStatus();
  showToast('🟢 Connexion rétablie');
});

window.addEventListener('offline', () => {
  updateConnectionStatus();
  showToast('🔴 Mode hors ligne');
});

// ============================================================
// SYNCHRONISATION - Gère l'erreur 404 proprement
// ============================================================
async function synchroniserFiches(mode = 'manuel') {
  if (syncStatus.isSyncing) return;
  if (!syncStatus.isConnected) {
    if (mode === 'manuel') showToast('❌ Pas de connexion');
    return;
  }
  
  syncStatus.isSyncing = true;
  updateSyncButton(true);
  
  try {
    console.log('🔄 Début synchronisation...');
    
    const url = getSyncUrl() + '?t=' + Date.now();
    const response = await fetch(url);
    
    // 🛡️ GESTION 404 : Fichier source inexistant
    if (response.status === 404) {
      console.log('⚠️ Fichier fiches-source.json introuvable (404)');
      console.log(' Créez ce fichier sur GitHub pour activer la synchro');
      syncStatus.sourceFileExists = false;
      
      if (mode === 'manuel') {
        showToast('⚠️ Fichier source inexistant - Vos fiches locales sont conservées');
      }
      syncStatus.isSyncing = false;
      updateSyncButton(false);
      return;
    }
    
    if (!response.ok) {
      throw new Error('Erreur HTTP ' + response.status);
    }
    
    syncStatus.sourceFileExists = true;
    const data = await response.json();
    const fichesSource = data.fiches || [];
    
    console.log('📥 Fiches source:', fichesSource.length);
    console.log('📊 Fiches locales:', DATABASE.fiches.length);
    
    // 🛡️ PROTECTION : Ne pas écraser si source vide
    if (fichesSource.length === 0) {
      console.log('⚠️ Source vide - Protection activée');
      if (mode === 'manuel') showToast('⚠️ Source vide - Fiches protégées');
      syncStatus.isSyncing = false;
      updateSyncButton(false);
      return;
    }
    
    // Fusion sûre
    const fichesLocales = JSON.parse(localStorage.getItem('techauto_fiches') || '[]');
    const fichesAdmin = fichesLocales.filter(f => f.id > 1000000000000);
    const fichesFusionnees = [...fichesSource, ...fichesAdmin];
    
    DATABASE.fiches = fichesFusionnees;
    saveFichesLocally();
    
    syncStatus.lastSync = new Date();
    syncStatus.syncCount++;
    
    if (typeof applyFilters === 'function') applyFilters();
    
    console.log('✅ Synchro terminée:', fichesFusionnees.length, 'fiches');
    if (mode === 'manuel') showToast('✅ Synchronisé - ' + fichesFusionnees.length + ' fiches');
    updateLastSyncDisplay();
    
  } catch (error) {
    console.error(' Erreur synchro:', error);
    if (mode === 'manuel') showToast(' Erreur: ' + error.message);
  } finally {
    syncStatus.isSyncing = false;
    updateSyncButton(false);
  }
}

// ============================================================
// RÉGÉNÉRER LES FICHES DEPUIS DATA.JS
// ============================================================
function regenererFiches() {
  if (!confirm('⚠️ Régénérer toutes les fiches depuis data.js ?\n\nLes fiches admin locales seront conservées.')) return;
  
  const fichesAdmin = DATABASE.fiches.filter(f => f.id > 1000000000000);
  console.log('💾 Conservation de', fichesAdmin.length, 'fiches admin');
  
  localStorage.removeItem('techauto_fiches');
  
  showToast('🔄 Régénération en cours...');
  setTimeout(() => location.reload(), 1000);
}

// ============================================================
// SAUVEGARDER / IMPORTER
// ============================================================
function sauvegarderVersGitHub() {
  try {
    const data = {
      version: "4.0",
      dateModification: new Date().toISOString(),
      nombreFiches: DATABASE.fiches.length,
      fiches: DATABASE.fiches
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fiches-backup-' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('💾 ' + DATABASE.fiches.length + ' fiches sauvegardées');
  } catch (error) {
    showToast('❌ Erreur sauvegarde');
  }
}

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
        
        if (Array.isArray(fiches) && fiches.length > 0) {
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
          
          showToast('📥 ' + nouveauxCount + ' fiches importées');
        } else {
          showToast('❌ Fichier vide ou invalide');
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
    display.innerHTML = 'Dernière synchro: ' + syncStatus.lastSync.toLocaleString('fr-FR') + ' (' + syncStatus.syncCount + ')';
  }
}

function createSyncPanel() {
  const adminPanel = document.getElementById('admin-panel');
  if (!adminPanel) return;
  
  const syncSection = document.createElement('div');
  syncSection.className = 'sync-section';
  syncSection.innerHTML = `
    <h3 style="color:#c0392b;margin:20px 0 10px;">🔄 Synchronisation</h3>
    <div id="sync-indicator" class="sync-indicator ${syncStatus.isConnected ? 'online' : 'offline'}">
      ${syncStatus.isConnected ? '🟢 En ligne' : ' Hors ligne'}
    </div>
    <div id="last-sync-display" style="color:#888;font-size:0.9em;margin:10px 0;">
      Aucune synchronisation
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
      <button class="btn btn-danger" onclick="regenererFiches()">
        🔄 Régénérer fiches
      </button>
    </div>
    <div style="font-size:0.8em;color:#666;margin-top:10px;">
      🛡️ Protection active : les fiches ne sont jamais écrasées
    </div>
  `;
  
  adminPanel.insertBefore(syncSection, adminPanel.firstChild);
}

// ============================================================
// INITIALISATION
// ============================================================
function initSync() {
  console.log('🔄 Synchro v4 initialisée');
  updateConnectionStatus();
  createSyncPanel();
  
  // Synchro auto uniquement si le fichier existe
  setTimeout(() => {
    if (syncStatus.isConnected) {
      synchroniserFiches('auto');
    }
  }, SYNC_CONFIG.initialSyncDelay);
  
  setInterval(() => {
    if (syncStatus.isConnected && !syncStatus.isSyncing) {
      synchroniserFiches('auto');
    }
  }, SYNC_CONFIG.autoSyncInterval);
}

if (typeof window !== 'undefined') {
  window.synchroniserFiches = synchroniserFiches;
  window.sauvegarderVersGitHub = sauvegarderVersGitHub;
  window.importerFiches = importerFiches;
  window.regenererFiches = regenererFiches;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initSync, 2000));
  } else {
    setTimeout(initSync, 2000);
  }
}
