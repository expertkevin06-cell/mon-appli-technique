let isAdmin = false;
let currentFilter = { marque: '', modele: '', moteur: '', search: '' };
let currentShareUrl = window.location.href;

// Auto-vérification au démarrage
window.addEventListener('error', function(e) {
  console.error(' Erreur:', e.error);
  showToast('❌ Erreur détectée');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Démarrage application...');
  
  setTimeout(() => {
    console.log('✅ Splash screen masqué');
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('app').style.display = 'block';
  }, 1500);

  // Vérifier si data.js est chargé
  if (typeof DATABASE === 'undefined') {
    console.error('❌ data.js non chargé');
    showToast('❌ Erreur: data.js manquant');
    return;
  }
  
  console.log('✅ DATABASE chargé:', DATABASE.fiches.length, 'fiches');

  loadFichesFromLocal();
  console.log('✅ Fiches chargées depuis localStorage');
  
  populateMarques();
  console.log('✅ Marques peuplées');
  
  applyFilters();
  console.log('✅ Filtres appliqués');
  
  document.getElementById('admin-form').addEventListener('submit', addFiche);
  console.log('✅ Formulaire admin configuré');
  
  document.getElementById('admin-password').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginAdmin();
  });
  
  console.log('✅ Application prête!');
  showToast('✅ Application prête - ' + DATABASE.fiches.length + ' fiches');
});

function populateMarques() {
  const select = document.getElementById('filter-marque');
  const adminSelect = document.getElementById('admin-marque');
  
  select.innerHTML = '<option value="">Toutes les marques</option>';
  adminSelect.innerHTML = '<option value="">Marque</option>';
  
  Object.keys(DATABASE.marques).sort().forEach(m => {
    select.innerHTML += `<option value="${m}">${DATABASE.marques[m].logo} ${m}</option>`;
    adminSelect.innerHTML += `<option value="${m}">${m}</option>`;
  });
  
  console.log('✅ ' + Object.keys(DATABASE.marques).length + ' marques ajoutées');
}

function applyFilters() {
  currentFilter.marque = document.getElementById('filter-marque').value;
  currentFilter.search = document.getElementById('search').value.toLowerCase();
  
  const modeleSelect = document.getElementById('filter-modele');
  const moteurSelect = document.getElementById('filter-moteur');
  
  // Réinitialiser
  modeleSelect.innerHTML = '<option value="">Tous les modèles</option>';
  moteurSelect.innerHTML = '<option value="">Toutes motorisations</option>';
  modeleSelect.disabled = true;
  moteurSelect.disabled = true;
  currentFilter.modele = '';
  currentFilter.moteur = '';
  
  if (currentFilter.marque) {
    modeleSelect.disabled = false;
    moteurSelect.disabled = false;
    
    // Modèles
    const modeles = [...new Set(
      DATABASE.fiches
        .filter(f => f.marque === currentFilter.marque)
        .map(f => f.modele)
    )].sort();
    
    modeles.forEach(m => {
      modeleSelect.innerHTML += `<option value="${m}">${m}</option>`;
    });
    
    currentFilter.modele = modeleSelect.value;
    
    // Motorisations
    let fichesFiltrees = DATABASE.fiches.filter(f => f.marque === currentFilter.marque);
    if (currentFilter.modele) {
      fichesFiltrees = fichesFiltrees.filter(f => f.modele === currentFilter.modele);
    }
    
    const moteurs = [...new Set(fichesFiltrees.map(f => f.motorisation))].sort();
    
    moteurs.forEach(m => {
      moteurSelect.innerHTML += `<option value="${m}">${m}</option>`;
    });
    
    currentFilter.moteur = moteurSelect.value;
    
    console.log('✅ Filtres:', currentFilter.marque, currentFilter.modele, currentFilter.moteur);
  }
  
  updateBackground();
  renderFiches();
}

function updateBackground() {
  const overlay = document.getElementById('background-overlay');
  if (currentFilter.marque && DATABASE.marques[currentFilter.marque]) {
    const c = DATABASE.marques[currentFilter.marque].couleur;
    overlay.style.background = `linear-gradient(135deg, ${c}33, #1a1a1a)`;
    overlay.style.opacity = '0.5';
  } else {
    overlay.style.background = '#1a1a1a';
    overlay.style.opacity = '0.3';
  }
}

function renderFiches() {
  const container = document.getElementById('fiches-container');
  
  let fiches = DATABASE.fiches.filter(f => {
    if (currentFilter.marque && f.marque !== currentFilter.marque) return false;
    if (currentFilter.modele && f.modele !== currentFilter.modele) return false;
    if (currentFilter.moteur && f.motorisation !== currentFilter.moteur) return false;
    if (currentFilter.search) {
      const str = `${f.marque} ${f.modele} ${f.motorisation} ${f.titre} ${f.description}`.toLowerCase();
      if (!str.includes(currentFilter.search)) return false;
    }
    return true;
  });
  
  document.getElementById('stats').textContent = `${fiches.length} fiche(s) sur ${DATABASE.fiches.length}`;
  
  if (fiches.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:40px;color:#888;grid-column:1/-1;">Aucune fiche trouvée.</p>';
    return;
  }
  
  container.innerHTML = fiches.map(f => `
    <div class="fiche" onclick="showFiche(${f.id})" style="border-left-color:${DATABASE.marques[f.marque]?.couleur || '#c0392b'}">
      <div class="fiche-header">
        <div class="fiche-marque">
          <span>${DATABASE.marques[f.marque]?.logo || '🚗'}</span>
          <span>${f.marque}</span>
        </div>
        <div class="fiche-type type-${f.type === 'Rappel' ? 'rappel' : 'panne'}">${f.type}</div>
      </div>
      <div class="fiche-modele">${f.modele} (${f.annees})</div>
      <div class="fiche-moteur">🔧 ${f.motorisation} - ${f.type_moteur}</div>
      <div class="fiche-titre">${f.titre}</div>
      <div class="fiche-gravite gravite-${f.gravite.toLowerCase().replace(' ', '-')}">⚠️ ${f.gravite}</div>
    </div>
  `).join('');
  
  console.log('✅ ' + fiches.length + ' fiches affichées');
}

