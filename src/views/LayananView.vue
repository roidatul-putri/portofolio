<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '🎨',
          name: 'Content Design & Social Media',
          description: 'Membuat desain konten visual menggunakan Canva, serta editing video ringan dengan CapCut. Cocok untuk kebutuhan media sosial, publikasi event, atau branding organisasi.'
        },
        {
          id: 2,
          icon: '📝',
          name: 'Content Planning & Copywriting',
          description: 'Merancang ide konten, menulis caption, dan mengatur alur komunikasi digital terbukti melalui pengalaman di divisi Kominfo dan publikasi beberapa event kampus.'
        },
        {
          id: 3,
          icon: '🎤',
          name: 'MC & Public Speaking',
          description: 'Pengalaman sebagai MC di acara internal organisasi dan event kampus. Suara jelas, pembawaan santai, dan bisa menyesuaikan dengan suasana acara.'
        },
        {
          id: 4,
          icon: '📚',
          name: 'Teaching & Educational Sport',
          description: 'Pernah menjadi guru PAUD dan asisten dosen, terbiasa menyusun materi dan menyampaikan pembelajaran untuk berbagai level usia. Cocok untuk project edukasi atau pelatihan.'
        },
        {
          id: 5,
          icon: '💄',
          name: 'Product Consultation (Beauty Advisor)',
          description: 'Pernah menjadi beauty advisor di PT. Paragon, memberikan konsultasi produk kecantikan, edukasi perawatan kulit, dan membantu pencapaian target penjualan.'
        },
        {
          id: 6,
          icon: '🤝',
          name: 'Volunteer & Event Support',
          description: 'Aktif dalam kegiatan sosial dan kepanitiaan berbagai event. Terbiasa bekerja dalam tim, menyusun dokumentasi, publikasi, dan koordinasi acara.'
        }
      ]
    };
  }
}
</script>

<template>
  <div class="px-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="services" class="mt-10">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Layanan</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Berikut layanan yang saya tawarkan
          </h4>
        </div>
      </header>

      <section>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 fade-zoom-in">
          <div
            v-for="service in services"
            :key="service.id"
            class="flex flex-col gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 px-5 py-5">
            <div class="flex items-center gap-3 text-lg font-semibold">
              <span class="text-2xl">{{ service.icon }}</span>
              {{ service.name }}
            </div>
            <div class="text-sm text-[#c1c1c1]">{{ service.description }}</div>
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