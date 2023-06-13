<script>
export default {
    name:'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card border-info mb-3 h-100" style="max-width: 21rem;">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>