<template>
    <div>
        <h1>Learning nuxt</h1>
        <h3>Try a 404 error</h3>
        <NuxtLink to="/about_me">About me</NuxtLink>
        |
        <NuxtLink to="/resume">My resume</NuxtLink>
    </div>
</template>

<script>
export default {
    layout: 'blog',
}
</script>
