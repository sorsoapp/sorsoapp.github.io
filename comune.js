/* Il comportamento che tutte le pagine hanno in comune.
   Include: fisica dell'acqua, gestione dei 6 temi, motore i18n per 6 lingue,
   pannello lingue, bollicine, interazioni tocco/pulsanti e gestione cookie. */

const fermo = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   1. GESTIONE DEI 6 TEMI
   ========================================================================== */
const CHIAVE_TEMA = 'sorso-tema';
const TEMI = [
  { id: 'notte', nome: 'Notte', desc: 'Acqua vista di notte, blu profondo', chiaro: false, sky: '#02171F', water: '#0A7A8F' },
  { id: 'giorno', nome: 'Giorno', desc: 'Acqua azzurra su fondo chiaro', chiaro: true, sky: '#F3FAFD', water: '#7CCDEC' },
  { id: 'birra', nome: 'Birra', desc: 'Bionda, ambrata e piena di bollicine', chiaro: false, sky: '#171004', water: '#936517' },
  { id: 'monster', nome: 'Monster', desc: 'Nero profondo e verde energetico', chiaro: false, sky: '#070B07', water: '#3E7E18' },
  { id: 'vino_rosso', nome: 'Vino rosso', desc: 'Amarena accesa con viola d\'uva', chiaro: false, sky: '#1C0611', water: '#B01340' },
  { id: 'vino_bianco', nome: 'Vino bianco', desc: 'Paglierino e chiaro, fresco', chiaro: true, sky: '#FFFBEF', water: '#EBD68A' }
];

function temaSalvato() {
  try { return localStorage.getItem(CHIAVE_TEMA) || 'notte'; } catch { return 'notte'; }
}

function applicaTema(idTema) {
  const tema = TEMI.find(t => t.id === idTema) || TEMI[0];

  const esegui = () => {
    document.documentElement.setAttribute('data-tema', tema.id);
    try { localStorage.setItem(CHIAVE_TEMA, tema.id); } catch {}

    // Aggiorna lo stato attivo nelle tessere dei temi
    document.querySelectorAll('.scheda-tema').forEach(el => {
      el.classList.toggle('attivo', el.getAttribute('data-tema-id') === tema.id);
    });

    // Aggiorna l'etichetta del pulsante rapido tema se presente
    const btnTema = document.getElementById('btn-tema-corrente');
    if (btnTema) {
      btnTema.innerHTML = `<i class="fa-solid fa-palette"></i> <span>${tema.nome}</span>`;
    }
  };

  if (!fermo && document.startViewTransition) {
    document.startViewTransition(esegui);
  } else {
    esegui();
  }

  // Inizializza le bolle al primo avvio senza ricrearle continuamente
  inizializzaBolleMare();
}
window.applicaTema = applicaTema;

/* ==========================================================================
   2. SISTEMA MULTILINGUA (6 LINGUE)
   ========================================================================== */
const CHIAVE_LINGUA = 'sorso-lingua';
const LINGUE = [
  { tag: 'it', bandiera: '🇮🇹', nome: 'Italiano' },
  { tag: 'en', bandiera: '🇬🇧', nome: 'English' },
  { tag: 'es', bandiera: '🇪🇸', nome: 'Español' },
  { tag: 'fr', bandiera: '🇫🇷', nome: 'Français' },
  { tag: 'de', bandiera: '🇩🇪', nome: 'Deutsch' },
  { tag: 'pt', bandiera: '🇵🇹', nome: 'Português' },
];

