<template>
    <div v-if="project">
        <div class="mb-4 font-bold">
            <NuxtLink class="hover:text-gold flex items-center" to="../projects">
                <svg class="mr-4" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.075 34.075" xml:space="preserve">
                    <g>
                        <g>
                            <path style="fill:#ffc562;" d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
                                L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
                                C25.58,33.883,25.075,34.075,24.57,34.075z"/>
                        </g>
                    </g>
                </svg>
                Revenir aux projets</NuxtLink>
        </div>
        <div>
            <h1 class="text-4xl mb-4 font-bold">{{ project.name }}</h1>
            <hr class="mb-4 w-12 h-1.5 bg-gold border-none rounded-lg">
            <img :src="project.image.url" :alt="project.name" class="w-full">
        </div>
        <div>
            <div class="my-4">
                <p :class="project.type" class="inline-block px-8 py-4 font-bold rounded uppercase">{{ project.type }}</p>
            </div>
            <h2 class="text-2xl my-4 font-bold">Quelle est le projet ?</h2>
            <p class="text-primary-grey">{{ project.description }}</p>
            <div v-if="project.technologies.length === 1">
                <h2 class="text-2xl my-4 font-bold">Technologie utilisée</h2>
                <div class="flex flex-col items-center">
                    <img :src="project.technologies[0].image.url" :alt="project.technologies[0].name" class="w-24 rounded-full">
                    <p class="mt-4 text-primary-grey">{{ project.technologies[0].name }}</p>
                </div>
            </div>
            <div v-else-if="project.technologies.length >= 2">
                <h2 class="text-2xl my-4 font-bold">Technologies utilisées</h2>
                <div class="flex justify-around flex-wrap">
                    <div class="flex flex-col items-center" v-for="technologie in project.technologies">
                        <img :src="technologie.image.url" :alt="technologie.name" class="w-24 rounded-full">
                        <p class="mt-4 text-primary-grey">{{ technologie.name }}</p>
                    </div>
                </div>
            </div>
            <div v-if="project.linkProject">
                <h2 class="text-2xl my-4 font-bold">Lien du projet :</h2>
                <a target="_blank" :href="project.linkProject" class="text-primary-grey">{{ project.linkProject }}</a>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script setup>
    const { findOne } = useStrapi()
    const route = useRoute()

    const project = ref([])
    
    project.value = await findOne(`projects?filters[slug]=${route.params.slug}&populate=deep`)
    project.value = project.value.data[0]
    console.log(project.value)
</script>

<style scoped>
    .Scolaire{
        background-color: #FC9464;
    }
    .Personnel{
        background-color: #8E99E2;
    }

    .Professionnel{
        background-color: #3CBA9F;
    }
</style>