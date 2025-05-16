<script>
export default {
  name: "AboutSection",
};
</script>

<template>
  <section id="about" class="about">
    <h1>À propos</h1>
    <div class="about-content">
      <p>
        Bienvenue dans mon univers créatif ! Je suis passionnée par la nature et
        la création d'objet naturel, pratique et/ou décoratif. Chaque pièce que
        je crée est le fruit d'une inspiration profonde tirée de la beauté du
        monde qui m'entoure. Mon atelier est un espace où la créativité
        rencontre la durabilité, où chaque objet raconte une histoire unique.
      </p>
      <p>
        Je m'inspire de la mer, des forêts et des matériaux que je trouve lors
        de mes promenades. Chaque création est une invitation à redécouvrir la
        beauté des éléments naturels et à les intégrer dans notre quotidien. Mon
        objectif est de proposer des objets qui allient esthétique et
        fonctionnalité, tout en respectant l'environnement.
      </p>
      <p>
        Je crois fermement que l'artisanat peut jouer un rôle essentiel dans la
        préservation de notre planète. C'est pourquoi je m'engage à utiliser des
        matériaux naturels et locaux, à respecter les écosystèmes et à créer des
        pièces uniques qui durent dans le temps. Chaque objet est conçu avec
        soin, en mettant l'accent sur la qualité plutôt que sur la quantité. Je
        suis convaincue que chaque geste compte et que nous pouvons tous
        contribuer à un avenir plus durable.
      </p>
      <p>
        Je vous invite à explorer mon univers, à découvrir mes créations et à
        partager cette passion pour la nature et l'artisanat. Ensemble, nous
        pouvons célébrer la beauté du monde qui nous entoure et contribuer à sa
        préservation.
      </p>
      <p>
        Merci de soutenir mon travail et de faire partie de cette aventure
        créative. Chaque achat est un pas vers un monde plus respectueux de
        l'environnement et plus connecté à la nature. Ensemble, nous pouvons
        faire la différence.
      </p>
      <p>
        N'hésitez pas à me contacter si vous avez des questions ou si vous
        souhaitez en savoir plus sur mes créations. Je suis toujours ravie de
        partager ma passion et d'échanger avec vous.
      </p>
      <p>Merci de votre visite et à bientôt dans mon atelier !</p>
      <p>
        <strong>À très vite 🐞!</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  /* background-color: #f0f0f0; */
  background-color: rgb(12, 72, 12);
  border-radius: 20px;
  text-align: center;
}

.about h1 {
  text-shadow: 2px 2px 3px #fff;
  letter-spacing: 1.5px;
}

/* ---about-content---*/
.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 40px;
  background-color: rgb(12, 72, 12);
  border-radius: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.about-content > p {
  padding: 10px 15px;
  background-color: #fff;
  color: rgb(12, 72, 12);
  border: 5px double #fff;
  border-radius: 20px;
  width: fit-content;
}
</style>
