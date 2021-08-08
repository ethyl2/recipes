<template>
  <div
    :style="`background: url(/images/${recipe.bg_img}) no-repeat center center fixed;`"
    class="min-h-screen"
  >
    <header>
      <h1
        class="
          text-3xl text-center
          font-bold
          py-8
          text-white
          tracking-wide
          md:text-6xl
        "
      >
        {{ recipe.name }}
      </h1>
    </header>
    <div
      class="
        container
        mx-auto
        flex flex-col
        pb-4
        items-start
        md:flex-row md:space-x-4 md:pb-16
      "
    >
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
        <div class="flex flex-col pb-6 md:flex-row md:justify-between">
          <ul class="mb-4 font-medium">
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
          <div v-if="recipe.subRecipe">
            <h3 class="text-lg font-bold mb-4">
              {{ recipe.subRecipe.name }}
            </h3>
            <ul class="font-medium">
              <li
                v-for="(ingredient, index) in recipe.subRecipe.ingredients"
                :key="`subRecipe-ingredient-${index}`"
              >
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
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
      return this.$store.state.recipes.all.find(
        (recipe) => recipe.slug === this.currentRecipe
      )
    },
  },
}
</script>
