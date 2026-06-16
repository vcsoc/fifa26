const STORAGE_KEY = "fifa26-family-scoreboard-state-v1";
const HISTORY_KEY = "fifa26-family-scoreboard-history-v1";
const THEME_KEY = "fifa26-family-scoreboard-theme-v1";
const LAST_SYNC_KEY = "fifa26-family-scoreboard-last-sync-v1";
const TIMEZONE_KEY = "fifa26-family-scoreboard-timezone-v1";
const TORONTO_TIMEZONE = "America/Toronto";
const FALLBACK_TIMEZONES = [
  "America/Toronto",
  "America/Vancouver",
  "America/Edmonton",
  "America/Winnipeg",
  "America/Halifax",
  "America/St_Johns",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Mexico_City",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Madrid",
  "Africa/Cairo",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Bangkok",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Australia/Sydney",
  "Pacific/Auckland",
  "UTC"
];
const GROUP_LABELS = "ABCDEFGHIJKL".split("");
const KNOCKOUT_STAGES = ["Round of 32", "Round of 16", "Quarterfinal", "Semifinal", "Third Place"];
const ESPN_SCOREBOARD_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?limit=200&dates=20260611-20260719";
const SPECIAL_FLAG_URLS = {
  england: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
  scotland: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
  wales: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
  "northern ireland": "https://flagcdn.com/gb.svg",
  kosovo: "https://flagcdn.com/xk.svg"
};
const COUNTRY_DATA = [
  ["Afghanistan", "AF"], ["Albania", "AL"], ["Algeria", "DZ"], ["American Samoa", "AS"], ["Andorra", "AD"],
  ["Angola", "AO"], ["Anguilla", "AI"], ["Antigua and Barbuda", "AG"], ["Argentina", "AR"], ["Armenia", "AM"],
  ["Aruba", "AW"], ["Australia", "AU"], ["Austria", "AT"], ["Azerbaijan", "AZ"], ["Bahamas", "BS"],
  ["Bahrain", "BH"], ["Bangladesh", "BD"], ["Barbados", "BB"], ["Belarus", "BY"], ["Belgium", "BE"],
  ["Belize", "BZ"], ["Benin", "BJ"], ["Bermuda", "BM"], ["Bhutan", "BT"], ["Bolivia", "BO"],
  ["Bonaire", "BQ"], ["Bosnia and Herzegovina", "BA"], ["Botswana", "BW"], ["Brazil", "BR"], ["British Virgin Islands", "VG"],
  ["Brunei Darussalam", "BN"], ["Bulgaria", "BG"], ["Burkina Faso", "BF"], ["Burundi", "BI"], ["Cabo Verde", "CV"],
  ["Cambodia", "KH"], ["Cameroon", "CM"], ["Canada", "CA"], ["Cayman Islands", "KY"], ["Central African Republic", "CF"],
  ["Chad", "TD"], ["Chile", "CL"], ["China PR", "CN"], ["Chinese Taipei", "TW"], ["Colombia", "CO"],
  ["Comoros", "KM"], ["Congo", "CG"], ["Cook Islands", "CK"], ["Costa Rica", "CR"], ["Croatia", "HR"],
  ["Cuba", "CU"], ["Curaçao", "CW"], ["Cyprus", "CY"], ["Czechia", "CZ"], ["DR Congo", "CD"],
  ["Denmark", "DK"], ["Djibouti", "DJ"], ["Dominica", "DM"], ["Dominican Republic", "DO"], ["Ecuador", "EC"],
  ["Egypt", "EG"], ["El Salvador", "SV"], ["England", "GB"], ["Equatorial Guinea", "GQ"], ["Eritrea", "ER"],
  ["Estonia", "EE"], ["Eswatini", "SZ"], ["Ethiopia", "ET"], ["Faroe Islands", "FO"], ["Fiji", "FJ"],
  ["Finland", "FI"], ["France", "FR"], ["Gabon", "GA"], ["Gambia", "GM"], ["Georgia", "GE"],
  ["Germany", "DE"], ["Ghana", "GH"], ["Gibraltar", "GI"], ["Greece", "GR"], ["Grenada", "GD"],
  ["Guam", "GU"], ["Guatemala", "GT"], ["Guinea", "GN"], ["Guinea-Bissau", "GW"], ["Guyana", "GY"],
  ["Haiti", "HT"], ["Honduras", "HN"], ["Hong Kong", "HK"], ["Hungary", "HU"], ["Iceland", "IS"],
  ["India", "IN"], ["Indonesia", "ID"], ["Iran", "IR"], ["Iraq", "IQ"], ["Israel", "IL"],
  ["Italy", "IT"], ["Ivory Coast", "CI"], ["Jamaica", "JM"], ["Japan", "JP"], ["Jordan", "JO"],
  ["Kazakhstan", "KZ"], ["Kenya", "KE"], ["Kosovo", "XK"], ["Korea DPR", "KP"], ["Korea Republic", "KR"],
  ["Kuwait", "KW"], ["Kyrgyz Republic", "KG"], ["Laos", "LA"], ["Latvia", "LV"], ["Lebanon", "LB"],
  ["Lesotho", "LS"], ["Liberia", "LR"], ["Libya", "LY"], ["Liechtenstein", "LI"], ["Lithuania", "LT"],
  ["Luxembourg", "LU"], ["Macau", "MO"], ["Madagascar", "MG"], ["Malawi", "MW"], ["Malaysia", "MY"],
  ["Maldives", "MV"], ["Mali", "ML"], ["Malta", "MT"], ["Mauritania", "MR"], ["Mauritius", "MU"],
  ["Mexico", "MX"], ["Moldova", "MD"], ["Mongolia", "MN"], ["Montenegro", "ME"], ["Montserrat", "MS"],
  ["Morocco", "MA"], ["Mozambique", "MZ"], ["Myanmar", "MM"], ["Namibia", "NA"], ["Nepal", "NP"],
  ["Netherlands", "NL"], ["New Caledonia", "NC"], ["New Zealand", "NZ"], ["Nicaragua", "NI"], ["Niger", "NE"],
  ["Nigeria", "NG"], ["North Macedonia", "MK"], ["Northern Ireland", "GB"], ["Northern Mariana Islands", "MP"], ["Norway", "NO"],
  ["Oman", "OM"], ["Pakistan", "PK"], ["Palestine", "PS"], ["Panama", "PA"], ["Papua New Guinea", "PG"],
  ["Paraguay", "PY"], ["Peru", "PE"], ["Philippines", "PH"], ["Poland", "PL"], ["Portugal", "PT"],
  ["Puerto Rico", "PR"], ["Qatar", "QA"], ["Republic of Ireland", "IE"], ["Romania", "RO"], ["Russia", "RU"],
  ["Rwanda", "RW"], ["Saint Kitts and Nevis", "KN"], ["Saint Lucia", "LC"], ["Saint Vincent and the Grenadines", "VC"], ["Samoa", "WS"],
  ["San Marino", "SM"], ["São Tomé and Príncipe", "ST"], ["Saudi Arabia", "SA"], ["Scotland", "GB"], ["Senegal", "SN"],
  ["Serbia", "RS"], ["Seychelles", "SC"], ["Sierra Leone", "SL"], ["Singapore", "SG"], ["Sint Maarten", "SX"],
  ["Slovakia", "SK"], ["Slovenia", "SI"], ["Solomon Islands", "SB"], ["Somalia", "SO"], ["South Africa", "ZA"],
  ["South Sudan", "SS"], ["Spain", "ES"], ["Sri Lanka", "LK"], ["Sudan", "SD"], ["Suriname", "SR"],
  ["Sweden", "SE"], ["Switzerland", "CH"], ["Syria", "SY"], ["Tahiti", "PF"], ["Tajikistan", "TJ"],
  ["Tanzania", "TZ"], ["Thailand", "TH"], ["Timor-Leste", "TL"], ["Togo", "TG"], ["Tonga", "TO"],
  ["Trinidad and Tobago", "TT"], ["Tunisia", "TN"], ["Türkiye", "TR"], ["Turkmenistan", "TM"], ["Turks and Caicos Islands", "TC"],
  ["US Virgin Islands", "VI"], ["Uganda", "UG"], ["Ukraine", "UA"], ["United Arab Emirates", "AE"], ["United States", "US"],
  ["Uruguay", "UY"], ["Uzbekistan", "UZ"], ["Vanuatu", "VU"], ["Venezuela", "VE"], ["Vietnam", "VN"],
  ["Wales", "GB"], ["Yemen", "YE"], ["Zambia", "ZM"], ["Zimbabwe", "ZW"]
];
const COUNTRY_ALIASES = {
  usa: "United States",
  "united states of america": "United States",
  us: "United States",
  england: "England",
  scotland: "Scotland",
  wales: "Wales",
  "northern ireland": "Northern Ireland",
  "south korea": "Korea Republic",
  korea: "Korea Republic",
  "north korea": "Korea DPR",
  iran: "Iran",
  "ivory coast": "Ivory Coast",
  "cote d ivoire": "Ivory Coast",
  turkey: "Türkiye",
  "czech republic": "Czechia",
  ireland: "Republic of Ireland",
  drc: "DR Congo",
  "dr congo": "DR Congo",
  congo: "Congo",
  "cape verde": "Cabo Verde",
  uae: "United Arab Emirates",
  "china": "China PR"
};
const COUNTRY_MAP = Object.fromEntries(COUNTRY_DATA.map(([name, code]) => [normalizeCountry(name), { name, code }]));

