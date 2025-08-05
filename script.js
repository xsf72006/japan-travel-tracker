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
        'made_with_love': 'Made with ❤️ for Japan travelers',
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
        'made_with_love': '以 ❤️ 為日本旅行者製作',
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
    
    // Update document title
    document.title = t['page_title'];
    
    // Update months in dropdowns
    updateMonthOptions();
    
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
    loadLanguagePreference();
    loadData();
    createJapanMap();
    updateLanguage(); // Apply language after everything is loaded
    
    // Set default year to current year
    document.getElementById('visit-year').value = new Date().getFullYear();
    document.getElementById('visit-month').value = new Date().getMonth() + 1;
    
    // Additional timing fix - recalculate positions after a short delay
    // This ensures SVG is fully rendered before algorithm runs
    setTimeout(() => {
        console.log('Running delayed recalculation to ensure SVG is ready...');
        const labelsContainer = document.querySelector('#labels');
        if (labelsContainer) {
            // Clear current labels and regenerate
            labelsContainer.innerHTML = getJapanExKanjiLabels();
            console.log('Labels regenerated after delay.');
        }
    }, 500);
});

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
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'japan-travel-data.json';
    link.click();
}

function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                visitData = JSON.parse(e.target.result);
                saveData();
                updateMapColors();
                updateStatistics();
                alert(t('data_imported_successfully'));
            } catch (error) {
                alert(t('error_importing_data') + ' ' + error.message);
            }
        };
        reader.readAsText(file);
    }
}

