<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
    "
    style="background: url(images/fruitcake.jpg) no-repeat center center fixed"
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
      <h1 class="text-3xl font-bold text-center p-2 md:p-6 lg:text-4xl">
        Favorite Recipes By Category
      </h1>
      <div
        class="
          flex flex-col
          items-center
          justify-center
          space-y-2
          md:space-y-0 md:flex-row
        "
      >
        <label for="options" class="pr-2 font-bold">Choose a category:</label>

        <select
          id="options"
          v-model="selectedCategory"
          name="options"
          class="p-2 rounded"
        >
          <option value="" disabled selected>Pick one of the following</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div
        class="
          flex flex-col
          items-stretch
          justify-center
          w-full
          mb-6
          pt-6
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
          :to="`recipes/${recipe.slug}`"
          >{{ recipe.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
    }
  },
  computed: {
    recipes() {
      return this.$store.state.recipes.all
    },
    categories() {
      const categoryArray = []
      this.recipes.forEach((recipe) => {
        recipe.categories.forEach((category) => {
          if (!categoryArray.includes(category)) {
            categoryArray.push(category)
          }
        })
      })
      return categoryArray
    },
    selectedRecipes() {
      const recipeArray = []
      this.recipes.forEach((recipe) => {
        if (recipe.categories.includes(this.selectedCategory)) {
          recipeArray.push(recipe)
        }
      })
      return recipeArray
    },
  },
}
</script>

<style>
.subtitle {
  font-weight: 30;
  font-size: 4px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.link {
  padding-top: 5px;
}
</style>
