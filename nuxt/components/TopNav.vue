<template>
    <div class="bg-primary-light absolute top-0 right-0 w-fit p-5 rounded-tr-2xl rounded-bl-2xl border border-invisibleGrey">
        <NuxtLink class="px-8 hover:text-gold font-bold" to="/">Accueil</NuxtLink>
        <NuxtLink class="px-8 hover:text-gold font-bold" to="/experience">Expérience</NuxtLink>
        <NuxtLink class="px-8 hover:text-gold font-bold" to="/projects">Projets</NuxtLink>
    </div>
</template>

<style scoped>
    .router-link-active{
        color: #ffc562;
    }
</style>