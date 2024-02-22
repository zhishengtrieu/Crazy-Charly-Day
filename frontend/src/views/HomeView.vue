<script>
</script>

<template>
  <div class="main">
    <h1 class="slogan">BIEN MANGER <br> <span class="green-text">POUR LA PLANETE</span></h1>
    <div class="un">
      <img alt="Vue logo" src="../assets/cuisines.jpg" id="logo">
      <p>La Boîte à Cuisine est un lieu participatif d’ateliers culinaires solidaires entièrement gratuits destiné aux personnes isolées et touchées par les précarités alimentaires et/ou sociales. Elle accueille les habitants sensibles aux valeurs de partage et d’équité, sans distinction de revenus, ni d’âge afin de favoriser la mixité sociale.</p>
    </div>
    <div class="deux">
      <p>Véritable moment de partage, nos ateliers culinaires vous invitent à découvrir de nouvelles saveurs, à maîtriser des techniques innovantes et à créer des souvenirs inoubliables avec d’autres passionnés de cuisine. Une expérience enrichissante qui va au-delà de l’apprentissage pour créer des liens authentiques autour de la table.</p>
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
    padding-right: 5em;
    text-align: justify;

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
    padding-right: 5em;
    text-align: justify;
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


