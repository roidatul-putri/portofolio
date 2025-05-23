<script>
export default {
  data() {
    return {
      activeTab: 1,
      experiences: [
        {
          id: 1,
          company: 'Yayasan Al-Aliyatul Mukarromah',
          position: 'Guru Pendidikan Anak Usia Dini',
          period: 'Agustus – Oktober 2024',
          description: 'Ngajar anak-anak usia dini, rancang pembelajaran kreatif, dan observasi tumbuh kembang anak. Pengalaman ini bikin aku makin sabar, telaten, dan kreatif dalam menyampaikan materi. ',
          city: 'Probolinggo, Indonesia'
        },
        {
          id: 2,
          company: 'PT. Paragon citynology & Innovation ',
          position: 'Freelance Beauty Advisor',
          period: 'Juli-Agustus 2024 ',
          description: 'Memberi konsultasi produk kecantikan ke pelanggan, promosi produk, sampai capai target penjualan. Di sini aku belajar soal komunikasi, personal branding, dan memahami kebutuhan pelanggan',
          city: 'Jember, Indonesia'
        },
        {
          id: 3,
          company: 'Fakultas Pertanian Universitas Jember',
          position: 'Asisten Dosen (Mata Kuliah Teknologi & Produksi Benih + Manajemen Produksi Ternak) ',
          period: 'Agustus 2022 – Mei 2024 ',
          description: 'Bantu merancang praktikum, memandu mahasiswa, sampai membuat laporan akademik. Ini ngasah kemampuan manajemen kelas dan skill komunikasi akademis',
          city: 'Universitas Jember, Indonesia'
        },
        {
          id: 4,
          company: 'PT. Sarana Utama Welltrash',
          position: 'Magang Profesi',
          period: 'Agustus – Desember 2023',
          description: 'Mengelola siklus hidup larva maggot BSF dan mengolah residu limbah hingga efisien 20%. Terlibat dalam pemasaran larva secara offline & online, jadi belajar banyak tentang lingkungan, pertanian berkelanjutan, dan strategi penjualan digital',
          city: 'Jember, Indonesia'
        },
        {
          id: 5,
          company: 'Universitas Jember',
          position: 'Tim Tracer Study',
          period: 'Agustus – Desember 2022',
          description: 'Ngumpulin dan validasi data alumni fakultas. Kerja tim & detail jadi kunci di sini, karena harus akurat dan sinkron dengan sistem universitas.',
          city: ''
        },
        {
          id: 6,
          company: 'Universitas Jember',
          position: 'Organisasi & Event',
          period: '2020 - 2024',
          description: 'Aktif di BEM dan UKM Olahraga sebagai tim Kominfo. Pernah jadi panitia di banyak event seperti PPMB, Maba Day, Munas IBEMPI, KKN, hingga volunteer di CV. Imaji Sociopreneur. Nanganin konten, dokumentasi, publikasi, sampai humas. Ini semua bantu aku makin nyaman kerja di tim kreatif dan lapangan. ',
          city: 'Jember, Indonesia'
        }
    ]

    };
  }
}
</script>
<!-- <template>
  <div class="px-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">

  <article data-page="experience" class="mt-10">
  <header>
    <div
      class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
      <h4>Work Experience</h4>
      <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
        Learn about my career journey so far
      </h4>
    </div>
  </header>
  <section>
    <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-2 xl:grid-cols-2 fade-zoom-in">
      <div v-for="exp in experiences" :key="exp.id"
        class="item-card flex flex-col gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 px-5 py-5">
        <div class="flex justify-between items-center">
          <div class="text-lg font-semibold">{{ exp.position }}</div>
          <div class="text-sm text-amber-300">{{ exp.period }}</div>
        </div>
        <div class="text-sm italic text-amber-100">{{ exp.company }}</div>
        <div class="text-sm text-[#c1c1c1]">{{ exp.description }}</div>
        <div class="text-sm text-amber-200 mt-2">{{ exp.city }}</div>
      </div>
    </div>
  </section>
</article>

</div></template> -->

<template>
  <div class="px-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="experience" class="mt-10">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Pengalaman</h4>
          <h4 class="text-base text-center font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Berikut Pengalaman kerja dan proyek saya
          </h4>
        </div>
      </header>

      <section>
        <div class="relative border-l-2 border-amber-300 pl-6 space-y-10 fade-zoom-in">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="relative pl-6">
            
            <!-- Bullet -->
            <div class="absolute -left-3 top-1.5 w-4 h-4 rounded-full bg-amber-300 border-2 border-white"></div>
            
            <!-- Content Card -->
            <div class="bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 p-5">
              <div class="flex justify-between items-center">
                <div class="text-lg font-semibold">{{ exp.position }}</div>
                <div class="text-sm text-amber-300">{{ exp.period }}</div>
              </div>
              <div class="text-sm italic text-amber-100">{{ exp.company }}</div>
              <div class="text-sm text-[#c1c1c1] mt-2">{{ exp.description }}</div>
              <div class="text-sm text-amber-200 mt-2">{{ exp.city }}</div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>


<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>