<script>
import axios from "axios";

export default {
  name: 'QuestionnaireComponent',
  data() {
    return {
      questions: [
        {
          id: 1,
          question: "Mangez-vous souvent salé ?",
          categorie: "Régime alimentaire",
        },
        {
          id: 2,
          question: "Mangez-vous souvent sucré ?",
          categorie: "Régime alimentaire",
        },
        {
          id: 3,
          question: "Êtes-vous végétarien(ne) ?",
          categorie: "Régime alimentaire",
        },
        {
          id: 4,
          question: "Êtes-vous végétalien(ne) ?",
          categorie: "Régime alimentaire",
        },
        {
          id: 5,
          question: "Êtes-vous végan(ne) ?",
          categorie: "Régime alimentaire",
        },
        {
          id: 6,
          question: "Êtes-vous intolérant(e) au gluten ?",
          categorie: "Allergies",
        },
        {
          id: 7,
          question: "Êtes-vous intolérant(e) au lactose ?",
          categorie: "Allergies",
        },
        {
          id: 8,
          question: "Êtes-vous intolérant(e) aux fruits à coque ?",
          categorie: "Allergies",
        },
        {
          id: 9,
          question: "Êtes-vous intolérant(e) aux arachides ?",
          categorie: "Allergies",
        },
        {
          id: 10,
          question: "Êtes-vous intolérant(e) aux mollusques ?",
          categorie: "Allergies",
        },
        {
          id: 11,
          question: "Êtes-vous intolérant(e) au soja ?",
          categorie: "Allergies",
        },
        {
          id: 12,
          question: "Êtes-vous intolérant(e) aux œufs ?",
          categorie: "Allergies",
        },
      ],
      answers: [],
      currentAnswer: 0,
      currentQuestion: 0,
      sumbitted: false,
      coordonnees: {
        Nom: "",
        Prenom: "",
        email: "",
      }
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.questions.length) {
        this.answers[this.questions[this.currentQuestion].id] = this.currentAnswer == 1
        this.currentAnswer = 0
        this.currentQuestion++
      } else {

        // verif champs
        this.coordonnees.Nom = this.coordonnees.Nom.trim()
        this.coordonnees.Prenom = this.coordonnees.Prenom.trim()
        this.coordonnees.email = this.coordonnees.email.trim()
        if (this.coordonnees.Nom === "" || this.coordonnees.Prenom === "" || this.coordonnees.email === "") {
          alert("Veuillez remplir tous les champs")
        } else {
          this.sendAnswers()
          this.sumbitted = true
        }
      }
    },
    sendAnswers() {
      console.log(this.coordonnees)
      axios.post('http://docketu.iutnc.univ-lorraine.fr:61501/items/Membre', this.coordonnees)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.error(error)
          })
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-if="!sumbitted">
          <div v-if="currentQuestion < questions.length" class="quiz-container">
            <h4 class="categorie">{{ questions[currentQuestion].categorie }}</h4>
            <h5 class="question">{{ questions[currentQuestion].question }}</h5>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="reponse" v-model="currentAnswer"
                     :id="questions[currentQuestion].id + 'oui'" value="1">
              <label class="form-check-label" :for="questions[currentQuestion].id + 'oui'">Oui</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="reponse" v-model="currentAnswer"
                     :id="questions[currentQuestion].id + 'non'" value="0">
              <label class="form-check-label" :for="questions[currentQuestion].id + 'non'">Non</label>
            </div>
          </div>
          <div v-else>
            <h5>Il ne nous manque plus que vos coordonnées pour vous proposer les ateliers qui vous correspondent !</h5>
            <div class="mb-3">
              <label for="nom" class="form-label">Nom</label>
              <input type="text" class="form-control" id="nom" v-model="coordonnees.Nom"/>
            </div>
            <div class="mb-3">
              <label for="prenom" class="form-label">Prénom</label>
              <input type="text" class="form-control" id="prenom" v-model="coordonnees.Prenom"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Adresse e-mail</label>
              <input type="email" class="form-control" id="email" v-model="coordonnees.email"/>
              <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre adresse e-mail avec qui que ce
                soit.
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button class="btn btn-primary" @click="nextQuestion">Valider <i class="bi bi-arrow-right"></i></button>
          </div>
        </div>
        <div v-else>
          <h1>Merci !</h1>
          <h4>Nous vous recontacterons très bientôt pour vous proposer les ateliers qui vous correspondent.</h4>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
h1 {
  margin: 0;
}

.row {
  margin: 5em;

  .categorie {
    margin-bottom: 1em;
    text-align: center;
    text-decoration: underline;
    color: #A53480;
  }
}

</style>