const DIZIONARIO = {
  it: {
    "nav_cambia_lingua": "Lingua",
    "nav_temi": "Temi",
    "claim_hero": "Ti ricorda di bere durante la giornata.<br><b>All'ora giusta</b>, senza che tu ci debba pensare.",
    "sotto_claim": "Niente account, niente pubblicità, niente che esca dal tuo telefono. Gratis, per Android.",
    "btn_scarica": "Scarica Sorso",
    "btn_cosa_fa": "Cosa fa",
    "btn_come_si_installa": "Come si installa →",
    "dettaglio_download": "Ultima versione",
    "scorri": "SCORRI",
    
    // Changelog
    "changelog_titolo": "Novità nell'ultima versione",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Scheda Abitudini:</strong> obiettivo, promemoria e orari ora in una stanza dedicata.",
    "changelog_item2": "<strong>6 Temi cromatici:</strong> Notte, Giorno, Birra, Monster, Vino rosso e Vino bianco.",
    "changelog_item3": "<strong>Bollicine gassate:</strong> Birra e Monster con effervescenza reale.",
    "changelog_item4": "<strong>Nuova barra in basso:</strong> 4 schede con selezione a trascinamento fluido.",
    "changelog_item5": "<strong>6 lingue supportate:</strong> Italiano, English, Español, Français, Deutsch, Português.",
    "changelog_link": "Consulta tutte le versioni su GitHub →",
    
    // Cosa fa
    "sez_cosa_fa": "Cosa fa",
    "titolo_cosa_fa": "Una cosa sola, fatta bene",
    "desc_cosa_fa": "Niente diari complessi, niente punteggi, niente notifiche di marketing.",
    "card1_titolo": "Promemoria puntuali",
    "card1_desc": "Ogni ora, ogni mezz'ora, come decidi tu. Arrivano al minuto esatto, anche a telefono in tasca e dopo un riavvio.",
    "card2_titolo": "Conta in bicchieri",
    "card2_desc": "«4 bicchieri finiti su 12». I millilitri restano, per chi li vuole.",
    "card3_titolo": "Statistiche & Serie",
    "card3_desc": "Giorni di fila, media giornaliera, obiettivi centrati, giorno migliore e le colonne degli ultimi sette giorni.",
    "card4_titolo": "Due widget",
    "card4_desc": "Il livello di oggi sulla schermata home. Un tocco per segnare un bicchiere senza aprire niente.",
    "card5_titolo": "Obiettivo su misura",
    "card5_desc": "Peso, età, quanto ti alleni, il clima. Sorso calcola quanto ti serve — oppure lo scegli a mano.",
    "card6_titolo": "Funziona offline",
    "card6_desc": "Nessun account, nessuna registrazione, nessuna pubblicità. Anche in aereo.",
    
    // Vetrina & Bottom bar
    "sez_come_fatta": "Com'è fatta",
    "titolo_come_fatta": "L'acqua sale mentre bevi",
    "desc_come_fatta_1": "Il livello sullo sfondo è la tua giornata: parte dal fondo la mattina e sale a ogni bicchiere. Non c'è una barra di avanzamento da guardare — c'è l'acqua.",
    "desc_come_fatta_2": "La nuova barra in basso a 4 schede ti permette di passare da Oggi, Andamento, Abitudini e Impostazioni con un gesto del pollice.",
    "mockup_oggi": "Oggi",
    "mockup_conta": "4 bicchieri finiti su 12",
    "mockup_obiettivo": "OBIETTIVO 2400 ML",
    "mockup_bevi": "Bevi un bicchiere · 200 ml",
    "mockup_tab_oggi": "Oggi",
    "mockup_tab_andamento": "Andamento",
    "mockup_tab_abitudini": "Abitudini",
    "mockup_tab_impostazioni": "Impostazioni",
    
    // Temi
    "sez_temi": "Aspetto & Temi",
    "titolo_temi": "Vestila come preferisci",
    "desc_temi": "Scegli tra 6 temi cromatici curati. Clicca su un tema qui sotto per provarlo subito sul sito:",
    "tema_notte_nome": "Notte",
    "tema_notte_desc": "Blu profondo oceanico, l'aspetto classico di Sorso.",
    "tema_giorno_nome": "Giorno",
    "tema_giorno_desc": "Tema chiaro luminoso con acqua celeste.",
    "tema_birra_nome": "Birra",
    "tema_birra_desc": "Ambra calda con bollicine gassate che salgono dal fondo.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Nero grafite e verde fluo ad alta energia.",
    "tema_vino_rosso_nome": "Vino rosso",
    "tema_vino_rosso_desc": "Amarena intensa con una punta di viola d'uva.",
    "tema_vino_bianco_nome": "Vino bianco",
    "tema_vino_bianco_desc": "Paglierino e chiaro, fresco di cantina.",
    "avviso_temi_titolo": "IMPORTANTE",
    "avviso_temi_testo": "I temi cambiano solo i colori. Sorso resta un'app per bere più acqua: «Birra», «Monster» e i vini sono nomi di tinte, non un invito. Quello che conti resta sempre acqua.",
    
    // Statistiche
    "sez_statistiche": "Statistiche",
    "titolo_statistiche": "Vedi se è diventata un'abitudine",
    "desc_statistiche": "Non serve aprire niente per bere. Ma dopo qualche giorno qualcosa da guardare c'è, ed è la parte che fa venire voglia di non interrompere la serie.",
    "stat_serie": "Serie in corso",
    "stat_giorni_fila": "giorni di fila",
    "stat_media": "Media al giorno",
    "stat_su_giorni": "su 34 giorni",
    "stat_centrati": "Obiettivi centrati",
    "stat_ultimi_giorni": "negli ultimi 30 giorni",
    "stat_migliore": "Giorno migliore",
    "stat_record": "il tuo record",
    "stat_ultimi_7": "Ultimi 7 giorni",
    
    // Privacy & Chiusura
    "sez_privacy": "I tuoi dati",
    "titolo_privacy": "Niente esce dal tuo telefono",
    "desc_privacy_1": "Sorso non ha un server. Non ha un account. Non sa chi sei e non vuole saperlo. I sorsi che segni, l'obiettivo, lo storico dei giorni: tutto resta nella memoria del tuo telefono.",
    "desc_privacy_2": "L'unica volta che l'app si collega a internet è per controllare se è uscito un aggiornamento su GitHub. Nient'altro.",
    "btn_leggi_privacy": "Leggi la privacy",
    "btn_condizioni": "Condizioni d'uso",
    "titolo_chiusura": "Bere è la cosa più semplice del mondo.<br>Ricordarsene, un po' meno.",
    
    // Footer
    "footer_firma": "Sorso · di <b>Giovanni Romito</b>",
    "footer_installa": "Come si installa",
    "footer_scrivimi": "Scrivimi",
    "footer_versioni": "Tutte le versioni",
    "footer_privacy": "Privacy",
    "footer_cookie": "Gestisci i cookie",
    "footer_condizioni": "Condizioni",
    
    // Dialog lingua
    "foglio_lingua_titolo": "LINGUA",
    "foglio_lingua_domanda": "In che lingua parliamo?"
  },
  en: {
    "nav_cambia_lingua": "Language",
    "nav_temi": "Themes",
    "claim_hero": "Reminds you to drink during the day.<br><b>At the right time</b>, without thinking about it.",
    "sotto_claim": "No account, no ads, nothing that leaves your phone. Free, for Android.",
    "btn_scarica": "Download Sorso",
    "btn_cosa_fa": "What it does",
    "btn_come_si_installa": "How to install →",
    "dettaglio_download": "Latest version",
    "scorri": "SCROLL",
    
    "changelog_titolo": "What's new in the latest version",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Habits Tab:</strong> goal, reminders and times now have their own dedicated space.",
    "changelog_item2": "<strong>6 Curated Themes:</strong> Night, Day, Beer, Monster, Red Wine, and White Wine.",
    "changelog_item3": "<strong>Fizzy bubbles:</strong> Beer and Monster with genuine rising carbonation.",
    "changelog_item4": "<strong>New bottom bar:</strong> 4 tabs with smooth swipeable pill selection.",
    "changelog_item5": "<strong>6 supported languages:</strong> English, Italian, Spanish, French, German, Portuguese.",
    "changelog_link": "View all releases on GitHub →",
    
    "sez_cosa_fa": "What it does",
    "titolo_cosa_fa": "One simple thing, done right",
    "desc_cosa_fa": "No complex logs, no scores, no marketing notifications.",
    "card1_titolo": "Precise Reminders",
    "card1_desc": "Every hour, half hour, as you prefer. Right on time, even in your pocket or after a restart.",
    "card2_titolo": "Count in Glasses",
    "card2_desc": "«4 glasses finished out of 12». Millilitres remain, for those who want them.",
    "card3_titolo": "Stats & Streaks",
    "card3_desc": "Consecutive days, daily average, goals hit, best day and 7-day trend chart.",
    "card4_titolo": "Two Widgets",
    "card4_desc": "Today's water level right on your home screen. One tap to log a drink.",
    "card5_titolo": "Custom Goal",
    "card5_desc": "Weight, age, activity level, climate. Sorso works out how much you need.",
    "card6_titolo": "Works Offline",
    "card6_desc": "No account, no sign-up, no advertisements. Even on airplane mode.",
    
    "sez_come_fatta": "How it works",
    "titolo_come_fatta": "Water rises as you drink",
    "desc_come_fatta_1": "The background water level is your day: starts at the bottom in the morning and rises with each glass.",
    "desc_come_fatta_2": "The new 4-tab bottom bar lets you switch between Today, Trends, Habits, and Settings with a thumb swipe.",
    "mockup_oggi": "Today",
    "mockup_conta": "4 glasses finished of 12",
    "mockup_obiettivo": "GOAL 2400 ML",
    "mockup_bevi": "Drink a glass · 200 ml",
    "mockup_tab_oggi": "Today",
    "mockup_tab_andamento": "Trends",
    "mockup_tab_abitudini": "Habits",
    "mockup_tab_impostazioni": "Settings",
    
    "sez_temi": "Appearance & Themes",
    "titolo_temi": "Dress it your way",
    "desc_temi": "Choose from 6 curated color themes. Click any theme below to try it live on the site:",
    "tema_notte_nome": "Night",
    "tema_notte_desc": "Deep oceanic blue, Sorso's classic dark look.",
    "tema_giorno_nome": "Day",
    "tema_giorno_desc": "Bright light theme with crystal-clear water.",
    "tema_birra_nome": "Beer",
    "tema_birra_desc": "Warm amber with real effervescent bubbles.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Graphite black and high-energy neon lime.",
    "tema_vino_rosso_nome": "Red Wine",
    "tema_vino_rosso_desc": "Vibrant black cherry with a touch of grape violet.",
    "tema_vino_bianco_nome": "White Wine",
    "tema_vino_bianco_desc": "Straw yellow and bright, fresh from the cellar.",
    "avviso_temi_titolo": "IMPORTANT",
    "avviso_temi_testo": "Themes only change colors. Sorso remains an app to drink water: «Beer», «Monster» and wines are color names, not an invite. What you track is always water.",
    
    "sez_statistiche": "Statistics",
    "titolo_statistiche": "See if it became a habit",
    "desc_statistiche": "You don't need to open the app to drink. But after a few days, having stats to see keeps your streak alive.",
    "stat_serie": "Current streak",
    "stat_giorni_fila": "days in a row",
    "stat_media": "Daily average",
    "stat_su_giorni": "over 34 days",
    "stat_centrati": "Goals reached",
    "stat_ultimi_giorni": "in last 30 days",
    "stat_migliore": "Best day",
    "stat_record": "your record",
    "stat_ultimi_7": "Last 7 days",
    
    "sez_privacy": "Your Data",
    "titolo_privacy": "Nothing leaves your phone",
    "desc_privacy_1": "Sorso has no server. No account. It doesn't know who you are and doesn't want to. Your logs and goals stay securely on your device.",
    "desc_privacy_2": "The only time the app touches the internet is to check GitHub for updates. Nothing else.",
    "btn_leggi_privacy": "Read Privacy Policy",
    "btn_condizioni": "Terms of Use",
    "titolo_chiusura": "Drinking water is the simplest thing.<br>Remembering to, a bit less.",
    
    "footer_firma": "Sorso · by <b>Giovanni Romito</b>",
    "footer_installa": "How to install",
    "footer_scrivimi": "Contact me",
    "footer_versioni": "All versions",
    "footer_privacy": "Privacy",
    "footer_cookie": "Manage cookies",
    "footer_condizioni": "Terms",
    
    "foglio_lingua_titolo": "LANGUAGE",
    "foglio_lingua_domanda": "Which language do you prefer?"
  },
  es: {
    "nav_cambia_lingua": "Idioma",
    "nav_temi": "Temas",
    "claim_hero": "Te recuerda beber agua durante el día.<br><b>A la hora justa</b>, sin que tengas que pensarlo.",
    "sotto_claim": "Sin cuentas, sin anuncios, nada sale de tu teléfono. Gratis, para Android.",
    "btn_scarica": "Descargar Sorso",
    "btn_cosa_fa": "Qué hace",
    "btn_come_si_installa": "Cómo se instala →",
    "dettaglio_download": "Última versión",
    "scorri": "DESPLAZA",
    "changelog_titolo": "Novedades de la última versión",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Pestaña Hábitos:</strong> objetivo, recordatorios y horarios en su propio espacio.",
    "changelog_item2": "<strong>6 Temas cuidados:</strong> Noche, Día, Cerveza, Monster, Vino tinto y Vino blanco.",
    "changelog_item3": "<strong>Burbujas con gas:</strong> Cerveza y Monster con efervescencia real.",
    "changelog_item4": "<strong>Nueva barra inferior:</strong> 4 pestañas con deslizamiento suave.",
    "changelog_item5": "<strong>6 idiomas:</strong> Español, Italiano, Inglés, Francés, Alemán, Portugués.",
    "changelog_link": "Ver todas las versiones en GitHub →",
    "sez_cosa_fa": "Qué hace",
    "titolo_cosa_fa": "Una sola cosa, bien hecha",
    "desc_cosa_fa": "Sin registros complejos ni notificaciones comerciales.",
    "card1_titolo": "Recordatorios puntuales",
    "card1_desc": "Cada hora o media hora. Llegan al minuto exacto, incluso tras reiniciar.",
    "card2_titolo": "Cuenta en vasos",
    "card2_desc": "«4 vasos terminados de 12». Los mililitros siguen disponibles.",
    "card3_titolo": "Estadísticas y rachas",
    "card3_desc": "Días seguidos, media diaria, objetivos cumplidos y gráfica semanal.",
    "card4_titolo": "Dos widgets",
    "card4_desc": "El nivel de hoy en tu pantalla de inicio. Registra en un toque.",
    "card5_titolo": "Objetivo a medida",
    "card5_desc": "Peso, edad, ejercicio y clima. Sorso calcula lo que necesitas.",
    "card6_titolo": "Funciona sin conexión",
    "card6_desc": "Sin registros, sin cuenta ni publicidad. También en modo avión.",
    "sez_come_fatta": "Cómo es",
    "titolo_come_fatta": "El agua sube mientras bebes",
    "desc_come_fatta_1": "El fondo es tu jornada: sube con cada vaso que registras.",
    "desc_come_fatta_2": "La nueva barra inferior te permite cambiar entre Hoy, Tendencia, Hábitos y Ajustes.",
    "mockup_oggi": "Hoy",
    "mockup_conta": "4 vasos de 12 completados",
    "mockup_obiettivo": "OBJETIVO 2400 ML",
    "mockup_bevi": "Beber un vaso · 200 ml",
    "mockup_tab_oggi": "Hoy",
    "mockup_tab_andamento": "Tendencia",
    "mockup_tab_abitudini": "Hábitos",
    "mockup_tab_impostazioni": "Ajustes",
    "sez_temi": "Apariencia y Temas",
    "titolo_temi": "Elige tu estilo",
    "desc_temi": "Elige entre 6 temas exclusivos. Haz clic en cualquiera para probarlo en la web:",
    "tema_notte_nome": "Noche",
    "tema_notte_desc": "Azul oceánico profundo, el estilo clásico.",
    "tema_giorno_nome": "Día",
    "tema_giorno_desc": "Tema claro y luminoso con agua celeste.",
    "tema_birra_nome": "Cerveza",
    "tema_birra_desc": "Ámbar cálido con burbujas efervescentes.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Negro grafito y verde neón enérgico.",
    "tema_vino_rosso_nome": "Vino tinto",
    "tema_vino_rosso_desc": "Cereza vibrante con toques violeta.",
    "tema_vino_bianco_nome": "Vino blanco",
    "tema_vino_bianco_desc": "Amarillo pajizo y claro, fresco.",
    "avviso_temi_titolo": "IMPORTANTE",
    "avviso_temi_testo": "Los temas solo cambian colores. Sorso sigue siendo para beber agua: los nombres son estilos visuales.",
    "sez_statistiche": "Estadísticas",
    "titolo_statistiche": "Comprueba si es un hábito",
    "desc_statistiche": "Ver tus estadísticas te motiva a no romper la racha de hidratación.",
    "stat_serie": "Racha actual",
    "stat_giorni_fila": "días seguidos",
    "stat_media": "Media diaria",
    "stat_su_giorni": "en 34 días",
    "stat_centrati": "Objetivos logrados",
    "stat_ultimi_giorni": "en 30 días",
    "stat_migliore": "Mejor día",
    "stat_record": "tu récord",
    "stat_ultimi_7": "Últimos 7 días",
    "sez_privacy": "Tus Datos",
    "titolo_privacy": "Nada sale de tu teléfono",
    "desc_privacy_1": "Sorso no tiene servidores ni cuentas. Tus datos permanecen en tu dispositivo.",
    "desc_privacy_2": "Solo accede a internet para buscar actualizaciones en GitHub.",
    "btn_leggi_privacy": "Leer Privacidad",
    "btn_condizioni": "Términos de uso",
    "titolo_chiusura": "Beber agua es lo más sencillo.<br>Acordarse, no tanto.",
    "footer_firma": "Sorso · por <b>Giovanni Romito</b>",
    "footer_installa": "Cómo se instala",
    "footer_scrivimi": "Contacto",
    "footer_versioni": "Todas las versiones",
    "footer_privacy": "Privacidad",
    "footer_cookie": "Gestionar cookies",
    "footer_condizioni": "Condiciones",
    "foglio_lingua_titolo": "IDIOMA",
    "foglio_lingua_domanda": "¿En qué idioma hablamos?"
  },
  fr: {
    "nav_cambia_lingua": "Langue",
    "nav_temi": "Thèmes",
    "claim_hero": "Vous rappelle de boire tout au long de la journée.<br><b>Au bon moment</b>, sans y penser.",
    "sotto_claim": "Pas de compte, pas de pub, rien ne quitte votre téléphone. Gratuit pour Android.",
    "btn_scarica": "Télécharger Sorso",
    "btn_cosa_fa": "Fonctionnalités",
    "btn_come_si_installa": "Comment installer →",
    "dettaglio_download": "Dernière version",
    "scorri": "DÉFILER",
    "changelog_titolo": "Nouveautés de la dernière version",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Onglet Habitudes :</strong> objectif, rappels et horaires dans un espace dédié.",
    "changelog_item2": "<strong>6 Thèmes soignés:</strong> Nuit, Jour, Bière, Monster, Vin rouge et Vin blanc.",
    "changelog_item3": "<strong>Bulles pétillantes :</strong> Bière et Monster avec effervescence réelle.",
    "changelog_item4": "<strong>Nouvelle barre inférieure :</strong> 4 onglets avec glissement fluide.",
    "changelog_item5": "<strong>6 langues prises en charge :</strong> Français, Italien, Anglais, Espagnol, Allemand, Portugais.",
    "changelog_link": "Voir toutes les versions sur GitHub →",
    "sez_cosa_fa": "Fonctionnalités",
    "titolo_cosa_fa": "Une seule chose, bien faite",
    "desc_cosa_fa": "Pas de journal complexe ni de notifications intrusives.",
    "card1_titolo": "Rappels précis",
    "card1_desc": "Toutes les heures ou demi-heures, à la minute près.",
    "card2_titolo": "Compte en verres",
    "card2_desc": "«4 verres terminés sur 12». Les millilitres restent affichés.",
    "card3_titolo": "Statistiques et séries",
    "card3_desc": "Jours consécutifs, moyenne quotidienne et graphique hebdomadaire.",
    "card4_titolo": "Deux widgets",
    "card4_desc": "Le niveau d'eau directement sur votre écran d'accueil.",
    "card5_titolo": "Objectif sur mesure",
    "card5_desc": "Poids, âge, activité et météo : Sorso calcule ce qu'il vous faut.",
    "card6_titolo": "Fonctionne hors ligne",
    "card6_desc": "Sans compte ni pub, même en mode avion.",
    "sez_come_fatta": "Présentation",
    "titolo_come_fatta": "L'eau monte au fil de vos verres",
    "desc_come_fatta_1": "L'arrière-plan représente votre journée et monte à chaque gorgée.",
    "desc_come_fatta_2": "La nouvelle barre inférieure vous permet de naviguer facilement entre les 4 onglets.",
    "mockup_oggi": "Aujourd'hui",
    "mockup_conta": "4 verres bus sur 12",
    "mockup_obiettivo": "OBJECTIF 2400 ML",
    "mockup_bevi": "Boire un verre · 200 ml",
    "mockup_tab_oggi": "Aujourd'hui",
    "mockup_tab_andamento": "Tendances",
    "mockup_tab_abitudini": "Habitudes",
    "mockup_tab_impostazioni": "Paramètres",
    "sez_temi": "Apparence & Thèmes",
    "titolo_temi": "Personnalisez votre style",
    "desc_temi": "Choisissez parmi 6 thèmes soignés. Cliquez sur un thème pour le tester :",
    "tema_notte_nome": "Nuit",
    "tema_notte_desc": "Bleu profond océanique, le style classique.",
    "tema_giorno_nome": "Jour",
    "tema_giorno_desc": "Thème clair et lumineux avec eau turquoise.",
    "tema_birra_nome": "Bière",
    "tema_birra_desc": "Ambre doré avec de vraies bulles pétillantes.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Noir graphite et vert néon énergique.",
    "tema_vino_rosso_nome": "Vin rouge",
    "tema_vino_rosso_desc": "Cerise noire éclatante aux reflets violets.",
    "tema_vino_bianco_nome": "Vin blanc",
    "tema_vino_bianco_desc": "Jaune paille clair et frais.",
    "avviso_temi_titolo": "IMPORTANT",
    "avviso_temi_testo": "Les thèmes ne changent que les couleurs. Sorso reste une application pour boire de l'eau.",
    "sez_statistiche": "Statistiques",
    "titolo_statistiche": "Une vraie habitude au quotidien",
    "desc_statistiche": "Après quelques jours, vos graphiques vous encouragent à maintenir votre série.",
    "stat_serie": "Série en cours",
    "stat_giorni_fila": "jours d'affilée",
    "stat_media": "Moyenne par jour",
    "stat_su_giorni": "sur 34 jours",
    "stat_centrati": "Objectifs atteints",
    "stat_ultimi_giorni": "sur 30 jours",
    "stat_migliore": "Meilleur jour",
    "stat_record": "votre record",
    "stat_ultimi_7": "7 derniers jours",
    "sez_privacy": "Vos Données",
    "titolo_privacy": "Rien ne quitte votre téléphone",
    "desc_privacy_1": "Sorso n'a pas de serveur ni de compte. Vos données restent sur votre appareil.",
    "desc_privacy_2": "L'application ne se connecte à internet que pour vérifier les mises à jour GitHub.",
    "btn_leggi_privacy": "Confidentialité",
    "btn_condizioni": "Conditions d'utilisation",
    "titolo_chiusura": "Boire de l'eau est simple.<br>S'en souvenir, un peu moins.",
    "footer_firma": "Sorso · par <b>Giovanni Romito</b>",
    "footer_installa": "Comment installer",
    "footer_scrivimi": "M'écrire",
    "footer_versioni": "Toutes les versions",
    "footer_privacy": "Confidentialité",
    "footer_cookie": "Gérer les cookies",
    "footer_condizioni": "Conditions",
    "foglio_lingua_titolo": "LANGUE",
    "foglio_lingua_domanda": "Quelle langue préférez-vous ?"
  },
  de: {
    "nav_cambia_lingua": "Sprache",
    "nav_temi": "Designs",
    "claim_hero": "Erinnert dich tagsüber ans Trinken.<br><b>Zur richtigen Zeit</b>, ganz ohne Nachdenken.",
    "sotto_claim": "Kein Konto, keine Werbung, nichts verlässt dein Telefon. Kostenlos für Android.",
    "btn_scarica": "Sorso herunterladen",
    "btn_cosa_fa": "Funktionen",
    "btn_come_si_installa": "Installation →",
    "dettaglio_download": "Neueste Version",
    "scorri": "SCROLLEN",
    "changelog_titolo": "Neuheiten in der neuesten Version",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Gewohnheiten-Tab:</strong> Ziel, Erinnerungen und Zeiten in eigenem Bereich.",
    "changelog_item2": "<strong>6 Ausgewählte Designs:</strong> Nacht, Tag, Bier, Monster, Rotwein und Weißwein.",
    "changelog_item3": "<strong>Kohlensäure-Bläschen:</strong> Bier und Monster mit echten aufsteigenden Perlen.",
    "changelog_item4": "<strong>Neue Navigationsleiste:</strong> 4 Tabs mit flüssiger Wisch-Geste.",
    "changelog_item5": "<strong>6 Sprachen:</strong> Deutsch, Italienisch, Englisch, Spanisch, Französisch, Portugiesisch.",
    "changelog_link": "Alle Versionen auf GitHub ansehen →",
    "sez_cosa_fa": "Funktionen",
    "titolo_cosa_fa": "Eine Sache, richtig gut gemacht",
    "desc_cosa_fa": "Keine komplizierten Tagebücher, keine störenden Benachrichtigungen.",
    "card1_titolo": "Pünktliche Erinnerungen",
    "card1_desc": "Stündlich oder halbstündlich, exakt auf die Minute genau.",
    "card2_titolo": "Zählung in Gläsern",
    "card2_desc": "«4 von 12 Gläsern getrunken». Milliliter bleiben optional sichtbar.",
    "card3_titolo": "Statistiken & Serie",
    "card3_desc": "Tagessträhnen, Tagesdurchschnitt und wöchentliche Diagramme.",
    "card4_titolo": "Zwei Widgets",
    "card4_desc": "Der aktuelle Wasserstand direkt auf deinem Startbildschirm.",
    "card5_titolo": "Individuelles Ziel",
    "card5_desc": "Gewicht, Alter, Aktivität und Klima: Sorso berechnet deinen Bedarf.",
    "card6_titolo": "Funktioniert offline",
    "card6_desc": "Keine Registrierung, keine Werbung. Auch im Flugmodus.",
    "sez_come_fatta": "Aufbau",
    "titolo_come_fatta": "Das Wasser steigt mit jedem Schluck",
    "desc_come_fatta_1": "Der Hintergrund spiegelt deinen Tag wider und steigt mit jedem Glas.",
    "desc_come_fatta_2": "Mit der neuen 4-Tab-Leiste wechselst du bequem zwischen den Bereichen.",
    "mockup_oggi": "Heute",
    "mockup_conta": "4 von 12 Gläsern getrunken",
    "mockup_obiettivo": "ZIEL 2400 ML",
    "mockup_bevi": "Ein Glas trinken · 200 ml",
    "mockup_tab_oggi": "Heute",
    "mockup_tab_andamento": "Verlauf",
    "mockup_tab_abitudini": "Gewohnheiten",
    "mockup_tab_impostazioni": "Einstellungen",
    "sez_temi": "Erscheinungsbild & Designs",
    "titolo_temi": "Wähle deinen Stil",
    "desc_temi": "Wähle aus 6 abgestimmten Farbdesigns. Klicke auf ein Design zum Testen:",
    "tema_notte_nome": "Nacht",
    "tema_notte_desc": "Tiefes Ozeanblau, der klassische Sorso-Look.",
    "tema_giorno_nome": "Tag",
    "tema_giorno_desc": "Helles, klares Design mit türkisblauem Wasser.",
    "tema_birra_nome": "Bier",
    "tema_birra_desc": "Warmes Bernstein mit aufsteigenden Kohlensäureperlen.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Graphitschwarz und energiegeladenes Neongrün.",
    "tema_vino_rosso_nome": "Rotwein",
    "tema_vino_rosso_desc": "Kräftiges Kirschrot mit edlem Violett.",
    "tema_vino_bianco_nome": "Weißwein",
    "tema_vino_bianco_desc": "Strohgelb und hell, frisch aus dem Weinkeller.",
    "avviso_temi_titolo": "WICHTIG",
    "avviso_temi_testo": "Designs ändern nur die Farben. Sorso bleibt eine App zum Wassertrinken.",
    "sez_statistiche": "Statistiken",
    "titolo_statistiche": "Mach es zu einer Gewohnheit",
    "desc_statistiche": "Nach ein paar Tagen motivieren dich die Statistiken, deine Serie fortzusetzen.",
    "stat_serie": "Aktuelle Serie",
    "stat_giorni_fila": "Tage in Folge",
    "stat_media": "Tagesdurchschnitt",
    "stat_su_giorni": "über 34 Tage",
    "stat_centrati": "Ziele erreicht",
    "stat_ultimi_giorni": "in den letzten 30 Tagen",
    "stat_migliore": "Bester Tag",
    "stat_record": "dein Rekord",
    "stat_ultimi_7": "Letzte 7 Tage",
    "sez_privacy": "Deine Daten",
    "titolo_privacy": "Nichts verlässt dein Telefon",
    "desc_privacy_1": "Sorso besitzt keine Server oder Konten. Alles bleibt auf deinem Gerät.",
    "desc_privacy_2": "Verbindet sich nur mit dem Internet, um GitHub nach Updates zu fragen.",
    "btn_leggi_privacy": "Datenschutz",
    "btn_condizioni": "Nutzungsbedingungen",
    "titolo_chiusura": "Wassertrinken ist das Einfachste der Welt.<br>Daran zu denken, etwas weniger.",
    "footer_firma": "Sorso · von <b>Giovanni Romito</b>",
    "footer_installa": "Installation",
    "footer_scrivimi": "Kontakt",
    "footer_versioni": "Alle Versionen",
    "footer_privacy": "Datenschutz",
    "footer_cookie": "Cookies verwalten",
    "footer_condizioni": "Bedingungen",
    "foglio_lingua_titolo": "SPRACHE",
    "foglio_lingua_domanda": "Welche Sprache bevorzugst du?"
  },
  pt: {
    "nav_cambia_lingua": "Idioma",
    "nav_temi": "Temas",
    "claim_hero": "Lembra você de beber água durante o dia.<br><b>Na hora certa</b>, sem que precise pensar nisso.",
    "sotto_claim": "Sem contas, sem anúncios, nada sai do seu celular. Gratuito para Android.",
    "btn_scarica": "Baixar Sorso",
    "btn_cosa_fa": "Recursos",
    "btn_come_si_installa": "Como instalar →",
    "dettaglio_download": "Última versão",
    "scorri": "ROLANDO",
    "changelog_titolo": "Novidades da última versão",
    "changelog_badge": "v1.11.1",
    "changelog_item1": "<strong>Aba Hábitos:</strong> meta, lembretes e horários em um espaço próprio.",
    "changelog_item2": "<strong>6 Temas cuidados:</strong> Noite, Dia, Cerveja, Monster, Vinho tinto e Vinho branco.",
    "changelog_item3": "<strong>Bolhas com gás:</strong> Cerveja e Monster com efervescência real.",
    "changelog_item4": "<strong>Nova barra inferior:</strong> 4 abas com deslizamento suave.",
    "changelog_item5": "<strong>6 idiomas suportados:</strong> Português, Italiano, Inglês, Espanhol, Francês, Alemão.",
    "changelog_link": "Ver todas as versões no GitHub →",
    "sez_cosa_fa": "Recursos",
    "titolo_cosa_fa": "Uma coisa só, muito bem feita",
    "desc_cosa_fa": "Sem diários complicados ou notificações de marketing.",
    "card1_titolo": "Lembretes pontuais",
    "card1_desc": "A cada hora ou meia hora, no minuto exato.",
    "card2_titolo": "Contagem em copos",
    "card2_desc": "«4 copos concluídos de 12». Os mililitros continuam disponíveis.",
    "card3_titolo": "Estatísticas e sequências",
    "card3_desc": "Dias seguidos, média diária e gráfico dos últimos 7 dias.",
    "card4_titolo": "Dois widgets",
    "card4_desc": "O nível de água de hoje diretamente na tela inicial.",
    "card5_titolo": "Meta sob medida",
    "card5_desc": "Peso, idade, exercícios e clima: o Sorso calcula o ideal para você.",
    "card6_titolo": "Funciona offline",
    "card6_desc": "Sem cadastros nem anúncios, mesmo em modo avião.",
    "sez_come_fatta": "Como é",
    "titolo_come_fatta": "A água sobe enquanto você bebe",
    "desc_come_fatta_1": "O plano de fundo reflete o seu dia e sobe a cada gole.",
    "desc_come_fatta_2": "A nova barra inferior permite alternar facilmente entre as 4 abas.",
    "mockup_oggi": "Hoje",
    "mockup_conta": "4 copos de 12 concluídos",
    "mockup_obiettivo": "META 2400 ML",
    "mockup_bevi": "Beber um copo · 200 ml",
    "mockup_tab_oggi": "Hoje",
    "mockup_tab_andamento": "Evolução",
    "mockup_tab_abitudini": "Hábitos",
    "mockup_tab_impostazioni": "Configurações",
    "sez_temi": "Aparência e Temas",
    "titolo_temi": "Escolha o seu estilo",
    "desc_temi": "Escolha entre 6 temas exclusivos. Clique em qualquer um para testar no site:",
    "tema_notte_nome": "Noite",
    "tema_notte_desc": "Azul oceânico profundo, o visual clássico.",
    "tema_giorno_nome": "Dia",
    "tema_giorno_desc": "Tema claro e luminoso com água cristalina.",
    "tema_birra_nome": "Cerveja",
    "tema_birra_desc": "Âmbar quente com bolhas efervescentes reais.",
    "tema_monster_nome": "Monster",
    "tema_monster_desc": "Preto grafite e verde neon vibrante.",
    "tema_vino_rosso_nome": "Vinho tinto",
    "tema_vino_rosso_desc": "Cereja intensa com toque arroxeado.",
    "tema_vino_bianco_nome": "Vinho branco",
    "tema_vino_bianco_desc": "Amarelo palha claro e refrescante.",
    "avviso_temi_titolo": "IMPORTANTE",
    "avviso_temi_testo": "Os temas mudam apenas as cores. O Sorso continua sendo um app para beber água.",
    "sez_statistiche": "Estatísticas",
    "titolo_statistiche": "Transforme em um hábito",
    "desc_statistiche": "Acompanhar seu progresso ajuda a manter a sequência viva.",
    "stat_serie": "Sequência atual",
    "stat_giorni_fila": "dias seguidos",
    "stat_media": "Média diária",
    "stat_su_giorni": "em 34 dias",
    "stat_centrati": "Metas batidas",
    "stat_ultimi_giorni": "em 30 dias",
    "stat_migliore": "Melhor dia",
    "stat_record": "seu recorde",
    "stat_ultimi_7": "Últimos 7 dias",
    "sez_privacy": "Seus Dados",
    "titolo_privacy": "Nada sai do seu telefone",
    "desc_privacy_1": "O Sorso não tem servidores nem contas. Tudo fica no seu aparelho.",
    "desc_privacy_2": "Apenas se conecta à internet para verificar novas versões no GitHub.",
    "btn_leggi_privacy": "Privacidade",
    "btn_condizioni": "Termos de uso",
    "titolo_chiusura": "Beber água é a coisa mais simples.<br>Lembrar-se, nem tanto.",
    "footer_firma": "Sorso · por <b>Giovanni Romito</b>",
    "footer_installa": "Como instalar",
    "footer_scrivimi": "Fale comigo",
    "footer_versioni": "Todas as versões",
    "footer_privacy": "Privacidade",
    "footer_cookie": "Gerenciar cookies",
    "footer_condizioni": "Termos",
    "foglio_lingua_titolo": "IDIOMA",
    "foglio_lingua_domanda": "Em qual idioma quer conversar?"
  }
};

