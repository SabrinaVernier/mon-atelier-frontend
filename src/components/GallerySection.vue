<script>
// Importation du tableau des produits depuis le fichier de données
import produits from "../data/produits.js";

export default {
  name: "GallerySection",
  data() {
    return {
      produits, // Tu utilises ici les produits importés
    };
  },
};
</script>

<template>
  <section id="gallery" class="gallery">
    <h1>Galerie de créations</h1>
    <div class="conteneur-galerie">
      <div
        class="carte-produit"
        v-for="(produit, index) in produits"
        :key="index"
      >
        <img :src="produit.image" :alt="produit.titre" />
        <h3>{{ produit.titre }}</h3>
        <p>{{ produit.description }}</p>
        <p class="prix">{{ produit.prix }}</p>
        <router-link :to="`/produit/${index}`" class="btn"
          >Voir plus</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  width: 100%;
  padding: 2rem;
  /* background-color: #f0f4f2; */
  background-image: url("../assets/IMGS/img-fond-sable.png");
  border-radius: 20px;
  border: 10px groove #c5a275;
  /* background-repeat: no-repeat; */
  background-size: contain;
  /* background-position: center; */
  text-align: center;
}

.gallery h1 {
  margin-bottom: 10px;
  text-shadow: 2px 2px 3px #fff;
}

.gallery h3 {
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
}

.conteneur-galerie {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.carte-produit {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  padding-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte-produit:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.carte-produit p {
  padding: 0 1rem 1rem;
  font-size: 0.95rem;
  color: #555;
}

.prix {
  font-weight: bold;
  scale: 150%;
  color: #2e7d32;
  margin-bottom: 1rem;
}

/* ---img--------------- */
.carte-produit img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.4s ease;
  border: 3px groove #fff;
}

.carte-produit:hover img {
  transform: scale(1.1);
}

/* ---button------------ */
.btn {
  background-color: #2e7d32;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  /* background-color: #256029; */
  background-color: rgb(106, 183, 250);
}
</style>
