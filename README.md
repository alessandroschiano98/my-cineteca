# My Cineteca

Archivio personale in React. 387 film con brevi trame conservati in `src/data/catalog.json`.

## Aprire il sito

Dalla cartella del progetto esegui `npm run dev` e apri l'indirizzo mostrato.
Per aggiungere film apri lo stesso indirizzo con `/?gestione` (di solito http://127.0.0.1:5173/?gestione), poi premi **Aggiungi film**.
Compila titolo, anno, genere, regista e breve trama; cast e locandina sono facoltativi. Il modulo suggerisce i titoli già presenti e impedisce duplicati con lo stesso titolo normalizzato e anno. Un remake con anno diverso resta consentito.
Il salvataggio aggiorna il catalogo su disco; non dipende dalla memoria del browser. Non aprire più moduli di gestione contemporaneamente.

## Aggiornamenti con Codex

Chiedi di cercare o aggiungere un film indicando questa cartella. La fonte aggiornata è `src/data/catalog.json`; i vecchi file per genere sono conservati come riferimento e non alimentano più il sito. Le traduzioni dei generi sono in `src/App.jsx`.

## Versione pubblica

`npm run build` genera `dist/`, pronta per l'hosting statico esistente. Gli aggiornamenti locali diventano visibili online dopo una nuova pubblicazione. La gestione è disponibile solo nel server di sviluppo locale: la versione pubblica non include un endpoint di scrittura. Non esporre il server di sviluppo a internet. Per gestire i film direttamente online servirà un servizio con accesso autenticato.

Ricerca per titolo, regista e cast; filtri per genere e decennio; ordinamento alfabetico, anno e ultimi aggiunti; vista griglia/elenco; schede film; scelta casuale. La data degli inserimenti precedenti non è nota: a parità di data si usa l'ordine alfabetico. Le locandine e i font provengono da servizi esterni; se una locandina manca, viene mostrata una copertina tipografica.
