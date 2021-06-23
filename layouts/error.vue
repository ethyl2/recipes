<template>
  <div
    class="
      container
      flex flex-col
      min-h-screen
      text-2xl
      items-center
      justify-center
      mx-auto
      space-y-4
    "
  >
    <h1 class="font-bold text-6xl">{{ error.statusCode }}</h1>
    <h1 v-if="error.statusCode === 404">Sorry, page not found.</h1>
    <h1 v-else>Sorry, an error occurred.</h1>
    <NuxtLink to="/" class="underline font-bold"
      >Let's go back to the home page!</NuxtLink
    >
    <img
      src="/images/eggs.jpg"
      alt="eggs with confused faces"
      class="rounded"
    />
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
