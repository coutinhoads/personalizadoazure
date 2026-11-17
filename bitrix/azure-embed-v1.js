
(function(){
  let azInitialized=false;
  function initAzure(){
    if(azInitialized || !document.getElementById('portfolio-grid') || !document.getElementById('benefits-grid'))return;
    azInitialized=true;

/* Conteúdo da landing page Azure, extraído do ZIP original da marca. */
const site = {
  "marquee": [
    "PERSONALIZAÇÃO",
    "IDENTIDADE",
    "DIFERENCIAÇÃO",
    "VALOR AGREGADO",
    "EXPERIÊNCIA",
    "MEMÓRIA DE MARCA",
    "PÁSCOA 2027"
  ],
  "estilos": [
    {
      "titulo": "Diferenciação",
      "texto": "Diferencie-se da concorrência. Destaque seus produtos, crie memória de marca e agregue valor.",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/estilo-01.webp",
      "alt": "Embalagem para ovo de Páscoa personalizada com flores"
    },
    {
      "titulo": "Identidade",
      "texto": "Fortaleça a identidade da sua marca, reforce valores e crie conexão com o público.",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/estilo-02.webp",
      "alt": "Caixa personalizada nas mãos de profissional da Azure"
    },
    {
      "titulo": "Aumento das vendas",
      "texto": "Monte kits especiais, valorize o presente e trabalhe o tíquete médio.",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/estilo-03.webp",
      "alt": "Caixa personalizada verde com doces especiais"
    },
    {
      "titulo": "Experiência",
      "texto": "Crie uma experiência marcante e transforme cada entrega em uma lembrança especial.",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/estilo-04.webp",
      "alt": "Caixas para doces apresentadas abertas com brigadeiros"
    }
  ],
  "portfolio": [
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-01.webp",
      "alt": "Exemplo 1 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-02.webp",
      "alt": "Exemplo 2 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-03.webp",
      "alt": "Exemplo 3 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-04.webp",
      "alt": "Exemplo 4 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-05.webp",
      "alt": "Exemplo 5 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-06.webp",
      "alt": "Exemplo 6 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-07.webp",
      "alt": "Exemplo 7 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-08.webp",
      "alt": "Exemplo 8 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-09.webp",
      "alt": "Exemplo 9 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-10.webp",
      "alt": "Exemplo 10 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-11.webp",
      "alt": "Exemplo 11 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-12.webp",
      "alt": "Exemplo 12 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-13.webp",
      "alt": "Exemplo 13 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-14.webp",
      "alt": "Exemplo 14 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-15.webp",
      "alt": "Exemplo 15 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-16.webp",
      "alt": "Exemplo 16 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-17.webp",
      "alt": "Exemplo 17 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-18.webp",
      "alt": "Exemplo 18 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-19.webp",
      "alt": "Exemplo 19 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-20.webp",
      "alt": "Exemplo 20 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-21.webp",
      "alt": "Exemplo 21 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-22.webp",
      "alt": "Exemplo 22 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-23.webp",
      "alt": "Exemplo 23 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-24.webp",
      "alt": "Exemplo 24 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-25.webp",
      "alt": "Exemplo 25 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-26.webp",
      "alt": "Exemplo 26 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-27.webp",
      "alt": "Exemplo 27 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-28.webp",
      "alt": "Exemplo 28 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-29.webp",
      "alt": "Exemplo 29 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-30.webp",
      "alt": "Exemplo 30 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-31.webp",
      "alt": "Exemplo 31 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-32.webp",
      "alt": "Exemplo 32 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-33.webp",
      "alt": "Exemplo 33 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-34.webp",
      "alt": "Exemplo 34 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-35.webp",
      "alt": "Exemplo 35 de embalagem personalizada Azure"
    },
    {
      "src": "https://coutinhoads.github.io/personalizadoazure/assets/portfolio-36.webp",
      "alt": "Exemplo 36 de embalagem personalizada Azure"
    }
  ],
  "avaliacoes": [
    {
      "nome": "Adrielly",
      "empresa": "Encantos Brigaderia",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/depoimento-1.webp",
      "texto": "“Então, pra mim, é e sempre será a melhor! Conheci a Azure pelo Instagram, e até então sempre compro todas as minhas embalagens com eles. Eu sou até suspeita de falar, porque praticamente a minha loja inteira é feita na Azure e eu sou uma das que mais fazem personalizados e algum lançamento que eu faço aqui eu pego a caixinha primeiro para depois lançar o produto.”"
    },
    {
      "nome": "Maria Doceria",
      "empresa": "Cliente Azure",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/depoimento-2.webp",
      "texto": "“Obrigada pelo atendimento de vocês!! Ficamos meio receosos no início em encomendar tantas caixinhas personalizadas, mas agora com todas prontas estamos muito felizes!! Além de terem ficado lindas, nos ajudaram muito em Kits para presentes, na venda dos brigadeiros, e na entrega dos pedidos com o saco maravilhoso pro ifood!!! Agradeço a criação de arte de vocês que conseguiu fazer do jeitinho que queríamos!! Obrigada!!”"
    },
    {
      "nome": "Roberta Lopes Confeitaria",
      "empresa": "Cliente Azure",
      "imagem": "https://coutinhoads.github.io/personalizadoazure/assets/depoimento-3.webp",
      "texto": "“A Azure é uma empresa que veio para mudar toda minha visão de embalagem, de como entregar o produto final para o meu cliente, de percepção de valores e de experiência. Uma embalagem personalizada, bonita e com qualidade, e além de tudo ela é própria para alimentos e respeita o meio ambiente. Isso pra mim, vale muito a pena!”"
    }
  ]
};

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Fallback visual para eventual mídia indisponível. */
const motifs = {
  floral: '<g><path d="M100 205 C 98 170 104 140 100 110"/><path d="M100 168 C 80 160 70 146 72 132 C 88 136 98 150 100 168"/><path d="M101 150 C 120 142 130 128 128 114 C 112 118 102 132 101 150"/>' +
    [0,60,120,180,240,300].map(a => `<ellipse cx="100" cy="88" rx="9" ry="20" transform="rotate(${a} 100 108)"/>`).join("") + '<circle cx="100" cy="108" r="5"/></g>',
  ramo: '<g><path d="M70 210 C 95 170 110 120 135 60"/>' +
    [0,1,2,3,4,5].map(i => { const y = 190 - i * 24, x = 79 + i * 9.6; return `<path d="M${x} ${y} c -22 -4 -30 -16 -30 -26 c 16 2 28 12 30 26"/><path d="M${x+3} ${y-8} c 20 -8 26 -22 24 -32 c -14 4 -24 16 -24 32"/>`; }).join("") + '</g>',
  pata: '<g><ellipse cx="100" cy="140" rx="26" ry="22"/><ellipse cx="68" cy="104" rx="10" ry="14" transform="rotate(-20 68 104)"/><ellipse cx="90" cy="88" rx="10" ry="15"/><ellipse cx="112" cy="88" rx="10" ry="15"/><ellipse cx="132" cy="104" rx="10" ry="14" transform="rotate(20 132 104)"/><path d="M60 180 C 80 196 120 196 140 180"/></g>',
  bussola: '<g><circle cx="100" cy="125" r="52"/><circle cx="100" cy="125" r="44" stroke-dasharray="2 5"/><path d="M100 65 L110 125 L100 185 L90 125 Z"/><path d="M40 125 L100 117 L160 125 L100 133 Z"/><circle cx="100" cy="125" r="4"/></g>',
  sol: '<g><circle cx="100" cy="120" r="22"/>' + Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8, r1 = 32, r2 = i % 2 ? 52 : 66; return `<line x1="${(100 + r1 * Math.cos(a)).toFixed(1)}" y1="${(120 + r1 * Math.sin(a)).toFixed(1)}" x2="${(100 + r2 * Math.cos(a)).toFixed(1)}" y2="${(120 + r2 * Math.sin(a)).toFixed(1)}"/>`; }).join("") + '</g>',
  linhas: '<g><path d="M60 60 C 140 90 50 130 120 160 S 90 200 130 215"/><path d="M80 50 C 160 85 70 125 140 155"/><path d="M50 90 C 110 110 60 150 100 190"/></g>',
  lua: '<g><path d="M120 70 A 55 55 0 1 0 120 180 A 42 42 0 1 1 120 70 Z"/><circle cx="140" cy="90" r="2"/><circle cx="150" cy="130" r="1.5"/><circle cx="132" cy="160" r="1.5"/><path d="M146 108 l4 -8 l4 8 l-4 8 z"/></g>',
  geo: '<g><circle cx="100" cy="125" r="50"/><polygon points="100,75 143,150 57,150"/><polygon points="100,175 57,100 143,100"/><circle cx="100" cy="125" r="18"/><line x1="100" y1="55" x2="100" y2="195"/></g>',
  letra: '<g><path d="M55 140 C 60 110 75 105 78 120 C 80 135 70 150 82 140 C 95 128 98 112 105 124 C 110 134 112 146 122 132 C 130 120 136 118 140 128 C 143 136 148 140 152 132"/><path d="M60 160 L140 160" stroke-dasharray="1 6"/></g>',
};
function placeholder(motivo, label) {
  return `<span class="ph" role="img" aria-label="${esc(label)}">
    <svg class="art" viewBox="0 0 200 250" preserveAspectRatio="xMidYMid meet" fill="none" stroke="oklch(0.36 0.03 48)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${motifs[motivo] || motifs.ramo}</svg>
    <span class="ph-label">Imagem indisponível</span></span>`;
}
/* Fotografias têm versões -480 para telas pequenas. */
function srcset(src, sizes) {
  if (!sizes || !/^assets\/(portfolio|estilo)-[\w-]+\.webp$/.test(src)) return "";
  return ` srcset="${src.replace(/\.webp$/, "-480.webp")} 480w, ${src} 900w" sizes="${sizes}"`;
}
function media(src, alt, motivo, lazy = true, sizes = "") {
  return src ? `<span class="ph"><img src="${esc(src)}"${srcset(src, sizes)} alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ""} decoding="async" draggable="false"></span>` : placeholder(motivo, alt);
}

