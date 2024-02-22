<script>
import axios from "axios";

export default {
  name: 'AdminNouveauAtelierComponent',
  data() {
    return {
      atelier: {
        "theme": 1,
        "capacite": 1,
        "nom": "",
      },
      listeThemes: [
        {
          "id": 1,
          "code": "FR",
          "libelle": "Française"
        },
        {
          "id": 2,
          "code": "IT",
          "libelle": "Italienne"
        },
        {
          "id": 3,
          "code": "JP",
          "libelle": "Japonnaise"
        },
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
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    margin: 0 5px;
  }
</style>