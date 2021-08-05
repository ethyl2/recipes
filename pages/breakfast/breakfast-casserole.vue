<template>
  <div
    style="
      background: url(/images/colorful-eggs.jpg) no-repeat center center fixed;
    "
  >
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Breakfast Casserole
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
          src="/images/breakfast-casserole.jpg"
          alt="granola"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <div class="flex flex-col md:flex-row md:justify-around">
          <ul class="mb-4 font-medium">
            <li>3 c. frozen shredded hash brown potatoes</li>
            <li>3/4 c. shredded cheese</li>
            <li>1/4 c. sliced green onions</li>
            <li>
              1 c. diced ham, crumbled & cooked bacon, crumbled & cooked sausage
              or vegan sausage, opt.
            </li>
            <li>4 eggs</li>
            <li>1 1/2 c. milk</li>
            <li>1/8 tsp. salt</li>
            <li>1/8 tsp. pepper</li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>
              If you are preparing this to eat right away, preheat oven to 350
              degrees F.
            </li>
            <li>Spray a 2-quart baking dish with cooking oil spray.</li>
            <li>Put potatoes in a layer on the bottom of the dish.</li>
            <li>Layer cheese, meat, and onions on top.</li>
            <li>In a bowl, whisk together the eggs, milk, salt, and pepper.</li>
            <li>Pour egg mixture over potato mixture.</li>
            <li>
              If you are going to eat this now, bake uncovered for 40-45 min.,
              or until knife inserted near the center comes clean.
            </li>
            <li>Or cover and chill for up to 24 hours.</li>
            <li>
              Bake at 350 degrees F uncovered for 50-65 min. or until knife
              inserted near the center comes clean.
            </li>
            <li>Let stand 5 min. before serving.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreakfastCasserole',
}
</script>
