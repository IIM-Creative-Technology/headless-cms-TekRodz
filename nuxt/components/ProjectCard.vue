<template>
    <div class="m-4">
        <NuxtLink :to="'/project/' + project.slug">
            <img :src="project.image.url" :alt="project.name" class="object-cover w-full h-52 rounded-2xl">
            <div class="techno flex py-2">
                <p class="rounded py-2 px-4 mr-2" v-for="techno in project.technologies" :style="'background-color:' + techno.color">{{ techno.name }}</p>
            </div>
            <h2>{{ project.name }}</h2>
            <p class="text-primary-grey">{{ project.type }}</p>
        </NuxtLink>
    </div>
</template>

<script>
export default{
    props: ['project']
}
</script>