const STAGE_CONFIG = [
  { stage: "Group Stage", count: 72, start: "2026-06-11T12:00:00", slots: [12, 15, 18, 21], cities: ["Toronto", "Vancouver", "Mexico City", "Los Angeles", "Dallas", "Miami", "New York / New Jersey", "Atlanta", "Seattle", "Houston"] },
  { stage: "Round of 32", count: 16, start: "2026-06-28T13:00:00", slots: [13, 16, 19, 21], cities: ["Toronto", "Vancouver", "Guadalajara", "Boston", "Kansas City", "Philadelphia"] },
  { stage: "Round of 16", count: 8, start: "2026-07-04T13:00:00", slots: [13, 17], cities: ["Toronto", "Vancouver", "Houston", "Los Angeles"] },
  { stage: "Quarterfinal", count: 4, start: "2026-07-09T15:00:00", slots: [15, 19], cities: ["Toronto", "Dallas", "Atlanta", "Mexico City"] },
  { stage: "Semifinal", count: 2, start: "2026-07-14T15:00:00", slots: [15, 19], cities: ["Dallas", "Atlanta"] },
  { stage: "Third Place", count: 1, start: "2026-07-18T16:00:00", slots: [16], cities: ["Miami"] },
  { stage: "Final", count: 1, start: "2026-07-19T15:00:00", slots: [15], cities: ["New York / New Jersey"] }
];

const elements = {
  body: document.body,
  search: document.getElementById("search-input"),
  stage: document.getElementById("stage-filter"),
  status: document.getElementById("status-filter"),
  timezone: document.getElementById("timezone-select"),
  timezoneOptions: document.getElementById("timezone-options"),
  summary: document.getElementById("summary-text"),
  groupsLeft: document.getElementById("groups-left"),
  groupsRight: document.getElementById("groups-right"),
  bracket: document.getElementById("knockout-bracket"),
  championship: document.getElementById("championship-match"),
  historyList: document.getElementById("history-list"),
  historyCount: document.getElementById("history-count"),
  autoUpdate: document.getElementById("auto-update-btn"),
  reset: document.getElementById("reset-btn"),
  export: document.getElementById("export-btn"),
  themeToggle: document.getElementById("theme-toggle-btn"),
  statsToggle: document.getElementById("stats-toggle-btn"),
  scorecardView: document.getElementById("scorecard-view"),
  statsView: document.getElementById("stats-view"),
  countryOptions: document.getElementById("country-options"),
  lastSync: document.getElementById("last-sync-text"),
  matchJumps: document.getElementById("match-jumps"),
  statTotal: document.getElementById("stat-total"),
  statVisible: document.getElementById("stat-visible"),
  statSaved: document.getElementById("stat-saved"),
  statAuto: document.getElementById("stat-auto")
};

let matches = loadMatches();
let history = loadHistory();
let lastSyncAt = localStorage.getItem(LAST_SYNC_KEY) || "";
let selectedTimeZone = loadTimeZone();
let visibleMatchIds = new Set();
let upcomingMatchIds = [];
let activeMatchIds = [];
let expandedMatchId = "";
let hoveredMatchId = "";
let focusedMatchId = "";
let focusedMatchTimer = null;
let headerTicking = false;
let headerIsCompact = false;
let statsMode = false;
let floatingFixture = null;
let floatingFixtureTimer = null;
let hoverExpandTimer = null;
let suppressFloatingUntil = 0;

function normalizeCountry(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

function buildDefaultMatches() {
  const generated = [];
  let matchNumber = 1;

  STAGE_CONFIG.forEach((config) => {
    const cursor = new Date(config.start);
    for (let index = 0; index < config.count; index += 1) {
      const kickoff = new Date(cursor);
      kickoff.setHours(config.slots[index % config.slots.length], 0, 0, 0);
      if (index > 0 && index % config.slots.length === 0) kickoff.setDate(kickoff.getDate() + 1);
      cursor.setDate(cursor.getDate() + (index % config.slots.length === config.slots.length - 1 ? 1 : 0));

      generated.push({
        id: `match-${matchNumber}`,
        number: matchNumber,
        stage: config.stage,
        city: config.cities[index % config.cities.length],
        kickoff: kickoff.toISOString(),
        homeTeam: "",
        awayTeam: "",
        homeScore: "",
        awayScore: "",
        homePoints: "",
        awayPoints: "",
        updatedManually: false,
        autoUpdated: false,
        lastUpdated: ""
      });
      matchNumber += 1;
    }
  });

  return generated;
}

function loadMatches() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return buildDefaultMatches();
  try {
    return JSON.parse(saved);
  } catch {
    return buildDefaultMatches();
  }
}

