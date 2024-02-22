<script>
import axios from "axios";

export default {
  name: 'AdminAtelierComponent',
  data() {
    return {
      atelier: null
    }
  },
  methods: {
    fetchAtelier() {
      this.atelier = null

      axios.get('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier/' + this.$route.params.id + '?fields=*.Tag_id.*,*.Membre_id.*,*.id')
          .then(response => {
            console.log(response.data.data)
            this.atelier = response.data.data
          })
          .catch(error => {
            console.error(error)
          })
    },
    remove() {
      axios.delete('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier/' + this.$route.params.id)
          .then(() => {
            this.$router.push('/admin/ateliers')
          })
          .catch(error => {
            console.error(error)
          })
    },
    removeMember(id) {
      axios.delete('http://docketu.iutnc.univ-lorraine.fr:61501/items/Atelier_Membre/' + id)
          .then(() => {
            this.fetchAtelier()
          })
          .catch(error => {
            console.error(error)
          })
    }
  },
  created() {
    this.fetchAtelier()
  },
}
</script>

<template>
  <div v-if="!atelier" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="container">
    <h1 class="text-center">{{ atelier.libelle }}</h1>
    <p>Tags : <span v-for="tag in atelier.tags" :key="tag.Tag_id.id" class="mx-2 badge tag">{{
        tag.Tag_id.libelle
      }}</span></p>
    <p>Capacité : <span class="badge text-bg-secondary">{{ atelier.membres.length }} / {{ atelier.places }}</span>
    </p>
    <div class="card my-4">
      <div class="card-header">Membres</div>
      <div class="card-text">
        <ul class="user-list">
          <li v-for="membre in atelier.membres" :key="membre.Membre_id.id">
            {{ membre.Membre_id.Nom }} {{ membre.Membre_id.Prenom }}
            <span class="dropdown ms-auto">
              <i class="bi bi-three-dots-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item" @click="removeMember(membre.id)">
                    <i class="bi bi-trash3"></i> Retirer le membre
                  </span>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card my-4">
      <div class="card-header">Liste d'attente</div>
      <div class="card-text">
        <ul class="user-list">
          <li v-for="candidat in atelier.candidats" :key="candidat.id">
            {{ candidat.nom }} {{ candidat.prenom }}
            <button class="btn btn-primary">Accepter</button>
            <button class="btn btn-danger">Refuser</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" @click="remove"><i class="bi bi-trash3"></i> Supprimer l'atelier</button>
      <button class="btn btn-primary"><i class="bi bi-check-lg"></i> Valider les changements</button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.badge {
  font-size: 1em;
}

.tag {
  background-color: #A53480;
}

.dropdown {
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }

  .dropdown-menu {
    li {
      cursor: pointer;
    }
  }
}

.user-list {
  li {

  }
}
</style>