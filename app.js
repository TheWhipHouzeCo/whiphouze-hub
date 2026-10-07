/* ==========================================================================
   The WhipHouze Co. — site data and behavior
   ========================================================================== */

/* --------------------------------------------------------------------------
   CHECKOUT & ORDER LINKS
   Swap each placeholder for the real Stripe Payment Link / order form URL.
   -------------------------------------------------------------------------- */
const STRIPE_WEDDING_MINIMALIST  = "https://stripe.com";
const STRIPE_WEDDING_BOHO        = "https://stripe.com";
const STRIPE_WEDDING_TRADITIONAL = "https://stripe.com";
const STRIPE_WEDDING_EDITORIAL   = "https://stripe.com";
const STRIPE_BABY_SHOWER         = "https://stripe.com";
const STRIPE_BRIDAL_SHOWER       = "https://stripe.com";

const STRIPE_MERCH_BREAD_BAGS    = "https://stripe.com";
const STRIPE_MERCH_PIPING_KIT    = "https://stripe.com";
const STRIPE_MERCH_APRON         = "https://stripe.com";
const STRIPE_MERCH_SQUISHY       = "https://stripe.com";

// Where "Start an Order Request" and event booking buttons send people
const ORDER_REQUEST_URL = "https://stripe.com";
const EVENT_BOOKING_URL = "https://stripe.com";

/* --------------------------------------------------------------------------
   BUSINESS RULES
   -------------------------------------------------------------------------- */
const POLICY = {
  minNoticeDays: 3,
  depositRate: 0.5,
  balanceDueDaysBeforePickup: 3,
  deliveryFee: 24,
};

/* --------------------------------------------------------------------------
   CATALOG DATA
   -------------------------------------------------------------------------- */
const MENU_ITEMS = [
  { category: "Custom Bakes", name: "Custom Celebration Cakes", tone: "violet",
    desc: "Designed around your colors, theme, and guest count for weddings, birthdays, and milestones." },
  { category: "Custom Bakes", name: "Aesthetic Cupcake Dozens", tone: "cream",
    desc: "Coordinated cupcake sets styled to match your event palette." },
  { category: "Signature Buttercream", name: "Floral Buttercream Cupcakes", tone: "lavender",
    desc: "Hand-piped roses, peonies, and blooms. Our signature, petal by petal." },
  { category: "Signature Buttercream", name: "Buttercream Bloom Bouquets", tone: "blush",
    desc: "Cupcakes arranged and piped as a full floral bouquet. A centerpiece you can eat." },
  { category: "Cinnamon Rolls", name: "Cinnamon Rolls", tone: "caramel",
    desc: "Soft, generously swirled, and finished with a thick layer of frosting." },
  { category: "Craft Beverages", name: "Passion Fruit Lavender Tea", tone: "lavender",
    desc: "Handcrafted, floral, and bright. A WhipHouze original." },
  { category: "Craft Beverages", name: "Cucumber Limeade", tone: "mint",
    desc: "Crisp cucumber and fresh lime, made by hand and served cold." },
];

const INVITATIONS = [
  { collection: "Wedding", name: "Modern Minimalist", tone: "cream", url: STRIPE_WEDDING_MINIMALIST,
    desc: "Clean lines, generous white space, and crisp type for the less-is-more couple." },
  { collection: "Wedding", name: "Whimsical Boho", tone: "blush", url: STRIPE_WEDDING_BOHO,
    desc: "Soft tones, hand-drawn botanicals, and flowing script for garden vows." },
  { collection: "Wedding", name: "Traditional Luxury", tone: "violet", url: STRIPE_WEDDING_TRADITIONAL,
    desc: "Gilded borders, classic serif lettering, and formal wording. Timeless." },
  { collection: "Wedding", name: "Moody Editorial", tone: "charcoal", url: STRIPE_WEDDING_EDITORIAL,
    desc: "Deep tones, dramatic contrast, and magazine-style layouts." },
  { collection: "Baby Shower", name: "Baby Shower Collection", tone: "mint", url: STRIPE_BABY_SHOWER,
    desc: "Sweet, soft invitation sets to welcome the newest arrival." },
  { collection: "Bridal Shower", name: "Bridal Shower Collection", tone: "lavender", url: STRIPE_BRIDAL_SHOWER,
    desc: "Elegant invitation sets for celebrating the bride-to-be." },
];

const MERCH = [
  { name: "Bread Bags", tone: "cream", url: STRIPE_MERCH_BREAD_BAGS,
    desc: "Keep your loaves and bakes fresh in WhipHouze style." },
  { name: "Piping Tips & Beginner Kits", tone: "lavender", url: STRIPE_MERCH_PIPING_KIT,
    desc: "The tips and tools to start piping your own buttercream blooms." },
  { name: "Custom WhipHouze Aprons", tone: "violet", url: STRIPE_MERCH_APRON,
    desc: "Our signature apron for bakers who like to look the part." },
  { name: "Cinnamon Roll Squishies", tone: "caramel", url: STRIPE_MERCH_SQUISHY,
    desc: "A squeezable cinnamon roll. All of the swirl, none of the crumbs." },
];

