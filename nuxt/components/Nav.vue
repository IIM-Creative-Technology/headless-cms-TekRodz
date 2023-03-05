<template v-if="persoInfo != ''">
    <div class="bg-primary p-4 flex flex-col rounded-2xl items-center border border-invisibleGrey h-fit">
        <div class="my-4 p-4 w-4/5 bg-primary-lighter rounded-lg">
            <img :src="mainPicture.url" :alt="mainPicture.alternativeText">
        </div>
        <h2 class="text-xl font-semibold">{{ persoInfo.name }}</h2>
        <p class="my-4 py-2 px-4 rounded-lg bg-primary-lighter">{{ persoInfo.jobTitle }}</p>
        <hr class="my-5 h-0.5 w-full border-none bg-gold" />
        <PersonalDataCard title="EMAIL" :info="persoInfo.email" />
        <PersonalDataCard title="TÉLÉPHONE" :info="persoInfo.phone" />
        <PersonalDataCard title="NAISSANCE" :info="persoInfo.birthday" />
        <PersonalDataCard title="LOCALISATION" :info="persoInfo.location" />
    </div>
</template>

<script setup>
    const { find } = useStrapi()
    const persoInfo = ref('')
    const mainPicture = ref('')

    onMounted(async() => {
        persoInfo.value = await find(`personnal-info?populate=deep`)
        persoInfo.value = persoInfo.value.data
        mainPicture.value = persoInfo.value.mainPicture[0]
    })

</script>
