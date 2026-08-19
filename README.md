# Il sito di Sorso

Quello che si vede su [sorsoapp.it](https://sorsoapp.it) — il sito di Sorso, l'app
Android che ricorda di bere.

Nessuna build e nessuna dipendenza: sono pagine HTML servite da GitHub Pages. Si
modifica un file, si fa `git push`, e un minuto dopo il sito è cambiato.

Il tasto «Scarica» non punta a un file fisso: all'apertura la pagina chiede a GitHub
qual è l'ultima versione pubblicata su
[sorso-releases](https://github.com/sorsoapp/sorso-releases) e ci aggancia link, peso
e data. Pubblicando una nuova versione dell'app il sito si aggiorna da solo. Se la
richiesta non riesce, il tasto resta valido e porta alla pagina delle versioni.

Il codice dell'app sta altrove: qui c'è soltanto la vetrina.