function linguaSalvata() {
  try {
    const salvata = localStorage.getItem(CHIAVE_LINGUA);
    if (salvata && DIZIONARIO[salvata]) return salvata;
  } catch {}
  // Lingua del browser
  const nav = (navigator.language || 'it').substring(0, 2).toLowerCase();
  return DIZIONARIO[nav] ? nav : 'it';
}

function applicaLingua(tag) {
  const lang = DIZIONARIO[tag] ? tag : 'it';
  const diz = DIZIONARIO[lang];
  document.documentElement.lang = lang;
  try { localStorage.setItem(CHIAVE_LINGUA, lang); } catch {}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chiave = el.getAttribute('data-i18n');
    if (diz[chiave]) {
      el.innerHTML = diz[chiave];
    }
  });

  // Aggiorna bandiera e testo nel pulsante navbar
  const lObj = LINGUE.find(l => l.tag === lang) || LINGUE[0];
  document.querySelectorAll('.pillola-lingua-label').forEach(el => {
    el.innerHTML = `${lObj.bandiera} ${lObj.nome} <span class="freccetta">▾</span>`;
  });

  // Aggiorna classe attiva nel pannello lingue
  document.querySelectorAll('.voce-lingua').forEach(el => {
    el.classList.toggle('selezionata', el.getAttribute('data-lang-tag') === lang);
  });
}
window.applicaLingua = applicaLingua;

