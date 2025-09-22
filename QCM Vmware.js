// quiz.js

// ========== Questions complètes (40) ==========
const questions = [
  {text:"Quel est l’hyperviseur de VMware ?", type:"mcq", options:[{k:"a",label:"a) Hyper-V"},{k:"b",label:"b) ESXi"},{k:"c",label:"c) Proxmox"}], answer:"b", explanation:"ESXi est l’hyperviseur bare-metal de VMware."},
  {text:"Quelle console permet la config initiale d’ESXi ?", type:"mcq", options:[{k:"a",label:"a) BIOS"},{k:"b",label:"b) DCUI"},{k:"c",label:"c) vCenter"}], answer:"b", explanation:"La DCUI permet la configuration initiale."},
  {text:"Un vNIC correspond à :", type:"mcq", options:[{k:"a",label:"a) Une carte physique"},{k:"b",label:"b) Une carte réseau virtuelle"},{k:"c",label:"c) Un switch virtuel"}], answer:"b", explanation:"vNIC = carte réseau virtuelle attachée à une VM."},
  {text:"Quelle est la différence entre vSS et vDS ?", type:"mcq", options:[{k:"a",label:"a) Aucun"},{k:"b",label:"b) vSS est local, vDS est distribué sur plusieurs hôtes"},{k:"c",label:"c) vDS ne gère pas les VMs"}], answer:"b", explanation:"vSS est configuré par hôte ; vDS centralise la configuration."},
  {text:"Quelle extension désigne un disque virtuel VMware ?", type:"mcq", options:[{k:"a",label:".vmdk"},{k:"b",label:".iso"},{k:"c",label:".vmx"}], answer:"a", explanation:".vmdk = fichier disque virtuel."},
  {text:"Le provisionnement Thin signifie :", type:"mcq", options:[{k:"a",label:"Le disque occupe toute la taille dès la création."},{k:"b",label:"Le disque grossit au fur et à mesure."},{k:"c",label:"Le disque est réservé sur le SAN."}], answer:"b", explanation:"Thin provisioning alloue l'espace à la demande."},
  {text:"Quel outil centralise la gestion de plusieurs ESXi ?", type:"mcq", options:[{k:"a",label:"vSphere Web Client"},{k:"b",label:"vCenter"},{k:"c",label:"VMware Tools"}], answer:"b", explanation:"vCenter est la plateforme de gestion centralisée."},
  {text:"Un template sert à :", type:"mcq", options:[{k:"a",label:"Créer une VM temporaire"},{k:"b",label:"Déployer rapidement de nouvelles VMs"},{k:"c",label:"Faire un snapshot"}], answer:"b", explanation:"Template = master de déploiement."},
  {text:"La fonction HA redémarre :", type:"mcq", options:[{k:"a",label:"Les VMs sur le même hôte"},{k:"b",label:"Les VMs sur un autre hôte"},{k:"c",label:"Les VMs avec FT"}], answer:"b", explanation:"HA redémarre les VMs sur un autre hôte."},
  {text:"Le FT permet :", type:"mcq", options:[{k:"a",label:"Un basculement instantané sans perte de service"},{k:"b",label:"Une sauvegarde des snapshots"},{k:"c",label:"La migration manuelle des VMs"}], answer:"a", explanation:"FT réplique la VM pour tolérance sans interruption."},
  {text:"ESXi est basé sur un OS Linux complet. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"f", explanation:"ESXi est un hyperviseur bare-metal, pas un Linux complet."},
  {text:"Un vSwitch peut relier des VM entre elles. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"Un vSwitch connecte les vNIC entre elles."},
  {text:"Les snapshots remplacent une sauvegarde. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"f", explanation:"Un snapshot n'est pas une sauvegarde."},
  {text:"Une VM peut avoir jusqu’à 128 CPU virtuels. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"Selon la version, une VM supporte jusqu'à 128 vCPU."},
  {text:"Le fichier .vmx contient la config d’une VM. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:".vmx = fichier de configuration."},
  {text:"vCenter peut être accédé via une interface Web. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"vCenter est accessible en Web Client."},
  {text:"vMotion nécessite que la VM soit éteinte. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"f", explanation:"vMotion fonctionne à chaud."},
  {text:"FT nécessite deux hôtes ESXi. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"FT requiert au moins deux hôtes."},
  {text:"DRS équilibre automatiquement la charge. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"DRS déplace les VMs pour optimiser."},
  {text:"DPM réduit la consommation d’énergie. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"DPM éteint/veille les hôtes inutiles."},
  // ===== 20 suivantes =====
  {text:"Quelle est la fonction du fichier .vswp ?", type:"mcq", options:[{k:"a",label:"Snapshots"},{k:"b",label:"Fichier swap mémoire"},{k:"c",label:"Config réseau"}], answer:"b", explanation:".vswp = fichier d'échange mémoire."},
  {text:"Quel protocole est utilisé pour stockage en blocs ?", type:"mcq", options:[{k:"a",label:"NFS"},{k:"b",label:"iSCSI"},{k:"c",label:"SMB"}], answer:"b", explanation:"iSCSI fournit du stockage bloc sur IP."},
  {text:"Quelle fonctionnalité migre uniquement le disque d’une VM ?", type:"mcq", options:[{k:"a",label:"vMotion"},{k:"b",label:"Storage vMotion"},{k:"c",label:"FT"}], answer:"b", explanation:"Storage vMotion migre les fichiers .vmdk."},
  {text:"Taille max disque virtuel VMFS-6 ?", type:"mcq", options:[{k:"a",label:"2 To"},{k:"b",label:"32 To"},{k:"c",label:"62 To"}], answer:"c", explanation:"VMFS-6 supporte jusqu'à 62 To."},
  {text:"Technologie améliorant compatibilité CPU pour migrations ?", type:"mcq", options:[{k:"a",label:"DPM"},{k:"b",label:"EVC"},{k:"c",label:"DRS"}], answer:"b", explanation:"EVC masque certaines instructions CPU."},
  {text:"Le rôle de DPM est :", type:"mcq", options:[{k:"a",label:"Gérer l’énergie"},{k:"b",label:"Sauvegarde auto"},{k:"c",label:"Migrer stockage"}], answer:"a", explanation:"DPM optimise consommation."},
  {text:"Outil nécessaire pour VMXNET3 ?", type:"mcq", options:[{k:"a",label:"VMware Tools"},{k:"b",label:"vCenter"},{k:"c",label:"BIOS"}], answer:"a", explanation:"VMware Tools fournit les drivers VMXNET."},
  {text:"Quel port vSwitch pour vMotion/iSCSI ?", type:"mcq", options:[{k:"a",label:"Port Group VM"},{k:"b",label:"Port VMKernel"},{k:"c",label:"Port uplink"}], answer:"b", explanation:"Les services passent par VMKernel."},
  {text:"Quelle fonctionnalité assure redondance sans interruption ?", type:"mcq", options:[{k:"a",label:"HA"},{k:"b",label:"FT"},{k:"c",label:"Snapshot"}], answer:"b", explanation:"FT = tolérance de panne instantanée."},
  {text:"Un template peut être créé à partir :", type:"mcq", options:[{k:"a",label:"Machine physique"},{k:"b",label:"VM existante"},{k:"c",label:"Snapshot"}], answer:"b", explanation:"Un template se crée d'une VM."},
  {text:"Quel adaptateur émule Intel 82545EM ?", type:"mcq", options:[{k:"a",label:"E1000"},{k:"b",label:"VMXNET3"},{k:"c",label:"SR-IOV"}], answer:"a", explanation:"E1000 = émulation Intel 82545EM."},
  {text:"Avantage principal vDS ?", type:"mcq", options:[{k:"a",label:"Plus rapide"},{k:"b",label:"Gestion centralisée multi-hôtes"},{k:"c",label:"Moins de mémoire"}], answer:"b", explanation:"vDS centralise la gestion réseau."},
  {text:"Dans DCUI, activer SSH via :", type:"mcq", options:[{k:"a",label:"Troubleshooting Options"},{k:"b",label:"Config réseau"},{k:"c",label:"Licences"}], answer:"a", explanation:"SSH = menu Troubleshooting Options."},
  {text:"Quelle fonctionnalité redémarre une VM après panne hôte ?", type:"mcq", options:[{k:"a",label:"FT"},{k:"b",label:"HA"},{k:"c",label:"vSAN"}], answer:"b", explanation:"HA redémarre les VMs après panne."},
  {text:".vmdk-delta est créé par snapshot. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"Les snapshots créent des disques _delta."},
  {text:"vSphere Web Client accessible uniquement via navigateur. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"C'est une interface Web."},
  {text:"Une VM peut contenir 60 disques SCSI. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"60 via 4 contrôleurs SCSI."},
  {text:"FT nécessite synchronisation permanente entre hôtes. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"FT = synchro constante."},
  {text:"vSAN regroupe disques locaux en datastore distribué. (V/F)", type:"tf", options:[{k:"v",label:"Vrai"},{k:"f",label:"Faux"}], answer:"v", explanation:"vSAN agrège le stockage local."}
];

// ========== Variables ==========
let currentUser=null, startTime=0, currentOrder=[], currentPage=0;
const perPage=10;
let userAnswers = {}; // clé=index question, value=réponse choisie

// ========== Utils ==========
const shuffle = arr => {for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
const getReadableAnswer = q => q.options.find(o=>o.k===q.answer)?.label || q.answer;

// ========== Render Page ==========
const container = document.getElementById('questionsContainer');
function renderPage(){
  container.innerHTML="";
  const start = currentPage*perPage;
  const end = Math.min(start+perPage,currentOrder.length);
  for(let i=start;i<end;i++){
    const q = currentOrder[i];
    const qDiv = document.createElement('div'); qDiv.className='q'; qDiv.dataset.answer=q.answer;
    qDiv.innerHTML = `<h3>${i+1}. ${q.text}</h3>`;
    const opts = document.createElement('div'); opts.className="opts";
    const name = "q"+i;
    q.options.forEach(opt=>{
      const lab = document.createElement('label');
      const inp = document.createElement('input'); inp.type="radio"; inp.name=name; inp.value=opt.k;
      if(userAnswers[i]===opt.k) inp.checked=true;
      lab.appendChild(inp); lab.appendChild(document.createTextNode(" "+opt.label));
      opts.appendChild(lab);
    });
    qDiv.appendChild(opts);
    const expl = document.createElement('div'); expl.className="explanation";
    expl.innerHTML=`<strong>Réponse:</strong> ${getReadableAnswer(q)}<br><em>${q.explanation}</em>`;
    qDiv.appendChild(expl);
    container.appendChild(qDiv);
  }
  document.getElementById('prevBtn').classList.toggle('hidden',currentPage===0);
  document.getElementById('nextBtn').classList.toggle('hidden',end>=currentOrder.length);
  document.getElementById('checkBtn').classList.toggle('hidden',end<currentOrder.length);
}

// ========== Save Answers ==========
function saveAnswers(){
  const start = currentPage*perPage;
  const end = Math.min(start+perPage,currentOrder.length);
  for(let i=start;i<end;i++){
    const selected = container.querySelector('input[name="q'+i+'"]:checked')?.value;
    if(selected) userAnswers[i] = selected;
  }
}

// ========== Start Quiz ==========
document.getElementById('startBtn').addEventListener('click',()=>{
  const name = document.getElementById('lastname').value.trim();
  if(!name){alert("Veuillez entrer votre nom de famille"); return;}
  currentUser = name;
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  document.getElementById('quizTitle').textContent = "Participant : "+currentUser;
  currentOrder = shuffle([...questions]);
  currentPage = 0;
  userAnswers = {};
  renderPage();
  startTime = Date.now();
});

// ========== Navigation ==========
document.getElementById('prevBtn').addEventListener('click',()=>{
  saveAnswers();
  if(currentPage>0){currentPage--; renderPage();}
});
document.getElementById('nextBtn').addEventListener('click',()=>{
  saveAnswers();
  const unanswered = Array.from(container.querySelectorAll('.q')).some(q=>!q.querySelector('input:checked'));
  if(unanswered){alert("Veuillez répondre à toutes les questions de cette page avant de continuer."); return;}
  if((currentPage+1)*perPage<currentOrder.length){currentPage++; renderPage();}
});

// ========== Vérification ==========
document.getElementById('checkBtn').addEventListener('click',()=>{
  saveAnswers();
  let score=0;
  currentOrder.forEach((q,i)=>{
    const chosen = userAnswers[i];
    if(chosen===q.answer) score++;
  });
  const total = questions.length;
  const percent = Math.round((score/total)*100);
  const endTime = Math.round((Date.now()-startTime)/1000);
  document.getElementById('resultArea').classList.remove('hidden');
  document.getElementById('summary').innerHTML=`Score : ${score}/${total} (${percent}%)<br>Temps : ${endTime} secondes`;

  // Envoyer les résultats sur Google Sheet
  fetch("https://script.google.com/macros/s/AKfycbzqRrtfH3FBPgjVBVOtV2_lgOzuHK28Zq6H54zNaMFt5D40QEhaHsHS2btUiZjN218aIA/exec", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name: currentUser, score, total, percent, time: endTime})
  })
  .then(res=>res.json())
  .then(data=>console.log("Résultat envoyé:", data))
  .catch(err=>console.error("Erreur envoi résultats:", err));

  // Afficher explications
  container.querySelectorAll('.q').forEach((qEl,i)=>{
    const expl = qEl.querySelector('.explanation'); expl.style.display="block";
    const badge = document.createElement('span'); badge.className="badge";
    badge.textContent = userAnswers[i]===qEl.dataset.answer ? "Correct":"Incorrect";
    badge.classList.add(userAnswers[i]===qEl.dataset.answer?"correct-badge":"wrong-badge");
    expl.prepend(badge);
  });
});

// ========== Réinitialiser ==========
document.getElementById('resetBtn').addEventListener('click',()=>{
  currentOrder = shuffle([...questions]);
  currentPage = 0; renderPage();
  userAnswers={};
  startTime = Date.now();
  document.getElementById('resultArea').classList.add('hidden');
});

// ========== Recommencer ==========
document.getElementById('restartBtn').addEventListener('click',()=>{
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
});

// ========== Admin Mode ==========
function openAdmin(){
  const pass = prompt("Mot de passe admin :");
  if(pass==="admin+35"){
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('adminScreen').classList.remove('hidden');
    loadResults();
  } else {alert("Mot de passe incorrect");}
}
document.getElementById('adminBtn').addEventListener('click',openAdmin);
document.getElementById('adminBtnQuiz').addEventListener('click',openAdmin);

function loadResults(){
  alert("Les résultats sont visibles directement dans le Google Sheet.");
}
function exitAdmin(){
  document.getElementById('adminScreen').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
}

function loadResults() {
  const tbody = document.querySelector('#resultsTable tbody');
  tbody.innerHTML = ""; // vide avant d'ajouter

  // Récupérer les données depuis le Google Sheet via Apps Script
  fetch("https://script.google.com/macros/s/AKfycbzqRrtfH3FBPgjVBVOtV2_lgOzuHK28Zq6H54zNaMFt5D40QEhaHsHS2btUiZjN218aIA/exec?action=getResults")
    .then(res => res.json())
    .then(data => {
      // data doit être un tableau d'objets {name, score, percent, time}
      data.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${r.name}</td>
          <td>${r.score}</td>
          <td>${r.percent}%</td>
          <td>${r.time}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error("Erreur récupération résultats :", err);
      alert("Impossible de charger les résultats depuis le Google Sheet.");
    });
}
