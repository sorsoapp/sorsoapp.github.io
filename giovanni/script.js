/* ==========================================================================
   GIOVANNI ROMITO — PERSONAL PORTFOLIO JAVASCRIPT (V2)
   Bilingual Engine (IT/EN), Particle Canvas, Copy-to-Clipboard & Animations
   ========================================================================== */

// 1. DIZIONARIO MULTILINGUA COMPLETO (IT & EN)
const DIZIONARIO = {
  it: {
    // Nav
    "nav_ruolo": "Frontend & Video Specialist",
    "nav_progetti": "Progetti",
    "nav_chi_sono": "Chi Sono",
    "nav_competenze": "Competenze",
    "nav_approccio": "Metodo",
    "nav_contatti": "Contatti",
    "nav_scrivimi": "Scrivimi",

    // Hero
    "hero_badge": "Disponibile per Opportunità & Progetti",
    "hero_titolo_1": "Sviluppo Software Frontend",
    "hero_titolo_2": "Video Editing & AI Specialist",
    "hero_sottotitolo": "Unisco la cura maniacale per il frontend e le interfacce grafiche alla velocità dei workflow potenziati dall'Intelligenza Artificiale, con anni di esperienza nel video editing dinamico e nella gestione di community digitali.",

    // Hero Pills
    "pill_1_titolo": "Frontend & UI/UX",
    "pill_1_tag": "Cura Grafica",
    "pill_1_desc": "Layout Pixel-Perfect, Animazioni 60/120 FPS & Mobile UI",
    "pill_2_titolo": "Video Editing & Content",
    "pill_2_tag": "Vegas · CapCut",
    "pill_2_desc": "Montaggio Dinamico, Retention YouTube & Social Formats",
    "pill_3_titolo": "AI Workflow & Coding",
    "pill_3_tag": "Velocità 5x",
    "pill_3_desc": "Prompt Engineering, Automazioni & Problem Solving Rapido",

    // Hero Buttons
    "btn_progetti": "Progetti in Evidenza",
    "btn_scrivimi": "Scrivimi un'Email",

    // Progetti
    "progetti_sopratitolo": "Lavori Principali",
    "progetti_titolo": "I miei <span class=\"testo-giallo\">Progetti in Evidenza</span>",
    "progetti_desc": "Prodotti digitali completi sviluppati con cura del dettaglio, alte prestazioni e architetture stabili.",

    // LOOT
    "loot_tag": "PROGETTO IN EVIDENZA · LIVE SERVICE",
    "loot_desc": "Software di monitoraggio continuo sviluppato per intercettare affari e articoli sottocosto in tempo reale. Scansiona costantemente i cataloghi di <strong>Vinted, eBay e Subito.it</strong>, applica filtri avanzati personalizzati su parole chiave e soglie di prezzo, e invia alert Telegram immediati con link d'acquisto diretto prima della concorrenza.",
    "loot_punto_1": "Monitoraggio Multi-Piattaforma su Vinted, eBay e Subito.it attivo 24/7.",
    "loot_punto_2": "Notifiche push istantanee via Bot Telegram dedicato con trigger ad altissima velocità.",
    "loot_punto_3": "Filtri mirati su parole chiave (incluse/escluse), tetti di prezzo e gestione ricerche parallele.",
    "btn_visita_loot": "Visita L.O.O.T. (lo-ot.it)",

    // Sorso
    "sorso_tag": "PROGETTO IN EVIDENZA · ANDROID APP",
    "sorso_desc": "App Android nativa creata da zero in <strong>Kotlin + Jetpack Compose</strong>. Nata per dimostrare che un'app moderna e complessa può essere incredibilmente leggera (<strong>meno di 2 MB</strong>) e 100% offline, con rendering grafico procedurale dell'acqua su Canvas a 60/120 fps e gestione autonoma dei promemoria.",
    "sorso_punto_1": "Zero librerie pesanti di terze parti: codice puro, scattante e rispettoso della privacy.",
    "sorso_punto_2": "Fisica dell'acqua procedurale con onde sinusoidali sfasate e particelle bolle su Canvas.",
    "sorso_punto_3": "Notifiche interattive con azione diretta, widget per la home e supporto a 6 lingue.",
    "btn_visita_sorso": "Esplora il sito di Sorso (sorsoapp.it)",

    // Competenze
    "competenze_sopratitolo": "Stack Tecnico & Abilità",
    "competenze_titolo": "Tutte le mie <span class=\"testo-giallo\">Competenze</span>",
    "competenze_desc": "Un set di competenze concrete, testate sul campo su progetti reali e community attive.",

    "skill_frontend_titolo": "Sviluppo Software Frontend & UI",
    "skill_frontend_desc": "Massima attenzione al design visivo, fluidità e interazione. Padronanza di HTML5 semantico, CSS3 moderno (Glassmorphism, Flexbox, CSS Grid, micro-animazioni GPU), Jetpack Compose e interfacce web responsive per ogni schermo.",

    "skill_video_titolo": "Video Editing & Content Creation",
    "skill_video_desc": "Esperienza consolidata nel montaggio video con <strong>Sony Vegas Pro, CapCut e iMovie</strong>. Controllo del ritmo narrativo, tagli dinamici, sound design e ottimizzazione per YouTube, TikTok e Reels.",

    "skill_discord_titolo": "Creazione & Gestione Server Discord",
    "skill_discord_desc": "Architettura completa di server Discord da zero: gestione avanzata di ruoli e permessi gerarchici, canali vocali e testuali, sistemi anti-raid e integrazione bot di moderazione e intrattenimento.",

    "skill_telegram_titolo": "Conoscenza Profonda di Telegram & Bot",
    "skill_telegram_desc": "Anni di gestione attiva di gruppi e canali Telegram. Configurazione e sviluppo di bot per notifiche automatiche in tempo reale, gestione annunci e automazioni di gruppo.",

    "skill_tech_titolo": "Consulenza Tech & Panorama Smartphone",
    "skill_tech_desc": "Conoscenza enciclopedica del mondo smartphone e tech (alla pari dei recensori e giornalisti di settore): processori (SoC), sensori fotografici, display OLED, ottimizzazioni software Android/iOS e capacità di consigliare l'acquisto ideale per ogni esigenza.",

    "skill_it_titolo": "Competenze Informatiche Avanzate & AI",
    "skill_it_desc": "Solida base informatica generale, troubleshooting hardware/software, padronanza degli ambienti operativi e utilizzo all'avanguardia dell'AI per risolvere qualsiasi problema tecnico in tempi record.",

    // Approccio
    "approccio_sopratitolo": "Metodo di Lavoro",
    "approccio_titolo": "Perché scegliere di <span class=\"testo-giallo\">collaborare con me</span>",
    "approccio_desc": "Niente teoria fine a se stessa: porto sul tavolo prontezza tecnica, occhio visivo per il design e una velocità di esecuzione moltiplicata dagli strumenti più moderni.",
    "metodo_1_titolo": "Design ed Estetica di Livello",
    "metodo_1_desc": "Non mi accontento di funzioni grezze. Le interfacce devono essere pulite, armoniche nei colori e piacevoli da utilizzare.",
    "metodo_2_titolo": "Velocità & AI Power User",
    "metodo_2_desc": "Integro i modelli linguistici e gli agenti AI in ogni fase di sviluppo, riducendo i tempi di implementazione e debugging di oltre il 60%.",
    "metodo_3_titolo": "Autonomia & Problem Solving",
    "metodo_3_desc": "Se un problema è nuovo, lo studio e trovo la soluzione concreta senza bisogno di micro-management.",

    // Contatti
    "contatti_sopratitolo": "Scrivimi",
    "contatti_titolo": "Hai un progetto o una posizione aperta? <span class=\"testo-giallo\">Parliamone.</span>",
    "contatti_desc": "Sono disponibile per opportunità lavorative, ruoli in team e collaborazioni tecniche.",
    "btn_copia": "Copia Email",
    "canale_email": "Invia Email Diretta"
  },

  en: {
    // Nav
    "nav_ruolo": "Frontend & Video Specialist",
    "nav_progetti": "Projects",
    "nav_chi_sono": "About",
    "nav_competenze": "Skills",
    "nav_approccio": "Approach",
    "nav_contatti": "Contact",
    "nav_scrivimi": "Contact",

    // Hero
    "hero_badge": "Available for Opportunities & Projects",
    "hero_titolo_1": "Frontend Software Engineer",
    "hero_titolo_2": "Video Editor & AI Specialist",
    "hero_sottotitolo": "Combining pixel-perfect frontend craftsmanship and visual UI polish with the speed of AI-powered workflows, backed by years of hands-on experience in video editing and community management.",

    // Hero Pills
    "pill_1_titolo": "Frontend & UI/UX",
    "pill_1_tag": "Visual Polish",
    "pill_1_desc": "Pixel-Perfect Layouts, 60/120 FPS Animations & Mobile UI",
    "pill_2_titolo": "Video Editing & Content",
    "pill_2_tag": "Vegas · CapCut",
    "pill_2_desc": "Dynamic Pacing, High Retention & Social Media Formats",
    "pill_3_titolo": "AI Workflow & Coding",
    "pill_3_tag": "5x Speed",
    "pill_3_desc": "Prompt Engineering, Automation & Rapid Problem Solving",

    // Hero Buttons
    "btn_progetti": "Featured Projects",
    "btn_scrivimi": "Send Me an Email",

    // Progetti
    "progetti_sopratitolo": "Main Work",
    "progetti_titolo": "My <span class=\"testo-giallo\">Featured Projects</span>",
    "progetti_desc": "Complete digital products built with obsessive attention to detail, high performance, and solid architectures.",

    // LOOT
    "loot_tag": "FEATURED PROJECT · LIVE SERVICE",
    "loot_desc": "Continuous monitoring software built to catch underpriced deals and bargains in real-time. Continuously scrapes and parses <strong>Vinted, eBay, and Subito.it</strong>, applies custom keyword and price threshold filters, and delivers instant Telegram alerts with direct purchase links before competitors.",
    "loot_punto_1": "Multi-Platform 24/7 continuous cloud scanning across Vinted, eBay, and Subito.it.",
    "loot_punto_2": "Instant push notifications via dedicated high-speed Telegram Bot.",
    "loot_punto_3": "Precision filters for keywords (include/exclude), min/max price caps, and parallel searches.",
    "btn_visita_loot": "Visit L.O.O.T. (lo-ot.it)",

    // Sorso
    "sorso_tag": "FEATURED PROJECT · ANDROID APP",
    "sorso_desc": "Native Android app built from scratch in <strong>Kotlin + Jetpack Compose</strong>. Designed to prove that complex mobile apps can be ultra-lightweight (<strong>under 2 MB</strong>) and 100% offline, featuring procedural sine-wave water Canvas animations at 60/120 fps and reliable reminder alarms.",
    "sorso_punto_1": "Zero heavy third-party libraries: pure, blazing fast, privacy-first code.",
    "sorso_punto_2": "Procedural water physics with phase-shifted sine waves and bubble particles on Canvas.",
    "sorso_punto_3": "Actionable notifications, home screen widgets, and native 6-language support.",
    "btn_visita_sorso": "Explore Sorso Website (sorsoapp.it)",

    // Competenze
    "competenze_sopratitolo": "Technical Stack & Capabilities",
    "competenze_titolo": "All My <span class=\"testo-giallo\">Skills</span>",
    "competenze_desc": "A concrete skillset, battle-tested across live applications, active communities, and real production environments.",

    "skill_frontend_titolo": "Frontend Software Development & UI",
    "skill_frontend_desc": "Relentless attention to visual aesthetics, smoothness, and user interaction. Strong expertise in semantic HTML5, modern CSS3 (Glassmorphism, Flexbox, Grid, GPU-accelerated micro-animations), Jetpack Compose, and responsive web design.",

    "skill_video_titolo": "Video Editing & Content Creation",
    "skill_video_desc": "Extensive editing background in <strong>Sony Vegas Pro, CapCut, and iMovie</strong>. Mastery of narrative rhythm, dynamic cuts, sound design, and retention strategies for YouTube, TikTok, and Reels.",

    "skill_discord_titolo": "Discord Server Architecture & Management",
    "skill_discord_desc": "End-to-end Discord server design: granular role hierarchies and permissions, voice/text channel organization, anti-raid security setups, and moderation/utility bot integrations.",

    "skill_telegram_titolo": "Deep Telegram & Bot Expertise",
    "skill_telegram_desc": "Years of hands-on experience managing active Telegram groups and broadcast channels. Development and configuration of bots for real-time alerts, automated announcements, and community moderation.",

    "skill_tech_titolo": "Tech & Smartphone Advisory",
    "skill_tech_desc": "Encyclopedic insight into consumer smartphones and mobile hardware: processor architectures (SoCs), camera sensors, OLED displays, OS optimizations, and tech buyer advisory at a tech journalism standard.",

    "skill_it_titolo": "Advanced Computer Science & AI",
    "skill_it_desc": "Solid IT foundation, hardware/software troubleshooting, operating systems mastery, and cutting-edge use of AI tools to resolve complex technical challenges in record time.",

    // Approccio
    "approccio_sopratitolo": "Work Methodology",
    "approccio_titolo": "Why Choose to <span class=\"testo-giallo\">Work With Me</span>",
    "approccio_desc": "No unnecessary corporate buzzwords: I bring technical readiness, an aesthetic eye for design, and execution speed amplified by modern tools.",
    "metodo_1_titolo": "High-End Visual Standards",
    "metodo_1_desc": "I never settle for crude functionality. Interfaces must be clean, harmonious in color, and a joy to use.",
    "metodo_2_titolo": "Speed & AI Power User",
    "metodo_2_desc": "I integrate LLMs and AI agents into every development phase, cutting implementation and debugging cycles by over 60%.",
    "metodo_3_titolo": "Autonomy & Problem Solving",
    "metodo_3_desc": "When faced with an unfamiliar challenge, I research and deliver a solid solution without requiring micromanagement.",

    // Contatti
    "contatti_sopratitolo": "Get In Touch",
    "contatti_titolo": "Have a project or open role? <span class=\"testo-giallo\">Let's talk.</span>",
    "contatti_desc": "Available for job opportunities, team roles, and technical collaborations.",
    "btn_copia": "Copy Email",
    "canale_email": "Send Direct Email"
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

  // 2. AGGIORNAMENTO ANNO FOOTER
  const annoEl = document.getElementById('anno-corrente');
  if (annoEl) annoEl.textContent = new Date().getFullYear();

  // 3. MENU MOBILE TOGGLE
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

  // 4. COPIA EMAIL NEGLI APPUNTI
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

  // 5. INGRESSI MORBIDI CON INTERSECTION OBSERVER
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

  // 6. CANVAS PARTICELLE SOTTILI IN BACKGROUND (FLUIDE E ULTRA-LEGGERO)
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