/* ---- Bottom Sheet per la selezione Lingua --------------------------------- */
let foglioLingueEl = null;
let foglioOverlayEl = null;

function costruisciPannelloLingua() {
  if (foglioLingueEl) return;

  foglioOverlayEl = document.createElement('div');
  foglioOverlayEl.className = 'foglio-overlay';
  foglioOverlayEl.addEventListener('click', chiudiPannelloLingua);

  foglioLingueEl = document.createElement('div');
  foglioLingueEl.className = 'foglio-lingue';
  foglioLingueEl.setAttribute('role', 'dialog');
  foglioLingueEl.setAttribute('aria-label', 'Seleziona Lingua');

  const curLang = linguaSalvata();

  foglioLingueEl.innerHTML = `
    <div class="foglio-maniglia"></div>
    <div class="foglio-titolo" data-i18n="foglio_lingua_titolo">${DIZIONARIO[curLang].foglio_lingua_titolo}</div>
    <div class="foglio-domanda" data-i18n="foglio_lingua_domanda">${DIZIONARIO[curLang].foglio_lingua_domanda}</div>
    <div class="lingue-lista">
      ${LINGUE.map(l => `
        <button type="button" class="voce-lingua ${l.tag === curLang ? 'selezionata' : ''}" data-lang-tag="${l.tag}">
          <span class="bandiera">${l.bandiera}</span>
          <span class="nome-lingua">${l.nome}</span>
          <span class="spunta">✓</span>
        </button>
      `).join('')}
    </div>
  `;

  foglioLingueEl.querySelectorAll('.voce-lingua').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-lang-tag');
      applicaLingua(tag);
      chiudiPannelloLingua();
    });
  });

  document.body.appendChild(foglioOverlayEl);
  document.body.appendChild(foglioLingueEl);
}

