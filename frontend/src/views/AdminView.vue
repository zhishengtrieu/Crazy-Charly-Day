<script>
export default {
  name: 'AdminView'
}
</script>

<template>
  <div class="admin-view">
    <h1>Administration</h1>
    <nav>
      <router-link to="/admin/ateliers">
        <button class="btn btn-primary">Gérer les ateliers</button>
      </router-link>
      <router-link to="/admin/membres">
        <button class="btn btn-primary">Gérer les membres</button>
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.admin-view {
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 10px;
    }
  }
}
</style>
