<template>
    <div v-if="projects">
        <h1 class="text-4xl mb-4 font-bold">Projets</h1>
        <hr class="mb-4 w-12 h-1.5 bg-gold border-none rounded-lg">
        <div class="flex my-6">
            <p class="mr-4 font-bold">Contexte du projet :</p>
            <button v-bind:class="{ active: activeFilter === ''}" @click="changeFilter('')" class="pr-4 hover:text-gold">All</button>
            <button v-bind:class="{ active: activeFilter === ProjectType}" v-for="ProjectType in types" :key="ProjectType" @click="changeFilter(ProjectType)" class="px-4 hover:text-gold">{{ ProjectType }}</button>
        </div>
        <div class="flex my-6">
            <p class="mr-4 font-bold">Technologie utilisée :</p>
            <button v-bind:class="{ active: activeTechnoFilter === ''}" @click="changeTechnoFilter('')" class="pr-4 hover:text-gold">All</button>
            <button v-bind:class="{ active: activeTechnoFilter === TechnoType}" v-for="TechnoType in technoFilter" :key="TechnoType" @click="changeTechnoFilter(TechnoType)" class="px-4 hover:text-gold">{{ TechnoType }}</button>
        </div>

        <div class="grid grid-cols-3">
            <ProjectCard v-for="project in loadProjects" :project="project"/>
        </div>

        <div class="flex justify-center">
            <button @click="previousPage" class="mx-4 font-bold border-b border-gold hover:text-gold">Précédent</button>

            <button @click="nextPage" class="mx-4 font-bold border-b border-gold hover:text-gold">Suivant</button>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script setup>
    const { find } = useStrapi()
    const activeFilter = ref('')
    const activeTechnoFilter = ref('')
    const projects = ref()
    const projectsMeta = ref()
    const types = ref([])
    const technoFilter = ref([])
    const page = ref(1)

    const loadProjects = computed(() => {
        return projects.value
    })

    const nextPage = () => {
        if(verifNextPage()){
            page.value = page.value + 1
            callProject()
        }
    }

    const previousPage = () => {
        if(page.value > 1){
            page.value = page.value - 1
            callProject()
        }
    }

    const changeFilter = (typeFilter) => {
        activeFilter.value = typeFilter
        page.value = 1
        callProject()
    }

    const changeTechnoFilter = (technoFilter) => {
        activeTechnoFilter.value = technoFilter
        page.value = 1
        callProject()
    }

    const verifNextPage = () => {
        if(page.value < projectsMeta.value.pagination.pageCount){
            return true
        } else {
            return false
        }
    }

    const callProject = async() => {
        projects.value = await find(`projects?pagination[page]=${page.value}&pagination[pageSize]=6&filters[type][$contains]=${activeFilter.value}&populate=deep&filters[technologies][name][$contains]=${activeTechnoFilter.value}`)
        projectsMeta.value = projects.value.meta
        projects.value = projects.value.data
    }

    onMounted(async() => {
        projects.value = await find(`projects?pagination[page]=${page.value}&pagination[pageSize]=6&populate=deep`)
        projectsMeta.value = projects.value.meta
        projects.value = projects.value.data

        types.value = new Set(projects.value.map(project => {
            return project.type 
        }))

        technoFilter.value = await find(`technologies`)
        technoFilter.value = technoFilter.value.data

        technoFilter.value = new Set(technoFilter.value.map(techno => {
            return techno.name
        }))
    })

</script>

<style scoped>

    .active{
        color: #ffc562;
    }
    .filter button:hover{
        color: #ffc562;
    }
    .Scolaire, .Personnel, .Professionnel{
        display: inline-block;
        padding: 2% 4%;
        font-weight: bold;
        border-radius: 5px;
        text-transform: uppercase;
    }

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