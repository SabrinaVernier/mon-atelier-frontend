<script>
import SymbolBloc from "./SymbolBloc.vue";

export default {
  name: "HeroSection",
  components: {
    SymbolBloc,
  },
};
</script>

<template>
  <section id="hero" class="hero">
    <h1>Bienvenue dans mon petit atelier nature 🌿</h1>
    <p>
      Créations artisanales à partir de bois flotté, souches, coquillages et
      objets de seconde main.
    </p>

    <img
      src="../assets/IMGS/img-plage-bois-flotte.avif"
      alt="plage avec bois flotté"
    />

    <div>
      <p>
        Ici, les galets ont une seconde vie, les coquillages chuchotent des
        histoires de bord de mer,<br />
        et chaque morceau de bois flotté devient une pièce unique, façonnée à la
        main, avec le cœur 🌊🪵✨
      </p>
      <p>
        Entre récup’, magie et poésie... je vous invite à découvrir un monde
        doux, simple et profondément éco-responsable.
      </p>

      <div class="line"></div>
      <p class="symbol-p">
        Vous aimez cette magie, vous avez l'âme spirituelle et désirez connaître
        la Symbolique de toutes ces 'recup' ? Venez les découvrir ci-dessous :
      </p>

      <SymbolBloc />
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 100%;
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(#f1faee, #d8f3dc);
  border: 10px groove #c5a275;
  border-radius: 40px;
  color: #2f3e46;
}

.hero img {
  margin-bottom: 20px;
  border-radius: 20px;
}

.hero h1 {
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  line-height: 1.8rem;
}

.hero .symbol-p {
  font-size: 1.4rem;
  color: rgb(131, 85, 131);
  font-family: "Pacifico", serif;
}

/* ---ligne--- */
.line {
  border-top: 1px solid #000;
  margin: 40px 25vw;
}
</style>
