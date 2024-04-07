<template>
    <div class="projects container">
        <div class="row mid">
            <div class="col-lg-7 col-md-7">
                <div class="top pt-4">
                <div class="link-div">
                    <h1 class="route-name">Projects</h1>
                </div>
                </div>

                <div class="middle">
                    <p class="mt-3">
                        Dive into a collection of projects that exemplify my coding journey – 
                        from e-commerce platforms to dynamic apps. Witness how I blend technology 
                        and creativity to craft seamless user experiences.
                    </p>
                </div>
            </div>

            <div class="col-lg-5 col-md-5 p-4 right">
                <div class="job" :class="{ 'active' : tab == 'tektalk' }" @click="changeTab('tektalk')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Tektalk</h2>
                    <ul>
                        <li class="job-desc">Social Network / 2023</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'onecentral' }" @click="changeTab('onecentral')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />OneCentral</h2>
                    <ul>
                        <li class="job-desc">Fintech Application / 2021</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'drewmusic' }" @click="changeTab('drewmusic')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Drew Music</h2>
                    <ul>
                        <li class="job-desc">Music Streaming Application / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'projectsplace' }" @click="changeTab('projectsplace')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Projects Place LTD</h2>
                    <ul>
                        <li class="job-desc">Landing Page / 2023</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'realestestate' }" @click="changeTab('realestestate')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Real Estate</h2>
                    <ul>
                        <li class="job-desc">Landing Page / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'twitterclone' }" @click="changeTab('twitterclone')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Twitter Clone</h2>
                    <ul>
                        <li class="job-desc">Social Network / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'lendsqr' }" @click="changeTab('lendsqr')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Lendsqr</h2>
                    <ul>
                        <li class="job-desc">Dashboard / 2024</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'temidash' }" @click="changeTab('temidash')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Temi Dash</h2>
                    <ul>
                        <li class="job-desc">Dashboard / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'wowpizza' }" @click="changeTab('wowpizza')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Wow Pizza</h2>
                    <ul>
                        <li class="job-desc">E-Commerce / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'eazipay' }" @click="changeTab('eazipay')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" />Eazipay</h2>
                    <ul>
                        <li class="job-desc">Landing Page / 2023</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ProjectsView',
  data() {
    return {
      tab: 'tektalk'
    }
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    }
  }
}
</script>

<style scoped>
li {
  font-size: 0.9rem;
}
.top {
  height: 15vh;
}
.middle {
  height: 75vh;
  overflow: scroll;
}
.middle::-webkit-scrollbar {
    display: none;
}
.right {
  height: 100vh;
  overflow-y: scroll;
}
.right::-webkit-scrollbar {
  display: none;
}
h1,h2,h3,h4,h5,h6 {
  color: #8661C1;
  font-family: 'Grandstander', sans-serif;
}
h3, h2 {
  font-weight: 800;
}
h2 {
  font-size: 2.5rem;
}
.route-name:before {
  background: #8661C1;
}

p {
  width: 85%;
  font-weight: 500;
  color: #191919;
}

.job-header {
  color: #764949;
  font-family: 'Oxygen', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
}
.job-desc {
  color: #433161;
  font-weight: 600;
  font-family: 'Heebo', sans-serif;
}
.link::before {
  background: linear-gradient(269.82deg, #EC9192 0%, #FBE9E9 55.17%);
  width: 100%;
}

.link:hover:before {
  animation: gradient 0.8s ease;
  background-size: 200% 200%;
}

.square {
  transform: rotate(45deg) scale(0.5);
  display: none;
}

.job > * {
  cursor: pointer;
  transition: all 0.3s ease;
}

.job:hover h2 {
  transform: translateX(1.5rem);
}

.job:hover .square {
  display: inline-block;
}

.active > h2 {
  color: #2D2040;
}

.active .square {
  display: inline-block;
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

@media (max-width: 768px) {
  .top {
    height: auto;
  }
  .middle {
    height: auto;
    margin-bottom: 1rem;
    margin-top: 1rem
  }
  .right {
    overflow-y: initial;
  }
  .mid {
    height: 88vh;
    margin-top: 2vh;
    overflow-y: scroll;
  }
  .mid::-webkit-scrollbar {
    display: none;
  }
  p, iframe {
    width: 100%
  }
}
</style>
  