<template>
  <section class="about container">

   <div class="row mid">
      <div class="col-lg-7 col-md-7">
        <div class="top pt-4">
          <div class="link-div">
            <h1 class="route-name">About</h1>
          </div>
        </div>

        <div class="middle">
          <p class="mt-3">
            I'm Daniel Obode, a problem solving Software Engineer.
            My coding journey began in 2018, fueled by curiosity and a love for creativity. Today, I'm passionate about crafting captivating user experiences, harmonizing technology and design. 
            <br>
            <br>
            From fashion e-commerce to language apps, I've contributed to diverse projects, embracing challenges and refining my skills. 
            I thrive on problem-solving and time management, while basketball and R&B music fuel my creativity.
            With every line of code, I continue to shape a dynamic digital narrative.
          </p>

          <h3 class="mt-3">Listen to my favorite album!</h3>
          <iframe
           style="border-radius:12px" 
           src="https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator" 
           width="70%" 
           height="152" 
           frameBorder="0" 
           allowfullscreen="true" 
           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
           loading="lazy"
           v-motion-pop
          ></iframe>
        </div>
      </div>

      <div class="col-lg-5 col-md-5 p-4 right" v-motion-slide-bottom :delay="200">
        <h3>Experience</h3>

        <div class="job">
          <h5 class="job-header">
            Frontend Engineer | Tishlabs NG | 2022-Present
          </h5>
          <p class="job-desc">
            <ul>
              <li>
                Developing, maintaining and improving the overall performance and scalability of Tishlab Technologies' Bills payment platform (OneCentral NG) by 90%.
              </li>
              <li>
                Implementing Agile Methodologies that reduced project risk through continuous integration and delivery for 4 major projects.
              </li>
              <li>
                Coordinating in the Design and Development of complex product functionalities that helped in better deliverables within deadlines.
              </li>
              <li>
                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
              </li>
              <li>
                Orchestrating timely code reviews within the team that helped promote clean code practices.
              </li>
            </ul>
            <b>Tech Stack:</b> Vue, React, Nuxt, Typescript, Javascript, Git, Rest APIs
          </p>
        </div>

        <div class="job">
          <h5 class="job-header">
            Frontend Engineer | Axel Cyber LTD | 2021-Present
          </h5>
          <p class="job-desc">
            <ul>
              <li>
                Creating over 20 well-functioning static/dynamic websites for clients.
              </li>
              <li>
                Delivering work well to clients beyond my deadline with little or no mistakes.
              </li>
              <li>
                Contributing towards the launch of multiple Go-Live portals reducing the overall business cost by 55%.
              </li>
            </ul>
            <b>Tech Stack:</b>  React, Redux, Typescript, JavaScript, Git, Rest APIs
          </p>
        </div>

        <div class="job">
          <h5 class="job-header">
            Frontend Engineer | Limelight Digital Agency | Winter 2023
          </h5>
          <p class="job-desc">
            <ul>
              <li>
                Created an E-Commerce web application for a cafe based in New York, USA
              </li>
              <li>
                Worked in teams of multiple designers and developers to meet deadlines get work delivered on time.
              </li>
              <li>
                Performing bug fixes and code reviews. 
              </li>
              <li>
                Tested code using Jest and Cypress.
              </li>
            </ul>
            <b>Tech Stack:</b> Vue, Typescript, Git, Rest APIs
          </p>
        </div>

        <h3 class="mt-5">Programming Languages</h3>
        <p><font-awesome-icon :icon="['fab', 'js']" class="me-2" /> JavaScript</p>
        <p><font-awesome-icon :icon="['fab', 'js']" class="me-2" /> Typescript</p>
        <p><font-awesome-icon :icon="['fab', 'python']" class="me-2" /> Python</p>
        <p><font-awesome-icon :icon="['fab', 'java']" class="me-2" /> Java</p>

        <h3 class="mt-5">Skills and Tools</h3>
        <!-- <div class="row">
          <div class="col-6">
            <p><font-awesome-icon :icon="['fab', 'vuejs']" class="me-2" /> Vue</p>
            <p><font-awesome-icon :icon="['fab', 'react']" class="me-2" /> React</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Nuxt</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Next</p>
            <p><font-awesome-icon :icon="['fab', 'bootstrap']" class="me-2" /> Bootstrap</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> TailwindCSS</p>
            <p><font-awesome-icon :icon="['fab', 'html5']" class="me-2" /> HTML</p>
            <p><font-awesome-icon :icon="['fab', 'css3']" class="me-2" /> CSS</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Redux</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Pinia</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Vuex</p>
            <p><font-awesome-icon :icon="['fab', 'vuejs']" class="me-2" /> Vuetify</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> GraphQL</p>
            <p><font-awesome-icon :icon="['fab', 'git-alt']" class="me-2" /> Git</p>
            <p><font-awesome-icon :icon="['fab', 'npm']" class="me-2" /> NPM</p>
            <p><font-awesome-icon :icon="['fab', 'yarn']" class="me-2" /> Yarn</p>
            <p><font-awesome-icon :icon="['fab', 'trello']" class="me-2" /> Trello</p>
          </div>
          <div class="col-6">
            <p><font-awesome-icon :icon="['fab', 'figma']" class="me-2" /> Figma</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Render</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Vercel</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Web Accessibility</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Restful APIs</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Webpack</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Axios</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Babel</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Firebase</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Vite</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Jest</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Cypress</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> GSAP</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> WebSockets</p>
            <p><font-awesome-icon :icon="['fab', 'google']" class="me-2" /> Google APIs</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> OOP</p>
            <p><font-awesome-icon :icon="['fas', 'globe']" class="me-2" /> Data Structures</p>
          </div>
        </div> -->
        <p>Vue.js | React.js | Nuxt.js | Bootstrap | TailwindCSS | HTML | CSS | Web Accessibility | Redux | Pinia | Vuex | Vuetify | 
          GraphQL | Git | NPM | Yarn | Trello | Figma | Render | Vercel | Restful API | Webpack | Axios | Babel | 
          Firebase | Vite | Jest | Cypress | VS Code | GSAP | WebSockets | Google APIs | OOP | Data Structures</p>

        <div class="link-div mt-5 mb-5">
          <a href="https://docs.google.com/document/d/1b2hcwc8pHAdGSQvtxpQRWKAIVVcx-1oe8uDw2yMxMak/edit?usp=sharing" target="_blank" class="link">View Full Resume</a>
        </div>
        
      </div>
   </div>

  </section>
</template>

<style scoped>
li {
  font-size: 0.9rem;
}
.top {
  height: 15vh;
}
.middle {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
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
  color: #EC9192;
  font-family: 'Grandstander', sans-serif;
}
h3 {
  font-weight: 800;
}
.route-name:before {
  background: #EC9192;
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
  color: #2F1D1D;
}
.link::before {
  background: linear-gradient(269.82deg, #EC9192 0%, #FBE9E9 55.17%);
  width: 100%;
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

@media (max-width: 768px) {
  .top {
    height: auto;
  }
  .middle {
    height: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    overflow-y: initial;
  }
  .right {
    overflow-y: initial;
  }
  .mid {
    height: 88vh;
    /* margin-top: 2vh; */
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