function loadHistory() {
  const saved = localStorage.getItem(HISTORY_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(matches));
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 500)));
}

function isValidTimeZone(value) {
  try {
    Intl.DateTimeFormat("en-CA", { timeZone: value }).format(new Date());
    return true;
  } catch {
    return false;
  }
}

function supportedTimeZones() {
  if (typeof Intl.supportedValuesOf === "function") {
    return Intl.supportedValuesOf("timeZone");
  }
  return FALLBACK_TIMEZONES;
}

function formatTimeZoneLabel(timeZone) {
  return timeZone.replaceAll("_", " ");
}

function loadTimeZone() {
  const saved = localStorage.getItem(TIMEZONE_KEY);
  return isValidTimeZone(saved) ? saved : TORONTO_TIMEZONE;
}

function formatMatchTime(iso, timeZone = selectedTimeZone) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(new Date(iso));
}

function renderLastSync() {
  elements.lastSync.textContent = lastSyncAt ? `Last synced from ESPN: ${formatMatchTime(lastSyncAt)} · ${formatTimeZoneLabel(selectedTimeZone)}` : "Not yet synced with ESPN.";
}

function populateTimezoneOptions() {
  const zones = supportedTimeZones().filter((zone, index, list) => list.indexOf(zone) === index);
  if (!zones.includes(TORONTO_TIMEZONE)) zones.unshift(TORONTO_TIMEZONE);
  elements.timezoneOptions.innerHTML = zones.map((zone) => `<option value="${escapeHtml(zone)}"></option>`).join("");
  elements.timezone.value = zones.includes(selectedTimeZone) ? selectedTimeZone : TORONTO_TIMEZONE;
}

function renderMatchJumps() {
  const liveId = activeMatchIds[0] || "";
  const nextIds = upcomingMatchIds.filter((id) => !activeMatchIds.includes(id)).slice(0, 3);
  const items = [
    { id: liveId, label: "Live", className: "jump-live" },
    { id: nextIds[0] || "", label: "Next 1", className: "jump-next-1" },
    { id: nextIds[1] || "", label: "Next 2", className: "jump-next-2" },
    { id: nextIds[2] || "", label: "Next 3", className: "jump-next-3" }
  ];

  elements.matchJumps.innerHTML = items.map((item) => {
    const match = item.id ? matches.find((entry) => entry.id === item.id) : null;
    const text = match ? `${item.label}: Match ${match.number}` : `${item.label}: None`;
    const attrs = item.id ? `data-match-jump="${item.id}"` : "disabled";
    return `<button type="button" class="match-jump ${item.className}" ${attrs} title="Jump to ${text}">• ${text}</button>`;
  }).join("");
}

function canonicalizeCountryName(value) {
  const normalized = normalizeCountry(value);
  if (!normalized) return "";
  const alias = COUNTRY_ALIASES[normalized];
  if (alias) return alias;
  return COUNTRY_MAP[normalized]?.name || value.trim();
}

function countryCodeFor(value) {
  const canonical = canonicalizeCountryName(value);
  const normalized = normalizeCountry(canonical);
  return COUNTRY_MAP[normalized]?.code || "";
}

function flagUrlFor(country) {
  const normalized = normalizeCountry(country);
  if (!normalized) return "";
  if (SPECIAL_FLAG_URLS[normalized]) return SPECIAL_FLAG_URLS[normalized];
  const code = countryCodeFor(country).toLowerCase();
  return /^[a-z]{2}$/.test(code) ? `https://flagcdn.com/${code}.svg` : "";
}

function flagMarkup(country) {
  const url = flagUrlFor(country);
  const label = canonicalizeCountryName(country) || "Unknown country";
  return url
    ? `<img src="${url}" alt="${escapeHtml(label)} flag" loading="lazy" referrerpolicy="no-referrer" />`
    : '<span class="flag-fallback">🏳️</span>';
}

function inlineFlagMarkup(country, className = "stats-flag") {
  return `<span class="flag ${className}">${flagMarkup(country)}</span>`;
}

function computePoints(score1, score2) {
  const first = Number(score1);
  const second = Number(score2);
  if (!Number.isFinite(first) || !Number.isFinite(second)) return { homePoints: "", awayPoints: "" };
  if (first > second) return { homePoints: 3, awayPoints: 0 };
  if (second > first) return { homePoints: 0, awayPoints: 3 };
  return { homePoints: 1, awayPoints: 1 };
}

function getStatus(match) {
  if (match.updatedManually) return { label: "Saved", className: "status-manual" };
  if (match.autoUpdated) return { label: "Auto", className: "status-auto" };
  return { label: "Pending", className: "status-pending" };
}

