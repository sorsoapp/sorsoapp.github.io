/* ==========================================================================
   GIOVANNI ROMITO — PERSONAL PORTFOLIO JAVASCRIPT (V3 BESPOKE)
   Hub Switcher, Bilingual Engine (IT/EN), Particle Canvas & Animations
   ========================================================================== */

const DIZIONARIO = {
  it: {
    // Nav
    "nav_ruolo": "Tech & Frontend Creator",
    "nav_progetti": "Progetti",
    "nav_competenze": "Competenze",
    "nav_metodo": "Metodo",
    "nav_contatti": "Contatti",
    "nav_scrivimi": "Parliamo",

    // Hero
    "hero_badge": "Disponibile per Opportunità & Progetti",
    "hero_titolo_1": "Sviluppo Frontend & UI Design",
    "hero_titolo_2": "Video Editor & AI Specialist",
    "hero_sottotitolo": "Sviluppatore con una forte specializzazione nel <strong>Frontend e nella cura grafica visiva</strong>. Potenzio ogni flusso di lavoro con l'<strong>Intelligenza Artificiale</strong>, con anni di esperienza nel video editing dinamico (Vegas Pro, CapCut, iMovie) e nella gestione di community digitali su Discord e Telegram.",
    "btn_scrivimi": "Contattami Subito",

    // Progetti
    "progetti_sopratitolo": "Portfolio & Case Studies",
    "progetti_titolo": "I miei <span class=\"testo-giallo\">Progetti Principali</span>",
    "progetti_desc": "Prodotti software reali sviluppati con focus su efficienza, estetica visiva e architetture stabili.",

    // LOOT
    "loot_desc": "Ho curato lo <strong>sviluppo Frontend e l'interfaccia grafica</strong> del software di monitoraggio continuo sviluppato per intercettare affari e articoli sottocosto in tempo reale. Scansiona costantemente i cataloghi di <strong>Vinted, eBay e Subito.it</strong>, applica filtri personalizzati su parole chiave e soglie di prezzo, e invia alert Telegram immediati con link d'acquisto diretto.",
    "loot_feat_1_titolo": "Sviluppo Frontend & UI",
    "loot_feat_1_desc": "Interfaccia web, layout & user experience",
    "loot_feat_2_titolo": "Bot Telegram Istantaneo",
    "loot_feat_2_desc": "Notifiche push con link diretto",
    "loot_feat_3_titolo": "Scansione Multi-Piattaforma",
    "loot_feat_3_desc": "Vinted, eBay & Subito.it in tempo reale",
    "btn_visita_loot": "Visita L.O.O.T. (lo-ot.it)",

    // Sorso
    "sorso_desc": "App Android nativa creata da zero in <strong>Kotlin + Jetpack Compose</strong>. Nata con l'obiettivo di essere incredibilmente leggera (<strong>meno di 2 MB</strong>) e 100% offline, con rendering grafico procedurale dell'acqua su Canvas a 60/120 fps e gestione autonoma dei promemoria.",
    "sorso_feat_1_titolo": "Zero Librerie Esterne",
    "sorso_feat_1_desc": "APK leggerissimo < 2 MB",
    "sorso_feat_2_titolo": "Fisica su Canvas",
    "sorso_feat_2_desc": "Onde sinusoidali a 120 FPS",
    "sorso_feat_3_titolo": "Notifiche & Widget",
    "sorso_feat_3_desc": "Promemoria precisi e widget home",
    "btn_visita_sorso": "Esplora Sorso (sorsoapp.it)",

    // Competenze
    "competenze_sopratitolo": "Stack & Competenze Pratiche",
    "competenze_titolo": "Cosa so fare <span class=\"testo-giallo\">nel pratico</span>",
    "competenze_desc": "Competenze reali, ordinate per area di applicazione e testate su progetti, canali e community live.",

    "skill_frontend_titolo": "Sviluppo Software Frontend & Cura Grafica",
    "skill_frontend_desc": "Massima attenzione al design visivo, al rispetto rigoroso delle <strong>linee guida di design</strong> (gerarchia visiva, griglie, spaziature armoniose e coerenza dei componenti), all'armonia cromatica, alla fluidità e alla leggibilità. Metto cura meticolosa in ogni singolo dettaglio grafico per creare interfacce pulite, eleganti e intuitive, dove ogni elemento è armonioso e sempre a portata di mano dell'utente, unendo bellezza estetica e massima praticità d'uso.",

    "skill_video_titolo": "Video Editing & Content Creation",
    "skill_video_desc": "Anni di esperienza diretta nel montaggio video e nella gestione di canali YouTube. Padronanza di <strong>Sony Vegas Pro, CapCut e iMovie</strong>, controllo maniacale del ritmo narrativo, tagli dinamici, sound design e strategie di retention per video lunghi e formati verticali (Shorts, Reels, TikTok).",

    "skill_discord_titolo": "Creazione & Gestione Server Discord",
    "skill_discord_desc": "Architettura completa di server Discord da zero: organizzazione canali testuali e vocali, permessi e ruoli gerarchici, sistemi anti-raid e integrazione di bot personalizzati per moderazione e engagement.",

    "skill_telegram_titolo": "Telegram & Creazione Bot",
    "skill_telegram_desc": "Anni di esperienza attiva: configurazione e creazione di <strong>bot di ogni tipo</strong> (notifiche in tempo reale, scanner, moderazione, utility), gestione di canali e gruppi popolati e automazioni su misura.",

    "skill_tech_titolo": "Tech & Smartphone · Tech Creator",
    "skill_tech_desc": "Conoscenza ampia del mondo degli smartphone sia <strong>lato hardware</strong> (processori SoC, display, sensori fotografici) che <strong>lato software</strong> (Android, iOS). Disponibile e pronto a collaborare come <strong>Tech Creator e recensore</strong> per testate, canali YouTube e piattaforme digitali.",

    "skill_it_titolo": "Informatica Pratica, Troubleshooting & AI",
    "skill_it_desc": "Solida cultura informatica pratica a 360°: assemblaggio, configurazione e manutenzione PC, troubleshooting rapido hardware e software, risoluzione problemi di sistema, gaming setup e utilizzo avanzato dell'AI per accelerare ogni flusso di lavoro.",

    // Metodo
    "approccio_sopratitolo": "Metodo & Filosofia",
    "approccio_titolo": "Come affronto ogni <span class=\"testo-giallo\">progetto</span>",
    "metodo_1_titolo": "Cura Visiva & Design First",
    "metodo_1_desc": "Prima di scrivere codice, penso all'esperienza visiva dell'utente: colori armoniosi, contrasti leggibili e micro-animazioni fluide.",
    "metodo_2_titolo": "Velocità Moltiplicata dall'AI",
    "metodo_2_desc": "Integro gli strumenti AI più avanzati nel ciclo di lavoro quotidiano, riducendo drasticamente i tempi di sviluppo e debugging.",
    "metodo_3_titolo": "Autonomia & Concretezza",
    "metodo_3_desc": "Niente fuffa: punto alla stabilità del codice, a software senza dipendenze inutili e a risultati concreti e testati.",

    // Contatti
    "contatti_sopratitolo": "Scrivimi",
    "contatti_titolo": "Hai un'opportunità o un progetto? <span class=\"testo-giallo\">Mettiamoci in contatto.</span>",
    "contatti_desc": "Sono disponibile per opportunità lavorative, ruoli in team e collaborazioni tecniche.",
    "btn_copia": "Copia Email",
    "canale_email": "Invia Email"
  },

  en: {
    // Nav
    "nav_ruolo": "Tech & Frontend Creator",
    "nav_progetti": "Projects",
    "nav_competenze": "Skills",
    "nav_metodo": "Method",
    "nav_contatti": "Contact",
    "nav_scrivimi": "Let's Talk",

    // Hero
    "hero_badge": "Available for Opportunities & Projects",
    "hero_titolo_1": "Frontend & UI Development",
    "hero_titolo_2": "Video Editor & AI Specialist",
    "hero_sottotitolo": "Software developer specialized in <strong>Frontend & Visual Graphic Polish</strong>. I supercharge every workflow with <strong>Artificial Intelligence</strong>, backed by years of video editing experience (Vegas Pro, CapCut, iMovie) and digital community management on Discord & Telegram.",
    "btn_scrivimi": "Contact Me Directly",

    // Progetti
    "progetti_sopratitolo": "Portfolio & Case Studies",
    "progetti_titolo": "My <span class=\"testo-giallo\">Featured Projects</span>",
    "progetti_desc": "Real software products engineered for high performance, visual polish, and resilient architectures.",

    // LOOT
    "loot_desc": "I developed the <strong>Frontend and user interface</strong> for this continuous monitoring software built to intercept bargains and underpriced deals in real-time. Constantly scans <strong>Vinted, eBay, and Subito.it</strong>, applies custom keyword and price threshold filters, and delivers instant Telegram alerts with direct purchase links.",
    "loot_feat_1_titolo": "Frontend & UI Development",
    "loot_feat_1_desc": "Web interface, layout & user experience",
    "loot_feat_2_titolo": "Instant Telegram Bot",
    "loot_feat_2_desc": "Real-time push alerts with direct link",
    "loot_feat_3_titolo": "Multi-Platform Cloud Scan",
    "loot_feat_3_desc": "Vinted, eBay & Subito.it real-time alerts",
    "btn_visita_loot": "Visit L.O.O.T. (lo-ot.it)",

    // Sorso
    "sorso_desc": "Native Android app built from scratch in <strong>Kotlin + Jetpack Compose</strong>. Designed to be ultra-lightweight (<strong>under 2 MB</strong>) and 100% offline, featuring procedural sine-wave water Canvas animations at 60/120 fps and reliable reminder alarms.",
    "sorso_feat_1_titolo": "Zero External Libraries",
    "sorso_feat_1_desc": "Ultra-light APK < 2 MB",
    "sorso_feat_2_titolo": "Procedural Canvas Physics",
    "sorso_feat_2_desc": "120 FPS fluid sine waves",
    "sorso_feat_3_titolo": "Smart Alarms & Widgets",
    "sorso_feat_3_desc": "Punctual alerts & Home widget",
    "btn_visita_sorso": "Explore Sorso (sorsoapp.it)",

    // Competenze
    "competenze_sopratitolo": "Stack & Practical Capabilities",
    "competenze_titolo": "What I Do <span class=\"testo-giallo\">In Practice</span>",
    "competenze_desc": "Real, battle-tested capabilities organized by field of application across live code, YouTube channels, and active communities.",

    "skill_frontend_titolo": "Frontend Software Development & Visual Polish",
    "skill_frontend_desc": "Relentless focus on visual design, strict adherence to <strong>design guidelines</strong> (visual hierarchy, grid layouts, harmonious spacing, and component consistency), color harmony, smoothness, and typography legibility. I put meticulous care into every graphic detail to craft clean, elegant interfaces where every element is intuitive, perfectly placed, and effortless for the user to interact with.",

    "skill_video_titolo": "Video Editing & Content Creation",
    "skill_video_desc": "Years of video editing background with <strong>Sony Vegas Pro, CapCut, and iMovie</strong>. Narrative pacing, dynamic cuts, sound design, and retention strategies tailored for YouTube long-form, Shorts, TikTok, and Reels.",

    "skill_discord_titolo": "Discord Server Architecture & Management",
    "skill_discord_desc": "Full Discord server design from the ground up: structured channel hierarchies, fine-grained role permissions, anti-raid security defenses, and automated bot integrations.",

    "skill_telegram_titolo": "Telegram & Custom Bot Creation",
    "skill_telegram_desc": "Years of active experience: configuration and development of <strong>all types of Telegram bots</strong> (real-time alerts, scanners, moderation, utilities), managing populated channels/groups, and custom workflows.",

    "skill_tech_titolo": "Tech & Smartphone · Tech Creator",
    "skill_tech_desc": "Broad expertise in the smartphone landscape across both <strong>hardware</strong> (SoCs, displays, camera sensors) and <strong>software</strong> (Android, iOS). Available and ready to collaborate as a <strong>Tech Creator and reviewer</strong> for publications, YouTube channels, and digital media.",

    "skill_it_titolo": "Practical IT, Troubleshooting & AI",
    "skill_it_desc": "Solid 360° practical IT foundation: PC building, hardware and software troubleshooting, OS optimization, system diagnostics, gaming setups, and cutting-edge use of AI to accelerate every workflow.",

    // Metodo
    "approccio_sopratitolo": "Method & Philosophy",
    "approccio_titolo": "How I Approach Every <span class=\"testo-giallo\">Project</span>",
    "metodo_1_titolo": "Visual Polish & Design First",
    "metodo_1_desc": "Before writing code, I design the visual experience: harmonious color palettes, clear contrast, and smooth micro-animations.",
    "metodo_2_titolo": "Speed Multiplied by AI",
    "metodo_2_desc": "I embed modern AI tools into my daily development cycle, cutting execution and debugging cycles significantly.",
    "metodo_3_titolo": "Autonomy & Solid Delivery",
    "metodo_3_desc": "No fluff: I focus on resilient, dependency-free code and tangible, tested results.",

    // Contatti
    "contatti_sopratitolo": "Get In Touch",
    "contatti_titolo": "Have an opportunity or project? <span class=\"testo-giallo\">Let's connect.</span>",
    "contatti_desc": "Available for job opportunities, team positions, and technical collaborations.",
    "btn_copia": "Copy Email",
    "canale_email": "Send Email"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. GESTIONE CAMBIO LINGUA (IT / EN)
  let linguaAttiva = localStorage.getItem('giovanni-lingua') || 'it';
  
  function applicaLingua(lang) {
    linguaAttiva = DIZIONARIO[lang] ? lang : 'it';
    document.documentElement.lang = linguaAttiva;
    document.documentElement.setAttribute('data-lingua', linguaAttiva);
    try { localStorage.setItem('giovanni-lingua', linguaAttiva); } catch {}

    const diz = DIZIONARIO[linguaAttiva];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const chiave = el.getAttribute('data-i18n');
      if (diz[chiave]) {
        el.innerHTML = diz[chiave];
      }
    });

    document.querySelectorAll('.btn-lang, .btn-lingua').forEach(btn => {
      btn.classList.toggle('attiva', btn.getAttribute('data-lang') === linguaAttiva);
    });
  }

  document.querySelectorAll('.btn-lang, .btn-lingua').forEach(btn => {
    btn.addEventListener('click', () => {
      applicaLingua(btn.getAttribute('data-lang'));
    });
  });

  // Applica lingua iniziale
  applicaLingua(linguaAttiva);

  // 2. HERO HUB TAB SWITCHER
  const tabBtns = document.querySelectorAll('.tab-hub-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-hub-tab');
      
      tabBtns.forEach(b => b.classList.remove('attiva'));
      btn.classList.add('attiva');

      document.querySelectorAll('.hub-pannello').forEach(p => {
        p.classList.remove('attiva');
      });

      const pannelloTarget = document.getElementById(`hub-${tabTarget}`);
      if (pannelloTarget) pannelloTarget.classList.add('attiva');
    });
  });

  // 3. ANNO FOOTER
  const annoEl = document.getElementById('anno-corrente');
  if (annoEl) annoEl.textContent = new Date().getFullYear();

  // 4. MENU MOBILE TOGGLE
  const menuToggle = document.getElementById('menu-toggle');
  const navVoci = document.querySelector('.nav-voci');
  if (menuToggle && navVoci) {
    menuToggle.addEventListener('click', () => {
      navVoci.classList.toggle('aperto');
      const icona = menuToggle.querySelector('i');
      if (icona) {
        icona.classList.toggle('fa-bars');
        icona.classList.toggle('fa-xmark');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navVoci.classList.remove('aperto');
        const icona = menuToggle.querySelector('i');
        if (icona) {
          icona.classList.add('fa-bars');
          icona.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 5. COPIA EMAIL NEGLI APPUNTI
  const btnCopia = document.getElementById('btn-copia-email');
  const testoEmail = document.getElementById('testo-email');
  const btnTesto = document.getElementById('btn-copia-testo');

  if (btnCopia && testoEmail) {
    btnCopia.addEventListener('click', async () => {
      const email = testoEmail.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        const icona = btnCopia.querySelector('i');
        if (icona) icona.className = 'fa-solid fa-check';
        if (btnTesto) btnTesto.textContent = linguaAttiva === 'en' ? 'Copied!' : 'Copiato!';
        btnCopia.style.backgroundColor = '#4ADE80';
        btnCopia.style.color = '#000';

        setTimeout(() => {
          if (icona) icona.className = 'fa-regular fa-copy';
          if (btnTesto) btnTesto.textContent = linguaAttiva === 'en' ? 'Copy Email' : 'Copia Email';
          btnCopia.style.backgroundColor = '';
          btnCopia.style.color = '';
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 6. SCROLL REVEAL CON INTERSECTION OBSERVER
  const elementiRivela = document.querySelectorAll('.rivela');
  const osservatore = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('dentro');
        }, index * 35);
        osservatore.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });
  elementiRivela.forEach(el => osservatore.observe(el));

  // 7. INTERACTIVE SPOTLIGHT GLOW ON MOUSEMOVE
  document.querySelectorAll('.scheda-skill-ordinata, .card-progetto-grande, .scheda-hub-vetrina').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 7. CANVAS PARTICELLE SOTTILI IN BACKGROUND (FLUIDE E ULTRA-LEGGERO)
  const canvas = document.getElementById('sfondo-particelle');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 28;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.8;
        this.speedY = -(Math.random() * 0.35 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
          this.y = height + 10;
        }
      }
      draw() {
        ctx.fillStyle = `rgba(255, 208, 0, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

});
