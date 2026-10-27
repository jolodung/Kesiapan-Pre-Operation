# Product Requirements Document (PRD)
**Nama Produk:** Check List Pemastian Kesiapan Pre-Operation Airport Security (E-Checklist Pre-Op AVSEC)

---

## 1. Meta Informasi
| Perihal | Keterangan |
| :--- | :--- |
| **Versi Dokumen** | 1.1 (Revisi: Penambahan Pivot Sheet, 3D Chart, & Kolom Catatan) |
| **Status** | Disetujui (Ready for Development & Deployment) |
| **Penulis** | Tim Airport Security & Developer Sistem |
| **Tanggal Pembuatan** | 27 Oktober 2026 |
| **Target Rilis** | Q4 2026 |
| **Google Stitch ID** | `8423347193973236531` |
| **Platform Basis** | Google Apps Script (Web App) + Google Sheets & Google Drive |

---

## 2. Ringkasan Eksekutif (Executive Summary)
Aplikasi **E-Checklist Pemastian Kesiapan Pre-Operation Airport Security** adalah solusi digital berbasis Google Apps Script Web App yang dirancang untuk mengotomatisasi, merekam, dan mengevaluasi kesiapan operasional personel, peralatan keamanan penerbangan (security facilities), dokumen kerja, serta area tugas sebelum operasional penerbangan dimulai di seluruh working station Bandar Udara.

Versi 1.1 ini menyempurnakan sistem dengan integrasi **Sheet Pivot & 3D Pie Chart** otomatis di Google Sheets untuk rekapitulasi data pengawasan, kolom pencatatan **Petugas Tidak Masuk beserta Keterangan (Sakit, Izin, Cuti, Alpa)**, serta modul **Catatan Petugas & Catatan Fasilitas** untuk mencatat temuan kerusakan alat dan arahan operasional secara rinci.

---

## 3. Latar Belakang & Tujuan (Background & Objective)
*   **Masalah (Problem Statement):**
    1.  *Inefisiensi & Keterlambatan Rekapitulasi:* Formulir checklist kertas pre-operation membutuhkan waktu lama untuk didistribusikan, diisi secara fisik, dan direkap manual ke komputer.
    2.  *Ketiadaan Pengawasan Real-Time:* Manajemen dan Chief of Airport Security tidak dapat memantau kesiapan pos secara langsung sebelum jam operasional dimulai (pre-flight checks).
    3.  *Dokumentasi Personel Absen yang Terpisah:* Daftar ketidakhadiran petugas sering dicatat pada buku terpisah sehingga menyulitkan evaluasi beban kerja pos jaga.
    4.  *Pencatatan Anomali Fasilitas Tidak Terpusat:* Kerusakan alat (X-Ray bergaris, HT rusak) sering hanya disampaikan secara lisan tanpa bukti catatan tertulis di formulir pre-operation.
    5.  *Ketiadaan Dashboard Visual:* Pimpinan memerlukan visualisasi grafik instan (seperti 3D Pie Chart) mengenai proporsi beban inspeksi antar pos dan status kelaikan operasional.
*   **Tujuan Bisnis & Operasional (Business & Operational Goals):**
    1.  Mencapai 100% kepatuhan pengisian checklist pre-operation tepat waktu sebelum operasional dimulai sesuai standar KM 39 Tahun 2024.
    2.  Menyediakan transparansi kehadiran personel dengan merekam petugas yang tidak hadir dan alasannya di setiap pos jaga.
    3.  Mempercepat penanganan temuan kerusakan fasilitas melalui pencatatan catatan fasilitas terstruktur.
    4.  Menyajikan visualisasi data otomatis via Tab Pivot dan Grafik 3D Pie Chart langsung di Google Spreadsheet tanpa pengolahan manual.

---

## 4. Target Pengguna (Target Audience & Personas)
1.  **Persona 1: Supervisor / Senior Airport Security Officer (User Lapangan - Pelaksana Pengawasan)**
    *   *Peran:* Melakukan pemeriksaan langsung di lokasi (working station), menilai 4 pilar kesiapan, mencatat petugas yang tidak masuk, menuliskan catatan temuan fasilitas, menandatangani form digital, dan mengirimkan laporan.
