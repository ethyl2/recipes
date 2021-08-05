<template>
  <div style="background: url(/images/eggs.jpg) no-repeat center center fixed">
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Quiche
      </h1>
    </header>
    <div
      class="
        container
        mx-auto
        min-h-screen
        flex flex-col
        md:flex-row md:space-x-4
      "
    >
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:pt-0">
        <img
          class="w-2/3 mx-auto h-auto rounded shadow"
          src="/images/quiche.jpg"
          alt="granola"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <div class="flex flex-col md:flex-row md:justify-around">
          <ul class="mb-4 font-medium">
            <li>1 refrigerated or frozen pie crust (or make your own)</li>
            <li>1/2 onion, chopped</li>
            <li>
              Other filling ingredients, like mushrooms, peppers, regular/vegan
              bacon or sausage, etc.
            </li>
            <li>1 c. shredded cheese</li>
            <li>3 eggs</li>
            <li>3/4 c. milk</li>
            <li>1/2 tsp. salt</li>
            <li>1/8 tsp. pepper</li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>Preheat oven to 425 degrees F.</li>
            <li>If crust isn't in a pan, press crust into a 9-inch pan.</li>
            <li>Bake crust for 5 min.</li>
            <li>Remove, and reduce oven temperature to 375 degrees F.</li>
            <li>
              If using bacon, cook bacon until crisp. Remove, set aside, and
              crumble. Discard all but about 1 T. of bacon drippings.
            </li>
            <li>
              Use the drippings in the pan (or oil) to saute the onion and other
              filling ingredients, until soft.
            </li>
            <li>
              Sprinkle 1/2 c. cheese in the pie shell. Spread filling
              ingredients on top.
            </li>
            <li>
              Beat eggs, milk, salt, and pepper together. Pour mixture in pie
              shell.
            </li>
            <li>Sprinkle with remaining 1/2 c. cheese.</li>
            <li>Bake 30-35 min., or until golden brown.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quiche',
}
</script>
