<script>
export default {
  name: "Charter",
};
</script>
<template>
  <div class="charte">
    <h2>
      Notre petite Charte Éco-Responsable
      <img
        class="logo"
        src="../assets/IMGS/logo-eco-responsable.png"
        alt="logo eco-resp"
      />
    </h2>
    <div class="charte-cercle">
      <div class="cercle-central">
        <strong>Notre <br />Charte Nature</strong>
      </div>

      <div class="bulle bulle1">
        💧<strong> L’eau est précieuse.</strong> <br />
        Ne la gaspillons pas !
      </div>
      <div class="bulle bulle2">
        🪵 🐚 <strong>Tout droit venu de Dame Nature</strong>: galets, bois
        flotté, coquillages…
      </div>
      <div class="bulle bulle3">
        🔄 <strong>Récup’ & seconde vie</strong>: 90% Occitanie, 10% ailleurs et
        0% usine... tout est récupéré à la main, dans les coins les plus jolis
        du Sud et ailleurs...
      </div>
      <div class="bulle bulle4">
        🧺 <strong>Créé à la main</strong> avec amour (et un peu de magie 🪄)
      </div>
      <div class="bulle bulle5">
        📦 <strong>Emballages écolos</strong> (sans chichi) : du papier recyclé,
        du kraft, du vieux carton... mais toujours joli.
      </div>
      <div class="bulle bulle6">
        🐢 <strong>Moins de plastique, plus d’éthique</strong> : pas de
        plastique neuf chez nous, promi-juré-craché!
      </div>
      <div class="bulle bulle7">
        🌳 <strong>Respect de la nature</strong>: on ramasse, on ne dérange pas
        !
      </div>
      <div class="bulle bulle8">
        🎨 <strong>Pièces uniques et durables</strong>: chaque création est
        unique, comme toi !
      </div>
    </div>
  </div>
</template>
<style scoped>
.charte {
  font-family: "Comic Sans MS", "Segoe UI", sans-serif;
}

h2 {
  text-align: center;
  text-decoration: underline;
  color: #946c00;
  font-size: 1.8rem;
  font-weight: bold;
  padding-top: 30px;
}

strong {
  font-weight: bold;
}

.logo {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  vertical-align: middle;
}
/* --charte-circulaire--- */
.charte-cercle {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 80px auto;
  background-color: #fdf6e4;
  border-radius: 50%;
}

.cercle-central {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(../assets/IMGS/La-Terre-dessin.png);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  padding: 40px;
  text-align: center;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.bulle {
  position: absolute;
  width: 300px;
  padding: 15px;
  background-color: #fff9d6;
  border-radius: 30px;
  text-align: center;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  line-height: 1.2rem;
  color: #4b4b4b;
}

.bulle:hover {
  transform: scale(1.1);
  /* background-color: #fef1b5; */
}

/* Positionnement circulaire */
.bulle1 {
  top: -5%;
  left: 20%;
  transform: translate(-10%, -10%);
  background-color: #aee8f2;
}
.bulle2 {
  top: 10%;
  left: 80%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
  background-color: #cff98a;
}
.bulle3 {
  top: 40%;
  left: 95%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
}
.bulle4 {
  top: 70%;
  left: 80%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
  background-color: #aee8f2;
}
.bulle5 {
  top: 95%;
  left: 45%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
  background-color: #fdec96;
}
.bulle6 {
  top: 75%;
  left: -10%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
  background-color: #aee8f2;
}
.bulle7 {
  top: 50%;
  left: -30%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
  background-color: #cff98a;
}
.bulle8 {
  top: 20%;
  left: -20%;
  transform: translate(-10%, -10%);
  /* transform: translate(-50%, -50%); */
}
</style>
