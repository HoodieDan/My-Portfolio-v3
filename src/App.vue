<template>
  <div class="page">

    <div class="container">
      <p class="copyright">© 2024 Daniel Obode.</p>
    </div>

    <div class="view">
      <RouterView />
    </div>
    <div class="route-navigation">
      <div class="d-flex">
        <div class="route-div me-2"><i class="fa-solid fa-angle-left"></i></div>
        <div class="route-div ms-2"><i class="fa-solid fa-angle-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  transition: all 0.8s ease;
}
.copyright {
  position: absolute;
  bottom: 1vh;
  font-weight: 500;
}
.view {
  height: 90vh;
}
.route-navigation {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.route-div  {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 1px solid #333333;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.route-div:hover {
  border: 1px solid #47A8BD;
  color: #47A8BD;
}
</style>
