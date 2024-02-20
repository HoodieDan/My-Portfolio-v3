<template>
    <div class="d-flex column justify-content-evenly align-items-start">
        <div class="link-div">
            <RouterLink to="#" class="router-link active link">Home</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="#" class="router-link link">Projects</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="#" class="router-link link">About</RouterLink>
        </div>
        <div class="link-div">
            <RouterLink to="/contact" class="router-link link">Contact</RouterLink>
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

.link:before {
    background: #47A8BD;
    height: 10px;
    width: 0;
    top: 85%;
}

.link:hover::before {
    width: 50%;
}

.active {
    color: #47A8BD;
}

.active::before {
    width: 50%;
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