function apriPannelloLingua() {
  costruisciPannelloLingua();
  foglioOverlayEl.classList.add('visibile');
  requestAnimationFrame(() => requestAnimationFrame(() => foglioLingueEl.classList.add('su')));
}

function chiudiPannelloLingua() {
  if (!foglioLingueEl) return;
  foglioLingueEl.classList.remove('su');
  foglioOverlayEl.classList.remove('visibile');
}
window.apriPannelloLingua = apriPannelloLingua;

/* ==========================================================================
   3. FISICA SCORRIMENTO & MARE
   ========================================================================== */
let inCoda = false;
let ultimoY = scrollY;
let calmante = 0;

function suScorrimento() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(1, scrollY / max) : 0;
  document.documentElement.style.setProperty('--salita', p.toFixed(4));

  const dy = scrollY - ultimoY;
  ultimoY = scrollY;
  const spinta = Math.max(-1, Math.min(1, dy / 55));
  document.documentElement.style.setProperty('--spinta', spinta.toFixed(3));

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

/* ---- Bollicine nel mare e ambientali ------------------------------------- */
function inizializzaBolleMare() {
  const dentroIlMare = document.getElementById('bolle');
  if (!dentroIlMare || fermo || dentroIlMare.children.length > 0) return;

  for (let i = 0; i < 35; i++) {
    const b = document.createElement('div');
    const d = 3 + Math.random() * 8;
    b.className = 'bolla';
    b.style.width = b.style.height = d + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.animationDuration = (4 + Math.random() * 8) + 's';
    b.style.animationDelay = (Math.random() * 8) + 's';
    dentroIlMare.appendChild(b);
  }
}

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

