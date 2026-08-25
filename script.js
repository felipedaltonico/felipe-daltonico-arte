
// MENU MOBILE
const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
const topNav = document.querySelector(".top-nav");

if (mobileMenuButton && topNav) {
  mobileMenuButton.addEventListener("click", () => {
    const open = topNav.classList.toggle("is-open");
    mobileMenuButton.classList.toggle("is-open", open);
    mobileMenuButton.setAttribute("aria-expanded", String(open));
  });

  topNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      topNav.classList.remove("is-open");
      mobileMenuButton.classList.remove("is-open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const translations = {
  pt: {
    palette_title: "paleta criativa ✦", palette_custom: "ou escolha qualquer cor", palette_random: "qual seria minha cor? ✦",
    nav_portfolio: "portfólio", nav_prices: "preços", nav_process: "processo", nav_contact: "contato",
    hero_marker: "COMISSÕES DE ARTE DIGITAL", hero_1: "eu desenho", hero_2: "a sua ideia.",
    hero_text: "Personagens, presentes, avatares, fanarts e ilustrações feitas do seu jeito.",
    hero_cta: "pedir uma comissão", hero_work: "ver minhas artes", hero_note: "✦ escolha uma cor e veja o site mudar",
    coloring_title: "escolha a vibe!", coloring_hint: "a paleta muda os detalhes, a tinta e o clima do site",
    portfolio_marker: "PASTA DE ARTES", portfolio_title: "meu portfólio",
    empty_title: "sua pasta ainda está vazia", empty_text: "Coloque PNG, JPG ou WEBP na pasta “portfolio” e abra o site novamente pelo ABRIR_SITE.bat.",
    prices_marker: "TABELA DE COMISSÕES", prices_title: "valores", prices_intro: "Escolha entre o estilo cartoon ou anime/outro estilo desejado.",
    cartoon_style: "estilo cartoon", anime_style: "estilo anime ou estilo que desejar",
    one_char: "1 personagem (sem cenário)", two_chars: "2 personagens (sem cenário)", extra_char: "mais personagem (sem cenário)",
    cartoon_extra: "+ R$ 30 por personagem", anime_extra: "+ R$ 40 por personagem", scenario_note: "* O valor para adicionar cenário depende da complexidade.",
    process_marker: "DO RASCUNHO À ENTREGA", process_title: "como funciona",
    step1: "você me conta", step1_text: "Manda sua ideia, referências e tudo que não pode faltar.",
    step2: "eu rascunho", step2_text: "A gente acerta pose, composição e detalhes importantes.",
    step3: "eu finalizo", step3_text: "Depois da aprovação, termino a arte e preparo a entrega.",
    contact_marker: "BORA CRIAR?", contact_title: "me conta sua ideia",
    contact_text: "Preencha o bilhete. Eu transformo em uma mensagem pronta para você copiar e mandar no Instagram.",
    name: "seu nome", commission_type: "tipo de comissão", idea: "sua ideia", generate: "gerar mensagem",
    copy: "copiar", open_instagram: "abrir instagram", copied: "texto copiado!",
    name_ph: "Como posso te chamar?", type_ph: "Ex.: cartoon, anime, 2 personagens...", idea_ph: "Pose, roupa, clima, referências..."
  },
  en: {
    palette_title: "creative palette ✦", palette_custom: "or choose any color", palette_random: "what would my color be? ✦",
    nav_portfolio: "portfolio", nav_prices: "prices", nav_process: "process", nav_contact: "contact",
    hero_marker: "DIGITAL ART COMMISSIONS", hero_1: "I draw", hero_2: "your idea.",
    hero_text: "Characters, gifts, avatars, fanart and illustrations made your way.",
    hero_cta: "request a commission", hero_work: "see my artwork", hero_note: "✦ choose a color and watch the site change",
    coloring_title: "choose the vibe!", coloring_hint: "the palette changes the details, ink and mood of the site",
    portfolio_marker: "ART FOLDER", portfolio_title: "my portfolio",
    empty_title: "your folder is still empty", empty_text: "Add PNG, JPG or WEBP files to the “portfolio” folder and reopen the site using ABRIR_SITE.bat.",
    prices_marker: "COMMISSION PRICE LIST", prices_title: "prices", prices_intro: "Choose cartoon style or anime/another style you want.",
    cartoon_style: "cartoon style", anime_style: "anime style or another style you want",
    one_char: "1 character (no background)", two_chars: "2 characters (no background)", extra_char: "additional character (no background)",
    cartoon_extra: "+ R$ 30 per character", anime_extra: "+ R$ 40 per character", scenario_note: "* The price for adding a background depends on its complexity.",
    process_marker: "FROM SKETCH TO DELIVERY", process_title: "how it works",
    step1: "you tell me", step1_text: "Send your idea, references and everything that must be included.",
    step2: "I sketch it", step2_text: "We align pose, composition and important details.",
    step3: "I finish it", step3_text: "After approval, I finish the artwork and prepare the delivery.",
    contact_marker: "LET'S CREATE?", contact_title: "tell me your idea",
    contact_text: "Fill out the note. I turn it into a ready-to-copy message for Instagram.",
    name: "your name", commission_type: "commission type", idea: "your idea", generate: "generate message",
    copy: "copy", open_instagram: "open instagram", copied: "text copied!",
    name_ph: "What should I call you?", type_ph: "E.g. cartoon, anime, 2 characters...", idea_ph: "Pose, clothes, mood, references..."
  },
  es: {
    palette_title: "paleta creativa ✦", palette_custom: "o elige cualquier color", palette_random: "¿cuál sería mi color? ✦",
    nav_portfolio: "portafolio", nav_prices: "precios", nav_process: "proceso", nav_contact: "contacto",
    hero_marker: "COMISIONES DE ARTE DIGITAL", hero_1: "yo dibujo", hero_2: "tu idea.",
    hero_text: "Personajes, regalos, avatares, fanarts e ilustraciones hechas a tu manera.",
    hero_cta: "pedir una comisión", hero_work: "ver mis ilustraciones", hero_note: "✦ elige un color y mira cómo cambia el sitio",
    coloring_title: "¡elige la vibra!", coloring_hint: "la paleta cambia los detalles, la tinta y el ambiente del sitio",
    portfolio_marker: "CARPETA DE ARTE", portfolio_title: "mi portafolio",
    empty_title: "tu carpeta todavía está vacía", empty_text: "Agrega PNG, JPG o WEBP a la carpeta “portfolio” y vuelve a abrir el sitio usando ABRIR_SITE.bat.",
    prices_marker: "TABLA DE COMISIONES", prices_title: "precios", prices_intro: "Elige entre estilo cartoon o anime/otro estilo que quieras.",
    cartoon_style: "estilo cartoon", anime_style: "estilo anime u otro estilo que quieras",
    one_char: "1 personaje (sin escenario)", two_chars: "2 personajes (sin escenario)", extra_char: "personaje adicional (sin escenario)",
    cartoon_extra: "+ R$ 30 por personaje", anime_extra: "+ R$ 40 por personaje", scenario_note: "* El valor para añadir un escenario depende de la complejidad.",
    process_marker: "DEL BOCETO A LA ENTREGA", process_title: "cómo funciona",
    step1: "tú me cuentas", step1_text: "Envía tu idea, referencias y todo lo que no puede faltar.",
    step2: "yo hago el boceto", step2_text: "Ajustamos pose, composición y detalles importantes.",
    step3: "yo finalizo", step3_text: "Después de la aprobación, termino el arte y preparo la entrega.",
    contact_marker: "¿CREAMOS?", contact_title: "cuéntame tu idea",
    contact_text: "Completa la nota. La convierto en un mensaje listo para copiar y mandar por Instagram.",
    name: "tu nombre", commission_type: "tipo de comisión", idea: "tu idea", generate: "generar mensaje",
    copy: "copiar", open_instagram: "abrir instagram", copied: "¡texto copiado!",
    name_ph: "¿Cómo puedo llamarte?", type_ph: "Ej.: cartoon, anime, 2 personajes...", idea_ph: "Pose, ropa, ambiente, referencias..."
  }
};

function safeStorageGet(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // O site continua funcionando mesmo se o navegador bloquear storage em file://
  }
}

