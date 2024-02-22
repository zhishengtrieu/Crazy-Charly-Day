<script>
import axios from "axios";

export default {
  name: 'AdminAtelierComponent',
  data() {
    return {
      atelier: {
        "id": 1,
        "theme": {
          "id": 1,
          "code": "FR",
        },
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
    <p>Thème : {{ atelier.theme.code }}</p>
    <p>Capacité {{ atelier.membres.length }} / {{ atelier.capacite }}</p>
    <div class="card my-4">
      <div class="card-header">
        Membres
      </div>
      <div class="card-text">
        <ul>
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
      <div class="card-header">
        Candidats
      </div>
      <div class="card-text">
        <ul>
          <li v-for="candidat in atelier.candidats" :key="candidat.id">
            {{ candidat.nom }} {{ candidat.prenom }}
            <button class="btn btn-primary">Accepter</button>
            <button class="btn btn-danger">Refuser</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-end">
      <div class="btn btn-primary"><i class="bi bi-check-lg"></i> Valider les changements</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.dropdown-menu {
  li {
    cursor: pointer;
  }
}
</style>