<template>
  <div style="background: url(/images/dry-pasta.jpg)" class="min-h-screen">
    <header>
      <h1 class="text-6xl text-center font-bold py-8 text-white tracking-wide">
        Mac-n-Cheese (Made in the Instant Pot)
      </h1>
    </header>
    <div class="container mx-auto flex flex-col md:flex-row md:space-x-4">
      <div class="py-4 mx-4 md:mx-auto md:w-1/2 md:py-0">
        <img
          class="w-full h-auto rounded shadow"
          src="/images/mac-n-cheese.jpg"
          alt="mac-n-cheese"
        />
      </div>
      <div
        class="md:w-1/2 mx-4 md:mx-auto bg-opacity-90 bg-white p-6 rounded mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">Ingredients</h2>
        <ul class="mb-4 font-medium">
          <li>16 oz. uncooked elbow macaroni</li>
          <li>4 c. broth (veggie or chicken)</li>
          <li>1 tsp. hot pepper sauce</li>
          <li>1 tsp. garlic powder</li>
          <li>1/2 tsp. pepper</li>
          <li>2 c. shredded cheddar cheese</li>
          <li>1 c. shredded mozzarella cheese</li>
          <li>1/2 c. shredded Parmesan cheese</li>
          <li>1/2 - 1 c. milk</li>
        </ul>
        <div>
          <h2 class="text-2xl font-bold mb-4">Directions</h2>
          <ol class="list-decimal list-inside font-medium">
            <li>
              Add the uncooked macaroni, broth, butter, hot sauce, and garlic
              powder to the Instant Pot.
            </li>
            <li>Cook on manual, high pressure for 5 minutes.</li>
            <li>Do a quick release.</li>
            <li>Add milk.</li>
            <li>Gradually add and stir in cheeses.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MacNCheese',
}
</script>
