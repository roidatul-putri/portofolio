import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/pengalaman',
    name: 'pengalaman',
    component: () => import('../views/PengalamanView.vue'),
    meta: { title: 'Pengalaman' }
  },
  {
    path: '/layanan',
    name: 'layanan',
    component: () => import('../views/LayananView.vue'),
    meta: { title: 'Layanan' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Layanan' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - RoiPutri;'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
