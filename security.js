// --- ระบบป้องกันการคลิกขวาและดูข้อมูล (Security System) ---

// 1. บล็อกการคลิกขวา
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. บล็อกปุ่มลัดคีย์บอร์ด (F12, Inspect, View Source)
document.onkeydown = function(e) {
    // F12
    if (e.keyCode == 123) return false;
    // Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    // Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false;
};

// 3. บล็อกการลากคลุมข้อความ (สำหรับ Browser บางรุ่นที่ CSS คลุมไม่ถึง)
document.onselectstart = function() { return false; };
