<template>
    <div>
        <div>
            <h4 class="head mb-3">Crafting Web Experiences One Pixel at a Time.</h4>
            <p class="mb-3 intro">With a love for crafting elegant and user-centered web experiences, 
                I've embarked on a journey that merges my technical prowess with a creative spirit.
                Whether I'm translating design visions into responsive code or fine-tuning user interactions, 
                I strive to create digital landscapes that resonate with both functionality and aesthetics.
                Join me as I navigate the ever-evolving world of web development, one pixel and line of code at a time.
            </p>
            <div class="link-div">
              <a href="#" class="link">Get In Touch</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.head {
    font-family: 'Grandstander', sans-serif;
    color: #47A8BD;
    font-weight: 800;
}

.intro {
    width: 85%;
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
</style>