let currentLang = safeStorageGet("siteLanguage", "pt");


function setLanguage(lang) {
  currentLang = translations[lang] ? lang : "pt";
  safeStorageSet("siteLanguage", currentLang);
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });
  document.querySelectorAll(".lang").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
}

document.querySelectorAll(".lang").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
setLanguage(currentLang);

// PORTFÓLIO AUTOMÁTICO + VISUALIZAÇÃO EM TELA CHEIA
const grid = document.querySelector("#portfolio-grid");
const empty = document.querySelector("#portfolio-empty");
const images = Array.isArray(window.PORTFOLIO_IMAGES) ? window.PORTFOLIO_IMAGES : [];

let currentArtworkIndex = 0;

const lightbox = document.createElement("div");
lightbox.id = "portfolio-lightbox";
lightbox.className = "portfolio-lightbox";
lightbox.hidden = true;
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-label", "Arte ampliada");

lightbox.innerHTML = `
  <div class="lightbox-paper" role="document">
    <button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Arte anterior">‹</button>
    <figure class="lightbox-figure">
      <img class="lightbox-image" alt="">
      <figcaption class="lightbox-caption"></figcaption>
    </figure>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Próxima arte">›</button>
  </div>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxPrev = lightbox.querySelector(".lightbox-prev");
const lightboxNext = lightbox.querySelector(".lightbox-next");

function artworkName(src, index) {
  const filename = decodeURIComponent(src.split("/").pop() || `arte-${index + 1}`);
  return filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
}

function showArtwork(index) {
  if (!images.length) return;

  currentArtworkIndex = (index + images.length) % images.length;
  const src = images[currentArtworkIndex];
  const name = artworkName(src, currentArtworkIndex);

  lightboxImage.src = src;
  lightboxImage.alt = name;
  lightboxCaption.textContent = name;

  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");

  requestAnimationFrame(() => lightboxClose.focus());
}

function closeArtwork() {
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
}

lightboxClose.addEventListener("click", closeArtwork);
lightboxPrev.addEventListener("click", () => showArtwork(currentArtworkIndex - 1));
lightboxNext.addEventListener("click", () => showArtwork(currentArtworkIndex + 1));

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeArtwork();
});

document.addEventListener("keydown", event => {
  if (lightbox.hidden) return;

  if (event.key === "Escape") closeArtwork();
  if (event.key === "ArrowLeft") showArtwork(currentArtworkIndex - 1);
  if (event.key === "ArrowRight") showArtwork(currentArtworkIndex + 1);
});

if (images.length === 0) {
  // Sem artes: deixa a área vazia, sem avisos.
} else {
  images.forEach((src, index) => {
    const figure = document.createElement("figure");
    figure.className = "portfolio-item";
    figure.tabIndex = 0;
    figure.setAttribute("role", "button");
    figure.setAttribute("aria-label", `Abrir ${artworkName(src, index)} em tela cheia`);

    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = artworkName(src, index);
    img.draggable = false;

    const caption = document.createElement("figcaption");
    caption.textContent = img.alt;

    figure.append(img, caption);
    figure.addEventListener("click", () => showArtwork(index));
    figure.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showArtwork(index);
      }
    });

    grid.appendChild(figure);
  });
}

// FORMULÁRIO
const form = document.querySelector("#brief-form");
const result = document.querySelector("#brief-result");
const output = document.querySelector("#generated-brief");
const copyStatus = document.querySelector("#copy-status");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#client-name").value.trim();
  const type = document.querySelector("#commission-type").value.trim();
  const idea = document.querySelector("#idea").value.trim();
  const templates = {
    pt: `Olá! Meu nome é ${name}. Gostaria de pedir um orçamento de comissão.\n\nTipo de arte: ${type}\n\nMinha ideia:\n${idea}\n\nPosso enviar referências se precisar.`,
    en: `Hello! My name is ${name}. I would like to request a commission quote.\n\nArtwork type: ${type}\n\nMy idea:\n${idea}\n\nI can send references if needed.`,
    es: `¡Hola! Mi nombre es ${name}. Me gustaría pedir un presupuesto para una comisión.\n\nTipo de arte: ${type}\n\nMi idea:\n${idea}\n\nPuedo enviar referencias si hace falta.`
  };
  output.value = templates[currentLang];
  result.hidden = false;
});

document.querySelector("#copy-brief").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(output.value); }
  catch { output.select(); document.execCommand("copy"); }
  copyStatus.textContent = translations[currentLang].copied;
});

document.querySelector("#year").textContent = new Date().getFullYear();
