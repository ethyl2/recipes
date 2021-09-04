<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-contain bg-center bg-no-repeat
      font-semibold
    "
    style="background: url(images/citrus.jpg) no-repeat center center fixed"
  >
    <main
      class="
        container
        rounded
        shadow
        p-4
        w-3/4
        bg-opacity-75 bg-white
        my-4
        text-left
        md:p-6 md:my-auto
        lg:w-1/2
      "
    >
      <h1 class="text-3xl font-bold text-center p-2 md:p-6 lg:text-4xl">
        About
      </h1>
      <div
        class="flex flex-col items-start justify-center space-y-4 md:space-y-6"
      >
        <p>
          I love trying out new recipes, especially ones that are vegan and
          vegetarian. I also have a few recipes that are my trusted, tried and
          true friends. I decided to build this site because I'm fed up with
          recipe sites that have so much extra, annoying things. I wanted to be
          able to share recipes with less headache.
        </p>
        <section class="flex flex-col space-y-2">
          <h2 class="font-bold text-lg">What I don't need on a recipe page:</h2>
          <ul class="list-disc list-inside">
            <li>ads</li>
            <li>a ton of text before getting to the actual recipe</li>
            <li>pop ups</li>
            <li>
              brand names in the ingredients list (unless it actually makes a
              difference in how the recipe turns out)
            </li>
            <li>signups for newsletters</li>

            <li>videos unrelated to the recipe</li>
            <li>
              the feeling that the page is more about the person than the recipe
            </li>
          </ul>
        </section>
        <section class="flex flex-col space-y-2">
          <h2 class="font-bold text-lg">What I really want to see:</h2>
          <ul class="list-disc list-inside">
            <li>the ingredients</li>
            <li>the steps</li>
            <li>
              why the recipe is worth making and what makes it special (written
              in a concise way, not a billion paragraphs)
            </li>
          </ul>
        </section>
        <p>
          So here is my ongoing project to make a less stressful recipe site.
        </p>
        <p class="italic">Happy recipe exploration and cooking!</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
