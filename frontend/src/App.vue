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
    <p>La boîte à cuisine© 2021</p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  background-color: white;
  line-height: 1.5;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  #logo {
    position: absolute;
    left: 0;
    height: inherit;
    margin-right: 2em;
  }

  nav {
    a {
      margin: 0 1em;
    }
  }
}

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

  p {
    margin: 0;
  }
}
</style>
