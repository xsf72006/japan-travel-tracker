// Japan Travel Tracker - Main JavaScript File

// Translation system
const translations = {
    'en': {
        // Navigation
        'language': '語言',
        'timeline': 'Timeline',
        'stats': 'Stats',
        'export': 'Export',
        'import': 'Import',
        'app_title': 'Japan Travel Tracker',
        'page_title': 'Japan Travel Tracker',
        
        // Map and Legend
        'map_title': 'Japan Prefecture Map',
        'legend_title': 'Travel Status Legend',
        'never_been': 'Never Been (0)',
        'visited': 'Visited (1)',
        'stayed': 'Stayed (2)',
        'road_trip': 'Road Trip (dashed border)',
        
        // Statistics
        'quick_stats': 'Quick Statistics',
        'prefectures_visited': 'Prefectures Visited:',
        'prefectures_stayed': 'Prefectures Stayed:',
        'road_trips': 'Road Trips:',
        'total_visits': 'Total Visits:',
        'selected_prefecture': 'Selected Prefecture',
        'click_prefecture': 'Click on a prefecture to view details',
        
        // Modal Content
        'add_visit_to': 'Add Visit to',
        'visit_level': 'Visit Level',
        'visited_option': 'Visited (1)',
        'stayed_option': 'Stayed (2)',
        'year': 'Year',
        'month': 'Month',
        'road_trip_checkbox': 'This was a road trip',
        'notes_optional': 'Notes (optional)',
        'notes_placeholder': 'Add any notes about this visit...',
        'cancel': 'Cancel',
        'close': 'Close',
        'add_visit': 'Add Visit',
        'visit_timeline': 'Visit Timeline',
        'travel_statistics': 'Travel Statistics',
        
        // Months
        'january': 'January',
        'february': 'February',
        'march': 'March',
        'april': 'April',
        'may': 'May',
        'june': 'June',
        'july': 'July',
        'august': 'August',
        'september': 'September',
        'october': 'October',
        'november': 'November',
        'december': 'December',
        
        // Footer
        'credits_attribution': 'Credits & Attribution',
        'inspired_by': 'This project is inspired by the original',
        'created_by': 'created by Chih-Hung Cheng (@ukyouz). Thank you for the brilliant idea!',
        'map_data_provided': 'Map coordinates based on',
        'map_license': 'with enhanced text positioning algorithm',
        'made_with_love': 'Made for Japan travelers',
        'view_github': 'View on GitHub',
        
        // Dynamic messages
        'no_visits_recorded': 'No visits recorded',
        'no_visits_yet': 'No visits recorded yet.',
        'data_imported_successfully': 'Data imported successfully!',
        'error_importing_data': 'Error importing data:',
        'fill_required_fields': 'Please fill in all required fields',
        'remove_visit_confirm': 'Are you sure you want to remove this visit?',
        'prefecture_coverage': 'Prefecture Coverage',
        'total_prefectures': 'Total Prefectures:',
        'never_been_count': 'Never Been:',
        'travel_patterns': 'Travel Patterns',
        'avg_visits_per_prefecture': 'Avg Visits per Prefecture:',
        'regional_coverage': 'Regional Coverage',
        'timeline_header': 'Timeline',
        'first_visit': 'First Visit:',
        'latest_visit': 'Latest Visit:',
        'most_active_year': 'Most Active Year:',
        'none': 'None',
        'visits': 'visits',
        'visit_singular': 'visit',
        'road_trip_text': 'Road Trip',
        
        // Region names
        'region_hokkaido': 'Hokkaido',
        'region_tohoku': 'Tohoku',
        'region_kanto': 'Kanto',
        'region_chubu': 'Chubu',
        'region_kansai': 'Kansai',
        'region_chugoku': 'Chugoku',
        'region_shikoku': 'Shikoku',
        'region_kyushu': 'Kyushu',
        'region_okinawa': 'Okinawa'
    },
    'zh-TW': {
        // Navigation
        'language': 'Language',
        'timeline': '時間軸',
        'stats': '統計',
        'export': '匯出',
        'import': '匯入',
        'app_title': '日本旅遊追蹤器',
        'page_title': '日本旅遊追蹤器',
        
        // Map and Legend
        'map_title': '日本都道府縣地圖',
        'legend_title': '旅遊狀態圖例',
        'never_been': '未曾到訪 (0)',
        'visited': '到訪過 (1)',
        'stayed': '住宿過 (2)',
        'road_trip': '自駕遊 (虛線邊框)',
        
        // Statistics
        'quick_stats': '快速統計',
        'prefectures_visited': '到訪過的都道府縣：',
        'prefectures_stayed': '住宿過的都道府縣：',
        'road_trips': '自駕遊：',
        'total_visits': '總到訪次數：',
        'selected_prefecture': '選擇的都道府縣',
        'click_prefecture': '點擊都道府縣查看詳情',
        
        // Modal Content
        'add_visit_to': '新增到訪記錄至',
        'visit_level': '到訪等級',
        'visited_option': '到訪過 (1)',
        'stayed_option': '住宿過 (2)',
        'year': '年份',
        'month': '月份',
        'road_trip_checkbox': '這是自駕遊',
        'notes_optional': '備註 (可選)',
        'notes_placeholder': '新增此次到訪的備註...',
        'cancel': '取消',
        'close': '關閉',
        'add_visit': '新增記錄',
        'visit_timeline': '到訪時間軸',
        'travel_statistics': '旅遊統計',
        
        // Months
        'january': '一月',
        'february': '二月',
        'march': '三月',
        'april': '四月',
        'may': '五月',
        'june': '六月',
        'july': '七月',
        'august': '八月',
        'september': '九月',
        'october': '十月',
        'november': '十一月',
        'december': '十二月',
        
        // Footer
        'credits_attribution': '致謝與歸屬',
        'inspired_by': '此專案靈感來自原創的',
        'created_by': '由 Chih-Hung Cheng (@ukyouz) 創作。感謝你的絕佳想法！',
        'map_data_provided': '地圖座標基於',
        'map_license': '並使用增強文字定位演算法',
        'made_with_love': '為日本旅行者製作',
        'view_github': '在 GitHub 上查看',
        
        // Dynamic messages
        'no_visits_recorded': '無到訪記錄',
        'no_visits_yet': '尚無到訪記錄。',
        'data_imported_successfully': '資料匯入成功！',
        'error_importing_data': '匯入資料時發生錯誤：',
        'fill_required_fields': '請填寫所有必填欄位',
        'remove_visit_confirm': '確定要移除此到訪記錄嗎？',
        'prefecture_coverage': '都道府縣覆蓋率',
        'total_prefectures': '總都道府縣數：',
        'never_been_count': '未曾到訪：',
        'travel_patterns': '旅遊模式',
        'avg_visits_per_prefecture': '每個都道府縣平均到訪次數：',
        'regional_coverage': '區域覆蓋率',
        'timeline_header': '時間軸',
        'first_visit': '首次到訪：',
        'latest_visit': '最近到訪：',
        'most_active_year': '最活躍年份：',
        'none': '無',
        'visits': '次到訪',
        'visit_singular': '次到訪',
        'road_trip_text': '自駕遊',
        
        // Region names
        'region_hokkaido': '北海道地方',
        'region_tohoku': '東北地方',
        'region_kanto': '關東地方',
        'region_chubu': '中部地方',
        'region_kansai': '關西地方',
        'region_chugoku': '中國地方',
        'region_shikoku': '四國地方',
        'region_kyushu': '九州地方',
        'region_okinawa': '沖繩'
    }
};