// SAMPLE EVENTS: replace with real dates. date: "YYYY-MM-DD", or null for "by request".
const EVENTS = [
  { type: "Public", date: "2026-11-14", title: "Floral Buttercream Cupcake Decorating Class",
    desc: "Learn to pipe buttercream flowers step by step and take home your own decorated cupcakes. Open to all skill levels." },
  { type: "Public", date: "2026-12-05", title: "Floral Buttercream Cupcake Decorating Class",
    desc: "Learn to pipe buttercream flowers step by step and take home your own decorated cupcakes. Open to all skill levels." },
  { type: "Private", date: null, title: "Private Corporate Decorating Class",
    desc: "A hosted buttercream class for your team. A hands-on activity for corporate events and team building, scheduled around your date." },
  { type: "Private", date: null, title: "Social Night at a Friend’s House",
    desc: "We bring the class to you. Gather your friends for a private evening of piping, cupcakes, and conversation." },
];

const GALLERY = [
  { label: "Peony cupcakes", tone: "blush", size: "tall" },
  { label: "Rose bouquet box", tone: "lavender", size: "" },
  { label: "Wedding tier florals", tone: "cream", size: "" },
  { label: "Ranunculus dozen", tone: "violet", size: "wide" },
  { label: "Pastel garden set", tone: "mint", size: "" },
  { label: "Class creations", tone: "caramel", size: "" },
];

/* --------------------------------------------------------------------------
   DOM HELPERS
   -------------------------------------------------------------------------- */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value === true ? "" : value);
  }
  for (const child of children) {
    if (child) node.append(child);
  }
  return node;
}

function placeholder(label, tone, extraClass = "") {
  return el("div", { class: `ph ph--${tone} ${extraClass}`.trim(), role: "img", "aria-label": `${label} (image placeholder)` },
    el("span", { text: label }));
}

/* --------------------------------------------------------------------------
   FILTERABLE LISTS
   Local state per list: the active filter. Clicking a chip updates the state
   and re-renders that list.
   -------------------------------------------------------------------------- */
function createFilteredList({ filterBar, target, items, key, allLabel, renderItem }) {
  const bar = document.getElementById(filterBar);
  const container = document.getElementById(target);
  if (!bar || !container) return;

  const state = { active: allLabel };
  const options = [allLabel, ...new Set(items.map((item) => item[key]))];

  function render() {
    bar.replaceChildren(...options.map((option) => {
      const chip = el("button", {
        type: "button",
        class: "chip",
        "aria-pressed": String(option === state.active),
        text: option,
      });
      chip.addEventListener("click", () => {
        state.active = option;
        render();
      });
      return chip;
    }));

    const visible = state.active === allLabel
      ? items
      : items.filter((item) => item[key] === state.active);
    container.replaceChildren(...visible.map(renderItem));
  }

  render();
}

/* --------------------------------------------------------------------------
   CARD RENDERERS
   -------------------------------------------------------------------------- */
function menuCard(item) {
  return el("article", { class: "card" },
    placeholder(item.name, item.tone, "ph--menu"),
    el("div", { class: "card-body" },
      el("p", { class: "card-tag", text: item.category }),
      el("h3", { text: item.name }),
      el("p", { text: item.desc })));
}

function shopCard(item, tag, buttonLabel) {
  return el("article", { class: "card" },
    placeholder(item.name, item.tone),
    el("div", { class: "card-body" },
      el("p", { class: "card-tag", text: tag }),
      el("h3", { text: item.name }),
      el("p", { text: item.desc }),
      el("a", { class: "btn btn-primary btn-block", href: item.url, target: "_blank", rel: "noopener", text: buttonLabel })));
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });

function parseLocalDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? null : date;
}

function eventItem(event) {
  const date = parseLocalDate(event.date);
  const dateBlock = date
    ? el("div", { class: "event-date" },
        el("span", { class: "event-month", text: date.toLocaleString("en-US", { month: "short" }) }),
        el("span", { class: "event-day", text: String(date.getDate()) }))
    : el("div", { class: "event-date event-date--request" },
        el("span", { class: "event-month", text: "By" }),
        el("span", { class: "event-day", text: "Request" }));

  return el("li", { class: "event" },
    el("details", {},
      el("summary", {},
        dateBlock,
        el("div", { class: "event-main" },
          el("span", { class: `badge badge--${event.type.toLowerCase()}`, text: event.type }),
          el("h3", { text: event.title }),
          el("p", { class: "event-when", text: date ? DATE_FORMAT.format(date) : "Scheduled around your date" })),
        el("span", { class: "event-toggle", "aria-hidden": "true" })),
      el("div", { class: "event-details" },
        el("p", { text: event.desc }),
        el("a", { class: "btn btn-light", href: EVENT_BOOKING_URL, target: "_blank", rel: "noopener",
          text: event.type === "Private" ? "Request a Private Class" : "Reserve a Seat" }))));
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.replaceChildren(...GALLERY.map((tile) =>
    placeholder(tile.label, tile.tone, `gallery-tile ${tile.size ? `gallery-tile--${tile.size}` : ""}`.trim())));
}