2.  **Persona 2: Chief / Officer Airport Security (Pengawas Shift & Evaluator)**
    *   *Peran:* Memantau laporan pre-operation yang masuk, memantau sebaran pengawasan melalui Sheet Pivot dan Grafik 3D Pie Chart, serta mendisposisikan perbaikan alat ke teknisi.
3.  **Persona 3: Airport Security Manager & Regulator (Manajerial & Kepatuhan)**
    *   *Peran:* Mengaudit rekaman kepatuhan operasional, meninjau tren kesiapan fasilitas dan personel bulanan/tahunan, serta menyediakan bukti kepatuhan saat inspeksi Ditjen Perhubungan Udara.

---

## 5. Ruang Lingkup (Scope)
*   **In-Scope:**
    1.  Modul formulir web app berbasis Tailwind CSS dengan identitas visual khas Airport Security (tema Forest Green `#3b5d43`).
    2.  Form input dinamis adaptif berdasarkan 11 Posisi Tugas (PSCP, HBSCP, TSCP, ACSCP, AD, WP, PC, SSCP Keberangkatan, SSCP Kedatangan, Patroli, CCTV).
    3.  Penilaian Kesiapan Personel (10 item rubrik skala 0-100).
    4.  **Fitur Personel Tidak Hadir:** Input nama petugas yang tidak masuk dan pilihan keterangan (Sakit, Izin, Cuti, Alpa, Dinas Luar, dll.).
    5.  **Fitur Catatan Petugas:** Textarea untuk mencatat catatan pengawasan, kedisiplinan, arahan briefing.
    6.  Penilaian Kesiapan Fasilitas (Standard 9 item, HT untuk AD/WP/PC, Patroli 5 item, CCTV 6 item).
    7.  **Fitur Catatan Fasilitas:** Textarea untuk mencatat temuan kerusakan alat atau peralatan yang memerlukan kalibrasi.
    8.  Penilaian Kesiapan Dokumen (3 item) & Area Tugas (4 item).
    9.  Perhitungan otomatis (*real-time auto calculation*) skor total, rata-rata bagian, dan rata-rata keseluruhan (0.00 – 100.00).
    10. Kanvas tanda tangan digital (*E-Signature Pad*) dengan dukungan Touchscreen & Mouse.
    11. Database Google Sheets dengan 40 kolom terstruktur di tab **`Data Kesiapan`**.
    12. **Tab Sheet Pivot Otomatis (`Pivot Kesiapan`):**
        *   Tabel rekapitulasi formula dinamis (Jumlah Inspeksi, Rata-rata Skor, Status Siap Operasi, Catatan Minor, Tidak Memenuhi, Jumlah Personel Absen per Pos).
        *   **Grafik 3D Pie Chart** untuk visualisasi proporsi inspeksi per Posisi Tugas.
        *   Tabel ringkasan status kelaikan operasional.
    13. Menu Google Sheets kustom `✈️ AVSEC Pre-Op` untuk inisialisasi dan pembaruan Pivot dengan 1 klik.
*   **Out-of-Scope:**
    1.  Integrasi sensor biometric fingerprint fisik / facial recognition hardware pos.
    2.  Penyimpanan offline berbasis local indexedDB sync otomatis saat jaringan mati total.

---

## 6. Persyaratan Fungsional (Functional Requirements)

