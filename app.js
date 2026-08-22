let isAdmin = false;
let currentFilter = { categorie: 'Auto', marque: '', modele: '', moteur: '', search: '' };
let currentShareUrl = window.location.href;

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Démarrage...');
  
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    const app = document.getElementById('app');
    if (splash) splash.classList.add('hidden');
    if (app) app.style.display = 'block';
  }, 1500);

  if (typeof DATABASE === 'undefined') {
    console.error(' data.js non chargé');
    alert('Erreur: data.js manquant');
    return;
  }

  console.log('✅ DATABASE chargé:', DATABASE.fiches.length, 'fiches');
  
  if (typeof loadFichesFromLocal === 'function') {
    loadFichesFromLocal();
  }
  
  const categorieSelect = document.getElementById('filter-categorie');
  if (categorieSelect) categorieSelect.value = 'Auto';
  currentFilter.categorie = 'Auto';
  
  populateMarques();
  applyFilters();
  
  const adminForm = document.getElementById('admin-form');
  if (adminForm) adminForm.addEventListener('submit', addFiche);
  
  const adminPassword = document.getElementById('admin-password');
  if (adminPassword) {
    adminPassword.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') loginAdmin();
    });
  }
  
  console.log('✅ Application prête - ' + DATABASE.fiches.length + ' fiches');
  showToast('✅ ' + DATABASE.fiches.length + ' fiches chargées');
});

function populateMarques() {
  const select = document.getElementById('filter-marque');
  const adminSelect = document.getElementById('admin-marque');
  if (!select || !adminSelect) return;
  
  select.innerHTML = '<option value="">Toutes les marques</option>';
  adminSelect.innerHTML = '<option value="">Marque</option>';
  
  let marques = currentFilter.categorie === 'Moto' ? (DATABASE.marquesMoto || {}) : (DATABASE.marques || {});
  
  Object.keys(marques).sort().forEach(m => {
    select.innerHTML += '<option value="' + m + '">' + m + '</option>';
    adminSelect.innerHTML += '<option value="' + m + '">' + m + '</option>';
  });
}

function applyFilters() {
  const categorieSelect = document.getElementById('filter-categorie');
  const marqueSelect = document.getElementById('filter-marque');
  const modeleSelect = document.getElementById('filter-modele');
  const moteurSelect = document.getElementById('filter-moteur');
  
  if (!categorieSelect || !marqueSelect || !modeleSelect || !moteurSelect) return;
  
  const nouvelleCategorie = categorieSelect.value;
  const categorieChanged = nouvelleCategorie !== currentFilter.categorie;
  currentFilter.categorie = nouvelleCategorie;
  
  if (categorieChanged) {
    currentFilter.marque = '';
    currentFilter.modele = '';
    currentFilter.moteur = '';
    populateMarques();
  }
  
  currentFilter.marque = marqueSelect.value;
  const searchInput = document.getElementById('search');
  currentFilter.search = searchInput ? searchInput.value.toLowerCase() : '';
  
  const modeleSelectionne = modeleSelect.value;
  const moteurSelectionne = moteurSelect.value;
  
  modeleSelect.innerHTML = '<option value="">Tous les modèles</option>';
  moteurSelect.innerHTML = '<option value="">Toutes motorisations</option>';
  modeleSelect.disabled = true;
  moteurSelect.disabled = true;
  currentFilter.modele = '';
  currentFilter.moteur = '';
  
  if (currentFilter.marque) {
    modeleSelect.disabled = false;
    moteurSelect.disabled = false;
    
    const modeles = [...new Set(
      DATABASE.fiches
        .filter(f => f.categorie === currentFilter.categorie && f.marque === currentFilter.marque)
        .map(f => f.modele)
    )].sort();
    
    modeles.forEach(modele => {
      const option = document.createElement('option');
      option.value = modele;
      option.textContent = modele;
      if (modele === modeleSelectionne) option.selected = true;
      modeleSelect.appendChild(option);
    });
    
    currentFilter.modele = modeleSelect.value;
    
    let fichesFiltrees = DATABASE.fiches.filter(f => 
      f.categorie === currentFilter.categorie && f.marque === currentFilter.marque
    );
    
    if (currentFilter.modele) {
      fichesFiltrees = fichesFiltrees.filter(f => f.modele === currentFilter.modele);
    }
    
    const moteurs = [...new Set(fichesFiltrees.map(f => f.motorisation))].sort();
    
    moteurs.forEach(moteur => {
      const option = document.createElement('option');
      option.value = moteur;
      option.textContent = moteur;
      if (moteur === moteurSelectionne) option.selected = true;
      moteurSelect.appendChild(option);
    });
    
    currentFilter.moteur = moteurSelect.value;
  }
  
  renderFiches();
}

