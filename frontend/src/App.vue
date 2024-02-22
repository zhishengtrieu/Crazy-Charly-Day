<script>
</script>

<template>
  <header>
    <img alt="Vue logo" src="./assets/logo_boite_a_cuisine.png" id="logo">
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/ateliers">Ateliers</RouterLink>

    </nav>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    <p>La boîte à cuisine © 2024</p>
    <img alt="Instagram logo" src="./assets/logo_insta.png" id="logo_insta">

  </footer>
</template>

<style lang="scss" scoped>
/* Header */
header {
  position: relative;
  background-color: white;
  line-height: 1.5;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

/* Logo */
#logo {
  position: absolute;
  left: 10px;
  height: inherit;
  margin-right: 2em;
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

/* Main Content */
main {
  padding: 20px;
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
  margin: 0;
}

#logo_insta {
  width: 30px; /* Ajustez la taille du logo selon vos besoins */
  margin-right: 10px; /* Ajoute une marge à droite du logo pour l'espacement */
}
</style>
