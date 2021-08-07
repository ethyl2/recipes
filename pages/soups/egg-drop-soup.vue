<template>
  <div
    style="background: url(/images/pot.jpg) no-repeat center center fixed"
    class="min-h-screen"
  >
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Egg Drop Soup
      </h1>
    </header>
    <div class="container mx-auto flex flex-col md:flex-row md:space-x-4">
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          src="/images/egg-drop-soup.jpg"
          alt="apple slices"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 fnt-medium">
          <li>4 c. broth</li>
          <li>1/4 tsp. onion powder</li>
          <li>1/4 tsp garlic powder</li>
          <li>3 T. water</li>
          <li>1 T. cornstarch</li>
          <li>1 egg, lightly beaten</li>
          <li>12 snow pea pods</li>
          <li>1 green onion, thinly sliced</li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>
              Bring the broth and onion & garlic powders to a simmer in a
              saucepan over medium-high heat.
            </li>
            <li>In a small bowl, combine water and cornstarch.</li>
            <li>Stir the cornstarch mixture into the broth mixture.</li>
            <li>Bring to a boil.</li>
            <li>Remove from heat.</li>
            <li>
              Slowly pour in the egg, while gently stirring (slowly for long egg
              strands, quicker for thinner strands).
            </li>
            <li>Add peas and green onion.</li>
            <li>Let the soup stand for a few minutes before serving.</li>
            <li>Makes 4 servings.</li>
          </ol>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EggDropSoup',
}
</script>
