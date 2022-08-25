<template>
  <div
    itemscope
    itemtype="http://schema.org/Recipe"
    :style="
      recipe && recipe.bg_img
        ? `background: url(/images/${recipe.bg_img}) no-repeat center center fixed; background-size: cover;`
        : 'background: url(/images/food_bowl.jpg) no-repeat center center fixed; background-size: cover;'
    "
    class="min-h-screen"
  >
    <header v-if="recipe">
      <h1
        v-if="recipe && recipe.name"
        id="recipe-name"
        class="text-3xl text-center font-bold py-8 tracking-wide md:text-6xl"
        :class="[
          recipe.titleColor ? `text-${recipe.titleColor}` : 'text-white',
        ]"
      >
        {{ recipe.name }}
      </h1>
    </header>
    <div v-if="!recipe" class="w-full bg-opacity-90 bg-white p-6">
      <p class="text-center">
        Can't find that recipe! See if
        <nuxt-link class="font-bold hover:underline" to="/"
          >any others</nuxt-link
        >
        sound good to you.
      </p>
    </div>
    <div
      v-else
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
          v-if="recipe && recipe.featured_img"
          id="featured-img"
          class="w-full h-auto rounded shadow mx-auto lg:w-2/3"
          :src="`/images/${recipe.featured_img}`"
          :alt="`${recipe.name}`"
        />
        <div
          v-if="recipe && recipe.categories"
          class="
            hidden
            w-full
            flex-wrap
            items-center
            justify-center
            space-x-2
            pt-4
            md:flex
          "
        >
          <nuxt-link
            v-for="category in recipe.categories"
            :key="category"
            :to="`/category/${category}`"
            class="
              bg-gray-600 bg-opacity-75
              text-white
              rounded-full
              px-2
              py-1
              font-bold
              shadow
              hover:bg-white hover:text-black
            "
          >
            {{ category.split('-').join(' ') }}
          </nuxt-link>
        </div>
      </div>
      <div
        v-if="recipe && recipe.ingredients"
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
    <div
      v-if="recipe"
      class="flex items-center justify-center space-x-6 pb-4 md:pb-16"
    >
      <button
        v-if="recipe.notes"
        id="show-modal"
        class="
          text-center
          bg-white
          rounded
          px-3
          py-2
          font-bold
          hover:bg-black hover:text-white
        "
        @click="showModal = true"
      >
        Notes
      </button>
      <button
        class="
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
      <button
        class="
          text-center
          bg-white
          rounded
          px-3
          py-2
          font-bold
          hover:bg-black hover:text-white
        "
        type="button"
        @click="showShareModal = true"
      >
        Share
      </button>
    </div>

    <div
      v-if="recipe && recipe.categories"
      class="
        w-full
        flex flex-wrap
        items-center
        justify-center
        space-x-2
        py-4
        border-t-4 border-white
        bg-gray-400 bg-opacity-50
        md:hidden
      "
    >
      <nuxt-link
        v-for="category in recipe.categories"
        :key="category"
        :to="`/category/${category}`"
        class="
          bg-black
          text-white
          rounded-full
          px-2
          py-1
          font-bold
          shadow
          hover:bg-white hover:text-black
        "
      >
        {{ category.split('-').join(' ') }}
      </nuxt-link>
    </div>

    <modal v-if="showModal && recipe.notes" @close="showModal = false">
      <h3 slot="header" class="font-bold text-xl text-gray-900">
        Why I Love This Recipe:
      </h3>
      <p slot="body">{{ recipe.notes }}</p>
      <div
        slot="footer"
        class="
          flex flex-col
          items-center
          justify-center
          space-y-2
          divide-y-2
          w-full
        "
      >
        <img
          :src="qrUrl"
          alt="qr code for page"
          class="w-16 mx-auto"
          title="Right-click this QR code to save it. Then you can share it with your
          friends to easily share this recipe!"
        />
        <div class="pt-2">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-show-count="false"
            >Share Recipe on Twitter</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </modal>
    <modal
      v-if="showShareModal && recipe.ingredients"
      @close="showShareModal = false"
    >
      <h3 slot="header" class="font-bold text-xl text-gray-900 text-center">
        Share This Recipe
      </h3>
      <div
        slot="body"
        class="
          flex flex-col
          items-center
          justify-center
          space-y-2
          divide-y-2
          w-full
        "
      >
        <img
          :src="qrUrl"
          alt="qr code for page"
          class="w-16 mx-auto"
          title="Right-click this QR code to save it. Then you can share it with your
          friends to easily share this recipe!"
        />
        <div class="pt-2">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-show-count="false"
            >Share Recipe on Twitter</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  name: 'Recipe',
  components: {
    Modal: () => import('~/components/modal'),
  },
  data() {
    return {
      currentRecipe: this.$route.params.recipe,
      showModal: false,
      showShareModal: false,
    }
  },
  head() {
    if (this.recipe) {
      return {
        title: this.recipe.name
          ? `${this.recipe.name} | Favorite Recipes 🍴`
          : 'Favorite Recipes 🍴',
        meta: [
          {
            name: 'twitter:title',
            content: this.recipe.name
              ? `${this.recipe.name} | Favorite Recipes 🍴`
              : 'Favorite Recipes 🍴',
          },
          {
            name: 'twitter:description ',
            content: this.recipe.name
              ? `One of Heather Nuffer's favorite recipes: ${this.recipe.name} 🍴`
              : `Heather Nuffer's favorite recipes`,
          },
          {
            name: 'twitter:image',
            content: `https://recipes-heathernuffer.vercel.app/images/${this.recipe.featured_img}`,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'og:site_name', content: 'Favorite Recipes' },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `https://recipes-heathernuffer.vercel.app/recipes/${this.recipe.slug}`,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.recipe.name
              ? `${this.recipe.name} | Favorite Recipes 🍴`
              : 'Favorite Recipes 🍴',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.recipe.name
              ? `One of Heather Nuffer's favorite recipes: ${this.recipe.name} 🍴`
              : `Heather Nuffer's favorite recipes`,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `https://recipes-heathernuffer.vercel.app/images/${this.recipe.featured_img}`,
          },
          { property: 'og:image:width', content: '740' },
          { property: 'og:image:height', content: '300' },
        ],
      }
    }
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.all.find(
        (recipe) => recipe.slug === this.currentRecipe
      )
    },
    qrUrl() {
      return `https://api.qrserver.com/v1/create-qr-code/?data=https://recipes-heathernuffer.vercel.app/recipes/${this.currentRecipe}`
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
                <img src="${this.qrUrl}"/>
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