// Current language (default to English)
let currentLanguage = 'en';

// Language switching functionality
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('japanTravelLanguage', lang);
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update placeholder text
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update document title + lang attribute (drives the CJK :lang() rules)
    document.title = t['page_title'];
    document.documentElement.lang = currentLanguage === 'zh-TW' ? 'zh-Hant-HK' : 'en';

    // Update months in dropdowns
    updateMonthOptions();

    // Reflect the active language on the segmented toggle
    updateLanguageToggle();

    // Update dynamic content
    updateStatistics();
    if (currentPrefecture) {
        updatePrefectureInfo(currentPrefecture);
    }
}

function updateMonthOptions() {
    const monthSelect = document.getElementById('visit-month');
    const selectedValue = monthSelect.value;
    const t = translations[currentLanguage];
    
    monthSelect.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        const monthKeys = ['january', 'february', 'march', 'april', 'may', 'june',
                          'july', 'august', 'september', 'october', 'november', 'december'];
        option.textContent = t[monthKeys[i - 1]];
        monthSelect.appendChild(option);
    }
    monthSelect.value = selectedValue;
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

// Get localized month name
function getLocalizedMonth(monthNumber) {
    const monthKeys = ['january', 'february', 'march', 'april', 'may', 'june',
                      'july', 'august', 'september', 'october', 'november', 'december'];
    return t(monthKeys[monthNumber - 1]);
}

// Get localized prefecture name
function getLocalizedPrefectureName(prefectureId) {
    const prefecture = prefectures[prefectureId];
    if (!prefecture) return prefectureId;
    
    return currentLanguage === 'zh-TW' ? prefecture.nameJA : prefecture.name;
}

// Get localized region name
function getLocalizedRegionName(regionName) {
    const regionKey = 'region_' + regionName.toLowerCase();
    return t(regionKey);
}

// Load saved language preference
function loadLanguagePreference() {
    const saved = localStorage.getItem('japanTravelLanguage');
    if (saved && translations[saved]) {
        currentLanguage = saved;
    }
}

// Prefecture data with coordinates for SVG map
const prefectures = {
    'hokkaido': { name: 'Hokkaido', nameJA: '北海道', region: 'Hokkaido' },
    'aomori': { name: 'Aomori', nameJA: '青森', region: 'Tohoku' },
    'iwate': { name: 'Iwate', nameJA: '岩手', region: 'Tohoku' },
    'miyagi': { name: 'Miyagi', nameJA: '宮城', region: 'Tohoku' },
    'akita': { name: 'Akita', nameJA: '秋田', region: 'Tohoku' },
    'yamagata': { name: 'Yamagata', nameJA: '山形', region: 'Tohoku' },
    'fukushima': { name: 'Fukushima', nameJA: '福島', region: 'Tohoku' },
    'ibaraki': { name: 'Ibaraki', nameJA: '茨城', region: 'Kanto' },
    'tochigi': { name: 'Tochigi', nameJA: '栃木', region: 'Kanto' },
    'gunma': { name: 'Gunma', nameJA: '群馬', region: 'Kanto' },
    'saitama': { name: 'Saitama', nameJA: '埼玉', region: 'Kanto' },
    'chiba': { name: 'Chiba', nameJA: '千葉', region: 'Kanto' },
    'tokyo': { name: 'Tokyo', nameJA: '東京', region: 'Kanto' },
    'kanagawa': { name: 'Kanagawa', nameJA: '神奈川', region: 'Kanto' },
    'niigata': { name: 'Niigata', nameJA: '新潟', region: 'Chubu' },
    'toyama': { name: 'Toyama', nameJA: '富山', region: 'Chubu' },
    'ishikawa': { name: 'Ishikawa', nameJA: '石川', region: 'Chubu' },
    'fukui': { name: 'Fukui', nameJA: '福井', region: 'Chubu' },
    'yamanashi': { name: 'Yamanashi', nameJA: '山梨', region: 'Chubu' },
    'nagano': { name: 'Nagano', nameJA: '長野', region: 'Chubu' },
    'gifu': { name: 'Gifu', nameJA: '岐阜', region: 'Chubu' },
    'shizuoka': { name: 'Shizuoka', nameJA: '静岡', region: 'Chubu' },
    'aichi': { name: 'Aichi', nameJA: '愛知', region: 'Chubu' },
    'mie': { name: 'Mie', nameJA: '三重', region: 'Kansai' },
    'shiga': { name: 'Shiga', nameJA: '滋賀', region: 'Kansai' },
    'kyoto': { name: 'Kyoto', nameJA: '京都', region: 'Kansai' },
    'osaka': { name: 'Osaka', nameJA: '大阪', region: 'Kansai' },
    'hyogo': { name: 'Hyogo', nameJA: '兵庫', region: 'Kansai' },
    'nara': { name: 'Nara', nameJA: '奈良', region: 'Kansai' },
    'wakayama': { name: 'Wakayama', nameJA: '和歌山', region: 'Kansai' },
    'tottori': { name: 'Tottori', nameJA: '鳥取', region: 'Chugoku' },
    'shimane': { name: 'Shimane', nameJA: '島根', region: 'Chugoku' },
    'okayama': { name: 'Okayama', nameJA: '岡山', region: 'Chugoku' },
    'hiroshima': { name: 'Hiroshima', nameJA: '広島', region: 'Chugoku' },
    'yamaguchi': { name: 'Yamaguchi', nameJA: '山口', region: 'Chugoku' },
    'tokushima': { name: 'Tokushima', nameJA: '徳島', region: 'Shikoku' },
    'kagawa': { name: 'Kagawa', nameJA: '香川', region: 'Shikoku' },
    'ehime': { name: 'Ehime', nameJA: '愛媛', region: 'Shikoku' },
    'kochi': { name: 'Kochi', nameJA: '高知', region: 'Shikoku' },
    'fukuoka': { name: 'Fukuoka', nameJA: '福岡', region: 'Kyushu' },
    'saga': { name: 'Saga', nameJA: '佐賀', region: 'Kyushu' },
    'nagasaki': { name: 'Nagasaki', nameJA: '長崎', region: 'Kyushu' },
    'kumamoto': { name: 'Kumamoto', nameJA: '熊本', region: 'Kyushu' },
    'oita': { name: 'Oita', nameJA: '大分', region: 'Kyushu' },
    'miyazaki': { name: 'Miyazaki', nameJA: '宮崎', region: 'Kyushu' },
    'kagoshima': { name: 'Kagoshima', nameJA: '鹿児島', region: 'Kyushu' },
    'okinawa': { name: 'Okinawa', nameJA: '沖縄', region: 'Okinawa' }
};

// Global variables
let visitData = {};
let currentPrefecture = null;
let tooltip = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadThemePreference();
    loadLanguagePreference();
    loadData();
    createJapanMap();
    updateLanguage(); // Apply language after everything is loaded

    setupLanguageToggle();
    setupThemeToggle();
    setupModalDismiss();
    setupActionButtons();

    // Selection outline lives only while a prefecture dialog is open.
    ['detailsModal', 'visitModal'].forEach(id => {
        document.getElementById(id).addEventListener('close', clearSelectionWhenDialogsClosed);
    });

    // Set default year/month to the current date
    document.getElementById('visit-year').value = new Date().getFullYear();
    document.getElementById('visit-month').value = new Date().getMonth() + 1;

    // Label positions are a pure function of the static SVG coordinates, so
    // computing them once in createJapanMap() is sufficient — no re-run needed.
});