/* ---- Ingressi IntersectionObserver --------------------------------------- */
const osservatore = new IntersectionObserver((voci) => {
  for (const v of voci) {
    if (!v.isIntersecting) continue;
    v.target.classList.add('dentro');
    osservatore.unobserve(v.target);
    v.target.dispatchEvent(new CustomEvent('entrato', { bubbles: true }));
  }
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.rivela').forEach(e => osservatore.observe(e));

/* ---- Cerchio tocco ------------------------------------------------------- */
if (!fermo) {
  addEventListener('pointerdown', e => {
    // Non generare l'onda se si tocca un bottone del tema o lingua
    if (e.target.closest('.scheda-tema') || e.target.closest('.pillola-top') || e.target.closest('.voce-lingua')) return;
    const c = document.createElement('span');
    c.className = 'tocco';
    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';
    document.body.appendChild(c);
    c.addEventListener('animationend', () => c.remove());
  }, { passive: true });
}

/* ---- Sfiato dai pulsanti ------------------------------------------------- */
if (!fermo && matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.btn').forEach(b => {
    let ultimo = 0;
    b.addEventListener('pointermove', e => {
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

/* ---- Pulsanti magnetici -------------------------------------------------- */
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

/* ==========================================================================
   4. IL PANNELLO DEI COOKIE
   ========================================================================== */
const CHIAVE_COOKIE = 'sorso-consenso';
const CATEGORIE = [
  {
    id: 'necessari', nome: 'Necessari', sempre: true, attiva: true,
    testo: 'Tengono a mente questa tua scelta, così il pannello non ricompare a ogni visita. È l’unica cosa che il sito salva oggi, e non dice niente di te.'
  },
  {
    id: 'statistiche', nome: 'Statistiche', sempre: false, attiva: false,
    testo: 'Servirebbero a contare quante persone passano di qui e da dove arrivano. Nessun dato personale, solo numeri.'
  },
  {
    id: 'pubblicita', nome: 'Pubblicità', sempre: false, attiva: false,
    testo: 'Permetterebbero a un circuito pubblicitario di mostrare annunci scelti in base a cosa guardi in giro per il web.'
  },
];

function memoriaViva() {
  try {
    localStorage.setItem('__prova__', '1');
    localStorage.removeItem('__prova__');
    return true;
  } catch { return false; }
}

function consensoSalvato() {
  try { return JSON.parse(localStorage.getItem(CHIAVE_COOKIE) || 'null'); } catch { return null; }
}

function consensoPer(categoria) {
  const c = consensoSalvato();
  return !!(c && c[categoria] === true);
}
window.consensoPer = consensoPer;

function salvaConsenso(scelte) {
  if (!memoriaViva()) return;
  try {
    localStorage.setItem(CHIAVE_COOKIE, JSON.stringify({
      versione: 1, quando: new Date().toISOString(), ...scelte
    }));
  } catch {}
}

function costruisciPannelloCookie() {
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
  intro.textContent = 'Oggi questo sito non usa cookie di statistica né di pubblicità: l’unica cosa che salva è questa tua scelta. Puoi comunque decidere voce per voce, e vale anche per il futuro.';

  const rimando = document.createElement('p');
  rimando.append('Il dettaglio, per esteso, sta ');
  const link = document.createElement('a');
  link.href = 'privacy.html#cookie';
  link.textContent = 'nella pagina privacy';
  rimando.append(link, '.');

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
      if (c.sempre) return;
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

  niente.addEventListener('click', chiudi);
  salva.addEventListener('click', () => { salvaConsenso(stato); chiudi(); });

  return p;
}

// Popup cookie temporaneamente disattivato (nessuna pubblicità né tracciamento presente)
function apriPannelloCookie() {}
window.apriPannelloCookie = apriPannelloCookie;

/* ==========================================================================
   5. INIZIALIZZAZIONE ALL'AVVIO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Applica tema memorizzato
  applicaTema(temaSalvato());

  // Applica lingua memorizzata
  applicaLingua(linguaSalvata());

  // Collega i click sui trigger lingua
  document.querySelectorAll('[data-apri-lingua]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      apriPannelloLingua();
    });
  });

  // Collega le tessere temi interattive
  document.querySelectorAll('.scheda-tema').forEach(el => {
    el.addEventListener('click', () => {
      const idTema = el.getAttribute('data-tema-id');
      if (idTema) applicaTema(idTema);
    });
  });

  // Torcia interattiva che segue il cursore con requestAnimationFrame ad alte prestazioni
  const elementiTorcia = document.querySelectorAll('.carta, .scheda-changelog, .scheda-tema, .numero, .rilievo, .passo, .andamento');
  elementiTorcia.forEach(c => {
    let ticking = false;
    c.addEventListener('pointermove', e => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
        ticking = false;
      });
    }, { passive: true });
  });
});