function addHistoryEntry(match, source, changes) {
  if (!changes.length) return;
  history.unshift({
    id: `${match.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    matchId: match.id,
    matchNumber: match.number,
    stage: match.stage,
    source,
    timestamp: new Date().toISOString(),
    changes
  });
}

function updateMatch(matchId, updates, source) {
  const match = matches.find((item) => item.id === matchId);
  if (!match) return;

  const normalizedUpdates = {
    ...updates,
    homeTeam: updates.homeTeam !== undefined ? canonicalizeCountryName(updates.homeTeam) : undefined,
    awayTeam: updates.awayTeam !== undefined ? canonicalizeCountryName(updates.awayTeam) : undefined
  };

  const changes = Object.entries(normalizedUpdates)
    .filter(([, value]) => value !== undefined)
    .filter(([key, value]) => String(match[key] ?? "") !== String(value ?? ""))
    .map(([key, value]) => ({ field: key, from: match[key] ?? "", to: value ?? "" }));

  if (!changes.length) return;

  Object.assign(match, normalizedUpdates, {
    lastUpdated: new Date().toISOString(),
    updatedManually: source === "manual" ? true : match.updatedManually,
    autoUpdated: source === "auto" ? true : false
  });

  addHistoryEntry(match, source, changes);
  saveState();
  render();
}

function generateAutoResult(match) {
  const kickoff = new Date(match.kickoff);
  if (kickoff > new Date()) return null;
  const seed = match.number * 37 + kickoff.getDate() * 11 + kickoff.getMonth() * 17;
  const score1 = seed % 5;
  const score2 = Math.floor(seed / 3) % 5;
  return { homeScore: score1, awayScore: score2, ...computePoints(score1, score2) };
}

async function fetchEspnWorldCupEvents() {
  const response = await fetch(ESPN_SCOREBOARD_URL);
  if (!response.ok) {
    throw new Error(`ESPN request failed: ${response.status}`);
  }

  const data = await response.json();
  return [...(data.events || [])].sort((left, right) => new Date(left.date) - new Date(right.date));
}

function resultFromEspnEvent(match, event) {
  const competition = event?.competitions?.[0];
  const competitors = competition?.competitors || [];
  const first = competitors.find((item) => item.homeAway === "home") || competitors[0];
  const second = competitors.find((item) => item.homeAway === "away") || competitors[1];
  if (!first || !second) return null;

  const hasScores = first.score !== undefined && second.score !== undefined && first.score !== "" && second.score !== "";
  const score1 = hasScores ? String(first.score) : "";
  const score2 = hasScores ? String(second.score) : "";
  const points = match.stage === "Group Stage" && hasScores ? computePoints(score1, score2) : { homePoints: "", awayPoints: "" };

  return {
    homeTeam: canonicalizeCountryName(first.team?.displayName || first.team?.shortDisplayName || ""),
    awayTeam: canonicalizeCountryName(second.team?.displayName || second.team?.shortDisplayName || ""),
    homeScore: score1,
    awayScore: score2,
    homePoints: points.homePoints,
    awayPoints: points.awayPoints,
    kickoff: event.date || match.kickoff,
    city: competition?.venue?.address?.city || match.city
  };
}

function inferStageFromDate(iso) {
  const target = new Date(iso).getTime();
  for (let index = 0; index < STAGE_CONFIG.length; index += 1) {
    const start = new Date(STAGE_CONFIG[index].start).getTime();
    const next = STAGE_CONFIG[index + 1] ? new Date(STAGE_CONFIG[index + 1].start).getTime() : Number.POSITIVE_INFINITY;
    if (target >= start && target < next) return STAGE_CONFIG[index].stage;
  }
  return "";
}

function teamsFromEspnEvent(event) {
  const competition = event?.competitions?.[0];
  const competitors = competition?.competitors || [];
  const first = competitors.find((item) => item.homeAway === "home") || competitors[0];
  const second = competitors.find((item) => item.homeAway === "away") || competitors[1];
  return [
    canonicalizeCountryName(first?.team?.displayName || first?.team?.shortDisplayName || ""),
    canonicalizeCountryName(second?.team?.displayName || second?.team?.shortDisplayName || "")
  ].filter(Boolean);
}

function teamSet(values) {
  return new Set(values.map((value) => normalizeCountry(value)).filter(Boolean));
}

function scoreEventMatch(match, event) {
  const eventTeams = teamsFromEspnEvent(event);
  const matchTeams = [match.homeTeam, match.awayTeam].filter(Boolean);
  const eventTeamSet = teamSet(eventTeams);
  const matchTeamSet = teamSet(matchTeams);
  let score = 0;

  if (match.stage === inferStageFromDate(event.date)) score += 40;

  const kickoffDeltaHours = Math.abs(new Date(match.kickoff) - new Date(event.date)) / 36e5;
  score += Math.max(0, 35 - kickoffDeltaHours * 2);

  if (normalizeCountry(match.city) === normalizeCountry(event?.competitions?.[0]?.venue?.address?.city || "")) {
    score += 10;
  }

  if (matchTeamSet.size) {
    let overlap = 0;
    matchTeamSet.forEach((team) => {
      if (eventTeamSet.has(team)) overlap += 1;
    });
    if (overlap === 2) score += 120;
    else if (overlap === 1) score += 45;
  }

  return score;
}

function matchEspnEventsToMatches(events, candidateMatches) {
  const remainingEvents = [...events];
  const mapped = [];

  candidateMatches.forEach((match) => {
    let bestIndex = -1;
    let bestScore = -1;

    remainingEvents.forEach((event, index) => {
      const score = scoreEventMatch(match, event);
      if (score > bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    });

    if (bestIndex >= 0) {
      mapped.push({ match, event: remainingEvents[bestIndex] });
      remainingEvents.splice(bestIndex, 1);
    }
  });

  return mapped;
}

function filteredMatches() {
  const query = elements.search.value.trim().toLowerCase();
  const stage = elements.stage.value;
  const status = elements.status.value;

  return matches.filter((match) => {
    const stageMatch = stage === "all" || match.stage === stage;
    const statusMatch =
      status === "all" ||
      (status === "manual" && match.updatedManually) ||
      (status === "auto" && match.autoUpdated && !match.updatedManually) ||
      (status === "pending" && !match.updatedManually && !match.autoUpdated);
    const haystack = [match.number, match.stage, match.city, match.homeTeam, match.awayTeam].join(" ").toLowerCase();
    return stageMatch && statusMatch && (!query || haystack.includes(query));
  });
}

function renderStageOptions() {
  const stages = [...new Set(matches.map((match) => match.stage))];
  elements.stage.innerHTML = '<option value="all">All stages</option>' + stages.map((stage) => `<option value="${stage}">${stage}</option>`).join("");
}

function labelForField(field) {
  return {
    homeTeam: "Country 1",
    awayTeam: "Country 2",
    homeScore: "Score 1",
    awayScore: "Score 2",
    homePoints: "Points 1",
    awayPoints: "Points 2"
  }[field] || field;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function populateCountryOptions() {
  elements.countryOptions.innerHTML = COUNTRY_DATA
    .map(([name]) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");
}

function getUpcomingMatchIds() {
  const now = new Date();
  return matches
    .filter((match) => new Date(match.kickoff) >= now)
    .sort((left, right) => new Date(left.kickoff) - new Date(right.kickoff))
    .slice(0, 3)
    .map((match) => match.id);
}

function getActiveMatchIds() {
  const now = Date.now();
  const MATCH_WINDOW_MS = 3 * 60 * 60 * 1000;
  return matches
    .filter((match) => {
      const kickoff = new Date(match.kickoff).getTime();
      return kickoff <= now && now <= kickoff + MATCH_WINDOW_MS;
    })
    .map((match) => match.id);
}

function fixtureMarkup(match, variant = "full") {
  const status = getStatus(match);
  const hidden = visibleMatchIds.has(match.id) ? "" : ' style="display:none"';
  const upcomingIndex = upcomingMatchIds.indexOf(match.id);
  const isActive = activeMatchIds.includes(match.id);
  const activeBadge = isActive ? '<span class="live-badge">Live</span>' : "";
  const upcomingBadge = upcomingIndex >= 0 ? `<span class="upcoming-badge">Next ${upcomingIndex + 1}</span>` : "";
  const classNames = ["fixture", `fixture-${variant}`, (focusedMatchId === match.id || expandedMatchId === match.id || hoveredMatchId === match.id) ? "force-expanded" : "", isActive ? "fixture-live" : "", upcomingIndex >= 0 ? `upcoming-${upcomingIndex + 1}` : ""].filter(Boolean).join(" ");
  const showPoints = variant === "full" || variant === "final";
  return `
    <article class="${classNames}" data-match-id="${match.id}"${hidden}>
      <div class="fixture-header">
        <div class="fixture-heading">
          <div class="fixture-title">Match ${match.number}</div>
          <div class="stage-subtitle">${escapeHtml(match.stage)}</div>
        </div>
        <div class="fixture-badges">${activeBadge}${upcomingBadge}<span class="status-badge ${status.className}">${status.label}</span></div>
      </div>
      <div class="fixture-body">
        <p class="match-meta">${escapeHtml(match.city)} · ${escapeHtml(formatMatchTime(match.kickoff))}</p>
        <div class="team-row">
          <span class="flag">${flagMarkup(match.homeTeam)}</span>
          <input class="team-input" data-field="homeTeam" list="country-options" value="${escapeHtml(match.homeTeam)}" placeholder="Country 1" autocomplete="country-name" spellcheck="false" title="Enter the first country for this fixture" />
          <input class="score-input" data-field="homeScore" type="number" min="0" step="1" value="${escapeHtml(match.homeScore)}" placeholder="0" title="Enter the first country score" />
        </div>
        <div class="team-row">
          <span class="flag">${flagMarkup(match.awayTeam)}</span>
          <input class="team-input" data-field="awayTeam" list="country-options" value="${escapeHtml(match.awayTeam)}" placeholder="Country 2" autocomplete="country-name" spellcheck="false" title="Enter the second country for this fixture" />
          <input class="score-input" data-field="awayScore" type="number" min="0" step="1" value="${escapeHtml(match.awayScore)}" placeholder="0" title="Enter the second country score" />
        </div>
        ${showPoints ? `
          <div class="team-row points-row">
            <span class="flag">🏅</span>
            <input class="score-input" data-field="homePoints" type="number" min="0" step="1" value="${escapeHtml(match.homePoints)}" placeholder="Pts 1" title="Points for the first country. Usually 3 win, 1 draw, 0 loss in group stage" />
            <input class="score-input" data-field="awayPoints" type="number" min="0" step="1" value="${escapeHtml(match.awayPoints)}" placeholder="Pts 2" title="Points for the second country. Usually 3 win, 1 draw, 0 loss in group stage" />
          </div>
        ` : ""}
        <div class="fixture-actions">
          <button class="secondary points-btn" type="button" title="Auto-calculate points from the entered score. Win = 3, Draw = 1, Loss = 0">Points</button>
          <button class="primary save-btn" type="button" title="Save these countries, scores, and points to your browser">Save</button>
        </div>
        <p class="fixture-updated">${match.lastUpdated ? `Updated ${escapeHtml(formatMatchTime(match.lastUpdated))}` : "Not updated yet"}</p>
      </div>
    </article>
  `;
}

function renderGroups() {
  const groupStage = matches.filter((match) => match.stage === "Group Stage");
  const groups = GROUP_LABELS.map((label, index) => ({
    label,
    matches: groupStage.slice(index * 6, index * 6 + 6)
  }));

  const renderGroup = (group) => `
    <section class="group-card">
      <div class="group-card-header">Group ${group.label}</div>
      <div class="group-matches">${group.matches.map((match, index) => `<div class="fixture-node group-node group-node-${index + 1}">${fixtureMarkup(match, "group")}</div>`).join("")}</div>
    </section>
  `;

  elements.groupsLeft.innerHTML = groups.slice(0, 6).map(renderGroup).join("");
  elements.groupsRight.innerHTML = groups.slice(6).map(renderGroup).join("");
}

function renderKnockout() {
  const round32 = matches.filter((match) => match.stage === "Round of 32");
  const round16 = matches.filter((match) => match.stage === "Round of 16");
  const quarterfinals = matches.filter((match) => match.stage === "Quarterfinal");
  const semifinals = matches.filter((match) => match.stage === "Semifinal");
  const thirdPlace = matches.find((match) => match.stage === "Third Place");
  const finalMatch = matches.find((match) => match.stage === "Final");

  const leftR32 = round32.slice(0, 8);
  const rightR32 = round32.slice(8);
  const leftR16 = round16.slice(0, 4);
  const rightR16 = round16.slice(4);
  const leftQF = quarterfinals.slice(0, 2);
  const rightQF = quarterfinals.slice(2);

  const renderRound = (label, list, extraClass = "") => `
    <section class="bracket-round round-stack ${extraClass}">
      <div class="round-label">${escapeHtml(label)}</div>
      <div class="round-fixtures">
        ${list.map((match, index) => `<div class="fixture-node fixture-node-${index + 1}">${fixtureMarkup(match, "knockout")}</div>`).join("")}
      </div>
    </section>
  `;

  elements.bracket.innerHTML = `
    <section class="bracket-side left">
      ${renderRound("Round of 32", leftR32, "r32")}
      ${renderRound("Round of 16", leftR16, "r16")}
      ${renderRound("Quarterfinals", leftQF, "qf")}
    </section>

    <section class="center-column">
      <div class="third-place-wrap">
        <div class="round-label orange">Third-place play-off</div>
        ${thirdPlace ? fixtureMarkup(thirdPlace, "third") : ""}
      </div>

      <div class="center-strip">
        <div class="round-label gray">Semifinals</div>
        <div class="semis-grid">
          ${semifinals[0] ? `<div class="fixture-node semi-node semi-left">${fixtureMarkup(semifinals[0], "knockout")}</div>` : ""}
          ${semifinals[1] ? `<div class="fixture-node semi-node semi-right">${fixtureMarkup(semifinals[1], "knockout")}</div>` : ""}
        </div>
      </div>

      <div class="trophy-mark">🏆</div>
      <div class="championship-label">Final</div>
      ${finalMatch ? fixtureMarkup(finalMatch, "final") : ""}
    </section>

    <section class="bracket-side right">
      ${renderRound("Quarterfinals", rightQF, "qf")}
      ${renderRound("Round of 16", rightR16, "r16")}
      ${renderRound("Round of 32", rightR32, "r32")}
    </section>
  `;
}

function playedMatches() {
  return matches.filter((match) => match.homeScore !== "" && match.awayScore !== "");
}

function countryStats() {
  const table = new Map();

  function ensure(name) {
    const key = canonicalizeCountryName(name);
    if (!key) return null;
    if (!table.has(key)) {
      table.set(key, { name: key, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 });
    }
    return table.get(key);
  }

  playedMatches().forEach((match) => {
    const home = ensure(match.homeTeam);
    const away = ensure(match.awayTeam);
    const hs = Number(match.homeScore);
    const as = Number(match.awayScore);
    if (!home || !away || !Number.isFinite(hs) || !Number.isFinite(as)) return;

    home.played += 1; away.played += 1;
    home.goalsFor += hs; home.goalsAgainst += as;
    away.goalsFor += as; away.goalsAgainst += hs;

    if (hs > as) {
      home.wins += 1; away.losses += 1; home.points += 3;
    } else if (as > hs) {
      away.wins += 1; home.losses += 1; away.points += 3;
    } else {
      home.draws += 1; away.draws += 1; home.points += 1; away.points += 1;
    }
  });

  return [...table.values()].sort((a, b) => b.points - a.points || (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) || b.goalsFor - a.goalsFor || a.name.localeCompare(b.name));
}

function stageSummaryRows() {
  const summary = new Map();
  playedMatches().forEach((match) => {
    if (!summary.has(match.stage)) summary.set(match.stage, { stage: match.stage, played: 0, goals: 0 });
    const row = summary.get(match.stage);
    row.played += 1;
    row.goals += Number(match.homeScore || 0) + Number(match.awayScore || 0);
  });
  return [...summary.values()];
}

function topAttackRows(limit = 8) {
  return countryStats().slice().sort((a, b) => b.goalsFor - a.goalsFor || b.points - a.points).slice(0, limit);
}

function renderStatsOverview() {
  const played = playedMatches().sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff));
  const countries = countryStats();
  const stages = stageSummaryRows();
  const attackLeaders = topAttackRows();
  const totalGoals = played.reduce((sum, match) => sum + Number(match.homeScore || 0) + Number(match.awayScore || 0), 0);
  const topComparison = countries.slice(0, 5);
  const maxGoals = Math.max(1, ...attackLeaders.map((country) => country.goalsFor));
  const maxPoints = Math.max(1, ...topComparison.map((country) => country.points));
  const maxGoalAgainst = Math.max(1, ...topComparison.map((country) => country.goalsAgainst));

  elements.statsView.innerHTML = `
    <div class="stats-header">
      <div>
        <h2>Statistics overview</h2>
        <p class="history-copy">Compact visual summaries for stages, goals, country comparison, and played fixtures.</p>
      </div>
      <div class="stats-meta">${played.length} played · ${countries.length} countries</div>
    </div>

    <section class="stats-kpis">
      <article class="stats-kpi"><span>Played</span><strong>${played.length}</strong></article>
      <article class="stats-kpi"><span>Total goals</span><strong>${totalGoals}</strong></article>
      <article class="stats-kpi"><span>Teams tracked</span><strong>${countries.length}</strong></article>
      <article class="stats-kpi"><span>Live now</span><strong>${activeMatchIds.length}</strong></article>
    </section>

    <section class="stats-visuals">
      <article class="stats-visual-card">
        <h3>Goals distribution</h3>
        <div class="treemap-lite">
          ${attackLeaders.length ? attackLeaders.map((country) => `
            <div class="treemap-node" style="flex:${Math.max(1, country.goalsFor)}">
              <span>${inlineFlagMarkup(country.name)}${escapeHtml(country.name)}</span>
              <strong>${country.goalsFor} GF</strong>
            </div>
          `).join("") : '<div class="empty-state">No goal data yet.</div>'}
        </div>
      </article>

      <article class="stats-visual-card">
        <h3>Top country comparison</h3>
        <div class="compare-bars">
          ${topComparison.length ? topComparison.map((country) => `
            <div class="compare-row">
              <div class="compare-label">${inlineFlagMarkup(country.name)}${escapeHtml(country.name)}</div>
              <div class="compare-track">
                <span class="compare-bar compare-points" style="width:${(country.points / maxPoints) * 100}%"></span>
                <span class="compare-bar compare-against" style="width:${(country.goalsAgainst / maxGoalAgainst) * 100}%"></span>
              </div>
              <div class="compare-values">${country.points} pts · ${country.goalsFor}-${country.goalsAgainst}</div>
            </div>
          `).join("") : '<div class="empty-state">No comparison data yet.</div>'}
        </div>
      </article>
    </section>

    <section class="stats-section">
      <h3>Stage summary</h3>
      <div class="stats-match-grid compact-cards">
        ${stages.length ? stages.map((row) => `
          <article class="stats-card-item compact">
            <strong>${escapeHtml(row.stage)}</strong>
            <div class="stats-scoreline small">
              <span>Played ${row.played}</span>
              <strong>${row.goals} goals</strong>
            </div>
          </article>
        `).join("") : '<div class="empty-state">No stage stats yet.</div>'}
      </div>
    </section>

    <section class="stats-section">
      <h3>Most goals scored</h3>
      <div class="stats-match-grid compact-cards">
        ${attackLeaders.length ? attackLeaders.map((country) => `
          <article class="stats-card-item compact">
            <strong>${inlineFlagMarkup(country.name)}${escapeHtml(country.name)}</strong>
            <div class="stats-scoreline small">
              <span>GF ${country.goalsFor}</span>
              <strong>${country.points} pts</strong>
              <span>GD ${country.goalsFor - country.goalsAgainst}</span>
            </div>
            <div class="mini-meter"><span style="width:${(country.goalsFor / maxGoals) * 100}%"></span></div>
          </article>
        `).join("") : '<div class="empty-state">No attacking leaders yet.</div>'}
      </div>
    </section>

    <section class="stats-section">
      <h3>Country table</h3>
      <div class="country-table-wrap">
        <table class="country-table small-table">
          <thead>
            <tr><th>Country</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>Pts</th></tr>
          </thead>
          <tbody>
            ${countries.length ? countries.map((country) => `
              <tr>
                <td>${inlineFlagMarkup(country.name)}${escapeHtml(country.name)}</td>
                <td>${country.played}</td><td>${country.wins}</td><td>${country.draws}</td><td>${country.losses}</td>
                <td>${country.goalsFor}</td><td>${country.goalsAgainst}</td><td><strong>${country.points}</strong></td>
              </tr>
            `).join("") : '<tr><td colspan="8" class="empty-state">No country stats yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>

    <section class="stats-section">
      <h3>Played matches</h3>
      <div class="stats-match-grid compact-cards">
        ${played.length ? played.map((match) => `
          <article class="stats-card-item compact">
            <strong>Match ${match.number} · ${escapeHtml(match.stage)}</strong>
            <small>${escapeHtml(match.city)} · ${escapeHtml(formatMatchTime(match.kickoff))}</small>
            <div class="stats-scoreline small">
              <span>${inlineFlagMarkup(match.homeTeam)}${escapeHtml(match.homeTeam || "TBD")}</span>
              <strong>${escapeHtml(String(match.homeScore))} - ${escapeHtml(String(match.awayScore))}</strong>
              <span>${inlineFlagMarkup(match.awayTeam)}${escapeHtml(match.awayTeam || "TBD")}</span>
            </div>
          </article>
        `).join("") : '<div class="empty-state">No played matches yet.</div>'}
      </div>
    </section>
  `;
}

function renderHistory() {
  elements.historyCount.textContent = String(history.length);
  if (!history.length) {
    elements.historyList.innerHTML = '<div class="empty-state">No changes yet.</div>';
    return;
  }

  elements.historyList.innerHTML = history.slice(0, 12).map((entry) => `
    <article class="history-item">
      <strong>Match ${entry.matchNumber} · ${escapeHtml(entry.stage)}</strong>
      <small>${entry.source === "manual" ? "Saved by family" : "Auto Update"} · ${escapeHtml(formatMatchTime(entry.timestamp))}</small>
      <div>${entry.changes.map((change) => `<div>${escapeHtml(labelForField(change.field))}: <strong>${escapeHtml(change.from || "—")}</strong> → <strong>${escapeHtml(change.to || "—")}</strong></div>`).join("")}</div>
    </article>
  `).join("");
}

function renderSummary() {
  const visible = filteredMatches();
  const savedCount = matches.filter((match) => match.updatedManually).length;
  const autoCount = matches.filter((match) => match.autoUpdated && !match.updatedManually).length;
  visibleMatchIds = new Set(visible.map((match) => match.id));
  upcomingMatchIds = getUpcomingMatchIds();
  activeMatchIds = getActiveMatchIds();
  elements.summary.textContent = `${visible.length}/${matches.length} fixtures · ${savedCount} saved · ${autoCount} auto synced`;
  if (elements.statTotal) elements.statTotal.textContent = String(matches.length);
  if (elements.statVisible) elements.statVisible.textContent = String(visible.length);
  if (elements.statSaved) elements.statSaved.textContent = String(savedCount);
  if (elements.statAuto) elements.statAuto.textContent = String(autoCount);
}

function render() {
  renderSummary();
  renderGroups();
  renderKnockout();
  renderStatsOverview();
  renderHistory();
  renderLastSync();
  renderMatchJumps();
  elements.body.classList.toggle("stats-mode", statsMode);
  elements.statsToggle.textContent = statsMode ? "Scorecard view" : "Stats view";
}

function getFixtureValues(fixture) {
  return {
    homeTeam: fixture.querySelector('[data-field="homeTeam"]').value.trim(),
    awayTeam: fixture.querySelector('[data-field="awayTeam"]').value.trim(),
    homeScore: fixture.querySelector('[data-field="homeScore"]').value,
    awayScore: fixture.querySelector('[data-field="awayScore"]').value,
    homePoints: fixture.querySelector('[data-field="homePoints"]')?.value ?? "",
    awayPoints: fixture.querySelector('[data-field="awayPoints"]')?.value ?? ""
  };
}

function toggleExpandedMatch(matchId) {
  expandedMatchId = expandedMatchId === matchId ? "" : matchId;
  deactivateFloatingFixture();
  render();

  if (!expandedMatchId) return;
  requestAnimationFrame(() => {
    const fixture = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
    if (fixture?.classList.contains('fixture-group')) activateFloatingFixture(fixture);
  });
}

function handleFixtureClick(event) {
  const fixture = event.target.closest('.fixture[data-match-id]');
  if (!fixture) return;
  const matchId = fixture.dataset.matchId;

  if (event.target.classList.contains('points-btn')) {
    const values = getFixtureValues(fixture);
    const points = computePoints(values.homeScore, values.awayScore);
    const points1 = fixture.querySelector('[data-field="homePoints"]');
    const points2 = fixture.querySelector('[data-field="awayPoints"]');
    if (points1) points1.value = points.homePoints;
    if (points2) points2.value = points.awayPoints;
    return;
  }

  if (event.target.classList.contains('save-btn')) {
    const values = getFixtureValues(fixture);
    if ((values.homeScore !== "" || values.awayScore !== "") && (values.homePoints === "" && values.awayPoints === "")) {
      Object.assign(values, computePoints(values.homeScore, values.awayScore));
    }
    updateMatch(matchId, values, "manual");
    expandedMatchId = matchId;
    return;
  }

  if (event.target.closest('input, select, button')) return;
  toggleExpandedMatch(matchId);
}

function handleInput(event) {
  if (!event.target.matches('.team-input')) return;
  const row = event.target.closest('.team-row');
  const flag = row?.querySelector('.flag');
  if (flag) flag.innerHTML = flagMarkup(event.target.value);
}

function setHoveredMatch(matchId) {
  hoveredMatchId = matchId;
  const fixture = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
  if (!fixture) return;
  fixture.classList.add('force-expanded');
  if (fixture.classList.contains('fixture-group')) {
    activateFloatingFixture(fixture);
  }
}

function clearHoveredMatch(matchId = hoveredMatchId) {
  if (!hoveredMatchId || hoveredMatchId !== matchId) return;
  const fixture = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
  if (fixture && expandedMatchId !== matchId && focusedMatchId !== matchId) {
    fixture.classList.remove('force-expanded');
  }
  hoveredMatchId = "";
  if (!expandedMatchId && !focusedMatchId) deactivateFloatingFixture();
}

function activateFloatingFixture(fixture) {
  if (!fixture?.classList.contains('fixture-group')) return;
  deactivateFloatingFixture();

  const rect = fixture.getBoundingClientRect();
  const isRight = Boolean(fixture.closest('#groups-right'));
  const fixtureNode = fixture.closest('.fixture-node');
  if (fixtureNode) fixtureNode.style.zIndex = '130000';
  fixture.classList.add('floating-popout');
  fixture.style.position = 'fixed';
  fixture.style.top = `${Math.max(8, rect.top)}px`;
  fixture.style.width = '300px';
  fixture.style.maxWidth = '300px';
  fixture.style.zIndex = '120000';
  if (isRight) {
    fixture.style.left = 'auto';
    fixture.style.right = `${Math.max(8, window.innerWidth - rect.right)}px`;
  } else {
    fixture.style.right = 'auto';
    fixture.style.left = `${Math.max(8, rect.left)}px`;
  }
  floatingFixture = fixture;
}

function deactivateFloatingFixture() {
  if (floatingFixtureTimer) {
    clearTimeout(floatingFixtureTimer);
    floatingFixtureTimer = null;
  }
  if (!floatingFixture) return;
  const fixtureNode = floatingFixture.closest('.fixture-node');
  if (fixtureNode) fixtureNode.style.zIndex = '';
  floatingFixture.classList.remove('floating-popout');
  floatingFixture.style.position = '';
  floatingFixture.style.top = '';
  floatingFixture.style.left = '';
  floatingFixture.style.right = '';
  floatingFixture.style.width = '';
  floatingFixture.style.maxWidth = '';
  floatingFixture.style.zIndex = '';
  floatingFixture = null;
}

function handleFixtureHoverIn(event) {
  const fixture = event.target.closest('.fixture-group');
  if (!fixture) return;
  if (!fixture.closest('#groups-left, #groups-right')) return;
  if (Date.now() < suppressFloatingUntil) return;
  if (floatingFixtureTimer) clearTimeout(floatingFixtureTimer);
  floatingFixtureTimer = setTimeout(() => {
    activateFloatingFixture(fixture);
    floatingFixtureTimer = null;
  }, 180);
}

function handleFixtureHoverOut(event) {
  const fixture = event.target.closest('.fixture-group');
  if (!fixture) return;
  if (fixture.contains(event.relatedTarget)) return;
  if (floatingFixtureTimer) {
    clearTimeout(floatingFixtureTimer);
    floatingFixtureTimer = null;
  }
  if (floatingFixture === fixture) deactivateFloatingFixture();
}

function suppressFloatingPopouts() {
  suppressFloatingUntil = Date.now() + 700;
  if (hoverExpandTimer) {
    clearTimeout(hoverExpandTimer);
    hoverExpandTimer = null;
  }
  if (hoveredMatchId && !expandedMatchId && !focusedMatchId) {
    const hovered = hoveredMatchId;
    clearHoveredMatch(hovered);
  }
  deactivateFloatingFixture();
}

function jumpToMatch(matchId) {
  focusedMatchId = matchId;
  render();

  requestAnimationFrame(() => {
    const target = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
    if (!target) return;

    const sideScroller = target.closest('.groups-scroll');
    const fixtureNode = target.closest('.fixture-node') || target;

    if (sideScroller) {
      const top = Math.max(0, fixtureNode.offsetTop - sideScroller.clientHeight / 2 + fixtureNode.clientHeight / 2);
      sideScroller.scrollTo({ top, behavior: 'smooth' });

      let settleTimer = null;
      const promote = () => {
        const refreshed = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
        if (refreshed?.classList.contains('fixture-group')) activateFloatingFixture(refreshed);
      };

      const onScroll = () => {
        if (settleTimer) clearTimeout(settleTimer);
        settleTimer = setTimeout(() => {
          sideScroller.removeEventListener('scroll', onScroll);
          promote();
        }, 120);
      };

      sideScroller.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    } else {
      fixtureNode.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      setTimeout(() => {
        const refreshed = document.querySelector(`.fixture[data-match-id="${matchId}"]`);
        if (refreshed?.classList.contains('fixture-group')) activateFloatingFixture(refreshed);
      }, 180);
    }
  });

  if (focusedMatchTimer) clearTimeout(focusedMatchTimer);
  focusedMatchTimer = setTimeout(() => {
    focusedMatchId = "";
    deactivateFloatingFixture();
    render();
  }, 5000);
}

function handleJumpClick(event) {
  const button = event.target.closest('[data-match-jump]');
  if (!button) return;
  jumpToMatch(button.dataset.matchJump);
}

function closeExpandedMatch() {
  if (!expandedMatchId && !hoveredMatchId && !focusedMatchId && !floatingFixture) return;
  expandedMatchId = "";
  hoveredMatchId = "";
  focusedMatchId = "";
  if (focusedMatchTimer) {
    clearTimeout(focusedMatchTimer);
    focusedMatchTimer = null;
  }
  if (hoverExpandTimer) {
    clearTimeout(hoverExpandTimer);
    hoverExpandTimer = null;
  }
  deactivateFloatingFixture();
  render();
}

function handleOutsideClick(event) {
  if (event.target.closest('.fixture[data-match-id], [data-match-jump], .hero-actions button, .compact-toolbar')) return;
  closeExpandedMatch();
}

function handleEscapeKey(event) {
  if (event.key !== 'Escape') return;
  closeExpandedMatch();
}

function applyTheme(theme) {
  const resolved = theme === "dark" ? "dark" : "light";
  elements.body.dataset.theme = resolved;
  localStorage.setItem(THEME_KEY, resolved);
  elements.themeToggle.textContent = resolved === "dark" ? "Light theme" : "Dark theme";
}

function initializeTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
    return;
  }
  applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTimeZone(timeZone) {
  selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : TORONTO_TIMEZONE;
  localStorage.setItem(TIMEZONE_KEY, selectedTimeZone);
  if (elements.timezone) elements.timezone.value = selectedTimeZone;
}

function commitTimeZoneInput(rawValue) {
  const value = String(rawValue || "").trim();
  applyTimeZone(value || TORONTO_TIMEZONE);
  render();
}

function toggleTheme() {
  applyTheme(elements.body.dataset.theme === "dark" ? "light" : "dark");
}

function toggleStatsMode() {
  statsMode = !statsMode;
  render();
}

function applyHeaderState() {
  const y = window.scrollY;
  if (!headerIsCompact && y > 80) {
    headerIsCompact = true;
    elements.body.classList.add("scrolled");
  } else if (headerIsCompact && y < 24) {
    headerIsCompact = false;
    elements.body.classList.remove("scrolled");
  }
}

function updateHeaderState() {
  if (headerTicking) return;
  headerTicking = true;
  window.requestAnimationFrame(() => {
    applyHeaderState();
    headerTicking = false;
  });
}

async function runAutoUpdate() {
  const originalLabel = elements.autoUpdate.textContent;
  elements.autoUpdate.disabled = true;
  elements.autoUpdate.textContent = "Updating...";

  try {
    const events = await fetchEspnWorldCupEvents();
    const candidateMatches = matches.filter((match) => !match.updatedManually);
    const pairs = matchEspnEventsToMatches(events, candidateMatches);
    let updates = 0;

    pairs.forEach(({ match, event }) => {
      const result = resultFromEspnEvent(match, event);
      if (!result) return;
      updateMatch(match.id, result, "auto");
      updates += 1;
    });

    if (updates > 0) {
      lastSyncAt = new Date().toISOString();
      localStorage.setItem(LAST_SYNC_KEY, lastSyncAt);
      renderLastSync();
    } else {
      alert("No ESPN World Cup updates were available for untouched matches.");
    }
  } catch (error) {
    console.error(error);
    alert("Auto Update could not reach ESPN right now.");
  } finally {
    elements.autoUpdate.disabled = false;
    elements.autoUpdate.textContent = originalLabel;
  }
}

function resetLocalChanges() {
  if (!window.confirm("Reset all saved local changes and history for this browser?")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem(LAST_SYNC_KEY);
  matches = buildDefaultMatches();
  history = [];
  lastSyncAt = "";
  renderStageOptions();
  render();
}

function exportChanges() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), history, matches }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "fifa26-scoreboard-changes.json";
  link.click();
  URL.revokeObjectURL(url);
}

elements.search.addEventListener("input", render);
elements.stage.addEventListener("change", render);
elements.status.addEventListener("change", render);
elements.timezone.addEventListener("change", (event) => {
  commitTimeZoneInput(event.target.value);
});
elements.timezone.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  commitTimeZoneInput(event.target.value);
});
elements.autoUpdate.addEventListener("click", runAutoUpdate);
elements.reset.addEventListener("click", resetLocalChanges);
elements.export.addEventListener("click", exportChanges);
elements.themeToggle.addEventListener("click", toggleTheme);
elements.statsToggle.addEventListener("click", toggleStatsMode);
window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("wheel", suppressFloatingPopouts, { passive: true });
document.addEventListener("click", handleFixtureClick);
document.addEventListener("click", handleJumpClick);
document.addEventListener("click", handleOutsideClick);
document.addEventListener("keydown", handleEscapeKey);
document.addEventListener("input", handleInput);
document.addEventListener('mouseover', (event) => {
  const fixture = event.target.closest('.fixture[data-match-id]');
  if (!fixture || fixture.contains(event.relatedTarget)) return;
  if (Date.now() < suppressFloatingUntil) return;
  const matchId = fixture.dataset.matchId;
  const isSidePanel = Boolean(fixture.closest('#groups-left, #groups-right'));
  const delay = isSidePanel ? 520 : 260;
  if (hoverExpandTimer) clearTimeout(hoverExpandTimer);
  hoverExpandTimer = setTimeout(() => {
    setHoveredMatch(matchId);
    hoverExpandTimer = null;
  }, delay);
});
document.addEventListener('mouseout', (event) => {
  const fixture = event.target.closest('.fixture[data-match-id]');
  if (!fixture) return;
  if (fixture.contains(event.relatedTarget)) return;
  const matchId = fixture.dataset.matchId;
  if (hoverExpandTimer) {
    clearTimeout(hoverExpandTimer);
    hoverExpandTimer = null;
  }
  clearHoveredMatch(matchId);
});
document.addEventListener("scroll", (event) => {
  if (event.target?.closest?.('.groups-scroll')) suppressFloatingPopouts();
}, true);

initializeTheme();
populateCountryOptions();
populateTimezoneOptions();
applyTimeZone(selectedTimeZone);
renderStageOptions();
updateHeaderState();
render();
