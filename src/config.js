/**
 * SKY OF US — CONFIGURATION FILE
 * Semua data nama, tanggal, pesan, foto, dan kenangan dapat disesuaikan di sini.
 */

export const config = {
  // Informasi Pasangan & Pengirim
  partnerName: "Mas Diann",        // Nama pasangan yang berulang tahun
  senderName: "Devii",         // Nama pengirim / panggilan sayang
  birthDate: "22 November 2026", // Tanggal ulang tahun
  targetDate: "2026-11-22T00:00:00", // Target countdown (1 Oktober 2026)

  // Audio / Musik Background
  // Gunakan URL file audio .mp3 jika ada, atau biarkan synth otomatis jika kosong/null
  bgMusicUrl: "/music.mp3",

  // PAGE 1 — "A Little Sky For You"
  hero: {
    badge: "Special Birthday Surprise ☁️",
    title: "Happy Birthday, Mas Dian",
    subtitle: "Hari ini, langit terasa sedikit lebih indah karena merayakan senyummu.",
    countdownTitle: "Menghitung Hari Menuju 22 November 2026 ⏳",
    ctaButton: "Mulai Perjalanan ☁️",
  },

  // PAGE 2 — "For The Person I Love"
  loveSection: {
    badge: "UNTUK SESEORANG YANG SPESIAL",
    title: "Di Antara Sejuta Awan",
    mainQuote: "Di antara begitu banyak hal indah yang pernah datang dalam hidupku, aku selalu bersyukur salah satunya adalah kamu.",
    polaroidPhoto: "/images/hero.jpeg",
    polaroidCaption: "Senyum favoritku 💙",

    // Cloud Cards (Awan Kenangan Singkat)
    cloudCards: [
      {
        id: "senyum",
        icon: "✨",
        title: "Senyummu",
        shortText: "Penawar Lelah Terbaik",
        fullMessage: "Senyummu selalu punya cara ajaib merapikan hariku yang berantakan. Tidak peduli seberapa berat hari berjalan, melihatmu tersenyum selalu membawa kedamaian.",
        tag: "Favorite Thing"
      },
      {
        id: "cerita",
        icon: "📖",
        title: "Cerita Kita",
        shortText: "Setiap Bab Yang Berharga",
        fullMessage: "Aku suka bagaimana cerita kita tumbuh tanpa paksaan—pelan, tulus, dan makin hari makin hangat. Terima kasih sudah mau berjalan berdampingan dan makasih juga udah mau nerima aku yang banyak kurangnya ini sayangg.",
        tag: "Our Journey"
      },
      {
        id: "hal-kecil",
        icon: "🌸",
        title: "Hal-hal Kecil Tentang Kamu",
        shortText: "Yang Selalu Membuatku Kagum",
        fullMessage: "Cara kamu perhatian sama hal-hal kecil, tawa khasmu yang renyah, dan kehangatan tatapanmu saat bicara denganku.",
        tag: "Little Details"
      },
      {
        id: "momen",
        icon: "☁️",
        title: "Momen Yang Ingin Aku Ingat",
        shortText: "Abadi Dalam Ingatan",
        fullMessage: "aku inget saat pertama kali kita bertemu dimana masih ada rasa canggung dan belum terbiasa satu sama lain.",
        tag: "Unforgettable"
      }
    ]
  },

  // PAGE 3 — "Our Little Moments"
  momentsSection: {
    badge: "JEJAK PERJALANAN KITA",
    title: "Our Little Moments",
    subtitle: "Setiap langkah kecil yang kita lalui bersama di bawah langit yang sama.",

    // Timeline Momen Berharga
    timeline: [
      {
        id: 1,
        title: "First Meet",
        date: "24 Maret 2026",
        tagline: "Pertemuan Pertama",
        description: "Hari di mana takdir mempertemukan tatap mata kita untuk pertama kali. Siapa yang menyangka hari itu jadi awal dari cerita seindah ini.",
        image: "/images/meet.jpeg",
        icon: "🌱"
      },
      {
        id: 2,
        title: "First Photo Together",
        date: "24 Maret 2026",
        tagline: "Foto Perdana",
        description: "Foto pertama yang kita ambil dengan canggung tapi penuh tawa. Foto ini masih jadi salah satu kenangan favorit yang selalu tersimpan rapi.",
        image: "/images/first.jpeg",
        icon: "📸"
      },
      {
        id: 4,
        title: "My Favorite Memory",
        date: "Hingga Hari Ini",
        tagline: "Setiap Hari Bersamamu",
        description: "Rasanya aku ingin sekali bisa bertemu setiap hari sama kamu tetapi tuhan berkata lain jarak mumbuat kita harus berjauhan untuk sementara waktu,sampai jumpa di pertemuan berikutnya",
        image: "/images/sunset.jpeg",
        icon: "💖"
      }
    ]
  },

  // PAGE 4 — "One More Wish" (Sunset Atmosphere)
  sunsetSection: {
    badge: "SATU HARAPAN DI BAWAH SENJA",
    title: "One More Wish",
    subtitle: "Saat senja perlahan meredup dan bintang-bintang mulai menyala...",
    mainPhoto: "/images/mirror.jpeg",
    mainMessage: `Selamat ulang tahun, sayang.
Semoga semua hal baik selalu menemukan jalan menuju kamu.
Semoga langkahmu selalu ditemani kebahagiaan,
dan semoga aku masih bisa menjadi bagian dari banyak cerita indahmu.`,
    letterButtonText: "Open My Last Message 💙",

    // Pesan Rahasia di Dalam Surat Digital
    secretLetter: {
      title: "Surat Kecil Untukmu ✉️",
      quote: "Kalau dunia ini adalah langit,\naku harap kita selalu punya tempat untuk terbang bersama.",
      body: `Terima kasih sudah lahir ke dunia ini dan tumbuh menjadi sosok yang begitu penyayang, kuat, dan luar biasa. 

Di usiamu yang baru ini, jangan pernah ragu untuk mengejar impianmu. Aku akan selalu ada di sini, menjadi pendukung terdepanmu, mendengarkan ceritamu saat lelah, dan merayakan setiap pencapaianmu.

Semoga hari ini dan hari-hari mendatang membawa tersenyum lebar di wajahmu.`,
      closing: "With all my love,"
    }
  }
};
