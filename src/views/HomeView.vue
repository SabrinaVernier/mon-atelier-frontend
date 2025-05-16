<script>
import Header from "../components/Header.vue";
import HeroSection from "../components/HeroSection.vue";
import Charter from "../components/CharterBloc.vue";
import AboutSection from "../components/AboutSection.vue";
import GallerySection from "../components/GallerySection.vue";
import ContactSection from "../components/ContactSection.vue";
import Logo from "../components/LogoSvg.vue";

export default {
  components: {
    Header,
    HeroSection,
    Charter,
    AboutSection,
    GallerySection,
    ContactSection,
    Logo,
  },
};
</script>

<template>
  <Header />

  <main>
    <div class="container">
      <HeroSection />
      <Charter />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </div>
  </main>
</template>

<style scoped>
/* Ajout d’un padding top pour éviter que le menu masque les sections */
section {
  padding: 60px 20px;
  margin-top: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  min-height: 100vh;
}
</style>
