<script>
import axios from "axios";

export default {
  name: 'AdminNouveauAtelierComponent',
  data() {
    return {
      atelier: {
        "theme": 1,
        "places": 1
      },
      listeThemes: [
        {
          "code": "IT",
          "libelle": "Cuisine italienne"
        },
        {
          "code": "FR",
          "libelle": "Cuisine française"
        },
        {
          "code": "MEX",
          "libelle": "Cuisine Amérique du Sud"
        },
        {
          "code": "JP",
          "libelle": "Cuisine japonaise"
        },
        {
          "code": "GR",
          "libelle": "Cuisine grecque"
        },
        {
          "code": "OR",
          "libelle": "Cuisine orientale"
        }
      ],
      listeAteliers: [
        {
          "id": 1,
          "theme": {
            "id": 1,
            "code": "FR",
          },
          "capacite": 20,
          "atelier": {
            "code": "FR",
            "libelle": "Atelier 1"
          }
        },
        {
          "id": 2,
          "theme": {
            "id": 2,
            "code": "IT",
          },
          "capacite": 20,
          "atelier": {
            "code": "FR",
            "libelle": "Atelier Italienne"
          }
        },
        {
          "id": 3,
          "theme": {
            "id": 3,
            "code": "JP",
          },
          "capacite": 20,
          "atelier": {
            "code": "JP",
            "libelle": "Cuisine japonnaise"
          }
        },
      ]
    }
  },
  methods: {
    fetchThemes() {
      axios.get('api')
          .then(response => {
            console.log(response.data)
            // this.listeThemes = response.data.themes
          })
          .catch(error => {
            console.error(error)
          })
    },
    fetchAteliers() {
      axios.get('api')
          .then(response => {
            console.log(response.data)
            // this.atelier = response.data.atelier
          })
          .catch(error => {
            console.error(error)
          })
    },
    submit() {
      console.log(this.atelier)
      axios.post('api', this.atelier)
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
    this.fetchAteliers()
  }
  ,
}
</script>

<template>
  <div class="container">
    <h1>Nouvel atelier</h1>
    <form>
      <div class="mb-3">
        <label for="theme" class="form-label">Thème</label>
        <select v-model="atelier.theme" class="form-select" id="theme">
          <option v-for="theme in listeThemes" :value="theme.code">{{ theme.libelle }}</option>
        </select>
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
