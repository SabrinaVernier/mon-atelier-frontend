<!-- LogoSimple.vue -->
<script>
export default {
  name: "Logo",
};
</script>
<template>
  <div class="logo">
    <svg
      width="120"
      height="40"
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Galet ou bois flotté -->
      <ellipse cx="25" cy="25" rx="20" ry="10" fill="#8B7765" />
      <!-- Coccinelle stylisée -->
      <circle cx="25" cy="25" r="6" fill="#E63946" />
      <circle cx="23" cy="23" r="1" fill="black" />
      <circle cx="27" cy="27" r="1" fill="black" />
      <circle cx="23" cy="27" r="1" fill="black" />
      <!-- Texte -->
      <text
        x="45"
        y="30"
        font-family="Georgia, serif"
        font-size="18"
        fill="#2E4F2E"
      >
        Net’Eco
      </text>
    </svg>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  scale: 200%;
}
</style>
