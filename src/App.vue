<template>
  <div class="page">

    <div class="container">
      <p class="copyright">© 2024 Daniel Obode.</p>
    </div>

    <div class="view">
      <RouterView v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <div class="route-navigation">
      <div class="d-flex z-1">
        <div @click="goToPrevRoute" class="route-div me-2"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
        <div @click="goToNextRoute" class="route-div ms-2"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMagicKeys, whenever } from '@vueuse/core'

export default {
  name: 'App',
  data() {
    return {
      routes: ['home', 'projects', 'about', 'contact']
    }
  },
  mounted() {
    const keys = useMagicKeys();

    whenever(keys.arrowLeft, () => {
      this.goToPrevRoute();
    })

    whenever(keys.arrowRight, () => {
      this.goToNextRoute();
    })
  },
  methods: {
    goToNextRoute() {
      const currentRoute = this.$route.name
      const index = this.routes.indexOf(currentRoute);
      const nextRouteIndex = (index + 1) % 4;
      this.$router.push({ name: this.routes[nextRouteIndex] })
    },
    goToPrevRoute() {
      const currentRoute = this.$route.name
      const index = this.routes.indexOf(currentRoute);
      const nextRouteIndex = (index - 1) % 4;
      this.$router.push({ name: this.routes[nextRouteIndex] })
    }
  }
}
</script>

<style>
body {
  /* border: 2rem solid rgb(71, 168, 189, 0.3); */
}
.copyright {
  position: absolute;
  bottom: 1vh;
  font-size: 0.8rem;
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
  border: 2px solid #333333;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.8s ease;
}

.route-div:hover {
  border: 2px solid #47A8BD;
  color: #47A8BD;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(2em);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
