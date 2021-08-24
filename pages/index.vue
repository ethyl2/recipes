<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
    "
    style="background: url(images/food_bowl.jpg) no-repeat center center fixed"
  >
    <div
      class="
        container
        rounded
        shadow
        p-4
        w-3/4
        bg-opacity-75 bg-white
        my-4
        md:my-auto
        lg:w-1/2
      "
    >
      <h1
        class="
          text-3xl
          font-bold
          text-center
          p-4
          md:pt-12 md:text-9xl
          lg:text-3xl
        "
      >
        Favorite Recipes
      </h1>
      <div class="flex items-center justify-center">
        <nuxt-link
          to="/search"
          class="
            px-3
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            mb-2
            mx-auto
            hover:bg-black hover:text-white
          "
          title="Search By Category"
          >🔎<span class="sr-only">search</span></nuxt-link
        >
      </div>
      <div
        class="
          flex flex-col
          items-stretch
          justify-center
          w-full
          mb-6
          md:flex-row md:flex-wrap
        "
      >
        <nuxt-link
          v-for="(recipe, index) in recipes"
          :key="index"
          class="
            px-3
            font-bold
            py-1
            border border-black
            rounded
            bg-white bg-opacity-80
            text-xl
            flex
            items-center
            justify-center
            text-center
            mb-2
            md:m-2
            hover:bg-black hover:text-white
          "
          :to="`recipes/${recipe.slug}`"
          >{{ recipe.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipes() {
      return this.$store.state.recipes.all
    },
  },
}
</script>

<style>
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
