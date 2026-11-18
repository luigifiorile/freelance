// Modello unico per le cinque pagine demo.
// Demo statica con dati di esempio, dichiarati come tali in cima alla pagina.
// Campo facoltativo "osservazioni": un elenco di letture dei dati (es. il report mensile).
import { esc, svg, compila, prefisso } from "./aiuti.mjs";
import { struttura, bottonePrenota } from "./struttura.mjs";

export function demo(t, s) {
  const p = t.demoPagina;
  const d = s.demo;
  const percorso = `demo/${d.id}/`;
  const r = prefisso(percorso);

  const numeri = d.numeri
    .map((n) => `<li class="numero"><span class="numero__valore">${esc(n.valore)}</span><span class="numero__etichetta">${esc(n.etichetta)}</span></li>`)
    .join("");
  const testaTabella = d.tabella.colonne.map((c) => `<th scope="col">${esc(c)}</th>`).join("");
  const righe = d.tabella.righe
    .map((riga) => `<tr>${riga.map((v, i) => (i === 0 ? `<th scope="row">${esc(v)}</th>` : `<td>${esc(v)}</td>`)).join("")}</tr>`)
    .join("");

  const corpo = `
<article class="demo" aria-labelledby="demo-titolo">
  <header class="pagina-testa">
    <div class="contenitore">
      <p class="pagina-testa__torna"><a href="${r}servizi/${esc(s.id)}/">${svg("icone-ui/freccia-su", "icona icona--sinistra")} ${esc(p.tornaServizio)}: ${esc(s.nome)}</a></p>
      <p class="etichetta pagina-testa__etichetta">${esc(p.etichetta)} ${s.numero} / ${esc(d.id)}</p>
      <h1 class="titolo-1" id="demo-titolo">${esc(d.nome)}</h1>
      <p class="testo-grande pagina-testa__frase">${esc(d.descrizione)}</p>
      <div class="avviso" role="note">
        <p class="avviso__titolo etichetta">${esc(p.avvisoTitolo)}</p>
        <p>${esc(p.avvisoTesto)}</p>
      </div>
    </div>
  </header>

  <section class="sezione-pagina" aria-labelledby="schermata-titolo">
    <div class="contenitore">
      <h2 class="titolo-2" id="schermata-titolo">${esc(p.schermataTitolo)}</h2>
      <div class="schermata">
        <div class="schermata__barra" aria-hidden="true"><span></span><span></span><span></span><p class="schermata__esempio etichetta">${esc(p.avvisoTitolo)}</p></div>
        <ul class="numeri">${numeri}</ul>
        <div class="tabella-scorre" tabindex="0" role="region" aria-labelledby="tabella-didascalia">
          <table class="tabella">
            <caption id="tabella-didascalia">${esc(d.tabella.didascalia)}</caption>
            <thead><tr>${testaTabella}</tr></thead>
            <tbody>${righe}</tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

${d.osservazioni ? `
  <section class="sezione-pagina" aria-labelledby="osservazioni-titolo">
    <div class="contenitore">
      <h2 class="titolo-2" id="osservazioni-titolo">${esc(d.osservazioni.titolo)}</h2>
      <ul class="elenco-onde">${d.osservazioni.voci.map((v) => `<li>${esc(v)}</li>`).join("")}</ul>
    </div>
  </section>
` : ""}
  <section class="sezione-pagina" aria-labelledby="come-funziona-titolo">
    <div class="contenitore">
      <h2 class="titolo-2" id="come-funziona-titolo">${esc(p.comeFunzionaTitolo)}</h2>
      <ol class="passi-demo">${d.passi.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      <p class="demo__servizio">${esc(p.servizio)}: <a href="${r}servizi/${esc(s.id)}/">${esc(s.nome)}</a></p>
    </div>
  </section>

  <section class="sezione-pagina invito" aria-labelledby="contatto-titolo">
    ${svg("onde/divisore", "invito__onda")}
    <div class="contenitore">
      <h2 class="titolo-1" id="contatto-titolo">${esc(p.contattoTitolo)}</h2>
      <p class="testo-grande">${esc(p.contattoTesto)}</p>
      <p class="invito__azioni">${bottonePrenota(t)}</p>
      <p class="invito__nota">${esc(t.comune.cta.nota)}</p>
    </div>
  </section>
</article>`;

  return struttura(t, {
    percorso,
    titolo: compila(p.titoloPagina, { nome: d.nome, brand: t.sito.brand }),
    descrizione: `${d.descrizione} ${p.avvisoTitolo}.`,
    classe: "pagina-demo",
    stili: ["assets/css/pagine.css"],
    corpo,
  });
}
