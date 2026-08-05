<template>
  <div
    class="min-h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat"
    style="background: url(images/fruitcake.jpg) no-repeat center center fixed"
  >
    <div
      class="container rounded shadow p-4 w-3/4 bg-opacity-75 bg-white my-4 md:my-auto lg:w-1/2"
    >
      <h1 class="text-3xl font-bold text-center p-2 md:p-6 lg:text-4xl">
        Find a Favorite Recipe
      </h1>
      <form
        class="flex flex-col items-center justify-center space-y-2 md:space-y-0 md:flex-row"
        @submit.prevent="applySearch"
      >
        <label for="search" class="pr-2 font-bold">Search by name:</label>

        <input
          id="search"
          v-model="searchQuery"
          type="search"
          name="search"
          placeholder="e.g. cornbread"
          class="p-2 rounded w-full md:w-auto"
        />

        <button
          type="submit"
          class="rounded px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 w-full md:w-auto md:ml-3"
        >
          Search
        </button>
      </form>
      <div
        class="flex flex-col items-center justify-center space-y-2 pt-4 md:space-y-0 md:flex-row"
      >
        <label for="options" class="pr-2 font-bold">Choose a category:</label>

        <select
          id="options"
          v-model="selectedCategory"
          name="options"
          class="px-2 py-2.5 rounded w-full md:w-auto"
        >
          <option value="">All categories</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category.split('-').join(' ') }}
          </option>
        </select>
      </div>
      <div
        class="flex flex-col items-stretch justify-center w-full mb-6 pt-6 md:flex-row md:flex-wrap"
      >
        <nuxt-link
          v-for="(recipe, index) in selectedRecipes"
          :key="index"
          class="px-3 font-bold py-1 border border-black rounded bg-white bg-opacity-80 text-xl flex items-center justify-center text-center mb-2 md:m-2 hover:bg-black hover:text-white"
          :to="`recipes/${recipe.slug}`"
          >{{ recipe.name }}</nuxt-link
        >
      </div>
      <p v-if="isFiltering && !selectedRecipes.length" class="text-center pb-6">
        No recipes match that search. Try another name or category.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      // What's currently typed in the box.
      searchQuery: '',
      // What was actually submitted; only this filters the list.
      appliedQuery: '',
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
      return categoryArray.sort()
    },
    // 'Corn Bread!' -> ['corn', 'bread']
    queryWords() {
      return this.appliedQuery
        .toLowerCase()
        .split(/[^a-z0-9]+/i)
        .filter(Boolean)
    },
    // The words run together, so 'corn bread' can match 'Cornbread'.
    squashedQuery() {
      return this.queryWords.join('')
    },
    isFiltering() {
      return Boolean(this.selectedCategory || this.queryWords.length)
    },
    selectedRecipes() {
      if (!this.isFiltering) {
        return []
      }
      const matches = this.recipes.filter((recipe) => {
        const matchesCategory =
          !this.selectedCategory ||
          recipe.categories.includes(this.selectedCategory)
        return matchesCategory && this.scoreRecipe(recipe) !== null
      })
      // Closest matches first, then alphabetically within the same score.
      return matches.sort((a, b) => {
        const scoreDiff = this.scoreRecipe(a) - this.scoreRecipe(b)
        return scoreDiff || a.name.localeCompare(b.name)
      })
    },
  },
  watch: {
    // Emptying the box (including via the input's clear button) resets results.
    searchQuery(value) {
      if (!value.trim()) {
        this.appliedQuery = ''
      }
    },
  },
  methods: {
    applySearch() {
      this.appliedQuery = this.searchQuery
    },
    // 'Grandma's Corn-Bread' -> 'grandmascornbread'
    squash(text) {
      return text.toLowerCase().replace(/[^a-z0-9]+/gi, '')
    },
    /*
     * Lower is a better match; null means no match at all.
     * A recipe matches when every word in the query appears somewhere in its
     * name, in any order, ignoring spaces and punctuation.
     */
    scoreRecipe(recipe) {
      if (!this.queryWords.length) {
        return 0
      }
      const name = this.squash(recipe.name)
      if (name.startsWith(this.squashedQuery)) {
        return 0
      }
      if (name.includes(this.squashedQuery)) {
        return 1
      }
      if (this.queryWords.every((word) => name.includes(word))) {
        return 2
      }
      return null
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
