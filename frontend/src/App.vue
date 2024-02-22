<script>
</script>

<template>
  <header>
    <RouterLink to="/" id="logo"><img alt="Vue logo" src="./assets/logo_boite_a_cuisine.png"/></RouterLink>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/ateliers">Ateliers</RouterLink>

    </nav>
  </header>

  <main class="container py-3">
    <RouterView/>
  </main>

  <footer>
    <p>2024 - La boîte à cuisine © </p>
    <a href="https://instagram.com/laboiteacuisine.aars/" target="_blank">
      <img alt="Instagram logo" src="./assets/logo_insta.png" id="logo_insta">
    </a>
  </footer>
</template>

<style lang="scss" scoped>
/* Header */
header {
  position: relative;
  background-color: white;
  line-height: 1.5;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

/* Logo */
#logo {
  position: absolute;
  left: 0;
  padding: 0 1em;
  height: inherit;

  img {
    height: inherit;
  }
}

/* Navigation */
nav {
  display: flex;
  align-items: center;
}

nav a {
  margin: 0 1em;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.3em;

  &:hover {
    color: #A53480;
  }
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  height: 80px;
  background-color: white;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.26);
}

footer p {
  font-weight: bold;
  font-size: 1.3em;
  margin: 0 10px 0 0;
}

#logo_insta {
  width: 50px; /* Ajustez la taille du logo selon vos besoins */
  margin-right: 10px; /* Ajoute une marge à droite du logo pour l'espacement */
}
</style>
