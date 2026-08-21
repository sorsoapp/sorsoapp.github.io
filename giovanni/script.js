/* ==========================================================================
   GIOVANNI ROMITO — PERSONAL PORTFOLIO JAVASCRIPT
   Interactions, Copy-to-clipboard, Scroll-Reveal & Mobile Nav
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Aggiornamento automatico anno nel footer
  const annoEl = document.getElementById('anno-corrente');
  if (annoEl) {
    annoEl.textContent = new Date().getFullYear();
  }

  // 2. Menu Mobile Toggle
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

    // Chiudi il menu quando si clicca un link
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

  // 3. Copia Email negli appunti con feedback visivo
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
        if (btnTesto) btnTesto.textContent = 'Copiato!';
        btnCopia.style.backgroundColor = '#4ADE80';
        btnCopia.style.color = '#000';

        setTimeout(() => {
          if (icona) icona.className = 'fa-regular fa-copy';
          if (btnTesto) btnTesto.textContent = 'Copia';
          btnCopia.style.backgroundColor = '';
          btnCopia.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 4. Ingressi morbidi con IntersectionObserver
  const elementiRivela = document.querySelectorAll('.rivela');
  const osservatore = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Leggero stagger effect se multipli elementi entrano contemporaneamente
        setTimeout(() => {
          entry.target.classList.add('dentro');
        }, index * 40);
        osservatore.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elementiRivela.forEach(el => osservatore.observe(el));

  // 5. Effetto sottile di illuminazione card al passaggio mouse (Desktop)
  if (window.matchMedia('(hover: hover)').matches) {
    const cards = document.querySelectorAll('.competenza-card, .progetto-card, .stat-card, .contatti-card');
    cards.forEach(card => {
      let ticking = false;
      card.addEventListener('pointermove', (e) => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          ticking = false;
        });
      }, { passive: true });
    });
  }

});
