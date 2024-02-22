<script>
</script>

<template>
  <div class="main">
    <h1 class="slogan">BIEN MANGER <br> <span class="green-text">POUR LA PLANETE</span></h1>
    <div class="un">
      <img alt="Vue logo" src="../assets/cuisines.jpg" id="logo">
      <p>La boîte à cuisine est ..</p>
    </div>
    <div class="deux">
      <p>La boîte à cuisine est ..</p>
      <img alt="Vue logo" src="../assets/cuisines.jpg" id="logo">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
}

.un {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #59e08c;
  img{
    width: 50%;
  }
  p{
    width: 50%;
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    padding-left: 5em;

  }
}

.deux {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #59e08c;
  img{
    width: 50%;
  }
  p{
    width: 50%;
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    padding-left: 5em;
  }
}

.green-text {
  color: #36A862;
}

.slogan {
  background-color: #F5F5F5;
  font-weight: bold;
  text-align: center; /* Centrer le texte */
  display: inline-block; /* Ajout de cette ligne */
}

</style>