function renderFiches() {
  const container = document.getElementById('fiches-container');
  const stats = document.getElementById('stats');
  if (!container) return;
  
  let fiches = DATABASE.fiches.filter(f => {
    if (currentFilter.categorie && f.categorie !== currentFilter.categorie) return false;
    if (currentFilter.marque && f.marque !== currentFilter.marque) return false;
    if (currentFilter.modele && f.modele !== currentFilter.modele) return false;
    if (currentFilter.moteur && f.motorisation !== currentFilter.moteur) return false;
    if (currentFilter.search) {
      const str = (f.marque + ' ' + f.modele + ' ' + f.motorisation + ' ' + f.titre + ' ' + f.description).toLowerCase();
      if (!str.includes(currentFilter.search)) return false;
    }
    return true;
  });
  
  if (stats) stats.textContent = fiches.length + ' fiche(s) sur ' + DATABASE.fiches.length;
  
  if (fiches.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:40px;color:#888;">Aucune fiche trouvée.</p>';
    return;
  }
  
  let html = '';
  fiches.forEach(f => {
    const couleur = (DATABASE.marques[f.marque] && DATABASE.marques[f.marque].couleur) || '#c0392b';
    const typeClass = f.type === 'Rappel' ? 'rappel' : 'panne';
    const graviteClass = f.gravite.toLowerCase().replace(' ', '-');
    
    html += '<div class="fiche" style="border-left:5px solid ' + couleur + ';background:#1a1a1a;padding:20px;margin:15px 0;border-radius:10px;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">';
    html += '<div style="display:flex;align-items:center;gap:10px;"><div style="width:40px;height:40px;background:' + couleur + ';border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;">' + f.marque.substring(0,2).toUpperCase() + '</div>';
    html += '<span style="font-size:1.2em;font-weight:bold;color:#fff;">' + f.marque + '</span></div>';
    html += '<div style="background:' + (f.type === 'Rappel' ? '#e74c3c' : '#f39c12') + ';color:#fff;padding:5px 15px;border-radius:20px;font-weight:bold;">' + f.type + '</div></div>';
    html += '<div style="font-size:1.3em;font-weight:bold;margin:10px 0;color:#3498db;">🚗 ' + f.modele + ' (' + f.annees + ')</div>';
    html += '<div style="margin:10px 0;padding:10px;background:rgba(255,255,255,0.05);border-radius:8px;"><strong style="color:#2ecc71;">⚙️ Motorisation :</strong><br><span style="color:#ecf0f1;">' + f.motorisation + '</span><br><span style="color:#95a5a6;font-size:0.9em;">(' + f.type_moteur + ')</span></div>';
    html += '<div style="margin:10px 0;"><strong style="color:#9b59b6;">📋 Campagne :</strong> <span style="color:#ecf0f1;">' + f.campagne + '</span></div>';
    html += '<div style="margin:15px 0;padding:15px;background:rgba(231,76,60,0.2);border-left:4px solid #e74c3c;border-radius:8px;"><strong style="color:#e74c3c;font-size:1.1em;">⚠️ ' + f.titre + '</strong></div>';
    html += '<div style="margin:10px 0;"><strong style="color:#3498db;">📝 Description :</strong><br><span style="color:#bdc3c7;">' + f.description + '</span></div>';
    html += '<div style="margin:10px 0;"><strong style="color:#2ecc71;">✅ Solution :</strong><br><span style="color:#27ae60;">' + f.solution + '</span></div>';
    html += '<div style="margin:10px 0;"><strong style="color:#f39c12;">💰 Coût :</strong> <span style="color:#f1c40f;">' + f.cout + '</span></div>';
    html += '<div style="margin:10px 0;display:flex;gap:20px;flex-wrap:wrap;"><div><strong style="color:#95a5a6;">📅 Date :</strong> <span style="color:#ecf0f1;">' + f.date + '</span></div><div><strong style="color:#95a5a6;">👥 Véhicules :</strong> <span style="color:#ecf0f1;">' + (f.nb_vehicules ? f.nb_vehicules.toLocaleString('fr-FR') : 'N/A') + '</span></div></div>';
    html += '<div style="margin:15px 0;padding:10px;background:rgba(231,76,60,0.1);border-radius:8px;text-align:center;"><span style="font-size:1.2em;">⚠️</span> <strong style="color:#e74c3c;">Gravité : ' + f.gravite + '</strong></div>';
    html += '<div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">';
    html += '<button class="btn btn-primary" onclick="downloadFichePDF(' + f.id + ')" style="background:#3498db;color:#fff;border:none;padding:12px 20px;border-radius:8px;cursor:pointer;">📄 Télécharger PDF</button>';
    if (isAdmin) html += '<button class="btn btn-danger" onclick="deleteFiche(' + f.id + ')" style="background:#e74c3c;color:#fff;border:none;padding:12px 20px;border-radius:8px;cursor:pointer;">🗑️ Supprimer</button>';
    html += '</div></div>';
  });
  
  container.innerHTML = html;
  console.log('✅ ' + fiches.length + ' fiches affichées');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

function openAdmin() {
  if (isAdmin) {
    const panel = document.getElementById('admin-panel');
    if (panel) panel.classList.toggle('active');
  } else {
    const modal = document.getElementById('modal-admin');
    if (modal) modal.classList.add('active');
  }
}

function loginAdmin() {
  const pwd = document.getElementById('admin-password');
  if (!pwd) return;
  if (pwd.value === 'Kevin83600') {
    isAdmin = true;
    closeModal('modal-admin');
    const panel = document.getElementById('admin-panel');
    if (panel) panel.classList.add('active');
    pwd.value = '';
    showToast('✅ Mode admin activé');
  } else {
    showToast('❌ Mot de passe incorrect');
  }
}

function addFiche(e) {
  e.preventDefault();
  const newFiche = {
    id: Date.now(),
    categorie: document.getElementById('admin-categorie').value,
    marque: document.getElementById('admin-marque').value,
    modele: document.getElementById('admin-modele').value,
    motorisation: document.getElementById('admin-motorisation').value,
    type_moteur: document.getElementById('admin-type-moteur').value,
    annees: document.getElementById('admin-annees').value,
    campagne: document.getElementById('admin-campagne').value,
    type: document.getElementById('admin-type-fiche').value,
    titre: document.getElementById('admin-titre').value,
    description: document.getElementById('admin-description').value,
    gravite: document.getElementById('admin-gravite').value,
    solution: document.getElementById('admin-solution').value,
    cout: document.getElementById('admin-cout').value,
    date: new Date().toISOString().split('T')[0],
    nb_vehicules: 0
  };
  DATABASE.fiches.push(newFiche);
  if (typeof saveFichesLocally === 'function') saveFichesLocally();
  applyFilters();
  document.getElementById('admin-form').reset();
  showToast('✅ Fiche ajoutée');
}

function deleteFiche(id) {
  if (!confirm('Supprimer cette fiche ?')) return;
  DATABASE.fiches = DATABASE.fiches.filter(f => f.id !== id);
  if (typeof saveFichesLocally === 'function') saveFichesLocally();
  applyFilters();
  showToast('🗑️ Supprimée');
}

function downloadFichePDF(id) {
  const f = DATABASE.fiches.find(x => x.id === id);
  if (!f) return;
  alert('PDF : ' + f.marque + ' ' + f.modele + ' - ' + f.titre);
}

function openShare() {
  currentShareUrl = window.location.href.split('?')[0];
  const container = document.getElementById('share-link-container');
  if (container) container.textContent = currentShareUrl;
  const modal = document.getElementById('modal-share');
  if (modal) modal.classList.add('active');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('active');
    setTimeout(() => t.classList.remove('active'), 3000);
  } else {
    console.log(msg);
  }
}

document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) m.classList.remove('active');
  });
});