// HTML-escape untrusted strings (visit notes) before injecting into innerHTML.
function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function(ch) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
}

// ── Theme (light / Espresso dark) ──────────────────────────────
function loadThemePreference() {
    const saved = localStorage.getItem('japanTravelTheme');
    if (saved === 'light' || saved === 'dark') {
        document.documentElement.setAttribute('data-theme', saved);
    }
    // When unset, tokens.css resolves the theme from the OS preference.
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const current = document.documentElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('japanTravelTheme', next);
    });
}

// ── Language toggle (design-system segmented control) ──────────
function setupLanguageToggle() {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
    updateLanguageToggle();
}

function updateLanguageToggle() {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLanguage));
    });
}

// Topbar + modal actions, wired here instead of inline onclick attributes so
// the CSP can enforce script-src 'self' without 'unsafe-inline'.
function setupActionButtons() {
    document.getElementById('timeline-btn').addEventListener('click', showTimeline);
    document.getElementById('stats-btn').addEventListener('click', showStatistics);
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('import-btn').addEventListener('click', () => document.getElementById('import-file').click());
    document.getElementById('import-file').addEventListener('change', importData);
    document.getElementById('add-visit-btn').addEventListener('click', addVisit);
    document.getElementById('details-add-btn').addEventListener('click', openAddVisit);

    // Visit delete buttons are re-rendered with every list update (side panel
    // and details dialog), so a single delegated listener covers them all.
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-remove-visit]');
        if (btn) removeVisit(btn.dataset.pref, parseInt(btn.dataset.index, 10));
    });
}

// Close dialogs via [data-close] buttons and backdrop clicks.
function setupModalDismiss() {
    document.querySelectorAll('dialog.modal').forEach(dialog => {
        dialog.querySelectorAll('[data-close]').forEach(btn => {
            btn.addEventListener('click', () => dialog.close());
        });
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) dialog.close(); // click on backdrop
        });
    });
}

// Data Management
function loadData() {
    const saved = localStorage.getItem('japanTravelData');
    if (saved) {
        visitData = JSON.parse(saved);
    }
}

function saveData() {
    localStorage.setItem('japanTravelData', JSON.stringify(visitData));
    updateStatistics();
}

function exportData() {
    const dataStr = JSON.stringify(visitData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'japan-travel-data.json';
    link.click();
    URL.revokeObjectURL(url); // release the blob; the download has been queued
}

// Validate + sanitize imported data. Treats the file as untrusted: only known
// prefecture ids survive, and each visit is coerced to the expected shape.
// Returns a clean object, or throws if the top-level structure is wrong.
function sanitizeImportedData(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        throw new Error('Expected an object keyed by prefecture.');
    }
    const clean = {};
    Object.keys(raw).forEach(prefId => {
        if (!prefectures[prefId] || !Array.isArray(raw[prefId])) return;
        const visits = raw[prefId]
            .filter(v => v && typeof v === 'object')
            .map(v => ({
                level: (Number(v.level) === 2) ? 2 : 1,
                year: parseInt(v.year, 10),
                month: Math.min(12, Math.max(1, parseInt(v.month, 10))),
                roadTrip: Boolean(v.roadTrip),
                notes: typeof v.notes === 'string' ? v.notes : '',
                timestamp: Number(v.timestamp) || Date.now()
            }))
            .filter(v => Number.isFinite(v.year) && Number.isFinite(v.month));
        if (visits.length) clean[prefId] = visits;
    });
    return clean;
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            visitData = sanitizeImportedData(JSON.parse(e.target.result));
            saveData();
            updateMapColors();
            updateStatistics();
            if (currentPrefecture) updatePrefectureInfo(currentPrefecture);
            alert(t('data_imported_successfully'));
        } catch (error) {
            alert(t('error_importing_data') + ' ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // allow re-importing the same file
}

// Map Creation - Based on original JapanEx implementation
// Source: https://github.com/ukyouz/JapanEx (by Chih-Hung Cheng @ukyouz)
function createJapanMap() {
    const container = document.getElementById('japan-map-container');
    
    // Use string concatenation for Safari compatibility (avoiding template literals).
    // Labels are inserted AFTER the SVG is in the DOM — getJapanExKanjiLabels reads
    // each prefecture via getElementById, so the shapes must exist first.
    const svgContent = '<svg version="1.1" id="japan-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'viewBox="280 -350 1220 1220" style="enable-background:new 280 -350 1220 1220;" xml:space="preserve">' +
        '<g id="background">' +
        '<rect x="318" y="-317.5" fill="#f8f9fa" width="1147.5" height="1147.5"/>' +
        '</g>' +
        '<g id="area">' +
        getJapanExSVGPrefectures() +
        '</g>' +
        '<g id="labels"></g>' +
        '</svg>';

    container.innerHTML = svgContent;

    // Shapes now exist in the DOM → compute and insert the Kanji labels once.
    document.getElementById('labels').innerHTML = getJapanExKanjiLabels();
    
    // Create tooltip
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'prefecture-tooltip';
        document.body.appendChild(tooltip);
    }
    
    // Setup prefecture interactions using JapanEx approach
    setupPrefectureInteractions();
    updateMapColors();
}

