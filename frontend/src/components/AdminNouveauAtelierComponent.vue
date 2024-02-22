<script>
import axios from "axios";

export default {
  name: 'AdminNouveauAtelierComponent',
  data() {
    return {
      atelier: {
        "name": "",
        "places": 1,
        "description": "",
        "image": ""
      },
      listeThemes: null,
      selectedThemes: []
    }
  },
  methods: {
    fetchThemes() {
      axios.get('http://docketu.iutnc.univ-lorraine.fr:61501/items/Tag')
          .then(response => {
            this.listeThemes = response.data.data
            console.log(this.listeThemes)
          })
          .catch(error => {
            console.error(error)
          })
    },
    submit() {
      console.log(this.selectedThemes)
      axios.post('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier', {
        "nom" : this.atelier.name,
        "description": this.atelier.description,
        "places": this.atelier.places,
        "tags": this.selectedThemes,
        "image": this.atelier.image
      })
          .then(response => {
            console.log(response.data)
            this.$router.push('/admin/ateliers')
          })
          .catch(error => {
            console.error(error)
          })
    }
  }
  ,
  created() {
    this.fetchThemes()
  }
  ,
}
</script>

<template>
  <div class="container">
    <h1>Nouvel atelier</h1>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Nom de l'atelier</label>
        <input v-model="atelier.name" type="text" class="form-control" id="name">
        <label for="description" class="form-label">Description de l'atelier</label>
        <input v-model="atelier.description" type="text" class="form-control" id="description">
        <label for="image" class="form-label">Image de l'atelier</label>
        <input v-model="atelier.image" type="text" class="form-control" id="image">
        <label class="form-label">Sélectionnez les tags de l'atelier</label>
        <div>
          <label v-for="theme in listeThemes" :key="theme.id">
            <input type="checkbox" v-model="selectedThemes" :value="theme.id"> {{ theme.libelle }}
          </label>
        </div>
      </div>
      <div class="mb-3">
        <label for="places" class="form-label">Nombre de places</label>
        <input v-model="atelier.places" min="1" type="number" class="form-control" id="places">
      </div>
      <button type="submit" class="btn btn-primary me-2" @click.prevent="submit">Enregistrer</button>
      <RouterLink to="/admin/ateliers">
        <button class="btn btn-secondary">Annuler</button>
      </RouterLink>
    </form>
  </div>
</template>

<style scoped lang="scss">

  label {
    padding-top: 0.5em;
    padding-right: 1em;
  }

</style>