| ID | User Story | Kriteria Penerimaan (Acceptance Criteria) | Prioritas |
| :--- | :--- | :--- | :--- |
| **F1** | Sebagai Supervisor, saya ingin memilih posisi tugas agar form menampilkan kriteria fasilitas dan area yang relevan. | - Dropdown berisi 11 posisi tugas.<br>- Elemen form otomatis berubah (toggle) tanpa reload halaman.<br>- Bagian tidak relevan dinonaktifkan agar tidak masuk hitungan. | Tinggi |
| **F2** | Sebagai Supervisor, saya ingin mencatat informasi tanggal, waktu, nama, NIK, dan jabatan personel yang diawasi. | - Tanggal & jam terisi otomatis default waktu terkini.<br>- Validasi field required mencegah submit form kosong. | Tinggi |
| **F3** | Sebagai Supervisor, saya ingin menilai setiap indikator kesiapan berdasarkan rubrik standar (0, 25, 50, 75, 100). | - Dropdown seragam dengan keterangan rubrik.<br>- Nilai numerik diproses instan saat ada perubahan opsi. | Tinggi |
| **F4** | Sebagai Supervisor, saya ingin mencatat nama petugas yang tidak masuk dan keterangannya. | - Tersedia input nama petugas absen dan dropdown alasan (Sakit, Izin, Cuti, Alpa, Dinas Luar).<br>- Tersimpan rapi di kolom T dan U database. | Tinggi |
| **F5** | Sebagai Supervisor, saya ingin menuliskan catatan khusus untuk personel dan catatan kerusakan fasilitas. | - Tersedia textarea 'Catatan Petugas' dan 'Catatan Fasilitas'.<br>- Tersimpan di kolom V dan Z database. | Tinggi |
| **F6** | Sebagai Pengguna, saya ingin melihat kalkulasi skor otomatis untuk setiap bagian dan nilai akhir secara real-time. | - Box total dan rata-rata terupdate instan.<br>- Rata-rata keseluruhan dihitung dinamis dari seksi aktif (2 desimal). | Tinggi |
| **F7** | Sebagai Supervisor, saya ingin membubuhkan tanda tangan digital langsung pada layar perangkat. | - Kanvas responsif mendukung sentuhan jari/stylus dan mouse.<br>- Terdapat tombol 'Hapus Tanda Tangan'.<br>- Form memvalidasi kanvas tidak boleh kosong. | Tinggi |
| **F8** | Sebagai Sistem, saya ingin menyimpan gambar tanda tangan ke Google Drive dan mencatat URL-nya. | - Base64 dikonversi menjadi file PNG di Google Drive.<br>- Spreadsheet menyimpan URL pratinjau Drive. | Tinggi |
| **F9** | Sebagai Pimpinan, saya ingin Sheet Pivot otomatis dan Grafik 3D Pie Chart untuk menganalisis data. | - Tab 'Pivot Kesiapan' otomatis terbuat via skrip.<br>- Rumus dinamis menghitung rekapitulasi 11 posisi tugas.<br>- Tampil grafik 3D Pie Chart distribusi pemeriksaan. | Tinggi |
| **F10** | Sebagai Administrator, saya ingin menu khusus di spreadsheet untuk inisialisasi dan pembaruan sistem. | - Menu '✈️ AVSEC Pre-Op' menyediakan tombol setup data sheet, pembaruan pivot, dan uji coba dummy. | Sedang |

---

## 7. Desain & Pengalaman Pengguna (UX/UI Guidelines)
*   **Google Stitch Project Reference:**
    *   **Project ID:** `8423347193973236531`
    *   **Tautan Prototipe:** `https://stitch.withgoogle.com/projects/8423347193973236531`
*   **Visualisasi Spreadsheet:**
    *   Grafik **3D Pie Chart** terpasang di samping tabel pivot dengan label persentase per irisan, mengikuti format visual pelaporan manajerial bandara.

---

## 8. Struktur Kolom Database Spreadsheet (`Data Kesiapan`)
Tersedia 40 kolom data terstruktur:
1. Timestamp Submit | 2. Tanggal Pengawasan | 3. Waktu Pengawasan | 4. Posisi Tugas | 5. Nama Personel | 6. NIK | 7. Jabatan | 8-17. Item Personel 1-10 | 18. Total Personel | 19. Rata-rata Personel | **20. Petugas Tidak Masuk** | **21. Keterangan Tidak Masuk** | **22. Catatan Petugas** | 23. Rincian Fasilitas | 24. Total Fasilitas | 25. Rata-rata Fasilitas | **26. Catatan Fasilitas** | 27-29. Item Dokumen 1-3 | 30. Total Dokumen | 31. Rata-rata Dokumen | 32-35. Item Area 1-4 | 36. Total Area | 37. Rata-rata Area | 38. Rata-rata Keseluruhan | 39. Status Kesiapan Operasional | 40. Tautan Tanda Tangan.