// Generate SVG prefecture shapes based on original JapanEx coordinates
function getJapanExSVGPrefectures() {
    return '<polygon id="toyama" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1051.6,276.5 1051.6,360.4 967.6,360.4 967.6,324.4 1000.9,324.4"/>' +
           '<rect id="kanagawa" class="prefecture" x="1143.6" y="458.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="82" height="51"/>' +
           '<polygon id="ibaraki" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1309.6,393.6 1309.6,400.4 1238.6,400.4 1238.6,311.4 1296.6,311.4 1296.6,381.7"/>' +
           '<polygon id="chiba" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1309.6,400.4 1309.6,507.4 1257.6,507.4 1257.6,458.4 1238.6,458.4 1238.6,400.4"/>' +
           '<rect id="tokyo" class="prefecture" x="1143.6" y="418.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="95" height="40"/>' +
           '<polygon id="shizuoka" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1164.6,509.4 1164.6,548.4 1133.6,548.4 1133.6,512.5 1095.1,547.4 1045.6,547.4 1045.6,488.4 1143.6,488.4 1143.6,509.4"/>' +
           '<polygon id="kyoto" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="903.6,424.4 903.6,488.4 799.6,488.4 799.6,399.4 845.6,399.4 845.6,424.4"/>' +
           '<polygon id="wakayama" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="903.6,579.4 903.6,616.4 818.6,616.4 818.6,552.4 859.6,552.4 859.6,579.4"/>' +
           '<rect id="tottori" class="prefecture" x="663.6" y="399.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="67" height="49"/>' +
           '<polygon id="yamaguchi" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="591.6,398.5 591.6,509.4 530.6,509.4 530.6,434.4"/>' +
           '<rect id="hiroshima" class="prefecture" x="591.6" y="448.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="72" height="61"/>' +
           '<polygon id="shimane" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="663.6,399.4 663.6,448.4 591.6,448.4 591.6,398.5 596.9,399.4"/>' +
           '<polygon id="aichi" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1045.6,488.4 1045.6,547.4 971.6,547.4 971.6,517.4 955.6,517.4 955.6,488.4"/>' +
           '<polygon id="mie" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="955.6,488.4 955.6,517.4 942.6,517.4 942.6,616.4 903.6,616.4 903.6,488.4"/>' +
           '<g id="hyogo" class="prefecture">' +
           '<rect x="730.6" y="399.4" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" width="69" height="110"/>' +
           '<rect x="782.6" y="519.4" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" width="22" height="21"/>' +
           '</g>' +
           '<polygon id="ishikawa" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="967.6,291.4 967.6,373.4 882.6,373.4 882.6,368.4 926.6,339.6 926.6,291.4"/>' +
           '<rect id="yamanashi" class="prefecture" x="1094.6" y="418.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="49" height="70"/>' +
           '<g id="osaka" class="prefecture">' +
           '<polygon stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="859.6,488.4 859.6,552.4 818.6,552.4 818.6,509.4 799.6,509.4 799.6,488.4"/>' +
           '</g>' +
           '<polygon id="ehime" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="680.6,563.4 680.6,613.4 565.8,613.4 563.4,567.5 638.6,536.2 638.6,563.4"/>' +
           '<polygon id="kochi" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="770.6,627.5 770.6,662.4 730.6,662.4 711.1,641.4 667.5,641.4 646.9,662.4 565.9,662.4 565.8,613.4 680.6,613.4 680.6,608.1"/>' +
           '<polygon id="tokushima" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="770.6,573.4 770.6,627.5 680.6,608.1 680.6,573.4"/>' +
           '<rect id="saitama" class="prefecture" x="1108.6" y="381.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="130" height="37"/>' +
           '<rect id="tochigi" class="prefecture" x="1174.6" y="311.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="64" height="70"/>' +
           '<rect id="okayama" class="prefecture" x="663.6" y="448.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="67" height="61"/>' +
           '<rect id="oita" class="prefecture" x="473.6" y="505.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="48" height="69"/>' +
           '<polygon id="fukuoka" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="521.6,479.4 521.6,505.4 473.6,505.4 473.6,560.4 410.6,560.4 410.6,542.4 428.2,542.4 427.9,479.4"/>' +
           '<polygon id="nagasaki" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="381.6,542.4 385.8,542.4 385.8,569.4 344.6,569.4 344.6,479.4 381.6,479.4"/>' +
           '<rect id="kagawa" class="prefecture" x="680.6" y="541.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="90" height="32"/>' +
           '<polygon id="fukui" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="967.6,373.4 967.6,424.4 845.6,424.4 845.6,408.4 882.6,408.4 882.6,373.4"/>' +
           '<rect id="okinawa" class="prefecture" x="341.6" y="721.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="33" height="61"/>' +
           '<polygon id="miyazaki" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="521.6,574.4 521.6,583.8 514.6,595.2 514.6,660.4 498.2,660.4 473.6,660.4 473.6,574.4"/>' +
           '<polygon id="kumamoto" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="473.6,560.4 473.6,642.4 391.6,642.4 391.6,628.8 410.6,614.3 410.6,560.4"/>' +
           '<polygon id="saga" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="428.2,542.4 381.6,542.4 381.6,479.4 427.9,479.4"/>' +
           '<polygon id="kagoshima" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="514.6,660.4 514.6,684.8 476.2,720.4 463.6,720.4 463.6,684.4 427.6,684.4 427.6,704.4 391.6,704.4 391.6,642.4 473.6,642.4 473.6,660.4"/>' +
           '<rect id="nara" class="prefecture" x="859.6" y="488.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="44" height="91"/>' +
           '<rect id="shiga" class="prefecture" x="903.6" y="424.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="52" height="64"/>' +
           '<rect id="gunma" class="prefecture" x="1108.6" y="311.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="66" height="70"/>' +
           '<polygon id="nagano" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1108.6,311.4 1108.6,418.4 1094.6,418.4 1094.6,488.4 1024.6,488.4 1024.6,360.4 1051.6,360.4 1051.6,311.4"/>' +
           '<polygon id="gifu" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1024.6,360.4 1024.6,488.4 955.6,488.4 955.6,424.4 967.6,424.4 967.6,360.4"/>' +
           '<rect id="fukushima" class="prefecture" x="1157.6" y="245.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="139" height="66"/>' +
           '<g id="niigata" class="prefecture">' +
           '<polygon stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1157.6,210.4 1157.6,311.4 1051.6,311.4 1051.6,276.5 1148.5,210.4"/>' +
           '<polygon stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1071.5,221.4 1044.5,241.4 1025,241.4 1051.8,221.4"/>' +
           '</g>' +
           '<rect id="miyagi" class="prefecture" x="1222.6" y="157.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="74" height="88"/>' +
           '<polygon id="yamagata" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1222.6,157.4 1222.6,245.4 1157.6,245.4 1157.6,210.4 1148.5,210.4 1143.6,204.9 1143.6,157.4"/>' +
           '<polygon id="iwate" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1313.6,75.4 1313.6,137.1 1296.6,151.9 1296.6,157.4 1222.6,157.4 1222.6,75.4"/>' +
           '<rect id="akita" class="prefecture" x="1143.6" y="75.4" stroke-width="2" stroke="#333" fill="#fff" ' +
           'stroke-linejoin="round" width="79" height="82"/>' +
           '<polygon id="aomori" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1313.6,50.1 1313.6,75.4 1143.6,75.4 1143.6,8.4 1187.6,8.4 1187.6,25.4 1234.6,25.4 1234.6,50.1"/>' +
           // CORRECTED HOKKAIDO COORDINATES from original JapanEx - positioned in northwest
           '<polygon id="hokkaido" class="prefecture" stroke-width="2" stroke="#333" fill="#fff" stroke-linejoin="round" ' +
           'points="1442.6,-160.6 1442.6,-60.6 1387.3,-60.6 1315.9,-22 1255.6,-61.6 1218.6,-61.6 1218.6,-33.6 1143.6,-33.6 1143.6,-86.2 1195.6,-125.2 1195.6,-270.6 1263.4,-270.6 1397,-160.6"/>';
}

// Largest Inscribed Rectangle Algorithm for Non-Convex Polygons
// This implements a robust algorithm to find the largest inscribed rectangle within any polygon

// Parse SVG path/polygon points into coordinate arrays
function parseSVGPoints(pointsString) {
    if (!pointsString || typeof pointsString !== 'string') {
        return null;
    }
    
    try {
        // Handle both "x1,y1 x2,y2" and "x1 y1 x2 y2" formats
        const points = [];
        const coords = pointsString.trim().split(/[\s,]+/).filter(s => s.length > 0);
        
        for (let i = 0; i < coords.length; i += 2) {
            if (i + 1 < coords.length) {
                const x = parseFloat(coords[i]);
                const y = parseFloat(coords[i + 1]);
                
                if (!isNaN(x) && !isNaN(y)) {
                    points.push({ x: x, y: y });
                }
            }
        }
        
        return points.length >= 3 ? points : null;
    } catch (error) {
        console.error('Error parsing SVG points:', pointsString, error);
        return null;
    }
}

