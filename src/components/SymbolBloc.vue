<script>
export default {
  name: "SymbolBloc",
  data() {
    return {
      isVisible: false,
      visible: true,
      currentSymbol: null, // clé pour afficher le bon contenu
      closing: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.visible = !this.visible;
    }, 2000); // toutes les 2 secondes
  },
  methods: {
    openModal(symbol) {
      this.currentSymbol = symbol;
      this.isVisible = true;
      this.closing = false;
    },
    closeModal() {
      this.closing = true;
      setTimeout(() => {
        this.isVisible = false;
        this.closing = false;
      }, 250); // Durée = animation fermeture
    },
  },
  computed: {
    modalTitle() {
      switch (this.currentSymbol) {
        case "galets":
          return "Les galets ...  🌊🪨";
        case "coquillages":
          return "Les coquillages ... 🌊🐚";
        case "bois":
          return "Le bois flotté ... 🌊🪵";
        default:
          return "Symbolique";
      }
    },
    modalText() {
      switch (this.currentSymbol) {
        case "galets":
          return (
            "✨ Lissés par le temps et les vagues, les galets portent en eux la mémoire silencieuse de l’eau et de la terre.\n" +
            "✨ Ils symbolisent la paix intérieure, l’harmonie naturelle et la stabilité profonde que seule la nature sait offrir.\n" +
            "✨ Tels de petits fragments d’éternité, ils nous rappellent la puissance douce et inépuisable du monde vivant."
          );

        case "coquillages":
          return (
            "✨ Trésors silencieux des rivages, les coquillages murmurent une énergie apaisante et curative, chargée de souvenirs salés.\n" +
            "✨ Ils incarnent la dualité : force et fragilité, protection et ouverture vers l’inconnu.\n" +
            "✨ Petits porte-bonheur venus des profondeurs, ils invitent à l’introspection, à la magie, et réveillent en nous une douce nostalgie de l’enfance et des marées.\n" +
            "✨ Ils sont des ponts entre le présent et l’éternel."
          );
        case "bois":
          return (
            "✨ Né des arbres, poli par les flots, le bois flotté est un symbole de résilience.\n" +
            "✨ Il a traversé les tempêtes, s’est laissé porter, puis transformé par le voyage.\n" +
            "✨ Il nous enseigne le lâcher-prise, la capacité à s’adapter, à renaître autrement, plus doux, plus sage.\n" +
            "✨ Il est ce canal discret entre terre et esprit, entre matière et lumière, chargé d’un souffle de renouveau."
          );
        // Ajoutez d'autres cas pour d'autres symboles si nécessaire
        default:
          return "";
      }
    },
    modalImage() {
      switch (this.currentSymbol) {
        case "galets":
          return new URL("../assets/IMGS/img-galets.jpg", import.meta.url).href;
        case "coquillages":
          return new URL("../assets/IMGS/img-coquillages.png", import.meta.url)
            .href;
        case "bois":
          return new URL("../assets/IMGS/img-bois-flotte.png", import.meta.url)
            .href;
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <div class="symbol-bloc">
    <div>
      <div>
        <p :class="{ faded: !visible }" class="fade-text">
          ===> Découvrir la symbolique ✨ :
        </p>
      </div>

      <button @click="openModal('galets')">des galets,</button>
      <button @click="openModal('coquillages')">des coquillages,</button>
      <button @click="openModal('bois')">du bois flotté</button>
    </div>
  </div>

  <div v-show="isVisible || closing" class="modal" @click.self="closeModal">
    <div :class="['modal-content', { exit: closing }]">
      <span class="close" @click="closeModal">&times;</span>
      <h2 class="modal-title">{{ modalTitle }}</h2>
      <img :src="modalImage" alt="Illustration" class="modal-img" />

      <p class="modal-text">{{ modalText }}</p>
    </div>
  </div>
</template>

<style scoped>
.symbol-bloc > div:first-child {
  display: flex;
  flex-direction: column;
}
.symbol-bloc button {
  border: none;
  background: unset;
  color: plum;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  font-family: "Pacifico", serif;
  cursor: pointer;
  text-decoration: underline;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease; /* douce transition du fond */
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  font-family: "Lato", sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: pop-in 0.3s ease-out;
  transform-origin: center;
}

.modal-content.exit {
  animation: pop-out 0.25s ease-in forwards;
}

@keyframes pop-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pop-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.6);
    opacity: 0;
  }
}

.modal-img {
  width: 100%;
  max-width: 300px;
  max-height: 200px;
  height: auto;
  margin: 1em;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-title {
  color: #2e6e2b;
  font-size: 1.2rem;

  font-family: "Comic Sans MS", "Segoe UI", sans-serif;
}

.modal-text {
  white-space: pre-line; /* ➜ respecte \n dans le texte */
  line-height: 1.4;
  font-family: "Comic Sans MS", "Segoe UI", sans-serif;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}

/* ---animation-phrase--- */
.fade-text {
  transition: opacity 1s ease;
  opacity: 1;
  color: #2e6e2b;
  font-size: 1.2rem;
  font-family: "Comic Sans MS", "Segoe UI", sans-serif;
  min-height: 2em; /* optionnel pour garder un peu d’espace */
}

.faded {
  opacity: 0;
}
</style>
