<script>
import AteliersComponent from '@/components/AteliersComponent.vue'

export default {
  name: 'AteliersView',
  components: {
    AteliersComponent
  },
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
}
</script>

<template>
  <AteliersComponent/>
</template>
