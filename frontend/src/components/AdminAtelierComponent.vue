<script>
import axios from "axios";

export default {
  name: 'AdminAtelierComponent',
  data() {
    return {
      atelier: {
        "id": 1,
        "tags": [
          {
            "code": "CU",
            "libelle": "Cuisine"
          },
          {
            "code": "FR",
            "libelle": "Français"
          },
          {
            "code": "VE",
            "libelle": "Végétarien"
          }
        ],
        "capacite": 20,
        "atelier": {
          "code": "FR",
          "libelle": "Atelier 1"
        },
        "membres": [
          {
            "id": 1,
            "nom": "Doe",
            "prenom": "John",
            "email": "test@mail.com",
          },
          {
            "id": 2,
            "nom": "Doe",
            "prenom": "Jane",
            "email": "test2@mail.com",
          },
        ],
        "candidats": [
          {
            "id": 3,
            "nom": "Doe",
            "prenom": "John",
            "email": "text@mail.com",
          },
          {
            "id": 4,
            "nom": "Doe",
            "prenom": "Jane",
            "email": "testmail@gmail.com",
          },
        ]
      }
    }
  },
  methods: {
    fetchAtelier() {
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
    this.fetchAtelier()
  }
  ,
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">{{ atelier.atelier.libelle }}</h1>
    <p>Tags : <span v-for="tag in atelier.tags" :key="tag.code" class="mx-2 badge tag">{{ tag.libelle }}</span></p>
    <p>Capacité : <span class="badge text-bg-secondary">{{ atelier.membres.length }} / {{ atelier.capacite }}</span></p>
    <div class="card my-4">
      <div class="card-header">Membres</div>
      <div class="card-text">
        <ul class="user-list">
          <li v-for="membre in atelier.membres" :key="membre.id">
            {{ membre.nom }} {{ membre.prenom }}
            <span class="dropdown ms-auto">
              <i class="bi bi-three-dots-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">
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
      <div class="btn btn-danger"><i class="bi bi-trash3"></i> Supprimer l'atelier</div>
      <div class="btn btn-primary"><i class="bi bi-check-lg"></i> Valider les changements</div>
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