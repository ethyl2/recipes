<template>
  <div
    :style="`background: url(/images/${recipe.bg_img}) no-repeat center center fixed;`"
    class="min-h-screen"
  >
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        {{ recipe.name }}
      </h1>
    </header>
    <div class="container mx-auto flex flex-col md:flex-row md:space-x-4">
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          :src="`/images/${recipe.featured_img}`"
          alt="apple slices"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 fnt-medium">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li v-for="(step, index) in recipe.steps" :key="`step-${index}`">
              {{ step }}
            </li>
          </ol>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recipe',
  data() {
    return {
      currentRecipe: this.$route.params.recipe,
    }
  },
  computed: {
    recipe() {
      // return this.entries.find((entry) => entry.number === this.currentDay)
      return this.$store.state.recipes.all.find(
        (recipe) => recipe.slug === this.currentRecipe
      )
    },
  },
}
</script>
