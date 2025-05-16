<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav class="navbar">
      <ul>
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  text-align: center;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  /* border-radius: 20px; */
  background-image: url("../assets/IMGS/img-fond-mer.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* background-color: var(--sand-color); */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 20px;
  margin: 0;
}

.navbar li {
  border: 2px solid #76562d;
  padding: 15px 40px;
  background-image: url(../assets/IMGS/img-fond-bois-flotte.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.navbar a {
  text-decoration: none;
  font-family: "Pacifico", sans-serif;
  font-size: 36px;
  color: #f1b667;
  -webkit-text-stroke: black 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: bold;
}

.navbar a:hover {
  color: rgb(247, 217, 87); /* Une couleur plus claire pour l'effet hover */
}
</style>