/* --------------------------------------------------------------------------
   ORDER PLANNER
   Applies the notice window, deposit, and delivery rules to a chosen date.
   -------------------------------------------------------------------------- */
function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function toInputValue(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

const money = (amount) => amount.toLocaleString("en-US", { style: "currency", currency: "USD" });

function initOrderPlanner() {
  const form = document.getElementById("order-planner");
  const result = document.getElementById("planner-result");
  const orderLink = document.getElementById("order-request-link");
  if (!form || !result) return;
  if (orderLink) orderLink.href = ORDER_REQUEST_URL;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const earliest = addDays(today, POLICY.minNoticeDays);
  form.elements.pickupDate.min = toInputValue(earliest);

  function line(label, value) {
    return el("p", {}, el("strong", { text: `${label}: ` }), document.createTextNode(value));
  }

  function update() {
    const pickup = parseLocalDate(form.elements.pickupDate.value);
    result.classList.remove("is-error", "is-ok");

    if (!pickup) {
      result.textContent = "Choose a date to see your payment schedule.";
      return;
    }
    if (pickup < earliest) {
      result.classList.add("is-error");
      result.textContent = `We need at least ${POLICY.minNoticeDays} days notice. The earliest available date is ${DATE_FORMAT.format(earliest)}.`;
      return;
    }

    const payInFull = form.elements.payment.value === "full";
    const delivery = form.elements.delivery.checked ? POLICY.deliveryFee : 0;
    const subtotal = Math.max(0, parseFloat(form.elements.orderTotal.value) || 0);
    const total = subtotal + delivery;
    const balanceDue = addDays(pickup, -POLICY.balanceDueDaysBeforePickup);
    const lines = [line("Date", `${DATE_FORMAT.format(pickup)} works with our notice window.`)];

    if (payInFull) {
      lines.push(line("Due today", subtotal ? money(total) : "your full order total"));
    } else {
      const deposit = total * POLICY.depositRate;
      lines.push(line("Deposit due today", subtotal ? money(deposit) : "50% of your order total"));
      lines.push(line("Balance due", `${subtotal ? `${money(total - deposit)} by ` : ""}${DATE_FORMAT.format(balanceDue)}`));
    }
    if (delivery) lines.push(line("Delivery", `${money(delivery)} flat fee included`));

    result.classList.add("is-ok");
    result.replaceChildren(...lines);
  }

  form.addEventListener("input", update);
  form.addEventListener("submit", (event) => event.preventDefault());
}

/* --------------------------------------------------------------------------
   NAVIGATION
   -------------------------------------------------------------------------- */
function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  const header = document.querySelector(".site-header");
  if (!toggle || !nav || !header) return;

  const links = [...nav.querySelectorAll("a")];
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  // Keep anchor jumps clear of the sticky header + policy banner
  const syncOffset = () => {
    document.documentElement.style.setProperty("--sticky-offset", `${header.offsetHeight}px`);
  };
  syncOffset();
  window.addEventListener("resize", syncOffset);

  // Highlight the nav link for the section in view
  if ("IntersectionObserver" in window) {
    const byId = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove("is-active"));
        byId.get(entry.target.id)?.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    byId.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
}

/* --------------------------------------------------------------------------
   INIT
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();

  createFilteredList({
    filterBar: "menu-filters", target: "menu-grid", items: MENU_ITEMS,
    key: "category", allLabel: "All", renderItem: menuCard,
  });
  createFilteredList({
    filterBar: "invite-filters", target: "invite-grid", items: INVITATIONS,
    key: "collection", allLabel: "All Collections",
    renderItem: (item) => shopCard(item, `${item.collection} · Canva template`, "Buy & Customize Now"),
  });
  createFilteredList({
    filterBar: "event-filters", target: "event-list", items: EVENTS,
    key: "type", allLabel: "All Events", renderItem: eventItem,
  });

  const merchGrid = document.getElementById("merch-grid");
  if (merchGrid) merchGrid.replaceChildren(...MERCH.map((item) => shopCard(item, "WhipHouze goods", "Shop Now")));

  renderGallery();
  initOrderPlanner();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
