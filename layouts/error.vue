<template>
  <div
    class="
      container
      flex flex-col
      min-h-screen
      text-2xl
      items-center
      justify-start
      pt-4
      md:justify-center
      px-4
      md:px-auto
      mx-auto
      space-y-4
    "
  >
    <h1 class="font-bold text-6xl">{{ error.statusCode }}</h1>
    <h1 v-if="error.statusCode === 404">Sorry, page not found.</h1>
    <h1 v-else>Sorry, an error occurred.</h1>
    <NuxtLink to="/" class="underline font-bold text-center"
      >Let's go back to the home page!</NuxtLink
    >
    <img
      src="/images/egg-faces.jpg"
      alt="eggs with faces"
      class="rounded pt-4"
    />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      required: true,
      type: Object,
    },
  },
}
</script>