// Extract prefecture polygon coordinates from SVG
function getPrefecturePolygon(prefectureId) {
    const element = document.getElementById(prefectureId);
    if (!element) {
        console.warn(`Element not found: ${prefectureId}`);
        return null;
    }
    
    try {
        // Handle different SVG element types
        if (element.tagName === 'rect') {
            const x = parseFloat(element.getAttribute('x')) || 0;
            const y = parseFloat(element.getAttribute('y')) || 0;
            const width = parseFloat(element.getAttribute('width')) || 0;
            const height = parseFloat(element.getAttribute('height')) || 0;
            
            if (width <= 0 || height <= 0) {
                console.warn(`Invalid rectangle dimensions for ${prefectureId}: ${width}x${height}`);
                return null;
            }
            
            return [
                {x: x, y: y},
                {x: x + width, y: y},
                {x: x + width, y: y + height},
                {x: x, y: y + height}
            ];
        } else if (element.tagName === 'polygon') {
            const points = element.getAttribute('points');
            if (!points) {
                console.warn(`No points attribute found for polygon ${prefectureId}`);
                return null;
            }
            const parsed = parseSVGPoints(points);
            if (!parsed || parsed.length < 3) {
                console.warn(`Invalid polygon points for ${prefectureId}`);
                return null;
            }
            return parsed;
        } else if (element.tagName === 'g') {
            // Handle group elements (like hyogo) - find the largest child polygon/rect
            const children = element.querySelectorAll('polygon, rect');
            let largestArea = 0;
            let largestPolygon = null;
            
            children.forEach(child => {
                let polygon;
                if (child.tagName === 'rect') {
                    const x = parseFloat(child.getAttribute('x')) || 0;
                    const y = parseFloat(child.getAttribute('y')) || 0;
                    const width = parseFloat(child.getAttribute('width')) || 0;
                    const height = parseFloat(child.getAttribute('height')) || 0;
                    
                    if (width > 0 && height > 0) {
                        polygon = [
                            {x: x, y: y},
                            {x: x + width, y: y},
                            {x: x + width, y: y + height},
                            {x: x, y: y + height}
                        ];
                    }
                } else if (child.tagName === 'polygon') {
                    const points = child.getAttribute('points');
                    if (points) {
                        polygon = parseSVGPoints(points);
                    }
                }
                
                if (polygon && polygon.length >= 3) {
                    const area = calculatePolygonArea(polygon);
                    if (area > largestArea) {
                        largestArea = area;
                        largestPolygon = polygon;
                    }
                }
            });
            
            return largestPolygon;
        }
        
        console.warn(`Unsupported element type for ${prefectureId}: ${element.tagName}`);
        return null;
    } catch (error) {
        console.error(`Error parsing polygon for ${prefectureId}:`, error);
        return null;
    }
}

// Calculate polygon area using shoelace formula
function calculatePolygonArea(polygon) {
    let area = 0;
    const n = polygon.length;
    
    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += polygon[i].x * polygon[j].y;
        area -= polygon[j].x * polygon[i].y;
    }
    
    return Math.abs(area) / 2;
}

// Check if a point is inside a polygon using ray casting algorithm
function isPointInPolygon(point, polygon) {
    let inside = false;
    const n = polygon.length;
    
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const xi = polygon[i].x, yi = polygon[i].y;
        const xj = polygon[j].x, yj = polygon[j].y;
        
        if (((yi > point.y) !== (yj > point.y)) &&
            (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }
    }
    
    return inside;
}

// Fast inscribed rectangle algorithm optimized for performance
function findLargestInscribedRectangle(polygon) {
    if (!polygon || polygon.length < 3) {
        return null;
    }
    
    // Calculate bounding box
    const minX = Math.min(...polygon.map(p => p.x));
    const maxX = Math.max(...polygon.map(p => p.x));
    const minY = Math.min(...polygon.map(p => p.y));
    const maxY = Math.max(...polygon.map(p => p.y));
    
    const boundingWidth = maxX - minX;
    const boundingHeight = maxY - minY;
    
    if (boundingWidth <= 0 || boundingHeight <= 0) {
        return null;
    }
    
    let bestRect = null;
    let maxArea = 0;
    
    // Optimized resolution - much faster with good accuracy
    // Use larger steps for initial search, then refine
    const fastResolution = Math.max(2, Math.min(boundingWidth, boundingHeight) / 15);
    
    // Fast initial search with larger steps
    for (let x = minX; x <= maxX - fastResolution; x += fastResolution) {
        for (let y = minY; y <= maxY - fastResolution; y += fastResolution) {
            // Try fewer, smarter rectangle sizes (focus on square-ish rectangles)
            const maxWidth = maxX - x;
            const maxHeight = maxY - y;
            
            // Test key aspect ratios for efficiency
            const aspectRatios = [1, 1.5, 0.67, 2, 0.5]; // 1:1, 3:2, 2:3, 2:1, 1:2
            
            for (const ratio of aspectRatios) {
                for (let baseSize = fastResolution; baseSize <= Math.min(maxWidth, maxHeight); baseSize += fastResolution) {
                    let width, height;
                    if (ratio >= 1) {
                        width = Math.min(baseSize * ratio, maxWidth);
                        height = baseSize;
                    } else {
                        width = baseSize;
                        height = Math.min(baseSize / ratio, maxHeight);
                    }
                    
                    if (width > 0 && height > 0 && x + width <= maxX && y + height <= maxY) {
                        const rect = { x, y, width, height };
                        
                        if (fastRectangleTest(rect, polygon)) {
                            const area = width * height;
                            if (area > maxArea) {
                                maxArea = area;
                                bestRect = rect;
                            }
                        }
                    }
                }
            }
        }
    }
    
    // Fine-tune the best rectangle found
    if (bestRect) {
        bestRect = fastRefineRectangle(bestRect, polygon);
    }
    
    return bestRect;
}

// Faster rectangle testing - only test corners and center
function fastRectangleTest(rect, polygon) {
    // Quick corner test
    const corners = [
        {x: rect.x, y: rect.y},
        {x: rect.x + rect.width, y: rect.y},
        {x: rect.x + rect.width, y: rect.y + rect.height},
        {x: rect.x, y: rect.y + rect.height},
        {x: rect.x + rect.width/2, y: rect.y + rect.height/2} // center
    ];
    
    return corners.every(corner => isPointInPolygon(corner, polygon));
}

// Faster refinement process
function fastRefineRectangle(initialRect, polygon) {
    let bestRect = {...initialRect};
    let maxArea = initialRect.width * initialRect.height;
    
    const refinement = 1; // Faster refinement step
    
    // Try small expansions in each direction
    const expansions = [
        {dx: -refinement, dy: 0, dw: refinement, dh: 0},
        {dx: 0, dy: -refinement, dw: 0, dh: refinement},
        {dx: 0, dy: 0, dw: refinement, dh: 0},
        {dx: 0, dy: 0, dw: 0, dh: refinement}
    ];
    
    // Single iteration for speed
    for (const exp of expansions) {
        const testRect = {
            x: bestRect.x + exp.dx,
            y: bestRect.y + exp.dy,
            width: bestRect.width + exp.dw,
            height: bestRect.height + exp.dh
        };
        
        if (testRect.width > 0 && testRect.height > 0 && 
            fastRectangleTest(testRect, polygon)) {
            const area = testRect.width * testRect.height;
            if (area > maxArea) {
                maxArea = area;
                bestRect = testRect;
            }
        }
    }
    
    return bestRect;
}