/* Letreiro */
const words = [...site.marquee, ...site.marquee, ...site.marquee, ...site.marquee];
$("marquee").innerHTML = words.map((w) => `<span>${w} <b>•</b></span>`).join("");

/* Estilos: carrossel contínuo, pausa no hover, arrasto e setas */
(function () {
  const track = $("styles-track"), viewport = $("styles-viewport");
  const card = (e) => `<article class="style-card">${media(e.imagem, e.alt || e.titulo, e.motivo, true, "(min-width: 640px) 19rem, 15rem")}<h3>${e.titulo}</h3><p>${e.texto}</p></article>`;
  track.innerHTML = [0, 1, 2, 3].map((c) => `<div class="styles-copy"${c ? ' aria-hidden="true"' : ""}>${site.estilos.map(card).join("")}</div>`).join("");
  track.querySelectorAll('.styles-copy[aria-hidden] a').forEach((a) => a.tabIndex = -1);
  const copy = track.firstElementChild;
  const st = { paused: false, pos: 0, target: null, drag: null, moved: 0 };
  /* largura medida só quando muda e animação parada fora da tela: evita reflow a cada quadro */
  let copyW = copy.offsetWidth, visivel = true;
  if (window.ResizeObserver) new ResizeObserver(() => { copyW = copy.offsetWidth; }).observe(copy);
  else window.addEventListener("resize", () => { copyW = copy.offsetWidth; });
  if (window.IntersectionObserver) new IntersectionObserver((en) => { visivel = en[0].isIntersecting; }, { rootMargin: "100px" }).observe(viewport);
  let last = performance.now();
  function tick(ts) {
    const dt = Math.min((ts - last) / 1000, 0.1); last = ts;
    const w = copyW;
    if (w > 0 && visivel) {
      if (st.drag) {} else if (st.target !== null) {
        const d = st.target - st.pos;
        if (Math.abs(d) < 0.5) { st.pos = st.target; st.target = null; } else st.pos += d * Math.min(1, dt * 9);
      } else if (!st.paused && !reduced) st.pos += (w / 14) * dt;
      if (st.pos >= w) { st.pos -= w; if (st.target !== null) st.target -= w; if (st.drag) st.drag.pos -= w; }
      else if (st.pos < 0) { st.pos += w; if (st.target !== null) st.target += w; if (st.drag) st.drag.pos += w; }
      track.style.transform = `translate3d(${-st.pos}px,0,0)`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  const step = (dir) => { const c = copy.querySelector("article"); st.target = (st.target ?? st.pos) + dir * (c ? c.offsetWidth : 280); };
  $("styles-prev").onclick = () => step(-1);
  $("styles-next").onclick = () => step(1);
  const box = $("styles");
  box.addEventListener("mouseenter", () => st.paused = true);
  box.addEventListener("mouseleave", () => { st.paused = false; st.drag = null; viewport.classList.remove("dragging"); });
  box.addEventListener("focusin", () => st.paused = true);
  box.addEventListener("focusout", () => st.paused = false);
  viewport.addEventListener("pointerdown", (e) => { st.drag = { x: e.clientX, pos: st.pos }; st.target = null; st.moved = 0; viewport.classList.add("dragging"); });
  viewport.addEventListener("pointermove", (e) => { if (st.drag) { st.moved = Math.abs(e.clientX - st.drag.x); st.pos = st.drag.pos - (e.clientX - st.drag.x); } });
  const end = () => { st.drag = null; viewport.classList.remove("dragging"); };
  viewport.addEventListener("pointerup", end);
  viewport.addEventListener("pointercancel", end);
  viewport.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-estilo]");
    if (!a) return;
    if (st.moved > 6) { e.preventDefault(); return; }
    $("estilo").value = a.dataset.estilo;
  });
})();

