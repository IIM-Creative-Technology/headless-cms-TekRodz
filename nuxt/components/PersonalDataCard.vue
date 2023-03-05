<template>
    <div class="text-sm w-full my-2">
        <p class="text-primary-grey">{{ title }}</p>
        <p>{{ info }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        info: String
    })
</script>