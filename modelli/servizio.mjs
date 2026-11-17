// Modello unico per le cinque pagine servizio.
// Contenuto: il problema del cliente, cosa costruisco, l'offerta su tre livelli
// (senza prezzi), la demo e il contatto. I nomi dei tre livelli sono comuni;
// un servizio può avere testi propri per ogni livello (campo facoltativo "offerta").
import { esc, svg, compila, prefisso } from "./aiuti.mjs";
import { struttura, datiPersona } from "./struttura.mjs";

export function servizio(t, s) {
  const p = t.servizioPagina;
  const percorso = `servizi/${s.id}/`;
  const r = prefisso(percorso);
  const tot = t.servizi.length;
  const prossimo = t.servizi[s.numero % tot];

  const livelli = p.livelli
    .map(
      (l, i) => `
      <li class="livello">
        <p class="livello__numero etichetta">${String(i + 1).padStart(2, "0")}</p>
        <h3 class="livello__nome titolo-2">${esc(l.nome)}</h3>
        <p>${esc((s.offerta && s.offerta[i]) || l.testo)}</p>
      </li>`
    )
    .join("");

  const corpo = `
<article class="servizio" aria-labelledby="servizio-titolo">
  <header class="pagina-testa">
    <div class="contenitore">
      <p class="pagina-testa__torna"><a href="${r}#servizi">${svg("icone-ui/freccia-su", "icona icona--sinistra")} ${esc(p.tutti)}</a></p>
      <p class="pagina-testa__numero" aria-hidden="true">${s.numero}</p>
      <p class="etichetta pagina-testa__etichetta">${svg(`icone/${s.icona}`, "icona")} ${esc(compila(p.etichetta, { n: s.numero, tot }))}</p>
      <h1 class="titolo-1" id="servizio-titolo">${esc(s.nome)}</h1>
      <p class="testo-grande pagina-testa__frase">${esc(s.frase)}</p>
    </div>
  </header>

  <section class="sezione-pagina" aria-labelledby="problema-titolo">
    <div class="contenitore servizio__due">
      <div>
        <h2 class="titolo-2" id="problema-titolo">${esc(p.problemaTitolo)}</h2>
        <p class="servizio__problema">${esc(s.problema)}</p>
      </div>
      <img class="servizio__interfaccia" src="${r}brand/interfacce/${esc(s.interfaccia)}.svg" alt="${esc(s.interfacciaAlt)}" width="480" height="340">
    </div>
  </section>

  <section class="sezione-pagina" aria-labelledby="costruisco-titolo">
    <div class="contenitore">
      <h2 class="titolo-2" id="costruisco-titolo">${esc(p.costruiscoTitolo)}</h2>
      <ul class="elenco-onde">${s.costruisco.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
    </div>
  </section>

  <section class="sezione-pagina" aria-labelledby="offerta-titolo">
    <div class="contenitore">
      <h2 class="titolo-2" id="offerta-titolo">${esc(p.offertaTitolo)}</h2>
      <p class="sezione-pagina__intro">${esc(p.offertaIntro)}</p>
      <ol class="livelli">${livelli}</ol>
    </div>
  </section>

  <section class="sezione-pagina" aria-labelledby="demo-titolo">
    <div class="contenitore servizio__demo">
      <div>
        <h2 class="titolo-2" id="demo-titolo">${esc(p.demoTitolo)}</h2>
        <p>${esc(p.demoTesto)}</p>
      </div>
      <a class="scheda-demo" href="${r}demo/${esc(s.demo.id)}/">
        <span class="scheda-demo__numero">${s.numero} / ${esc(s.demo.id)}</span>
        <span class="scheda-demo__nome">${esc(s.demo.nome)}</span>
        <span class="scheda-demo__azione">${svg("icone-ui/play", "icona")} ${esc(t.home.servizi.provaDemo)}</span>
      </a>
    </div>
  </section>

  <section class="sezione-pagina invito" aria-labelledby="contatto-titolo">
    ${svg("onde/divisore", "invito__onda")}
    <div class="contenitore">
      <h2 class="titolo-1" id="contatto-titolo">${esc(p.contattoTitolo)}</h2>
      <p class="testo-grande">${esc(p.contattoTesto)}</p>
      <p class="invito__azioni">
        <a class="pillola pillola--mare" href="${r}#contatti">${esc(p.contattoPulsante)}</a>
        <a class="pillola" href="${r}servizi/${esc(prossimo.id)}/">${esc(p.prossimo)}: ${esc(prossimo.nome)} ${svg("icone-ui/freccia-esterna", "icona")}</a>
      </p>
    </div>
  </section>
</article>`;

  return struttura(t, {
    percorso,
    titolo: compila(p.titoloPagina, { nome: s.nome, brand: t.sito.brand }),
    descrizione: s.descrizione,
    classe: "pagina-servizio",
    stili: ["assets/css/pagine.css"],
    dati: [
      datiPersona(t),
      {
        "@type": "Service",
        name: s.nome,
        description: s.descrizione,
        url: t.sito.urlBase + percorso,
        areaServed: { "@type": "Country", name: "Italia" },
        provider: { "@id": `${t.sito.urlBase}#persona` },
      },
    ],
    corpo,
  });
}