/* Portfólio + lightbox */
(function () {
  const grid = $("portfolio-grid");
  grid.innerHTML = site.portfolio.map((f, i) => `<button type="button" class="pf-item" data-i="${i}" ${i >= 12 ? 'hidden' : ''} aria-label="Ampliar: ${esc(f.alt)}">${media(f.src, f.alt, f.motivo, true, "(min-width: 768px) 23rem, 50vw")}</button>`).join("");
  const more = $("show-more");
  more.addEventListener("click", () => {
    grid.querySelectorAll(".pf-item[hidden]").forEach((el) => {el.hidden = false;});
    more.hidden = true;
  });
  const lb = $("lightbox");
  let cur = null, opener = null;
  const n = site.portfolio.length;
  function show(i) {
    cur = (i + n) % n;
    const f = site.portfolio[cur];
    $("lb-media").innerHTML = media(f.src, f.alt, f.motivo, false);
    $("lb-caption").textContent = f.alt;
  }
  function open(i, btn) { opener = btn; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("lb-close").focus(); }
  function close() { lb.hidden = true; cur = null; document.body.style.overflow = ""; if (opener) opener.focus(); }
  grid.addEventListener("click", (e) => { const b = e.target.closest(".pf-item"); if (b) open(+b.dataset.i, b); });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.id === "lb-caption") close(); });
  $("lb-close").onclick = close;
  $("lb-prev").onclick = (e) => { e.stopPropagation(); show(cur - 1); };
  $("lb-next").onclick = (e) => { e.stopPropagation(); show(cur + 1); };
  window.addEventListener("keydown", (e) => {
    if (cur === null) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(cur + 1);
    if (e.key === "ArrowLeft") show(cur - 1);
  });
})();