function showFiche(id) {
  const f = DATABASE.fiches.find(x => x.id === id);
  if (!f) return;
  
  document.getElementById('modal-content').innerHTML = `
    <button class="modal-close" onclick="closeModal('modal')">×</button>
    <h2>${DATABASE.marques[f.marque]?.logo || ''} ${f.marque} ${f.modele}</h2>
    <p><strong>Motorisation :</strong> ${f.motorisation} (${f.type_moteur})</p>
    <p><strong>Années :</strong> ${f.annees}</p>
    <p><strong>Campagne :</strong> ${f.campagne}</p>
    <p><strong>Type :</strong> ${f.type} | <strong>Gravité :</strong> ${f.gravite}</p>
    <p style="margin-top:15px;"><strong>📋 Description :</strong><br>${f.description}</p>
    <p><strong>✅ Solution :</strong> ${f.solution}</p>
    <p><strong>💰 Coût :</strong> ${f.cout}</p>
    <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="downloadFichePDF(${f.id})">📄 PDF</button>
      ${isAdmin ? `<button class="btn btn-danger" onclick="deleteFiche(${f.id})">🗑️ Supprimer</button>` : ''}
    </div>
  `;
  document.getElementById('modal').classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function openAdmin() {
  if (isAdmin) {
    document.getElementById('admin-panel').classList.toggle('active');
  } else {
    document.getElementById('modal-admin').classList.add('active');
  }
}

function loginAdmin() {
  const pwd = document.getElementById('admin-password').value;
  if (pwd === 'Kevin83600') {
    isAdmin = true;
    closeModal('modal-admin');
    document.getElementById('admin-panel').classList.add('active');
    document.getElementById('admin-password').value = '';
    showToast('✅ Mode admin activé');
  } else {
    showToast('❌ Mot de passe incorrect');
  }
}

function addFiche(e) {
  e.preventDefault();
  const newFiche = {
    id: Date.now(),
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
  saveFichesLocally();
  applyFilters();
  document.getElementById('admin-form').reset();
  showToast('✅ Fiche ajoutée');
}

function deleteFiche(id) {
  if (!confirm('Supprimer ?')) return;
  DATABASE.fiches = DATABASE.fiches.filter(f => f.id !== id);
  saveFichesLocally();
  closeModal('modal');
  applyFilters();
  showToast('🗑️ Supprimée');
}

function exportData() {
  const data = JSON.stringify(DATABASE.fiches, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  showToast('💾 Export réussi');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (Array.isArray(data)) {
          DATABASE.fiches = data;
          saveFichesLocally();
          applyFilters();
          showToast('📥 Import réussi');
        }
      } catch (err) {
        showToast('❌ Erreur');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetData() {
  if (!confirm('Réinitialiser ?')) return;
  localStorage.removeItem('techauto_fiches');
  location.reload();
}

function openShare() {
  currentShareUrl = window.location.href.split('?')[0];
  document.getElementById('share-link-container').textContent = currentShareUrl;
  document.getElementById('modal-share').classList.add('active');
}

function shareSMS() {
  window.open(`sms:?body=${encodeURIComponent('Technique Auto by Kevin: ' + currentShareUrl)}`);
}

function shareMail() {
  window.open(`mailto:?subject=${encodeURIComponent('Technique Auto')}&body=${encodeURIComponent('Lien: ' + currentShareUrl)}`);
}

function copyLink() {
  navigator.clipboard.writeText(currentShareUrl).then(() => {
    showToast(' Copié');
  });
}

function downloadFichePDF(id) {
  const f = DATABASE.fiches.find(x => x.id === id);
  if (!f) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(`${f.marque} ${f.modele}`, 14, 20);
  doc.text(f.titre, 14, 30);
  doc.save(`fiche-${f.marque}.pdf`);
  showToast('📄 PDF téléchargé');
}

function exportAllPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('landscape');
  doc.text('Technique Auto by Kevin', 14, 15);
  const data = DATABASE.fiches.map(f => [f.marque, f.modele, f.motorisation, f.titre]);
  doc.autoTable({ head: [['Marque','Modèle','Moteur','Titre']], body: data, startY: 20 });
  doc.save('export.pdf');
  showToast('📄 Export PDF');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('active');
  setTimeout(() => t.classList.remove('active'), 3000);
}

document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) m.classList.remove('active');
  });
});