// Fast optimization: check if polygon is a simple rectangle
function isSimpleRectangle(polygon) {
    if (polygon.length !== 4) return false;
    
    // Check if we have right angles (simple axis-aligned rectangle)
    const p = polygon;
    return (p[0].x === p[3].x && p[1].x === p[2].x && 
            p[0].y === p[1].y && p[2].y === p[3].y);
}

// Convert simple rectangle polygon to rect object
function polygonToRect(polygon) {
    const minX = Math.min(...polygon.map(p => p.x));
    const maxX = Math.max(...polygon.map(p => p.x));
    const minY = Math.min(...polygon.map(p => p.y));
    const maxY = Math.max(...polygon.map(p => p.y));
    
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}

// Calculate optimal text positioning for prefecture
function calculatePrefectureBounds(prefectureId) {
    const prefecture = prefectures[prefectureId];
    if (!prefecture) {
        console.warn(`No prefecture data found for: ${prefectureId}`);
        return null;
    }
    
    const kanji = prefecture.nameJA;
    if (!kanji) {
        console.warn(`No Japanese name found for prefecture: ${prefectureId}`);
        return null;
    }

    try {
        // Get actual polygon coordinates from SVG
        const polygon = getPrefecturePolygon(prefectureId);
        if (!polygon || polygon.length === 0) {
            console.error(`Failed to get polygon for prefecture: ${prefectureId}`);
            return null;
        }

        // Quick optimization: if it's a simple rectangle (4 points), use it directly
        let rect;
        if (polygon.length === 4 && isSimpleRectangle(polygon)) {
            rect = polygonToRect(polygon);
        } else {
            // Find largest inscribed rectangle for complex shapes
            rect = findLargestInscribedRectangle(polygon);
        }
        if (!rect || rect.width <= 0 || rect.height <= 0) {
            console.error(`Failed to find valid rectangle for prefecture: ${prefectureId}. Polygon:`, polygon);
            return null;
        }

        // Calculate center of the rectangle
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    // Estimate text dimensions
    const fontSize = 20;
    const charWidth = fontSize * 0.8;
    const charHeight = fontSize;
    
    // Calculate text dimensions for both orientations
    const horizontalWidth = kanji.length * charWidth;
    const horizontalHeight = charHeight;
    const verticalWidth = charWidth;
    const verticalHeight = kanji.length * charHeight;

        // Determine best orientation with margin for readability
        // Special handling for Kochi (wide, thin shape)
        let margin = 0.8; // 20% margin around text
        if (prefectureId === 'kochi') {
            margin = 0.6; // Tighter margin for Kochi to prevent border crossing
        }
        
        const horizontalFits = horizontalWidth <= rect.width * margin && 
                              horizontalHeight <= rect.height * margin;
        const verticalFits = verticalWidth <= rect.width * margin && 
                            verticalHeight <= rect.height * margin;
        
        let isVertical = false;
        if (horizontalFits && verticalFits) {
            // Both fit, choose based on rectangle aspect ratio and text length
            isVertical = rect.height > rect.width * 1.2 || kanji.length > 2;
        } else if (verticalFits && !horizontalFits) {
            isVertical = true;
        } else if (!verticalFits && !horizontalFits) {
            // Neither fits perfectly, choose based on better fit
            const horizontalRatio = Math.min(rect.width / horizontalWidth, rect.height / horizontalHeight);
            const verticalRatio = Math.min(rect.width / verticalWidth, rect.height / verticalHeight);
            isVertical = verticalRatio > horizontalRatio;
        }
        
        // Special adjustment for Kochi - force smaller font if needed
        if (prefectureId === 'kochi' && !horizontalFits && !verticalFits) {
            // For Kochi, prefer horizontal with smaller effective size
            isVertical = false;
        }

    return {
        kanji: kanji,
        x: centerX,
        y: centerY,
        vertical: isVertical,
            rect: rect,
            polygon: polygon // Include polygon for debugging
        };
    } catch (error) {
        console.error(`Error calculating bounds for ${prefectureId}:`, error);
        return null;
    }
}

// Generate Kanji labels using calculated bounding rectangles. Each prefecture's
// text is wrapped in a <g class="pref-label" data-pref="id"> so CSS can flip the
// label colour by visit level (styling lives in style.css, not inline here).
function getJapanExKanjiLabels() {
    const FONT_SIZE = '20';
    const VERTICAL_SPACING = 22;

    let labelsSVG = '';

    Object.keys(prefectures).forEach(function(prefId) {
        const labelData = calculatePrefectureBounds(prefId);
        if (!labelData) return;

        let inner = '';
        if (labelData.vertical) {
            const chars = labelData.kanji.split('');
            chars.forEach(function(char, index) {
                const yPos = labelData.y + (index * VERTICAL_SPACING) - ((chars.length - 1) * VERTICAL_SPACING / 2);
                inner += '<text x="' + labelData.x + '" y="' + yPos + '" font-size="' + FONT_SIZE + '" ' +
                         'text-anchor="middle" dominant-baseline="middle" pointer-events="none">' + char + '</text>';
            });
        } else {
            inner += '<text x="' + labelData.x + '" y="' + labelData.y + '" font-size="' + FONT_SIZE + '" ' +
                     'text-anchor="middle" dominant-baseline="middle" pointer-events="none">' + labelData.kanji + '</text>';
        }

        labelsSVG += '<g class="pref-label" data-pref="' + prefId + '">' + inner + '</g>';
    });

    return labelsSVG;
}

// Setup prefecture interactions. The document-level click delegation is
// registered once (guarded) so rebuilding the map never stacks duplicate
// handlers; per-element hover/keyboard listeners are (re)bound to the shapes.
let prefectureClickBound = false;

function setupPrefectureInteractions() {
    if (!prefectureClickBound) {
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (target.closest('#area')) {
                if (target.id === '') target = target.parentNode;
                if (target.classList && target.classList.contains('prefecture')) {
                    selectPrefecture(target.id);
                }
            }
        });
        prefectureClickBound = true;
    }

    // Hover tooltips + keyboard accessibility (focusable, Enter/Space to open)
    document.querySelectorAll('.prefecture').forEach(prefecture => {
        prefecture.addEventListener('mouseenter', showTooltip);
        prefecture.addEventListener('mouseleave', hideTooltip);
        prefecture.addEventListener('mousemove', moveTooltip);

        prefecture.setAttribute('tabindex', '0');
        prefecture.setAttribute('role', 'button');
        prefecture.setAttribute('aria-label', getLocalizedPrefectureName(prefecture.id));
        prefecture.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectPrefecture(prefecture.id);
            }
        });
    });
}



// Tooltip functions — desktop hover shows a compact history preview so the
// map can be explored without opening anything (touch devices tap instead).
function showTooltip(event) {
    const prefecture = event.target.closest('.prefecture');
    if (!prefecture || !prefecture.id) return;

    // Get localized prefecture name
    const name = getLocalizedPrefectureName(prefecture.id);
    const visits = visitData[prefecture.id] || [];

    let summary;
    if (visits.length === 0) {
        summary = t('no_visits_recorded');
    } else {
        const latest = visits.reduce((a, b) =>
            (b.year > a.year || (b.year === a.year && b.month > a.month)) ? b : a);
        summary = visits.length + ' ' + (visits.length === 1 ? t('visit_singular') : t('visits')) +
                  ' · ' + getLocalizedMonth(latest.month) + ' ' + latest.year;
    }

    tooltip.innerHTML = '<strong>' + escapeHtml(name) + '</strong><br>' + escapeHtml(summary);
    tooltip.classList.add('show');
    moveTooltip(event);
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

function moveTooltip(event) {
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 10) + 'px';
}

