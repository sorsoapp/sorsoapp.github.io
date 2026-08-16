/* Il comportamento che tutte le pagine hanno in comune.
   Sta in un file solo perché quattro copie dello stesso codice divergono sempre:
   basta correggerne tre su quattro una volta, e le pagine smettono di sembrare
   della stessa app. */

const fermo = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- l'acqua sale mentre si scorre --------------------------------------
   Il valore finisce in una variabile CSS; l'altezza del mare e la barra in cima
   la leggono da lì. Nessuno dei due sa niente dello scorrimento. */
let inCoda = false;
let ultimoY = scrollY;
let calmante = 0;

function suScorrimento() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(1, scrollY / max) : 0;
  document.documentElement.style.setProperty('--salita', p.toFixed(4));

  // Quanto forte stai scorrendo, con segno. L'acqua se ne accorge e si sbilancia:
  // è quello che fa in un bicchiere che viene mosso, e senza questo lo scorrimento
  // sembra scivolare *sopra* un fondale invece che dentro l'acqua.
  const dy = scrollY - ultimoY;
  ultimoY = scrollY;
  const spinta = Math.max(-1, Math.min(1, dy / 55));
  document.documentElement.style.setProperty('--spinta', spinta.toFixed(3));

  // Ferma la mano, e il livello si riassesta da solo.
  clearTimeout(calmante);
  calmante = setTimeout(
    () => document.documentElement.style.setProperty('--spinta', '0'), 110
  );

  inCoda = false;
}
addEventListener('scroll', () => {
  if (inCoda) return;
  inCoda = true;
  requestAnimationFrame(suScorrimento);
}, { passive: true });
addEventListener('resize', suScorrimento, { passive: true });
suScorrimento();

/* ---- bollicine dentro il mare ------------------------------------------- */
const dentroIlMare = document.getElementById('bolle');
if (dentroIlMare && !fermo) {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement('div');
    const d = 4 + Math.random() * 9;
    b.className = 'bolla';
    b.style.width = b.style.height = d + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.animationDuration = (7 + Math.random() * 9) + 's';
    b.style.animationDelay = (Math.random() * 9) + 's';
    dentroIlMare.appendChild(b);
  }
}

/* ---- bollicine su tutta la pagina ---------------------------------------
   Diciotto: abbastanza da far sembrare l'aria densa, poche da non pesare sullo
   scorrimento. Le grandi salgono più lente — è il contrario dell'intuito, ma è
   come si muovono davvero, e a occhio la differenza si sente. */
const ambiente = document.getElementById('bolle-ambiente');
if (ambiente && !fermo) {
  for (let i = 0; i < 18; i++) {
    const b = document.createElement('div');
    const d = 5 + Math.random() * 18;
    b.className = 'bolla-a';
    b.style.width = b.style.height = d + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.animationDuration = (16 + d * 0.9 + Math.random() * 10) + 's';
    b.style.animationDelay = (-Math.random() * 26) + 's';
    ambiente.appendChild(b);
  }
}

/* ---- ogni blocco entra quando arriva il suo turno ------------------------ */
const osservatore = new IntersectionObserver((voci) => {
  for (const v of voci) {
    if (!v.isIntersecting) continue;
    v.target.classList.add('dentro');
    osservatore.unobserve(v.target);          // una volta sola: non deve lampeggiare
    v.target.dispatchEvent(new CustomEvent('entrato', { bubbles: true }));
  }
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.rivela').forEach(e => osservatore.observe(e));

/* ---- il cerchio che si allarga dove tocchi ------------------------------- */
if (!fermo) {
  addEventListener('pointerdown', e => {
    const c = document.createElement('span');
    c.className = 'tocco';
    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';
    document.body.appendChild(c);
    c.addEventListener('animationend', () => c.remove());
  }, { passive: true });
}

/* ---- i pulsanti perdono bollicine quando ci passi sopra ------------------ */
if (!fermo && matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.btn').forEach(b => {
    let ultimo = 0;
    b.addEventListener('pointermove', e => {
      // Una ogni 120 ms: senza freno, muovendo il mouse ne uscirebbero centinaia.
      const ora = performance.now();
      if (ora - ultimo < 120) return;
      ultimo = ora;
      const r = b.getBoundingClientRect();
      const s = document.createElement('span');
      const d = 4 + Math.random() * 7;
      s.className = 'sfiato';
      s.style.width = s.style.height = d + 'px';
      s.style.left = (r.left + Math.random() * r.width) + 'px';
      s.style.top = (r.top + r.height * 0.65) + 'px';
      s.style.setProperty('--dx', (Math.random() * 26 - 13) + 'px');
      document.body.appendChild(s);
      s.addEventListener('animationend', () => s.remove());
    });
  });
}

