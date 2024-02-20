<template>
    <div class="background">
        <!-- <img src="../assets/images/contact-bg-1.png" alt="bg" class="bg-1"> -->
        <img src="../assets/images/contact-bg-2.png" alt="bg" class="bg-2">
        
        <div class="container">
            <div class="row pt-3">
                <div class="col-lg-6 col-md-6">
                    <div class="link-div">
                        <h1 class="route-name">Contact</h1>
                    </div>
                    
                    <div class="h-100 pt-5 pb-5 pe-5">
                        <div class="mt-3">
                            <h3>Let's talk</h3>
                            <p>Have a project on your mind? Want to explore the latest in web development? 
                                Share your thoughts, and I'll be here to discuss and offer insights.
                            </p>
                        </div>
                        <div class="mt-3">
                            <h3>Face to Face</h3>
                            <p>If you're around Lagos, let's meet up! Whether it's coding, design or a game 
                                of hoops, I'm up for meaningful discussions and creative exchanges.
                            </p>
                        </div>
                        <div class="mt-3">
                            <h3>Get in Touch</h3>
                            <p>Got questions, ideas, or just want to say hi? Feel free to reach out. 
                                Let's collaborate to bring your visions to life.
                            </p>
                        </div>
                        <div class="link-div">
                            <a href="mailto:obodedaniel3@gmail.com" class="link">Send a Message</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-5 col-md-6 d-flex align-items-center justify-content-center">
                    <div class="z-1">
                        <h3 class="mb-3">Stay Connected</h3>
                        <p>Connect with me on Twitter and LinkedIn to stay in the loop about my coding 
                            journey, recent projects, and tech musings.
                        </p>
                        <div class="d-flex mt-3 z-1">
                            <a href="https://www.github.com/hoodiedan" target="_blank" class="me-3">
                                <img src="../assets/images/github.png" alt="github">
                            </a>
                            <a href="https://www.github.com/hoodiedan" target="_blank" class="me-3">
                                <img src="../assets/images/linkedin.png" alt="linkedin">
                            </a>
                            <a href="https://www.x.com/osemuu" target="_blank" class="me-3">
                                <img src="../assets/images/twitter.png" alt="twitter">
                            </a>
                            <a href="https://www.instagram.com/the.7th.kind" target="_blank" class="me-3">
                                <img src="../assets/images/instagram.png" alt="instagram">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.background::before {
    content: "";
    background-image: url("../assets/images/contact-bg-1.png");
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
    animation: move-bg-1 10s ease-in-out infinite;
}
h1,h2,h3,h4,h5,h6 {
    color: #5FB49C;
    font-family: 'Grandstander', sans-serif;
}
h3 {
    font-weight: 800;
}
.route-name:before {
    background: #5FB49C;
}

p {
    width: 85%;
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
</style>