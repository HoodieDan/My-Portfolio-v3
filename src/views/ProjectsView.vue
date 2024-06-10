<template>
    <div class="projects container">
        <div class="row mid">
            <div class="col-lg-7 col-md-7 left" v-motion-slide-left :delay="200">
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

                    <div class="proj" v-if="(tab === 'tektalk') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/tektalk.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Tektalk</h5>
                        <p>
                          Engineered a discussion forum for tech enthusiasts to exchange ideas, 
                          troubleshoot issues, and engage in lively tech discussions, fostering a 
                          knowledge-sharing community.
                        </p>
                        <div class="link-div">
                          <a href="https://tektalk.vercel.app" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'onecentral') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/onecentral.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">One Central</h5>
                        <p>
                          A bills payment platform by TishLabs NG. I was involved in developing, 
                          maintaining and improving the overall performance and scalability of the web version of the application.
                        </p>
                        <div class="link-div">
                          <a href="https://onecentral.ng/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'drewmusic') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/drew-music.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Drew Music</h5>
                        <p>
                          Developed a music streaming application where individuals can stream, upload 
                          and comment on different types of music.
                        </p>
                        <div class="link-div">
                          <a href="https://drew-music.vercel.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'projectsplace') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/projects-place.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Projects Place LTD</h5>
                        <p>
                          Projects Place LTD is a construction company based in Lagos, Nigeria.
                          I solely built the landing page for the company.
                        </p>
                        <div class="link-div">
                          <a href="https://www.projectsplaceltd.com/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'realestate') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/real-estate.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project" v-motion-pop>
                        <h5 class="mt-3">Real Estate</h5>
                        <p>
                          A landing page for a real estate agency. Solely developed by me.
                          The sleek design was created by 
                          <a href="https://www.linkedin.com/in/temidayo-oyegoke-987ab3177/?originalSubdomain=ng" target="_blank" class="cred-link">Temidayo Oyegoke</a>.
                          An experienced designer based in Lagos, Nigeria.
                        </p>
                        <div class="link-div">
                          <a href="https://realest-estate.netlify.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'twitterclone') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/twitter-clone.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Twitter Clone</h5>
                        <p>
                          A clone of the popular social network X (formerly known as twitter). It includes profile, feed
                          and post details pages.
                        </p>
                        <div class="link-div">
                          <a href="https://hoodietwitter.vercel.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'lendsqr') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/lendsqr.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Lendsqr</h5>
                        <p>
                          This is the dashboard UI of the <a href="https://www.lendsqr.com" target="_blank" class="cred-link">Lendsqr</a>
                          web application. It includes login, users and user details pages. The authentication page will accept any details
                          that are in the proper format.
                        </p>
                        <div class="link-div">
                          <a href="https://daniel-obode-lendsqr-fe-test.vercel.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'temidash') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/temi-dash.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Temi Dash</h5>
                        <p>
                          An administrator dashboard UI for a sales business. Solely developed by me.
                          The sleek design was created by 
                          <a href="https://www.linkedin.com/in/temidayo-oyegoke-987ab3177/?originalSubdomain=ng" target="_blank" class="cred-link">Temidayo Oyegoke</a>.
                          An experienced designer based in Lagos, Nigeria.
                        </p>
                        <div class="link-div">
                          <a href="https://temi-dashboard.netlify.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'wowpizza') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/wowpizza.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Wow Pizza</h5>
                        <p>
                          Built an E-Commerce application for a pizza business.
                          The sleek design was created by 
                          <a href="https://www.behance.net/davidpatrick4" target="_blank" class="cred-link">David Patrick Friday</a>.
                          An experienced designer based in Lagos, Nigeria.
                        </p>
                        <div class="link-div">
                          <a href="https://wow-pizza.netlify.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                    <div class="proj" v-if="(tab === 'eazipay') || !desktop" v-motion-pop>
                      <div class="project-image">
                        <img src="../assets/images/eazipay.png" alt="" class="img-fluid">
                      </div>

                      <div class="about-project">
                        <h5 class="mt-3">Eazipay</h5>
                        <p>
                          Developed a clone of the <a href="https://www.myeazipay.com/" target="_blank" class="cred-link">Eazipay</a>
                          website. It is an product that lets you easily manage your employees’ payroll, benefits, expenses, devices, apps, 
                          and assessment for prospective employees & more.
                        </p>
                        <div class="link-div">
                          <a href="https://eazipay-website.vercel.app/" class="link" target="_blank">View Site</a>
                        </div>
                      </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-5 col-md-5 p-4 right" v-motion-slide-bottom :delay="200">
                <div class="job" :class="{ 'active' : tab == 'tektalk' }" @click="changeTab('tektalk')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Tektalk</span></h2>
                    <ul>
                        <li class="job-desc">Social Network / 2023</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'onecentral' }" @click="changeTab('onecentral')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">OneCentral</span></h2>
                    <ul>
                        <li class="job-desc">Fintech Application / 2021</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'drewmusic' }" @click="changeTab('drewmusic')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Drew Music</span></h2>
                    <ul>
                        <li class="job-desc">Music Streaming Application / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'projectsplace' }" @click="changeTab('projectsplace')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Projects Place LTD</span></h2>
                    <ul>
                        <li class="job-desc">Landing Page / 2023</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'realestate' }" @click="changeTab('realestate')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Real Estate</span></h2>
                    <ul>
                        <li class="job-desc">Landing Page / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'twitterclone' }" @click="changeTab('twitterclone')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Twitter Clone</span></h2>
                    <ul>
                        <li class="job-desc">Social Network Clone / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'lendsqr' }" @click="changeTab('lendsqr')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Lendsqr</span></h2>
                    <ul>
                        <li class="job-desc">Dashboard / 2024</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'temidash' }" @click="changeTab('temidash')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Temi Dash</span></h2>
                    <ul>
                        <li class="job-desc">Dashboard / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'wowpizza' }" @click="changeTab('wowpizza')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Wow Pizza</span></h2>
                    <ul>
                        <li class="job-desc">E-Commerce / 2022</li>
                    </ul>
                </div>
                <div class="job" :class="{ 'active' : tab == 'eazipay' }" @click="changeTab('eazipay')">
                    <h2 class="ms-2"><font-awesome-icon :icon="['fas', 'stop']" class="square me-3" /><span class="project">Eazipay</span></h2>
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
  mounted() {
    if (window.innerWidth <= 768) {
      this.desktop = false;
    }
  },
  data() {
    return {
      tab: 'tektalk',
      desktop: true,
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
a.cred-link {
  font-size: 1rem;
  color: #8661C1;
  font-weight: 400;
}
a.cred-link:hover {
  text-decoration: underline;
}
.top {
  height: 15vh;
}
.middle {
  height: 75vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  position: relative;
}
h3, h2, .project {
  font-weight: 800;
}
h2, .project {
  font-size: 2.5rem;
  transition: all .3s ease;
}
.project {
  transform: translateX(0);
  transition-duration: 300ms;
  transition-timing-function: ease;
  display: inline-block
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
  background: linear-gradient(269.82deg, #8661C1 0%, #E7DFF3 55.17%);
  width: 100%;
}

.link:hover:before {
  animation: gradient 0.8s ease;
  background-size: 200% 200%;
}

div.project-image {
  width: 60%;
  border: 2px solid #8661C1;
}
.about-project h5 {
  font-family: 'Heebo', sans-serif;
  font-weight: 700;
}

.square {
  transform: rotate(45deg) scale(0.5);
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;
}

.job > * {
  cursor: pointer;
  transition: all 0.6s ease;
}

.job:hover .project {
  transform: translateX(2.5rem);
}

.job:hover .square {
  /* display: inline-block; */
  opacity: 1;
}

.active > h2 {
  color: #2D2040;
}
.active .square {
  display: inline-block;
  opacity: 1;
  transform: rotate(405deg) scale(0.5);
}
.active h2 span {
  transform: translateX(2.5rem);
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
  /* .top {
    height: auto;
  } */
  /* .middle {
    height: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    overflow-y: initial;
  } */
  /* .mid {
    height: 88vh;
    margin-top: 2vh;
    overflow-y: scroll;
  }
  .mid::-webkit-scrollbar {
    display: none;
  } */
  p, iframe {
    width: 100%
  }
  div.project-image {
    width: 100%;
  }
  div.proj {
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid #8661C1;
    border-bottom: 1px solid #8661C1;
  }
  .right {
    display: none;
  }
}
</style>
  