<script>
import axios from "axios";

export default {
  name: 'AdminAteliersComponent',
  data() {
    return {
      ateliers: [
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
    fetchAteliers() {
      axios.get('api')
          .then(response => {
            console.log(response.data)
            // this.ateliers = response.data.ateliers
          })
          .catch(error => {
            console.error(error)
          })
    }
  },
  created() {
    this.fetchAteliers()
  },
}
</script>

<template>
  <h1>Liste des Ateliers</h1>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col" v-for="atelier in ateliers" :key="atelier.id">
      <div class="card h-100">
        <div class="card-header">
          {{ atelier.atelier.libelle }}
        </div>
        <div class="card-body">
          <p class="card-text">{{ atelier.theme.code }}</p>
          <p class="card-text">Capacité : {{ atelier.capacite }}</p>
        </div>
        <RouterLink :to="'/admin/ateliers/' + atelier.id">
          <button class="btn btn-primary">Modifier</button>
        </RouterLink>
      </div>
    </div>
    <div class="col">
      <RouterLink to="/admin/ateliers/nouveau" id="add-card">
        <div class="card">
          <div class="card-header">
            <i class="bi bi-plus-lg"></i> Ajouter un atelier
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {

  .card-header {
    font-size: 1.5em;
  }

  .card-text {
    font-size: 1.2em;
  }

  .btn {
    width: 100%;
  }
}

#add-card {
  text-decoration: none;
}

</style>