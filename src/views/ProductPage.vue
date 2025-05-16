<script>
import produits from "../data/produits.js";

export default {
  props: ["id"],
  computed: {
    produit() {
      return produits[Number(this.id)];
    },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {
    ajouterAuPanier(produit) {
      alert(`"${produit.titre}" ajouté au panier (bientôt fonctionnel 😉)`);
    },
  },
};
</script>

<template>
  <main>
    <transition name="fade-slide" mode="out-in">
      <section class="product-page" v-if="produit" key="produit">
        <div class="image-container">
          <img :src="produit.image" :alt="produit.titre" />
        </div>
        <div class="details">
          <h3>{{ produit.titre }}</h3>
          <p class="description">{{ produit.description }}</p>
          <p class="price">{{ produit.prix }}</p>

          <button class="add-btn" @click="ajouterAuPanier(produit)">
            Ajouter au panier 🛒
          </button>
          <br />
          <router-link to="/" class="back-btn"
            >← Retour à la galerie</router-link
          >
        </div>
      </section>

      <section v-else class="product-page">
        <p>Produit introuvable.</p>
        <router-link to="/" class="back-btn">← Retour à la galerie</router-link>
      </section>
    </transition>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 50px 30px;
}
.product-page {
  height: fit-content;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-around;
}

.image-container {
  /* width: fit-content; */
  height: calc(100vh - 100px);
  padding: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: var(--sand-color);
  border-radius: 20px;
}

.image-container img {
  min-height: calc(100% - 40px);
  object-fit: contain;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease;
  cursor: zoom-in;
}

.image-container:hover img {
  transform: scale(1.08);
}

.details {
  background-color: #f4f4f4;
  box-shadow: 0 0 5px #bbb;
  align-self: center;
  max-width: 800px;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 50px;
  text-align: center;
}

.details h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #388e3c;
  margin-bottom: 2rem;
}

.add-btn {
  padding: 0.7rem 1.5rem;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
}
.add-btn:hover {
  background-color: #388e3c;
}

.back-btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.back-btn:hover {
  background-color: #1a252f;
}

/* Animation */
.fade-slide-enter-active {
  animation: fadeSlideIn 0.6s ease-out both;
}
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