/* Depoimentos: carrossel com avanço automático a cada 4 s */
(function () {
  const box = $("reviews"), wrap = $("reviews-box");
  if (!site.avaliacoes.length) { wrap.hidden = true; return; }
  box.innerHTML = site.avaliacoes.map((a) => {
    const ini = a.nome.split(" ").slice(0, 2).map((p) => p[0]).join("");
    const avatar = a.imagem ? `<img src="${esc(a.imagem)}" alt="" loading="lazy">` : ini;
    return `<article class="review"><div class="review-head"><div class="avatar" aria-hidden="true">${avatar}</div><div style="min-width:0"><h3>${esc(a.nome)}</h3><time>${esc(a.empresa)}</time></div><span class="quote-mark" aria-hidden="true">“</span></div><p>${esc(a.texto)}</p></article>`;
  }).join("");
  let paused = false;
  function scroll(dir) {
    const c = box.querySelector("article"), w = (c ? c.offsetWidth : box.clientWidth) + 16;
    const atEnd = box.scrollLeft + box.clientWidth >= box.scrollWidth - 8, atStart = box.scrollLeft <= 8;
    const behavior = reduced ? "auto" : "smooth";
    if (dir === 1 && atEnd) return box.scrollTo({ left: 0, behavior });
    if (dir === -1 && atStart) return box.scrollTo({ left: box.scrollWidth, behavior });
    box.scrollBy({ left: dir * w, behavior });
  }
  $("rev-prev").onclick = () => scroll(-1);
  $("rev-next").onclick = () => scroll(1);
  ["mouseenter", "focusin", "pointerdown"].forEach((ev) => wrap.addEventListener(ev, () => paused = true));
  ["mouseleave", "focusout", "pointerup"].forEach((ev) => wrap.addEventListener(ev, () => paused = false));
  if (!reduced) setInterval(() => { if (!paused && !document.hidden) scroll(1); }, 4000);
})();


