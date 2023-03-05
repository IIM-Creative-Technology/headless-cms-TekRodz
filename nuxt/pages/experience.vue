<template>
    <div v-if="experience">
        <h1 class="text-4xl mb-4 font-bold">Expérience</h1>
        <hr class="mb-4 w-12 h-1.5 bg-gold border-none rounded-lg">

        <h2 class="text-2xl mt-4 mb-8 font-bold">Éducation</h2>
        <div>
            <ol class="timeline-list">
                <li v-for="education in experience.education" class="mb-8 timeline-item">
                    <h3 class="font-bold text-lg">{{ education.name }}</h3>
                    <p class="text-gold my-2">{{ education.duration }}</p>
                    <p class="text-primary-grey">{{ education.description }}</p>
                </li>
            </ol>
        </div>

        <h2 class="text-2xl mt-4 mb-8 font-bold">Expérience professionnel</h2>
        <ol class="timeline-list">
            <li v-for="education in experience.experience" class="mb-8 timeline-item">
                <h3 class="font-bold text-lg">{{ education.name }}</h3>
                <p class="text-gold my-2">{{ education.duration }}</p>
                <p class="text-primary-grey">{{ education.description }}</p>
            </li>
        </ol>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script setup>
    const { find } = useStrapi()
    const experience = ref()

    onMounted(async() => {
        experience.value = await find(`experience?populate=deep`)
        experience.value = experience.value.data
    })
</script>

<style scoped>
    .timeline-list { 
        margin-left: 65px; 
    }
    .timeline-item { 
        position: relative; 
    }
    
    .timeline-item:not(:last-child) { 
        margin-bottom: 20px; 
    }

    .timeline-item:not(:last-child)::before {
        content: "";
        position: absolute;
        top: -25px;
        left: -30px;
        width: 1px;
        height: calc(100% + 50px);
        background: #383838;
    }

    .timeline-item::after {
        content: "";
        position: absolute;
        top: 5px;
        left: -33px;
        height: 6px;
        width: 6px;
        background: #ffc562;
        border-radius: 50%;
    }
</style>