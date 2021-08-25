<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
    "
    style="background: url(images/salad-bowl.jpg) no-repeat center center fixed"
  >
    <div
      class="
        container
        rounded
        shadow
        p-4
        w-5/6
        bg-opacity-75 bg-white
        my-4
        md:p-6 md:w-3/4
      "
    >
      <h1 class="text-2xl font-bold text-center p-4 md:pt-12 md:text-5xl">
        Send Me Your Favorite Recipe!
      </h1>
      <form
        id="my-form"
        action="https://formspree.io/f/meqvpwrn"
        method="POST"
        @submit.prevent="handleSubmit"
      >
        <h2 class="font-bold text-xl pb-2 md:text-2xl">About You</h2>
        <div
          class="
            flex flex-col
            items-center
            justify-center
            w-full
            space-y-4
            pb-4
            md:space-y-0 md:pb-6 md:flex-row md:space-x-4
          "
        >
          <div class="flex flex-col space-y-1 w-full md:w-1/2">
            <label for="user-name" class="font-bold"
              ><span class="pr-1" aria-hidden="true">📛</span> Your Name</label
            >
            <input
              type="text"
              name="user-name"
              class="rounded p-1 border"
              required
            />
          </div>

          <div class="flex flex-col space-y-1 w-full md:w-1/2">
            <label for="email" class="font-bold"
              ><span class="pr-1" aria-hidden="true">💌</span> Email</label
            >
            <input
              type="email"
              name="email"
              class="rounded p-1 border"
              required
            />
          </div>
        </div>

        <h2 class="font-bold text-xl pb-2 md:text-2xl">About Your Recipe</h2>

        <div
          class="
            flex flex-col
            items-center
            justify-center
            w-full
            space-y-4
            pb-4
            md:space-y-0 md:flex-row md:space-x-4
          "
        >
          <div class="flex flex-col space-y-1 w-full md:w-1/2">
            <label for="recipe-name" class="font-bold"
              ><span class="pr-1" aria-hidden="true">🗂️</span> Recipe
              Name</label
            >
            <input
              type="text"
              name="recipe-name"
              class="rounded p-1 border"
              required
            />
          </div>

          <div class="flex flex-col space-y-1 w-full md:w-1/2">
            <label for="categories" class="font-bold"
              >✔️ Category or Categories*</label
            >
            <input
              type="text"
              name="categories"
              class="rounded p-1 border"
              required
            />
          </div>
        </div>

        <div class="flex flex-col space-y-1 pb-4">
          <label for="ingredients" class="font-bold"
            ><span class="pr-1" aria-hidden="true">🥫</span> Ingredients</label
          >
          <textarea name="ingredients" class="rounded p-1 border" required />
        </div>

        <div class="flex flex-col space-y-1 pb-4">
          <label for="directions" class="font-bold"
            ><span class="pr-1" aria-hidden="true">🍳</span> Directions</label
          >
          <textarea name="directions" class="rounded p-1 border" required />
        </div>

        <div class="flex flex-col space-y-1 pb-4">
          <label for="notes" class="font-bold">
            <span class="pr-1" aria-hidden="true">❤️</span> Why You Love This
            Recipe</label
          >
          <textarea name="notes" class="rounded p-1 border" />
        </div>

        <div class="flex items-center justify-center">
          <button
            id="my-form-button"
            class="
              rounded
              px-2
              py-1
              bg-black
              text-white
              font-bold
              mx-auto
              hover:bg-gray-800
            "
          >
            Submit
          </button>
        </div>

        <p
          id="my-form-status"
          class="italic font-bold text-2xl text-center pt-4"
        ></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeSubmissionForm',

  methods: {
    handleSubmit(event) {
      event.preventDefault()
      const form = document.getElementById('my-form')
      const status = document.getElementById('my-form-status')
      const data = new FormData(event.target)
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          status.textContent = 'Thanks for your recipe!'
          form.reset()
        })
        .catch((error) => {
          status.textContent =
            'Oops! There was a problem submitting your recipe.'
          console.log(error)
        })
    },
  },
}
</script>