/* Remove o aviso quando o formulário oficial do Bitrix24 for incorporado. */
(function () {
  const container = document.getElementById("azure-form");
  const loading = document.getElementById("form-loading");
  if (!container || !loading || !window.MutationObserver) return;
  const check = () => {
    if (container.querySelector("iframe, form, .b24-form, [class*=b24-form]")) {
      loading.hidden = true;
      observer.disconnect();
    }
  };
  const observer = new MutationObserver(check);
  observer.observe(container, { childList: true, subtree: true });
  check();
})();

$("year").textContent = new Date().getFullYear();


/* Carrossel dos benefícios — swipe, setas e indicadores */
(function () {
  const grid = document.getElementById('benefits-grid');
  const dots = document.getElementById('benefits-dots');
  const prev = document.getElementById('benefits-prev');
  const next = document.getElementById('benefits-next');
  if (!grid || !dots || !prev || !next) return;
  const cards = Array.from(grid.querySelectorAll('.benefit-card'));
  dots.innerHTML = cards.map((card, i) => '<button type="button" class="benefit-dot" aria-label="Mostrar benefício ' + (i + 1) + ': ' + card.querySelector('h3').textContent.trim() + '"></button>').join('');
  const buttons = Array.from(dots.querySelectorAll('button'));
  let active = 0;
  const setActive = i => {
    active = Math.max(0, Math.min(cards.length - 1, i));
    buttons.forEach((dot, n) => {
      dot.classList.toggle('is-active', n === active);
      dot.setAttribute('aria-current', n === active ? 'true' : 'false');
    });
    prev.disabled = active === 0;
    next.disabled = active === cards.length - 1;
  };
  const moveTo = i => {
    const target = Math.max(0, Math.min(cards.length - 1, i));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    grid.scrollTo({left:cards[target].offsetLeft - cards[0].offsetLeft, behavior:reducedMotion ? 'auto':'smooth'});
    setActive(target);
  };
  prev.addEventListener('click', () => moveTo(active-1));
  next.addEventListener('click', () => moveTo(active+1));
  buttons.forEach((b,i) => b.addEventListener('click', () => moveTo(i)));
  let pending = false;
  const sync = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {setActive(0);return;}
    const offset = grid.scrollLeft;
    let best = 0, distance = Infinity;
    cards.forEach((card,i) => {
      const d = Math.abs(offset-(card.offsetLeft-cards[0].offsetLeft));
      if (d < distance) {best=i;distance=d;}
    });
    setActive(best);
  };
  grid.addEventListener('scroll', () => {
    if(pending) return;
    pending=true;
    requestAnimationFrame(()=>{pending=false;sync();});
  },{passive:true});
  window.addEventListener('resize',sync);
  setActive(0);
})();

  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initAzure,{once:true});
  else initAzure();
})();
