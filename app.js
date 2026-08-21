let isAdmin = false;
let currentFilter = { marque: '', modele: '', moteur: '', search: '' };
let currentShareUrl = window.location.href;

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Démarrage application...');
  
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('app').style.display = 'block';
  }, 1500);

  if (typeof DATABASE === 'undefined') {
    console.error('❌ data.js non chargé');
    showToast('❌ Erreur: data.js manquant');
    return;
  }

  loadFichesFromLocal();
  populateMarques();
  applyFilters();
  
  document.getElementById('admin-form').addEventListener('submit', addFiche);
  document.getElementById('admin-password').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginAdmin();
  });
  
  console.log('✅ Application prête - ' + DATABASE.fiches.length + ' fiches');
  showToast('✅ ' + DATABASE.fiches.length + ' fiches chargées');
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
}

function applyFilters() {
  // Récupérer les valeurs actuelles
  const marqueSelect = document.getElementById('filter-marque');
  const modeleSelect = document.getElementById('filter-modele');
  const moteurSelect = document.getElementById('filter-moteur');
  
  currentFilter.marque = marqueSelect.value;
  currentFilter.search = document.getElementById('search').value.toLowerCase();
  
  // Sauvegarder les sélections actuelles
  const modeleActuel = modeleSelect.value;
  const moteurActuel = moteurSelect.value;
  
  // Réinitialiser les listes
  modeleSelect.innerHTML = '<option value="">Tous les modèles</option>';
  moteurSelect.innerHTML = '<option value="">Toutes motorisations</option>';
  modeleSelect.disabled = true;
  moteurSelect.disabled = true;
  
  if (currentFilter.marque) {
    // ✅ Activer le select modèle
    modeleSelect.disabled = false;
    
    // Récupérer les modèles uniques
    const modeles = [...new Set(
      DATABASE.fiches
        .filter(f => f.marque === currentFilter.marque)
        .map(f => f.modele)
    )].sort();
    
    modeles.forEach(m => {
      const selected = (m === modeleActuel) ? 'selected' : '';
      modeleSelect.innerHTML += `<option value="${m}" ${selected}>${m}</option>`;
    });
    
    // ✅ METTRE À JOUR currentFilter.modele
    currentFilter.modele = modeleSelect.value;
    
    // ✅ Activer le select moteur
    moteurSelect.disabled = false;
    
    // Filtrer par marque ET modèle si sélectionné
    let fichesFiltrees = DATABASE.fiches.filter(f => f.marque === currentFilter.marque);
    if (currentFilter.modele) {
      fichesFiltrees = fichesFiltrees.filter(f => f.modele === currentFilter.modele);
    }
    
    // Récupérer les motorisations
    const moteurs = [...new Set(fichesFiltrees.map(f => f.motorisation))].sort();
    
    moteurs.forEach(m => {
      const selected = (m === moteurActuel) ? 'selected' : '';
      moteurSelect.innerHTML += `<option value="${m}" ${selected}>${m}</option>`;
    });
    
    // ✅ METTRE À JOUR currentFilter.moteur
    currentFilter.moteur = moteurSelect.value;
  } else {
    currentFilter.modele = '';
    currentFilter.moteur = '';
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
  
  // ✅ AFFICHER LE DÉTAIL COMPLET DANS LES FICHES
  container.innerHTML = fiches.map(f => `
    <div class="fiche" style="border-left-color:${DATABASE.marques[f.marque]?.couleur || '#c0392b'}">
      <div class="fiche-header">
        <div class="fiche-marque">
          <span>${DATABASE.marques[f.marque]?.logo || '🚗'}</span>
          <span>${f.marque}</span>
        </div>
        <div class="fiche-type type-${f.type === 'Rappel' ? 'rappel' : 'panne'}">${f.type}</div>
      </div>
      
      <div class="fiche-modele" style="font-size:1.1em;font-weight:bold;margin:8px 0;">
         ${f.modele} (${f.annees})
      </div>
      
      <div class="fiche-moteur" style="margin:5px 0;">
         <strong>Motorisation :</strong> ${f.motorisation} (${f.type_moteur})
      </div>
      
      <div style="margin:5px 0;">
         <strong>Campagne :</strong> ${f.campagne}
      </div>
      
      <div class="fiche-titre" style="margin:10px 0;padding:10px;background:rgba(255,255,255,0.05);border-radius:8px;">
        <strong>⚠️ ${f.titre}</strong>
      </div>
      
      <div style="margin:8px 0;">
        <strong>📋 Description :</strong><br>
        <span style="color:#ccc;font-size:0.9em;">${f.description}</span>
      </div>
      
      <div style="margin:8px 0;">
        <strong>✅ Solution :</strong><br>
        <span style="color:#27ae60;font-size:0.9em;">${f.solution}</span>
      </div>
      
      <div style="margin:8px 0;">
        <strong>💰 Coût :</strong> <span style="color:#f39c12;">${f.cout}</span>
      </div>
      
      <div style="margin:8px 0;">
        <strong>📅 Date :</strong> ${f.date} | 
        <strong>👥 Véhicules :</strong> ${f.nb_vehicules?.toLocaleString('fr-FR') || 'N/A'}
      </div>
      
      <div class="fiche-gravite gravite-${f.gravite.toLowerCase().replace(' ', '-')}" style="margin:10px 0;">
        ⚠️ Gravité : ${f.gravite}
      </div>
      
      <div style="display:flex;gap:10px;margin-top:15px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="downloadFichePDF(${f.id})">📄 Télécharger PDF</button>
        ${isAdmin ? `<button class="btn btn-danger" onclick="deleteFiche(${f.id})">🗑️ Supprimer</button>` : ''}
      </div>
    </div>
  `).join('');
  
  console.log('✅ ' + fiches.length + ' fiches affichées avec détails complets');
}

function showFiche(id) {
  // Plus nécessaire car les détails sont déjà affichés
  // Mais on garde pour compatibilité
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
      ${isAdmin ? `<button class="btn btn-danger" onclick="deleteFiche(${f.id})">️ Supprimer</button>` : ''}
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
  if (!confirm('Supprimer cette fiche ?')) return;
  DATABASE.fiches = DATABASE.fiches.filter(f => f.id !== id);
  saveFichesLocally();
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
    showToast('📋 Copié');
  });
}