/* ---- i pulsanti si lasciano attrarre ------------------------------------
   Pochi pixel, non di più: abbastanza da sentirlo, non tanto da far mancare il
   bersaglio a chi punta col mouse. */
if (!fermo && matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.magnete').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.28;
      b.style.transform = `translate(${x}px, ${y - 3}px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
}

/* ---- il pannello dei cookie ---------------------------------------------
   Oggi questo sito non installa nessun cookie e non carica niente da fuori.
   Il pannello però è vero, non un disegno: le tre voci corrispondono a tre
   categorie reali, la scelta viene salvata, e chiunque in futuro aggiunga uno
   script di statistica o di pubblicità **deve** chiedere il permesso a
   `consensoPer()` prima di caricarlo. Il giorno in cui quella pubblicità
   esisterà, l'interruttore la governerà davvero.

   Finché non esistono, le due categorie sono marcate «non ancora in uso» e
   partono spente. Mostrare un interruttore che non comanda niente, senza dirlo,
   sarebbe l'unica cosa disonesta di tutto il sito.

   Come si usa, domani:
       if (consensoPer('statistiche')) { ...carica lo script... }
*/
const CHIAVE = 'sorso-consenso';

const CATEGORIE = [
  {
    id: 'necessari', nome: 'Necessari', sempre: true, attiva: true,
    testo: 'Tengono a mente questa tua scelta, così il pannello non ricompare a ' +
           'ogni visita. È l’unica cosa che il sito salva oggi, e non dice niente di te.'
  },
  {
    id: 'statistiche', nome: 'Statistiche', sempre: false, attiva: false,
    testo: 'Servirebbero a contare quante persone passano di qui e da dove arrivano. ' +
           'Nessun dato personale, solo numeri.'
  },
  {
    id: 'pubblicita', nome: 'Pubblicità', sempre: false, attiva: false,
    testo: 'Permetterebbero a un circuito pubblicitario di mostrare annunci scelti ' +
           'in base a cosa guardi in giro per il web.'
  },
];

function memoriaViva() {
  try {
    localStorage.setItem('__prova__', '1');
    localStorage.removeItem('__prova__');
    return true;
  } catch {
    return false;   // navigazione privata, o memoria negata: si prosegue senza
  }
}

function consensoSalvato() {
  try { return JSON.parse(localStorage.getItem(CHIAVE) || 'null'); } catch { return null; }
}

/** L'unica porta da cui deve passare qualunque script non necessario. */
function consensoPer(categoria) {
  const c = consensoSalvato();
  return !!(c && c[categoria] === true);
}
window.consensoPer = consensoPer;

function salvaConsenso(scelte) {
  if (!memoriaViva()) return;
  try {
    localStorage.setItem(CHIAVE, JSON.stringify({
      versione: 1, quando: new Date().toISOString(), ...scelte
    }));
  } catch { /* pazienza: si comporterà come un rifiuto */ }
}

function costruisciPannello() {
  const salvato = consensoSalvato() || {};
  const stato = {};
  for (const c of CATEGORIE) stato[c.id] = c.sempre ? true : (salvato[c.id] === true);

  const p = document.createElement('div');
  p.className = 'biscotti';
  p.setAttribute('role', 'dialog');
  p.setAttribute('aria-label', 'Preferenze sui cookie');

  const titolo = document.createElement('h3');
  titolo.textContent = 'Cookie';

  const intro = document.createElement('p');
  intro.textContent = 'Oggi questo sito non usa cookie di statistica né di pubblicità: ' +
    'l’unica cosa che salva è questa tua scelta. Puoi comunque decidere voce per voce, ' +
    'e vale anche per il futuro.';

  const rimando = document.createElement('p');
  rimando.append('Il dettaglio, per esteso, sta ');
  const link = document.createElement('a');
  link.href = 'privacy.html#cookie';
  link.textContent = 'nella pagina privacy';
  rimando.append(link, '.');

  // --- le tre categorie, ciascuna col suo interruttore ---
  const elenco = document.createElement('div');
  elenco.className = 'categorie';

  for (const c of CATEGORIE) {
    const riga = document.createElement('div');
    riga.className = 'categoria';

    const tasto = document.createElement('button');
    tasto.type = 'button';
    tasto.className = 'interruttore';
    tasto.setAttribute('role', 'switch');
    tasto.setAttribute('aria-checked', String(stato[c.id]));
    tasto.setAttribute('aria-label', c.nome);
    if (c.sempre) tasto.setAttribute('aria-disabled', 'true');

    tasto.addEventListener('click', () => {
      if (c.sempre) return;             // i necessari non si spengono: senza, niente memoria
      stato[c.id] = !stato[c.id];
      tasto.setAttribute('aria-checked', String(stato[c.id]));
    });

    const voce = document.createElement('div');
    voce.className = 'voce';
    const nome = document.createElement('b');
    nome.textContent = c.sempre ? `${c.nome} · sempre attivi` : c.nome;
    const desc = document.createElement('small');
    desc.textContent = c.testo;
    voce.append(nome, desc);

    if (!c.attiva) {
      const targa = document.createElement('span');
      targa.className = 'inattiva';
      targa.textContent = 'non ancora in uso';
      voce.append(targa);
    }

    riga.append(voce, tasto);
    elenco.append(riga);
  }

  // --- i pulsanti ---
  const scelte = document.createElement('div');
  scelte.className = 'scelte';

  const tutto = document.createElement('button');
  tutto.type = 'button'; tutto.className = 'si'; tutto.textContent = 'Accetta tutto';

  const niente = document.createElement('button');
  niente.type = 'button'; niente.className = 'no'; niente.textContent = 'Rifiuta tutto';

  const scegli = document.createElement('button');
  scegli.type = 'button'; scegli.className = 'scegli'; scegli.textContent = 'Scegli voce per voce';

  const salva = document.createElement('button');
  salva.type = 'button'; salva.className = 'si'; salva.textContent = 'Salva le mie scelte';
  salva.hidden = true;

  scelte.append(tutto, niente, salva, scegli);
  p.append(titolo, intro, rimando, elenco, scelte);
  document.body.appendChild(p);

  requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('su')));

  const chiudi = () => {
    p.classList.remove('su');
    setTimeout(() => p.remove(), 600);
  };

  scegli.addEventListener('click', () => {
    const aperte = elenco.classList.toggle('aperte');
    tutto.hidden = aperte;
    niente.hidden = aperte;
    salva.hidden = !aperte;
    scegli.textContent = aperte ? 'Torna indietro' : 'Scegli voce per voce';
  });

  tutto.addEventListener('click', () => {
    const s = {}; for (const c of CATEGORIE) s[c.id] = true;
    salvaConsenso(s); chiudi();
  });

  // Rifiutare non salva niente: non resta traccia, e alla visita dopo il
  // pannello ritorna. È il prezzo della scelta, e lo paga il sito.
  niente.addEventListener('click', chiudi);

  salva.addEventListener('click', () => { salvaConsenso(stato); chiudi(); });

  return p;
}

let pannelloAperto = null;
function apriPannelloCookie() {
  if (pannelloAperto && document.body.contains(pannelloAperto)) return;
  pannelloAperto = costruisciPannello();
}

// Alla prima visita, un attimo dopo il caricamento: non deve saltare addosso.
if (!consensoSalvato()) setTimeout(apriPannelloCookie, 900);

// Chi ha già scelto lo ritrova dal piede di pagina, per cambiare idea.
document.querySelectorAll('[data-cookie]').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); apriPannelloCookie(); });
});