// Map Creation - Based on original JapanEx implementation
// Source: https://github.com/ukyouz/JapanEx (by Chih-Hung Cheng @ukyouz)
function createJapanMap() {
    const container = document.getElementById('japan-map-container');
    
    // Use string concatenation for Safari compatibility (avoiding template literals)
    const svgContent = '<svg version="1.1" id="japan-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
        'viewBox="280 -350 1220 1220" style="enable-background:new 280 -350 1220 1220;" xml:space="preserve">' +
        '<g id="background">' +
        '<rect x="318" y="-317.5" fill="#f8f9fa" width="1147.5" height="1147.5"/>' +
        '</g>' +
        '<g id="area">' +
        getJapanExSVGPrefectures() +
        '</g>' +
        '<g id="labels">' +
        getJapanExKanjiLabels() +
        '</g>' +
        '</svg>';
    
    container.innerHTML = svgContent;
    
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

// Check if a rectangle is completely inside a polygon
function isRectangleInPolygon(rect, polygon) {
    // Check all four corners of the rectangle
    const corners = [
        {x: rect.x, y: rect.y},
        {x: rect.x + rect.width, y: rect.y},
        {x: rect.x + rect.width, y: rect.y + rect.height},
        {x: rect.x, y: rect.y + rect.height}
    ];
    
    // All corners must be inside the polygon
    const allInside = corners.every(corner => isPointInPolygon(corner, polygon));
    
    if (!allInside) {
        return false;
    }
    
    // Additional check: test center point and some edge points for more accuracy
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    const edgePoints = [
        {x: centerX, y: rect.y}, // top center
        {x: centerX, y: rect.y + rect.height}, // bottom center
        {x: rect.x, y: centerY}, // left center
        {x: rect.x + rect.width, y: centerY}, // right center
        {x: centerX, y: centerY} // center
    ];
    
    return edgePoints.every(point => isPointInPolygon(point, polygon));
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

// Enhanced debugging function to understand why algorithm fails
function debugPrefectureDetails(prefectureId) {
    console.log(`\n=== Debugging ${prefectureId} ===`);
    
    const element = document.getElementById(prefectureId);
    if (!element) {
        console.error(`Element not found: ${prefectureId}`);
        return;
    }
    
    console.log(`Element type: ${element.tagName}`);
    console.log(`Element attributes:`, element.attributes);
    
    if (element.tagName === 'polygon') {
        const points = element.getAttribute('points');
        console.log(`Points attribute: "${points}"`);
        const parsed = parseSVGPoints(points);
        console.log(`Parsed points (${parsed ? parsed.length : 0}):`, parsed);
    } else if (element.tagName === 'rect') {
        const x = element.getAttribute('x');
        const y = element.getAttribute('y');
        const width = element.getAttribute('width');
        const height = element.getAttribute('height');
        console.log(`Rectangle: x=${x}, y=${y}, w=${width}, h=${height}`);
    } else if (element.tagName === 'g') {
        const children = element.querySelectorAll('polygon, rect');
        console.log(`Group with ${children.length} children:`, children);
    }
    
    const polygon = getPrefecturePolygon(prefectureId);
    console.log(`Extracted polygon (${polygon ? polygon.length : 0} points):`, polygon);
    
    if (polygon) {
        const rect = findLargestInscribedRectangle(polygon);
        console.log(`Inscribed rectangle:`, rect);
    }
}

// Generate Kanji labels using calculated bounding rectangles
function getJapanExKanjiLabels() {
    const startTime = performance.now();
    
    const FONT_SIZE = '20';
    const VERTICAL_SPACING = 22;
    
    let labelsSVG = '';
    
    // Add debugging rectangle visualization (set to false for production)
    const DEBUG_RECTANGLES = false;
    
    let successCount = 0;
    let failCount = 0;
    
    // Generate labels for all prefectures using intelligent positioning
    Object.keys(prefectures).forEach(function(prefId) {
        const labelData = calculatePrefectureBounds(prefId);
        if (!labelData) {
            console.warn(`No label data for ${prefId}`);
            failCount++;
            return;
        }
        
        successCount++;
        
        // Add debugging rectangle visualization if enabled
        if (DEBUG_RECTANGLES && labelData.rect) {
            labelsSVG += '<rect x="' + labelData.rect.x + '" y="' + labelData.rect.y + '" ' +
                        'width="' + labelData.rect.width + '" height="' + labelData.rect.height + '" ' +
                        'fill="none" stroke="red" stroke-width="1" stroke-dasharray="2,2" opacity="0.7" ' +
                        'pointer-events="none"/>';
        }
        
        if (labelData.vertical) {
            // Vertical text layout
            const chars = labelData.kanji.split('');
            chars.forEach(function(char, index) {
                const yPos = labelData.y + (index * VERTICAL_SPACING) - ((chars.length - 1) * VERTICAL_SPACING / 2);
                labelsSVG += '<text x="' + labelData.x + '" y="' + yPos + '" ' +
                           'font-family="YuGothic, Meiryo, Hiragino Sans, sans-serif" font-size="' + FONT_SIZE + '" font-weight="600" ' +
                           'fill="#222" text-anchor="middle" dominant-baseline="middle" ' +
                           'pointer-events="none">' + char + '</text>';
            });
        } else {
            // Horizontal text
            labelsSVG += '<text x="' + labelData.x + '" y="' + labelData.y + '" ' +
                        'font-family="YuGothic, Meiryo, Hiragino Sans, sans-serif" font-size="' + FONT_SIZE + '" font-weight="600" ' +
                        'fill="#222" text-anchor="middle" dominant-baseline="middle" ' +
                        'pointer-events="none">' + labelData.kanji + '</text>';
        }
    });
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log(`Label generation complete: ${successCount} success, ${failCount} failed in ${duration.toFixed(1)}ms`);
    if (failCount > 0) {
        console.warn(`${failCount} prefectures failed to generate labels.`);
    }
    
    return labelsSVG;
}

// Function to refresh map with algorithm after page is fully loaded
function refreshMapWithAlgorithm() {
    console.log('Refreshing map with inscribed rectangle algorithm...');
    
    // Wait a moment to ensure DOM is ready
    setTimeout(() => {
        createJapanMap();
        console.log('Map refreshed. Check if Kanji names now appear correctly.');
    }, 100);
}

// Function to force recalculation of all text positions
function recalculateAllPositions() {
    console.log('=== Recalculating All Text Positions ===');
    
    // Clear any cached results and recalculate
    Object.keys(prefectures).forEach(prefId => {
        console.log(`\n--- ${prefId} ---`);
        const result = calculatePrefectureBounds(prefId);
        if (result) {
            console.log(`✓ Success: ${result.kanji} at (${result.x.toFixed(1)}, ${result.y.toFixed(1)}) - ${result.vertical ? 'vertical' : 'horizontal'}`);
        } else {
            console.log(`✗ Failed to calculate position`);
            debugPrefectureDetails(prefId);
        }
    });
    
    // Regenerate the map
    createJapanMap();
}

// Debugging function to enable rectangle visualization
function enableRectangleDebugging() {
    // Temporarily replace the function to show rectangles
    const originalFunction = getJapanExKanjiLabels;
    
    window.getJapanExKanjiLabels = function() {
        const FONT_SIZE = '20';
        const VERTICAL_SPACING = 22;
        
        let labelsSVG = '';
        
        // Generate labels for all prefectures with rectangle debugging enabled
    Object.keys(prefectures).forEach(function(prefId) {
        const labelData = calculatePrefectureBounds(prefId);
        if (!labelData) return;
            
            // Add debugging rectangle visualization
            if (labelData.rect) {
                labelsSVG += '<rect x="' + labelData.rect.x + '" y="' + labelData.rect.y + '" ' +
                            'width="' + labelData.rect.width + '" height="' + labelData.rect.height + '" ' +
                            'fill="rgba(255,0,0,0.1)" stroke="red" stroke-width="1" stroke-dasharray="3,3" ' +
                            'pointer-events="none"/>';
            }
        
        if (labelData.vertical) {
            // Vertical text layout
            const chars = labelData.kanji.split('');
            chars.forEach(function(char, index) {
                const yPos = labelData.y + (index * VERTICAL_SPACING) - ((chars.length - 1) * VERTICAL_SPACING / 2);
                labelsSVG += '<text x="' + labelData.x + '" y="' + yPos + '" ' +
                           'font-family="YuGothic, Meiryo, Hiragino Sans, sans-serif" font-size="' + FONT_SIZE + '" font-weight="600" ' +
                           'fill="#222" text-anchor="middle" dominant-baseline="middle" ' +
                           'pointer-events="none">' + char + '</text>';
            });
        } else {
            // Horizontal text
            labelsSVG += '<text x="' + labelData.x + '" y="' + labelData.y + '" ' +
                        'font-family="YuGothic, Meiryo, Hiragino Sans, sans-serif" font-size="' + FONT_SIZE + '" font-weight="600" ' +
                        'fill="#222" text-anchor="middle" dominant-baseline="middle" ' +
                        'pointer-events="none">' + labelData.kanji + '</text>';
        }
    });
    
    return labelsSVG;
    };
    
    // Recreate the map to show rectangles
    createJapanMap();
    console.log('Rectangle debugging enabled. Call disableRectangleDebugging() to turn off.');
}

// Function to disable rectangle debugging
function disableRectangleDebugging() {
    // Restore original function
    delete window.getJapanExKanjiLabels;
    createJapanMap();
    console.log('Rectangle debugging disabled.');
}

// Console testing function for individual prefectures
function testPrefecture(prefectureId) {
    const result = calculatePrefectureBounds(prefectureId);
    if (result) {
        console.log(`Prefecture: ${prefectureId}`);
        console.log(`Kanji: ${result.kanji}`);
        console.log(`Orientation: ${result.vertical ? 'Vertical' : 'Horizontal'}`);
        console.log(`Center: (${result.x.toFixed(1)}, ${result.y.toFixed(1)})`);
        console.log(`Rectangle: x=${result.rect.x.toFixed(1)}, y=${result.rect.y.toFixed(1)}, w=${result.rect.width.toFixed(1)}, h=${result.rect.height.toFixed(1)}`);
        console.log(`Area: ${(result.rect.width * result.rect.height).toFixed(1)}`);
        if (result.fallback) {
            console.log('Note: Using fallback calculation');
        }
        return result;
    } else {
        console.log(`Failed to calculate bounds for ${prefectureId}`);
        return null;
    }
}

// Debug function to test all prefectures
function debugAllPrefectures() {
    console.log('=== Testing all prefectures ===');
    let successCount = 0;
    let failCount = 0;
    
    Object.keys(prefectures).forEach(prefId => {
        const result = calculatePrefectureBounds(prefId);
        if (result) {
            successCount++;
            console.log(`✓ ${prefId}: Success - area ${(result.rect.width * result.rect.height).toFixed(1)}`);
        } else {
            failCount++;
            console.log(`✗ ${prefId}: FAILED`);
            // Auto-debug failed prefectures
            debugPrefectureDetails(prefId);
        }
    });
    
    console.log(`\n=== Summary ===`);
    console.log(`Algorithm success: ${successCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Total: ${successCount + failCount}`);
    
    // If we have failures, suggest debugging
    if (failCount > 0) {
        console.log(`\nTo debug individual failures, use: debugPrefectureDetails('prefecture_id')`);
    }
}

// Setup prefecture interactions using JapanEx approach
function setupPrefectureInteractions() {
    // Use event delegation like the original JapanEx
    document.addEventListener('click', (e) => {
        let target = e.target;
        
        // Handle prefecture clicks (area group)
        if (target.closest('#area')) {
            // Get the prefecture element
            if (target.id === '') target = target.parentNode;
            if (target.classList && target.classList.contains('prefecture')) {
                selectPrefecture(target.id);
            }
        }
    });
    
    // Add hover effects
    document.querySelectorAll('.prefecture').forEach(prefecture => {
        prefecture.addEventListener('mouseenter', showTooltip);
        prefecture.addEventListener('mouseleave', hideTooltip);
        prefecture.addEventListener('mousemove', moveTooltip);
    });
}



// Tooltip functions
function showTooltip(event) {
    const prefecture = event.target.closest('.prefecture');
    if (!prefecture || !prefecture.id) return;
    
    // Get localized prefecture name
    const name = getLocalizedPrefectureName(prefecture.id);
    
    tooltip.textContent = name;
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

// Prefecture Selection
function selectPrefecture(prefectureId) {
    currentPrefecture = prefectureId;
    const prefectureName = getLocalizedPrefectureName(prefectureId);
    
    // Update prefecture info panel
    updatePrefectureInfo(prefectureId);
    
    // Show modal for adding new visit
    document.getElementById('modal-prefecture-name').textContent = prefectureName;
    new bootstrap.Modal(document.getElementById('visitModal')).show();
}

function updatePrefectureInfo(prefectureId) {
    const infoPanel = document.getElementById('prefecture-info');
    const prefectureName = getLocalizedPrefectureName(prefectureId);
    const visits = visitData[prefectureId] || [];
    
    let html = '<h6>' + prefectureName + '</h6>';
    
    if (visits.length === 0) {
        html += '<p class="text-muted">' + t('no_visits_recorded') + '</p>';
    } else {
        html += '<div class="prefecture-visits">';
        visits.sort((a, b) => new Date(a.year, a.month) - new Date(b.year, b.month));
        
        visits.forEach((visit, index) => {
            const levelText = visit.level === 1 ? t('visited_option') : t('stayed_option');
            const levelClass = visit.level === 1 ? 'visited' : 'stayed';
            const monthName = getLocalizedMonth(visit.month);
            
            html += '<div class="visit-item">' +
                    '<div class="visit-info">' +
                    '<span class="visit-level ' + levelClass + '">' + levelText + '</span>' +
                    (visit.roadTrip ? '<span class="road-trip-badge">' + t('road_trip_text') + '</span>' : '') +
                    '</div>' +
                    '<div class="visit-date">' + monthName + ' ' + visit.year + '</div>' +
                    '<button class="btn btn-sm btn-outline-danger" onclick="removeVisit(\'' + prefectureId + '\', ' + index + ')">' +
                    '<i class="fas fa-trash"></i>' +
                    '</button>' +
                    '</div>';
            
            if (visit.notes) {
                html += '<div class="visit-notes text-small text-muted">' + visit.notes + '</div>';
            }
        });
        
        html += '</div>';
    }
    
    infoPanel.innerHTML = html;
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
    bootstrap.Modal.getInstance(document.getElementById('visitModal')).hide();
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
    }
}

// Map Color Updates - Using JapanEx approach with SVG fill attributes
function updateMapColors() {
    const colorMap = {
        0: '#ffffff', // Never been - white
        1: '#3498db', // Visited - blue  
        2: '#e74c3c'  // Stayed - red
    };
    
    Object.keys(prefectures).forEach(prefectureId => {
        const element = document.getElementById(prefectureId);
        if (!element) return; // Skip if element not found
        
        const visits = visitData[prefectureId] || [];
        let level = 0;
        let hasRoadTrip = false;
        
        if (visits.length > 0) {
            // Get highest level
            level = Math.max(...visits.map(visit => visit.level));
            // Check if any visit was a road trip
            hasRoadTrip = visits.some(visit => visit.roadTrip);
        }
        
        // Set fill color based on level (JapanEx approach)
        const color = colorMap[level];
        element.setAttribute('fill', color);
        
        // Apply to child elements for complex prefecture shapes
        const childElements = element.querySelectorAll('polygon, rect, path');
        childElements.forEach(child => {
            child.setAttribute('fill', color);
        });
        
        // Set stroke styling for road trips (dashed border)
        if (hasRoadTrip) {
            element.setAttribute('stroke-dasharray', '4,4');
            element.setAttribute('stroke-width', '3');
            element.style.animation = 'dash-animation 1s linear infinite';
            childElements.forEach(child => {
                child.setAttribute('stroke-dasharray', '4,4');
                child.setAttribute('stroke-width', '3');
                child.style.animation = 'dash-animation 1s linear infinite';
            });
        } else {
            element.removeAttribute('stroke-dasharray');
            element.setAttribute('stroke-width', '2');
            element.style.animation = '';
            childElements.forEach(child => {
                child.removeAttribute('stroke-dasharray');
                child.setAttribute('stroke-width', '2');
                child.style.animation = '';
            });
        }
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
    const modal = new bootstrap.Modal(document.getElementById('timelineModal'));
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
        content.innerHTML = '<p class="text-muted">' + t('no_visits_yet') + '</p>';
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
                    '<div class="timeline-prefecture">' + prefectureName + '</div>' +
                    '<div class="timeline-details">' +
                    levelText + (visit.roadTrip ? ' • ' + t('road_trip_text') : '') +
                    (visit.notes ? '<br><em>' + visit.notes + '</em>' : '') +
                    '</div>' +
                    '</div>';
        });
        
        html += '</div>';
        content.innerHTML = html;
    }
    
    modal.show();
}

// Statistics View
function showStatistics() {
    const modal = new bootstrap.Modal(document.getElementById('statisticsModal'));
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
    
    const html = '<div class="row">' +
        '<div class="col-md-6">' +
        '<h6>' + t('prefecture_coverage') + '</h6>' +
        '<div class="mb-3">' +
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
        '<h6>' + t('travel_patterns') + '</h6>' +
        '<div class="mb-3">' +
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
        '<div class="col-md-6">' +
        '<h6>' + t('regional_coverage') + '</h6>' +
        '<div class="mb-3">' +
        regionStatsHTML +
        '</div>' +
        '<h6>' + t('timeline_header') + '</h6>' +
        '<div class="mb-3">' +
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
    modal.show();
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