function downloadFichePDF(id) {
  const f = DATABASE.fiches.find(x => x.id === id);
  if (!f) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.setFillColor(192, 57, 43);
  doc.rect(0, 0, 210, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text('Technique Auto by Kevin', 105, 15, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  let y = 45;
  doc.setFontSize(14);
  doc.setTextColor(192, 57, 43);
  doc.text(`${f.marque} ${f.modele}`, 14, y);
  y += 10;
  
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  const infos = [
    ['Motorisation', `${f.motorisation} (${f.type_moteur})`],
    ['Années', f.annees],
    ['Campagne', f.campagne],
    ['Type', f.type],
    ['Gravité', f.gravite],
    ['Titre', f.titre],
    ['Description', f.description],
    ['Solution', f.solution],
    ['Coût', f.cout]
  ];
  
  infos.forEach(([label, value]) => {
    doc.setFont(undefined, 'bold');
    doc.text(`${label} :`, 14, y);
    doc.setFont(undefined, 'normal');
    const split = doc.splitTextToSize(String(value), 140);
    doc.text(split, 70, y);
    y += split.length * 6 + 2;
  });
  
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, 105, 285, { align: 'center' });
  
  doc.save(`fiche-${f.marque}-${f.modele}.pdf`);
  showToast('📄 PDF téléchargé');
}

function exportAllPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('landscape');
  
  doc.setFillColor(192, 57, 43);
  doc.rect(0, 0, 297, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text('Technique Auto by Kevin - Export complet', 148, 15, { align: 'center' });
  
  const data = DATABASE.fiches.map(f => [
    f.marque, f.modele, f.motorisation, f.type_moteur, f.type, f.campagne, f.titre, f.gravite
  ]);
  
  doc.autoTable({
    head: [['Marque', 'Modèle', 'Motorisation', 'Type Moteur', 'Type', 'Campagne', 'Titre', 'Gravité']],
    body: data,
    startY: 30,
    styles: { fontSize: 7, cellPadding: 2 },
    headStyles: { fillColor: [192, 57, 43], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] }
  });
  
  doc.save(`technique-auto-export-${new Date().toISOString().split('T')[0]}.pdf`);
  showToast('📄 Export PDF réussi');
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
