<template>
  <div
    :style="`background: url(/images/${recipe.bg_img}) no-repeat center center fixed;`"
    class="min-h-screen"
  >
    <header>
      <h1
        id="recipe-name"
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
        md:flex-row md:space-x-4 md:pb-12
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
          <ul id="ingredients" class="mb-4 font-medium space-y-2">
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
          <div v-if="recipe.subRecipe" class="md:pl-6">
            <h3 id="subrecipe-name" class="text-lg font-bold mb-4">
              {{ recipe.subRecipe.name }}
            </h3>
            <ul id="subrecipe-ingredients" class="font-medium space-y-2">
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
          <ol id="steps" class="list-decimal list-inside font-medium space-y-2">
            <li v-for="(step, index) in recipe.steps" :key="`step-${index}`">
              {{ step }}
            </li>
          </ol>
        </div>
        <div></div>
      </div>
    </div>
    <div class="flex items-center justify-center pb-4 md:pb-16">
      <button
        class="
          mx-auto
          text-center
          bg-white
          rounded
          px-3
          py-2
          font-bold
          hover:bg-black hover:text-white
        "
        @click="printPage"
      >
        Print Recipe
      </button>
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
  methods: {
    printPage() {
      let iFrame = document.getElementById('printable-recipe')
      if (!iFrame) {
        const title = document.getElementById('recipe-name').textContent
        const ingredients = document.getElementById('ingredients').innerHTML
        const subRecipeNameEl = document.getElementById('subrecipe-name')
        const subRecipeIngredientsEl = document.getElementById(
          'subrecipe-ingredients'
        )
        const steps = document.getElementById('steps').innerHTML
        const printHtml = `<html>
            <head>
                <meta charset="utf-8">
                <title>${title}</title>
            </head>
            <body>
                <h1>${title}</h1>
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                    ${ingredients}
                    </ul>
                    <h3>${
                      subRecipeNameEl ? subRecipeNameEl.textContent : ''
                    }</h3>
                    <ul>
                    ${
                      subRecipeIngredientsEl
                        ? subRecipeIngredientsEl.innerHTML
                        : ''
                    }
                    </ul>
                </div>
                <div>
                    <h2>Directions</h2>
                    <ol>
                    ${steps}
                    </ol>
                </div>
                </div>
            </body>
        </html>`
        const body = document.querySelector('body')
        iFrame = document.createElement('iframe')
        iFrame.id = 'printable-recipe'
        iFrame.classList.add('hidden')
        body.append(iFrame)
        iFrame.contentDocument.body.innerHTML = printHtml
        iFrame.contentDocument.body.style.fontFamily = 'sans-serif'
      }
      iFrame.focus()
      iFrame.contentWindow.print()
    },
  },
}
</script>
