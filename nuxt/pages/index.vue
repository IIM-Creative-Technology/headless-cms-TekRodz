<template>
    <div v-if="home">
        <h1 class="text-4xl mb-4 font-bold">À propos de moi</h1>
        <hr class="mb-4 w-12 h-1.5 bg-gold border-none rounded-lg">

        <div v-if="home" v-html="$mdRenderer.render(home.aboutMe)" class="[&>p]:pb-4 [&>p]:text-primary-grey"></div>

        <h2 class="text-2xl my-4 font-bold">Mes compétences</h2>
        <div class="grid grid-cols-2 gap-4">
            <div v-for="skill in home.skill" class="p-6 bg-primary-light rounded-2xl border border-invisibleGrey">
                <h3 class="font-bold mb-4 text-lg">{{ skill.name }}</h3>
                <p class="text-primary-grey">{{ skill.description }}</p>
            </div>
        </div>
        
        <h2 class="text-2xl mt-8 mb-4 font-bold">Technologie apprises</h2>
        <div class="grid grid-cols-2 gap-4">
            <div v-for="techno in technologies" class="p-6 bg-primary-light rounded-2xl border border-invisibleGrey">
                <h3 class="font-bold mb-4 text-lg">{{ techno.name }}</h3>
                <p class="text-primary-grey">{{ techno.description.slice(0, 80) }}...</p>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script setup>
    const { find } = useStrapi()
    const home = ref()
    const technologies = ref()

    onMounted(async() => {
        home.value = await find(`home?populate=deep`)
        home.value = home.value.data

        technologies.value = await find(`technologies`)
        technologies.value = technologies.value.data
    })

</script>