// Prefecture Selection — click/tap opens the history dialog; adding a visit
// is an explicit button inside it (same interaction on desktop and touch).
function selectPrefecture(prefectureId) {
    currentPrefecture = prefectureId;

    // Mark the selected prefecture (rust outline via CSS) while its dialogs
    // are open; cleared again by clearSelectionWhenDialogsClosed().
    document.querySelectorAll('.prefecture[data-selected]').forEach(el => el.removeAttribute('data-selected'));
    const selectedEl = document.getElementById(prefectureId);
    if (selectedEl) selectedEl.setAttribute('data-selected', 'true');
    hideTooltip();

    // Update prefecture info panel
    updatePrefectureInfo(prefectureId);

    showPrefectureDetails(prefectureId);
}

function showPrefectureDetails(prefectureId) {
    document.getElementById('details-prefecture-name').textContent = getLocalizedPrefectureName(prefectureId);
    document.getElementById('details-content').innerHTML = renderVisitListHTML(prefectureId);
    document.getElementById('detailsModal').showModal();
}

// "+ Add Visit" button inside the details dialog → swap to the add-visit form.
// The add dialog is opened BEFORE the details dialog closes so the selection
// outline survives the hand-off (see clearSelectionWhenDialogsClosed).
function openAddVisit() {
    if (!currentPrefecture) return;
    document.getElementById('modal-prefecture-name').textContent = getLocalizedPrefectureName(currentPrefecture);
    document.getElementById('visitModal').showModal();
    document.getElementById('detailsModal').close();
}

// The rust selection outline means "a dialog about this prefecture is open".
// Once both dialogs are closed there is nothing selected any more, so drop the
// marker — otherwise a stale accent border lingers on the map indefinitely.
function clearSelectionWhenDialogsClosed() {
    if (document.getElementById('detailsModal').open) return;
    if (document.getElementById('visitModal').open) return;
    document.querySelectorAll('.prefecture[data-selected]').forEach(el => el.removeAttribute('data-selected'));
}

// Shared visit-list renderer used by the side panel and the details dialog.
// Sorts in place so removeVisit() indexes always match the rendered order.
function renderVisitListHTML(prefectureId) {
    const visits = visitData[prefectureId] || [];

    if (visits.length === 0) {
        return '<p class="muted">' + t('no_visits_recorded') + '</p>';
    }

    let html = '<div class="prefecture-visits">';
    visits.sort((a, b) => new Date(a.year, a.month) - new Date(b.year, b.month));

    visits.forEach((visit, index) => {
        const levelText = visit.level === 1 ? t('visited_option') : t('stayed_option');
        const levelClass = visit.level === 1 ? 'visited' : 'stayed';
        const monthName = getLocalizedMonth(visit.month);

        html += '<div class="visit-item">' +
                '<div class="visit-info">' +
                '<span class="pill ' + levelClass + '"><span class="dot"></span>' + levelText + '</span>' +
                (visit.roadTrip ? '<span class="pill road-trip">' + t('road_trip_text') + '</span>' : '') +
                '<span class="visit-date">' + monthName + ' ' + visit.year + '</span>' +
                '</div>' +
                '<button class="icon-btn" aria-label="Remove" data-remove-visit data-pref="' + prefectureId + '" data-index="' + index + '">' +
                '<svg class="ic" aria-hidden="true"><use href="#i-delete"/></svg>' +
                '</button>' +
                '</div>';

        if (visit.notes) {
            html += '<div class="visit-notes">' + escapeHtml(visit.notes) + '</div>';
        }
    });

    html += '</div>';
    return html;
}

function updatePrefectureInfo(prefectureId) {
    const infoPanel = document.getElementById('prefecture-info');
    infoPanel.innerHTML = '<h3>' + escapeHtml(getLocalizedPrefectureName(prefectureId)) + '</h3>' +
                          renderVisitListHTML(prefectureId);
}

// Visit Management
function addVisit() {
    if (!currentPrefecture) return;
    
    const level = parseInt(document.getElementById('visit-level').value);
    const year = parseInt(document.getElementById('visit-year').value);
    const month = parseInt(document.getElementById('visit-month').value);
    const roadTrip = document.getElementById('road-trip-check').checked;
    const notes = document.getElementById('visit-notes').value.trim();
    
    // Validate input
    if (!year || !month || level < 1 || level > 2) {
        alert(t('fill_required_fields'));
        return;
    }
    
    // Initialize prefecture data if it doesn't exist
    if (!visitData[currentPrefecture]) {
        visitData[currentPrefecture] = [];
    }
    
    // Add the visit
    visitData[currentPrefecture].push({
        level,
        year,
        month,
        roadTrip,
        notes,
        timestamp: Date.now()
    });
    
    // Save data and update UI
    saveData();
    updateMapColors();
    updatePrefectureInfo(currentPrefecture);
    
    // Close modal and reset form
    document.getElementById('visitModal').close();
    document.getElementById('visit-form').reset();
    document.getElementById('visit-year').value = new Date().getFullYear();
    document.getElementById('visit-month').value = new Date().getMonth() + 1;
}

function removeVisit(prefectureId, index) {
    if (confirm(t('remove_visit_confirm'))) {
        visitData[prefectureId].splice(index, 1);
        
        // Remove prefecture data if no visits remain
        if (visitData[prefectureId].length === 0) {
            delete visitData[prefectureId];
        }
        
        saveData();
        updateMapColors();
        updatePrefectureInfo(prefectureId);

        // Deleting from the details dialog: re-render its list in place
        if (document.getElementById('detailsModal').open) {
            document.getElementById('details-content').innerHTML = renderVisitListHTML(prefectureId);
        }
    }
}

// Map Color Updates — set data-* attributes; all colour comes from style.css
// tokens (chart palette), so the map is theme-aware with no hardcoded hex here.
function updateMapColors() {
    Object.keys(prefectures).forEach(prefectureId => {
        const element = document.getElementById(prefectureId);
        if (!element) return;

        const visits = visitData[prefectureId] || [];
        let level = 0;
        let hasRoadTrip = false;
        if (visits.length > 0) {
            level = Math.max(...visits.map(visit => visit.level));
            hasRoadTrip = visits.some(visit => visit.roadTrip);
        }

        element.setAttribute('data-level', level);
        if (hasRoadTrip) {
            element.setAttribute('data-roadtrip', 'true');
        } else {
            element.removeAttribute('data-roadtrip');
        }

        // Mirror the level onto the matching label group so the kanji colour
        // flips for contrast against the fill (see .pref-label rules in CSS).
        const label = document.querySelector('.pref-label[data-pref="' + prefectureId + '"]');
        if (label) label.setAttribute('data-level', level);
    });
}

