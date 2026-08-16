# Il sito di Sorso

Quello che si vede su **https://sorsoapp.it**.

Nessuna build, nessuna dipendenza: è una pagina sola. Si modifica `index.html`, si
salva, si fa `git push`, e un minuto dopo il sito è cambiato.

| File | A cosa serve |
|---|---|
| `index.html` | la prima pagina — struttura, stile e animazioni stanno tutti qui dentro |
| `installa.html` | come si installa un .apk passando gli avvisi di Android e Play Protect |
| `privacy.html` | l'informativa, con lo stesso testo che sta dentro l'app |
| `condizioni.html` | condizioni d'uso: non è un dispositivo medico, nessuna garanzia, diritti |
| `stile.css` | lo stile condiviso dalle tre pagine di testo (la prima ha il suo, interno) |
| `anteprima.png` | l'immagine che compare quando il link viene incollato su WhatsApp |
| `CNAME` | dice a GitHub di rispondere all'indirizzo `sorsoapp.it`. **Non cancellarlo**: senza, il dominio smette di funzionare al primo push |
| `robots.txt` | permette ai motori di ricerca di indicizzare tutto |
| `sitemap.xml` | l'elenco delle pagine, perché Google le trovi prima |

Due trappole del CSS, già pagate una volta e da non ripetere: `.wrap` deve dare solo
i fianchi (`padding-left`/`padding-right`, mai la forma breve), altrimenti vince sul
`padding` verticale di `section` — una classe batte un selettore di tipo — e le sezioni
restano senza aria; e dentro l'apertura, che è un flex in colonna, un elemento in linea
va marcato `align-self:flex-start` o viene stirato per tutta la larghezza.

Ogni pagina si guarda anche stretta prima di pubblicarla: la maggior parte di chi
arriva qui lo fa dal telefono, ed è proprio da lì che deve scaricare l'app.

Il tasto «Scarica» non punta a un file fisso: all'apertura la pagina chiede a GitHub
qual è l'ultima release di [sorso-releases](https://github.com/sorsoapp/sorso-releases)
e ci aggancia il link, il peso e la data. Pubblicando una nuova versione dell'app il
sito si aggiorna da solo, senza toccare una riga. Se la richiesta non riesce — rete
assente, GitHub lento — il tasto resta valido e porta alla pagina delle versioni.

Il codice dell'app sta altrove: qui c'è soltanto la vetrina.
