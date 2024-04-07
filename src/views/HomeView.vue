<template>
  <div class="background">
    <!-- <img src="../assets/images/ellipse-bg-1.png" alt="bg" class="bg-1">
    <img src="../assets/images/ellipse-bg-2.png" alt="bg" class="bg-2"> -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="container z-1">

      <div class="top">
        <div class="row pt-4">
          <div class="col-lg-7 col-md-7 col-sm-7 col-8">
            <NameAndProfession />
          </div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-4 d-flex justify-content-end align-items-start pt-3">
            <div class="link-div">
              <a href="https://docs.google.com/document/d/1W6MK71GxSS7dBXeZn_nq-dnQvmx76AhynhKj8cp9XQ4/edit?usp=sharing" target="_blank" class="link">Resume</a>
            </div>
          </div>
        </div>
      </div>

      <div class="middle z-1">
        <div class="row pt-3">
          <div class="col-lg-7 col-md-7 d-flex align-items-center">
            <CraftingExperiences />
          </div>
          <!-- <div class="col-lg-2 col-0 laptop"></div> -->
          <div class="col-lg-3 col-md-5 col-0 d-flex align-items-center nav-links">
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
.background {
  overflow: hidden;
}
.top {
  height: 15vh;
}
.middle {
  height: 75vh;
  display: flex;
  align-items: center;
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
  .nav-links {
    padding-left: 8rem;
  }
}

@media (min-width: 768px) {
  
  .nav-links {
    padding-left: 4rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none !important;
  }
  .blob {
    width: 200px;
  }
}
</style>