// Statistics
function updateStatistics() {
    let visitedCount = 0;
    let stayedCount = 0;
    let roadTripCount = 0;
    let totalVisits = 0;
    
    Object.values(visitData).forEach(visits => {
        totalVisits += visits.length;
        
        const maxLevel = Math.max(...visits.map(visit => visit.level));
        if (maxLevel >= 1) visitedCount++;
        if (maxLevel >= 2) stayedCount++;
        
        roadTripCount += visits.filter(visit => visit.roadTrip).length;
    });
    
    document.getElementById('visited-count').textContent = visitedCount;
    document.getElementById('stayed-count').textContent = stayedCount;
    document.getElementById('roadtrip-count').textContent = roadTripCount;
    document.getElementById('total-visits').textContent = totalVisits;
}

// Timeline View
function showTimeline() {
    const modal = document.getElementById('timelineModal');
    const content = document.getElementById('timeline-content');
    
    // Collect all visits
    const allVisits = [];
    Object.keys(visitData).forEach(prefectureId => {
        visitData[prefectureId].forEach(visit => {
            allVisits.push({
                ...visit,
                prefecture: prefectures[prefectureId].name,
                prefectureId
            });
        });
    });
    
    // Sort by date
    allVisits.sort((a, b) => new Date(a.year, a.month - 1) - new Date(b.year, b.month - 1));
    
    if (allVisits.length === 0) {
        content.innerHTML = '<p class="muted">' + t('no_visits_yet') + '</p>';
    } else {
        let html = '<div class="timeline">';
        
        allVisits.forEach(visit => {
            const monthName = getLocalizedMonth(visit.month);
            const levelText = visit.level === 1 ? t('visited_option') : t('stayed_option');
            const levelClass = visit.level === 1 ? 'visited' : 'stayed';
            const roadTripClass = visit.roadTrip ? ' road-trip' : '';
            const prefectureName = getLocalizedPrefectureName(visit.prefectureId);
            
            html += '<div class="timeline-item ' + levelClass + roadTripClass + '">' +
                    '<div class="timeline-date">' + monthName + ' ' + visit.year + '</div>' +
                    '<div class="timeline-prefecture">' + escapeHtml(prefectureName) + '</div>' +
                    '<div class="timeline-details">' +
                    levelText + (visit.roadTrip ? ' · ' + t('road_trip_text') : '') +
                    (visit.notes ? '<br><em>' + escapeHtml(visit.notes) + '</em>' : '') +
                    '</div>' +
                    '</div>';
        });

        html += '</div>';
        content.innerHTML = html;
    }

    modal.showModal();
}

// Statistics View
function showStatistics() {
    const modal = document.getElementById('statisticsModal');
    const content = document.getElementById('statistics-content');
    
    // Calculate detailed statistics
    const stats = calculateDetailedStatistics();
    
    let regionStatsHTML = '';
    Object.entries(stats.regionStats).forEach(function([region, data]) {
        const localizedRegionName = getLocalizedRegionName(region);
        regionStatsHTML += '<div class="stat-item">' +
                          '<span>' + localizedRegionName + ':</span>' +
                          '<strong>' + data.visited + '/' + data.total + '</strong>' +
                          '</div>';
    });
    
    const html = '<div class="stats-grid">' +
        '<div>' +
        '<h3>' + t('prefecture_coverage') + '</h3>' +
        '<div class="stats-block">' +
        '<div class="stat-item">' +
        '<span>' + t('total_prefectures') + '</span>' +
        '<strong>47</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('visited') + '</span>' +
        '<strong>' + stats.visitedCount + ' (' + ((stats.visitedCount/47)*100).toFixed(1) + '%)</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('stayed') + '</span>' +
        '<strong>' + stats.stayedCount + ' (' + ((stats.stayedCount/47)*100).toFixed(1) + '%)</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('never_been_count') + '</span>' +
        '<strong>' + (47 - stats.visitedCount) + '</strong>' +
        '</div>' +
        '</div>' +
        '<h3>' + t('travel_patterns') + '</h3>' +
        '<div class="stats-block">' +
        '<div class="stat-item">' +
        '<span>' + t('total_visits') + '</span>' +
        '<strong>' + stats.totalVisits + '</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('road_trips') + '</span>' +
        '<strong>' + stats.roadTripCount + '</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('avg_visits_per_prefecture') + '</span>' +
        '<strong>' + stats.avgVisitsPerPrefecture + '</strong>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div>' +
        '<h3>' + t('regional_coverage') + '</h3>' +
        '<div class="stats-block">' +
        regionStatsHTML +
        '</div>' +
        '<h3>' + t('timeline_header') + '</h3>' +
        '<div class="stats-block">' +
        '<div class="stat-item">' +
        '<span>' + t('first_visit') + '</span>' +
        '<strong>' + stats.firstVisit + '</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('latest_visit') + '</span>' +
        '<strong>' + stats.latestVisit + '</strong>' +
        '</div>' +
        '<div class="stat-item">' +
        '<span>' + t('most_active_year') + '</span>' +
        '<strong>' + stats.mostActiveYear + '</strong>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    content.innerHTML = html;
    modal.showModal();
}

function calculateDetailedStatistics() {
    let visitedCount = 0;
    let stayedCount = 0;
    let roadTripCount = 0;
    let totalVisits = 0;
    const regionStats = {};
    const yearStats = {};
    const allVisits = [];
    
    // Initialize region stats
    Object.values(prefectures).forEach(pref => {
        if (!regionStats[pref.region]) {
            regionStats[pref.region] = { visited: 0, total: 0 };
        }
        regionStats[pref.region].total++;
    });
    
    // Calculate statistics
    Object.keys(visitData).forEach(prefectureId => {
        const visits = visitData[prefectureId];
        const prefecture = prefectures[prefectureId];
        
        totalVisits += visits.length;
        
        const maxLevel = Math.max(...visits.map(visit => visit.level));
        if (maxLevel >= 1) {
            visitedCount++;
            regionStats[prefecture.region].visited++;
        }
        if (maxLevel >= 2) stayedCount++;
        
        visits.forEach(visit => {
            if (visit.roadTrip) roadTripCount++;
            
            // Year statistics
            yearStats[visit.year] = (yearStats[visit.year] || 0) + 1;
            
            allVisits.push(visit);
        });
    });
    
    // Sort visits by date
    allVisits.sort((a, b) => new Date(a.year, a.month - 1) - new Date(b.year, b.month - 1));
    
    const firstVisit = allVisits.length > 0 ? 
        getLocalizedMonth(allVisits[0].month) + ' ' + allVisits[0].year : t('none');
    
    const latestVisit = allVisits.length > 0 ? 
        getLocalizedMonth(allVisits[allVisits.length - 1].month) + ' ' + allVisits[allVisits.length - 1].year : t('none');
    
    const mostActiveYear = Object.keys(yearStats).reduce((a, b) => yearStats[a] > yearStats[b] ? a : b, Object.keys(yearStats)[0]) || t('none');
    
    return {
        visitedCount,
        stayedCount,
        roadTripCount,
        totalVisits,
        regionStats,
        avgVisitsPerPrefecture: visitedCount > 0 ? (totalVisits / visitedCount).toFixed(1) : '0',
        firstVisit,
        latestVisit,
        mostActiveYear: mostActiveYear !== t('none') ? mostActiveYear + ' (' + yearStats[mostActiveYear] + ' ' + t('visits') + ')' : t('none')
    };
}