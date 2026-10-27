/**
 * =========================================================================
 * SETUP & PENGUJIAN OTOMATIS PRE-OPERATION
 * File ini berisi fungsi bantuan untuk inisialisasi awal, menu spreadsheet, dan testing.
 * =========================================================================
 */

/**
 * Menu Tambahan di Google Spreadsheet
 * Menu ini akan muncul otomatis saat file spreadsheet dibuka oleh petugas / admin.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('✈️ AVSEC Pre-Op')
    .addItem('⚙️ Setup / Inisialisasi Seluruh Sheet', 'menuSetupSheet')
    .addItem('📊 Buat / Perbarui Sheet Pivot & 3D Chart', 'menuSetupPivot')
    .addSeparator()
    .addItem('🧪 Uji Coba Simpan Data Dummy', 'testSimpanDataDummy')
    .addSeparator()
    .addItem('ℹ️ Info Konfigurasi & URL', 'showInfoDialog')
    .addToUi();
}

function menuSetupSheet() {
  var res = setupSheet();
  SpreadsheetApp.getUi().alert("Hasil Inisialisasi:\n" + res.message);
}

function menuSetupPivot() {
  var res = setupPivotSheet();
  SpreadsheetApp.getUi().alert("Hasil Pembaruan Pivot:\n" + res.message);
}

function showInfoDialog() {
  var ss = getSpreadsheet();
  var folder = getOrCreateFolder();
  var msg = "ID Spreadsheet: " + ss.getId() + "\n\n" +
            "Folder Google Drive TTD: " + folder.getName() + " (" + folder.getUrl() + ")\n\n" +
            "Tab Data: " + CONFIG.SHEET_NAME + " (40 Kolom)\n" +
            "Tab Pivot: " + CONFIG.PIVOT_SHEET_NAME + " (Tabel Rekap + 3D Pie Chart)\n\n" +
            "Google Stitch ID: 8423347193973236531\n" +
            "Pastikan Anda telah melakukan Deploy -> New Deployment -> Web App.";
  SpreadsheetApp.getUi().alert("Informasi Sistem Pre-Op AVSEC", msg, SpreadsheetApp.getUi().ButtonSet.OK);
}

/**
 * Fungsi Pengujian (Test Function)
 * Menjalankan simulasi penyimpanan data lengkap dengan catatan dan data petugas absen.
 */
function testSimpanDataDummy() {
  var dummyPayload = {
    posisiTugas: "PSCP",
    tanggal: Utilities.formatDate(new Date(), "Asia/Makassar", "yyyy-MM-dd"),
    waktu: Utilities.formatDate(new Date(), "Asia/Makassar", "HH:mm"),
    nama: "Budi Santoso (Test)",
    nik: "73710123456789",
    jabatan: "Senior Officer",
    
    // Nilai Personel
    personel1: "100",
    personel2: "100",
    personel3: "100",
    personel4: "100",
    personel5: "100",
    personel6: "100",
    personel7: "100",
    personel8: "100",
    personel9: "100",
    personel10: "100",
    totalPersonel: "1000",
    rataPersonel: "100.00",

    // Petugas Tidak Masuk & Catatan Petugas
    petugasTidakMasuk: "Ahmad Dani",
    keteranganTidakMasuk: "Sakit (Surat Dokter Terlampir)",
    catatanPetugas: "Briefing shift pagi dilaksanakan tepat waktu, kesiapan fisik personel prima.",

    // Nilai Fasilitas Standard
    fasilitas1: "100",
    fasilitas2: "100",
    fasilitas3: "100",
    fasilitas4: "100",
    fasilitas5: "100",
    fasilitas6: "100",
    fasilitas8: "100",
    fasilitas9: "100",
    fasilitas10: "100",
    totalFasilitas: "900",
    rataFasilitas: "100.00",
    catatanFasilitas: "Mesin X-Ray PSCP 1 & 2 berfungsi normal, test piece CTP lolos standar.",

    // Dokumen
    dokumen1: "100",
    dokumen2: "100",
    dokumen3: "100",
    totalDokumen: "300",
    rataDokumen: "100.00",

    // Area
    area1: "100",
    area2: "100",
    area3: "100",
    area4: "100",
    totalArea: "400",
    rataArea: "100.00",

    // Rata-rata
    rataKeseluruhan: "100.00",

    // Dummy base64 1x1 transparent png
    signatureDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
  };

  var res = simpanKesiapan(dummyPayload);
  Logger.log("Hasil Uji Coba: " + JSON.stringify(res));
  if (typeof SpreadsheetApp.getUi === 'function') {
    try {
      SpreadsheetApp.getUi().alert("Hasil Uji Coba:\n" + JSON.stringify(res, null, 2));
    } catch(e) {}
  }
  return res;
}
