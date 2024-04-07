<template>
    <div class="d-flex column justify-content-evenly align-items-start">
        <div class="link-div">
            <RouterLink to="/" class="router-link active link">Home</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="/projects" class="router-link projects-link link">Projects</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="/about" class="router-link about-link link">About</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="/contact" class="router-link contact-link link">Contact</RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.column {
  flex-direction: column;
}

.link-div {
    margin-top: 1rem;
}

.router-link:before {
    content: "";
    position: absolute;
    top: 108%;
    height: 10px;
    width: 0;
    top: 85%;
}

.projects-link:hover:before {
    width: 50%;
    background: #8661C1;
}

.about-link:hover:before {
    width: 50%;
    background: #EC9192;
}

.contact-link:hover:before {
    width: 50%;
    background: #5FB49C;
}

.active {
    color: #47A8BD;
}

.active::before {
    width: 50%;
    background: #47A8BD;
}

.router-link {
    font-weight: 900;
    font-family: 'Grandstander', sans-serif;
    font-size: calc(3rem + 0.9vw);
}

@media (max-width: 1024px) {
    .link-div {
        margin-top: 0;
    }
    .router-link {
        font-size: calc(2rem + 0.5rem);
    }
}
</style>