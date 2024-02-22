<script>
import axios from 'axios'
export default {
  name: 'AteliersComponent',
  data() {
    return {
      ateliers: null
    }
  },
  methods: {
    fetchAteliers() {
      axios.get('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier?fields=*.Tag_id.*')
          .then(response => {
            console.log(response.data)
            this.ateliers = response.data.data
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
  <div class="workshop-list">
    <h1>Liste des Ateliers</h1>
    <div class="workshop-cards">
      <div class="workshop-card" v-for="atelier in ateliers" :key="atelier.id">
        <div class="card-header">
          {{ atelier.nom }}
        </div>
        <div class="card-body">
          <img :src="atelier.image" class="card-img-top" alt="Image de l'atelier">
          <p><span v-for="tag in atelier.tags" :key="tag.Tag_id.id" class="mx-2 badge tag">#{{
              tag.Tag_id.libelle
            }}</span></p>
          <div class="card-details">
            <p class="card-description">{{ atelier.description }}</p>
            <p class="card-capacity">Places disponibles : {{ atelier.places }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.workshop-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.workshop-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.workshop-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  background-color: #36A862;
  color: white;
  padding: 10px;
  font-weight: bold;
}

.card-body {
  padding: 20px;
}

.tag {
  margin-top: 2em;
  background-color: #A53480;
  font-size: 1em;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.card-details {
  margin-top: 10px;
}

.card-description {
  color: #333;
  margin-bottom: 5px;
  font-size: 1.3em;
}

.card-capacity {
  font-size: 1.5em;
  color: #666;
}
</style>
