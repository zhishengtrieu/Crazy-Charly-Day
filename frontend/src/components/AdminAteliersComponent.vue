<script>
import axios from "axios";

export default {
  name: 'AdminAteliersComponent',
  data() {
    return {
      loading: true,
      ateliers: []
    }
  },
  methods: {
    fetchAteliers() {
      axios.get('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier?fields=*.Tag_id.*')
          .then(response => {
            this.ateliers = response.data.data
          })
          .catch(error => {
            console.error(error)
          })
          .finally(() => this.loading = false)
    }
  },
  created() {
    this.fetchAteliers()
  },
}
</script>

<template>
  <h1>Liste des Ateliers</h1>
  <div v-if="loading" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col" v-for="atelier in ateliers" :key="atelier.id">
      <div class="card h-100">
        <div class="card-header">
          {{ atelier.nom }}
        </div>
        <div class="card-body">
          <p class="card-text">{{ atelier.description }}</p>
          <p class="card-text">{{ atelier.places }} places</p>
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