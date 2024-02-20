<template>
  <div class="background">
    <img src="../assets/images/ellipse-bg-2.png" alt="bg" class="bg-2">
    <div class="container z-1">

      <div class="top">
        <div class="row pt-3">
          <div class="col-lg-7 col-md-7">
            <NameAndProfession />
          </div>
          <div class="col-lg-5 col-md-5 d-flex justify-content-end align-items-start pt-3">
            <div class="link-div">
              <a href="#" class="link">Resume</a>
            </div>
          </div>
        </div>
      </div>

      <div class="middle z-1">
        <div class="row pt-3">
          <div class="col-lg-7 col-md-7 d-flex align-items-center">
            <CraftingExperiences />
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-3 col-md-5 d-flex align-items-center">
            <NavigationLinks />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NameAndProfession from '@/components/NameAndProfession.vue';
import NavigationLinks from '@/components/NavigationLinks.vue';
import CraftingExperiences from '@/components/CraftingExperiences.vue';

export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
  components: {
    NameAndProfession,
    NavigationLinks,
    CraftingExperiences,
  }
}
</script>

<style scoped> 
/* .page {
  background: url('../assets/images/ellipse-bg-1.png');
  background-repeat: no-repeat;
  background-position: 100% 0;
} */
.hide {
  overflow-y: hidden;
}
.background::before {
  content: "";
  background-image: url("../assets/images/ellipse-bg-1.png");
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  /* z-index: -1; */
  opacity: 70%;
  animation: move-bg-1 15s ease-in-out infinite;
}
.bg-2 {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 85%;
  /* z-index: -1; */
  opacity: 50%;
  animation: move-bg-2 8s ease-in-out infinite;
}
.link {
  transition: all 0.8s linear;
}
.link::before {
  content: "";
  background: linear-gradient(269.82deg, #47A8BD 0%, #DAEEF2 55.17%);
  height: 4px;
  width: 100%;
  top: 108%;
}

.link:hover:before {
  animation: gradient 0.8s ease;
  background-size: 200% 200%;
}

@keyframes move-bg-1 {
  0% {
    transform: translateZ(200px);
  }
  25% {
    transform: translateX(300px);
  }
  50% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateX(100px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes move-bg-2 {
  0% {
    transform: translateZ(-200px);
  }
  25% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateX(-100px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@media (min-width: 992px) {
  .top {
    height: 15%;
    /* display: flex;
    align-items: center; */
  }
  .middle {
    height: 85%;
    display: flex;
    align-items: center;
  }
}

</style>
