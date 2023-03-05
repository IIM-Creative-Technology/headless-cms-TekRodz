<template>
    <main role="main" class="px-36 py-20 min-h-screen">
        <Nav />
        <div class="bg-primary p-8 border border-invisibleGrey rounded-2xl h-fit relative">
            <TopNav/>
            <slot />
        </div>
    </main>
</template>

<style>
    main{
        display: grid;
        grid-template-columns: 2fr 7fr;
        grid-column-gap: 5%;
    }
</style>