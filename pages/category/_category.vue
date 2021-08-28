<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
      py-4
    "
    :style="{
      background: `url(/images/${categoryBackgroundImage}) no-repeat center center fixed`,
    }"
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
      "
    >
      <h1 class="text-3xl font-bold text-center p-4 md:pt-12 lg:text-3xl">
        {{ title }}
      </h1>
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
          v-for="(recipe, index) in selectedRecipes"
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
          :to="`/recipes/${recipe.slug}`"
          >{{ recipe.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const titleArray = this.$route.params.category.split('-')
      const capitalizedArray = []
      titleArray.forEach((word) => {
        capitalizedArray.push(word[0].toUpperCase() + word.substr(1))
      })
      return capitalizedArray.join(' ')
    },
    selectedRecipes() {
      const recipeArray = []
      this.$store.state.recipes.all.forEach((recipe) => {
        if (recipe.categories.includes(this.$route.params.category)) {
          recipeArray.push(recipe)
        }
      })
      return recipeArray
    },
    categoryBackgroundImage() {
      const categoryBackgroundImages = {
        breads: 'breads.jpg',
        'bread-machine': 'breads.jpg',
        breakfast: 'eggs.jpg',
        entrees: 'pizza.jpg',
        eggs: 'eggs.jpg',
        desserts: 'sprinkles.jpg',
        bars: 'chocolate.jpg',
        cookies: 'chocolate.jpg',
        pasta: 'dry-pasta.jpg',
        'instant-pot': 'mac-n-cheese.jpg',
        sauces: 'pot.jpg',
        sides: 'potatoes.jpg',
        dips: 'apples.jpg',
        soups: 'pot.jpg',
        vegan: 'raw-foods.jpg',
        potatoes: 'potatoes.jpg',
        drinks: 'breakfast-shake.jpg',
        salads: 'strawberry-salad.jpg',
      }
      return (
        categoryBackgroundImages[this.$route.params.category] ?? 'food_bowl.jpg'
      )
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
