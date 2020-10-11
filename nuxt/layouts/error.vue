<template>
    <div id="error_page_div">
        <NuxtLink to="/"> Go to home </NuxtLink>
        <h1 v-if="error.statusCode === 404">PAGE NOT FOUND!!</h1>
        <h1 v-else>SOME UNKNOWN ERROR</h1>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'sad_face',
}
</script>

<style>
#error_page_div h1 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 60px;
    text-align: center;
}
</style>
