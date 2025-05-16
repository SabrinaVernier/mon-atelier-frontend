<!-- <script>
export default {
  name: "ContactSection",
};
</script>

<template>
  <section id="contact" class="contact">
    <h1>Contactez-moi !</h1>
    <p>
      Créations artisanales à partir de bois flotté, coquillages et objets
      recyclés.
    </p>
  </section>
</template>

<style scoped>
.contact {
  background-color: #f0f0f0;
  text-align: center;
}
</style> -->

<script>
export default {
  data() {
    return {
      nom: "",
      email: "",
      message: "",
    };
  },
  methods: {
    envoyerMessage() {
      alert(`Merci ${this.nom}, votre message a bien été envoyé ! ✨`);
      // plus tard : envoi réel via service
      this.nom = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <section id="contact" class="contact-section">
    <h1>Contact</h1>
    <p class="intro">
      Une question ? Une commande personnalisée ? Écrivez-moi !
    </p>

    <form class="contact-form" @submit.prevent="envoyerMessage">
      <input type="text" v-model="nom" placeholder="Votre nom" required />
      <input type="email" v-model="email" placeholder="Votre email" required />
      <textarea
        v-model="message"
        placeholder="Votre message"
        rows="5"
        required
      ></textarea>

      <button type="submit"><strong>Envoyer</strong> ✉️</button>
    </form>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 3rem 1rem;
  text-align: center;
  background-color: #f0f4f1;
  /* border-top: 2px solid #cfd8dc; */
  border-radius: 20px;
}

.contact-section h1 {
  color: #415972;
}

/* .contact-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
} */

.intro {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #444;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.contact-form button {
  padding: 0.8rem 1.2rem;
  background-color: #415972;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #1a252f;
}
</style>
