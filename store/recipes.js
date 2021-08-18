export const state = () => ({
  all: [
    {
      id: 1,
      name: 'Olga Bread',
      slug: 'olga-bread',
      categories: ['breads'],
      bg_img: 'breads.jpg',
      featured_img: 'olga-bread.jpg',
      ingredients: [
        '1 c. milk, warmed up',
        '1/4 c. honey',
        '1/4 c. butter',
        '1 tsp. salt',
        '2 1/4 tsp. yeast (1 pkg.)',
        '4 c. flour',
        '1 egg',
      ],
      steps: [
        'Combine ingredients in bread maker.',
        'Use the dough setting.',
        'When the dough has about doubled in size, punch down dough and divide into 16 pieces.',
        'Roll each piece into a thin circle.',
        'Over medium-high heat, cook a circle in a large dry (no oil) skillet for 15 seconds.',
        'Flip and cook for about 10 seconds more, until mottled brown spots appear.',
        'Continue until all circles are cooked.',
      ],
      notes:
        "We love to make this to eat with hummus and couscous. It brings back memories of one of my very favorite people, Susan Mendenhall, who put this recipe in our congregation's cookbook.",
    },
    {
      id: 2,
      name: 'Breakfast Casserole',
      slug: 'breakfast-casserole',
      categories: ['breakfast'],
      bg_img: 'colorful-eggs.jpg',
      featured_img: 'breakfast-casserole.jpg',
      ingredients: [
        '3 c. frozen shredded hash brown potatoes',
        '3/4 c. shredded cheese',
        '1/4 c. sliced green onions',
        '1 c. diced ham, crumbled & cooked bacon, crumbled & cooked sausage or vegan sausage, opt.',
        '4 eggs',
        '1 1/2 c. milk',
        '1/8 tsp. salt',
        '1/8 tsp. pepper',
      ],
      steps: [
        `
            If you are preparing this to eat right away, preheat oven to 350
            degrees F.
          `,
        `Spray a 2-quart baking dish with cooking oil spray.`,
        `Put potatoes in a layer on the bottom of the dish.`,
        `Layer cheese, meat, and onions on top.`,
        `In a bowl, whisk together the eggs, milk, salt, and pepper.`,
        `Pour egg mixture over potato mixture.`,
        `
            If you are going to eat this now, bake uncovered for 40-45 min.,
            or until knife inserted near the center comes clean.
          `,
        `Or cover and chill for up to 24 hours.`,
        `
            Bake at 350 degrees F uncovered for 50-65 min. or until knife
            inserted near the center comes clean.
          `,
        `Let stand 5 min. before serving.`,
      ],
      notes: 'This is a great way to feed a crowd for breakfast or brunch.',
    },
    {
      id: 3,
      name: 'Granola',
      slug: 'granola',
      categories: ['breakfast'],
      bg_img: 'wheat.jpg',
      featured_img: 'granola.jpg',
      ingredients: [
        '1/2 c. butter, softened',
        '1 c. brown sugar',
        '1/3 c. water or juice',
        '1 tsp. vanilla',
        '1/2 tsp. salt',
        '1/2 tsp. cinnamon',
        '1/2 tsp. cardamom (or nutmeg or allspice)',
        '1 1/4 c. wheat flour',
        '1 1/3 c. coconut',
        '1 c. chopped/sliced almonds, walnuts, pecans, or a mixture',
      ],
      steps: [
        `Preheat oven to 300 degrees F.`,
        `
              In a saucepan over med. heat, combine sugar, butter, and water.
            `,
        `Heat until mixture is melted and bubbly.`,
        `Remove from heat and add vanilla.`,
        `Pour liquid mixture over dry mixture and stir well to coat.`,
        `Let sit 10 min.`,
        `
              Spread on 2 baking sheets. Put one on the upper rack and one on
              the bottom rack of the oven.
            `,
        `
              Bake for 15 min. Stir to break up the mixture into medium-sized
              clumps. Switch the position of the 2 baking sheets.
            `,
        `
              Bake for 15 min more.. Stir and switch the position of the 2
              baking sheets again.
            `,
        `Bake for 15 min or until uniformly golden brown and dry.`,
        `Cool completely and store in an air-tight container.`,
      ],
      notes:
        "I used to make this all of the time for my husband's breakfast. Sometimes I will add chocolate- or yogurt-covered raisins to it, once it's cool.",
    },
    {
      id: 4,
      name: 'Quiche',
      slug: 'quiche',
      categories: ['breakfast', 'entrees'],
      bg_img: 'eggs.jpg',
      featured_img: 'quiche.jpg',
      ingredients: [
        `1 refrigerated or frozen pie crust (or make your own)`,
        `1/2 onion, chopped`,
        `
              Other filling ingredients, like mushrooms, peppers, regular/vegan
              bacon or sausage, etc.
            `,
        `1 c. shredded cheese`,
        `3 eggs`,
        `3/4 c. milk`,
        `1/2 tsp. salt`,
        `1/8 tsp. pepper`,
      ],
      steps: [
        `Preheat oven to 425 degrees F.`,
        `If crust isn't in a pan, press crust into a 9-inch pan.`,
        `Bake crust for 5 min.`,
        `Remove, and reduce oven temperature to 375 degrees F.`,
        `
              If using bacon, cook bacon until crisp. Remove, set aside, and
              crumble. Discard all but about 1 T. of bacon drippings.
            `,
        `
              Use the drippings in the pan (or oil) to saute the onion and other
              filling ingredients, until soft.
            `,
        `
              Sprinkle 1/2 c. cheese in the pie shell. Spread filling
              ingredients on top.
            `,
        `
              Beat eggs, milk, salt, and pepper together. Pour mixture in pie
              shell.
            `,
        `Sprinkle with remaining 1/2 c. cheese.`,
        `Bake 30-35 min., or until golden brown.`,
      ],
      notes:
        "One of my sons doesn't like dishes made with eggs (like scrambled eggs or breakfast burritos), but he loves this quiche. Go figure.",
    },
    {
      id: 5,
      name: 'Brownies',
      slug: 'brownies',
      categories: ['desserts', 'bars'],
      bg_img: 'chocolate.jpg',
      featured_img: 'brownies.jpg',
      ingredients: [
        '1/2 c. butter, softened',
        '1/2 c. oil',
        '2 c. sugar',
        '1/2 c. cocoa',
        '1 tsp. vanilla',
        '4 eggs',
        '1 1/4 c. flour',
        '1/2 tsp. baking powder',
        '1/2 tsp. salt',
      ],
      subRecipe: {
        name: 'Peanut Butter Filling (optional)',
        ingredients: [
          '3/4 c. peanut butter',
          '1 c. powdered sugar',
          '2 tsp. vanilla',
          '2 T. milk',
        ],
      },
      steps: [
        `Preheat oven to 350 degrees F.`,
        `Grease a 9" x 13" pan.`,
        `
              In a large bowl, add and mix the ingredients in the order listed.
            `,
        `
              If you want peanut butter filling, mix the filling ingredients in
              a separate bowl.
            `,
        `Pour all of the batter into the pan if not using filling.`,
        `
              Otherwise, pour 1/2 the batter in the pan. Then put the filling in
              clumps on top.
            `,
        `Then pour the rest of the batter in and smooth.`,
        `
              Bake for about 25-32 min., depending on how gooey you like your
              brownies.
            `,
      ],
      notes:
        'Adding the peanut butter filling makes this VERY extremely rich, and so very yummy.',
    },
    {
      id: 6,
      name: 'Chocolate Chip Cookies',
      slug: 'chocolate-chip-cookies',
      categories: ['dessert', 'cookies'],
      bg_img: 'chocolate.jpg',
      featured_img: 'chocolate-chip-cookies.jpg',
      ingredients: [
        '1 1/2 c. butter, softened',
        '1 c. white sugar',
        '1 c. brown sugar',
        '2 eggs',
        '2 tsp. vanilla',
        '3 1/2 c. flour',
        '1 tsp. baking soda',
        '1 tsp. salt',
        '2 c. chocolate chips',
      ],
      steps: [
        'Preheat oven to 350 degrees F.',
        'Cream the butter and sugars.',
        'Add eggs and vanilla and mix thoroughly.',
        'Add the flour, baking soda, and salt and mix until combined.',

        'Add the chocolate chips.',
        'Bake drops of dough on ungreased cookie sheets and bake for about 8-9 min.',
      ],
      notes:
        "My mom's recipe. We've used it for years. One of my favorite desserts is to use this dough to make a pizookie -- a large cookie baked in a cast iron pan, served warm with ice cream, whipped cream, and caramel or chocolate syrup.",
    },
    {
      id: 7,
      name: 'Mac-n-Cheese (Made in the Instant Pot)',
      slug: 'mac-n-cheese',
      categories: ['pasta', 'entrees'],
      bg_img: 'dry-pasta.jpg',
      featured_img: 'mac-n-cheese.jpg',
      ingredients: [
        '16 oz. uncooked elbow macaroni',
        '4 c. broth (veggie or chicken)',
        '1 tsp. hot pepper sauce',
        '1 tsp. garlic powder',
        '1/2 tsp. pepper',
        '2 c. shredded cheddar cheese',
        '1 c. shredded mozzarella cheese',
        '1/2 c. shredded Parmesan cheese',
        '1/2 - 1 c. milk',
      ],
      steps: [
        `
            Add the uncooked macaroni, broth, butter, hot sauce, and garlic
            powder to the Instant Pot.
          `,
        `Cook on manual, high pressure for 5 minutes.`,
        `Do a quick release.`,
        `Add milk.`,
        `Gradually add and stir in cheeses.`,
      ],
      notes:
        'My sister Mary introduced us to this recipe. It works so well in the Instant Pot!',
    },
    {
      id: 8,
      name: 'Alfredo Sauce (Made with Cream Cheese)',
      slug: 'cream-cheese-alfredo',
      categories: ['pasta', 'entrees', 'sauces'],
      bg_img: 'dry-pasta.jpg',
      featured_img: 'pasta.jpg',
      ingredients: [
        '1/2 c. butter',
        '1 (8 oz.) package cream cheese, softened',
        '2 tsp. garlic powder',
        '2 c. milk',
        '6 oz. grated Parmesan cheese',
        '1/8 tsp. pepper',
      ],
      steps: [
        'Melt butter in a saucepan, over medium heat.',
        'Add cream cheese, whisking until pretty smooth.',
        'Slowly add milk while whisking.',
        'Add Parmesan cheese, garlic powder and pepper.',
        'Continue to cook until it is nice and creamy.',
      ],
      notes:
        'Definitely packs the calories, but is so delicious. One of my favorite things is to use it as pizza sauce. Second favorite is as a topping for tortellini.',
    },
    {
      id: 9,
      name: 'Apple Dip',
      slug: 'apple-dip',
      categories: ['sides', 'dips'],
      bg_img: 'apples.jpg',
      featured_img: 'apple-slices.jpg',
      ingredients: [
        '8 oz. cream cheese, softened',
        '1/2 c. brown sugar',
        '1 tsp. vanilla',
        '1/2 c. walnuts, chopped',
      ],
      steps: [
        'Whip cream cheese, brown sugar, and vanilla.',
        'Spread in a dish.',
        'Sprinkle walnuts around the edges.',
        'Serve with apple wedges.',
      ],
      notes:
        'When we have a bunch of apples that need to get eaten, this is a great way to use them up.',
    },
    {
      id: 10,
      name: 'Egg Drop Soup',
      slug: 'egg-drop-soup',
      categories: ['soups', 'entrees'],
      bg_img: 'pot.jpg',
      featured_img: 'egg-drop-soup.jpg',
      ingredients: [
        '4 c. broth',
        '1/4 tsp. onion powder',
        '1/4 tsp garlic powder',
        '3 T. water',
        '1 T. cornstarch',
        '1 egg, lightly beaten',
        '12 snow pea pods',
        '1 green onion, thinly sliced',
      ],
      steps: [
        `
            Bring the broth and onion & garlic powders to a simmer in a
            saucepan over medium-high heat.
          `,
        `In a small bowl, combine water and cornstarch.`,
        `Stir the cornstarch mixture into the broth mixture.`,
        `Bring to a boil.`,
        `Remove from heat.`,
        `
            Slowly pour in the egg, while gently stirring (slowly for long egg
            strands, quicker for thinner strands).
          `,
        `Add peas and green onion.`,
        `Let the soup stand for a few minutes before serving.`,
        `Makes 4 servings.`,
      ],
    },
    {
      id: 11,
      name: 'Hot Rolls (Bread Machine)',
      slug: 'hot-rolls',
      categories: ['breads'],
      bg_img: 'wheat.jpg',
      featured_img: 'rolls.jpg',
      ingredients: [
        '1 c. warm milk (115-125 degrees F)',
        '2 T. butter',
        '1 egg',
        '1/4 c. sugar or honey',
        '1 T. yeast',
        '1 tsp. salt',
        '1 T. vital wheat gluten',
        '1 T. ground flax (opt.)',
        '3 1/4 c. flour',
        'Additional melted butter or egg wash (1 T. liquid mixed with 1 egg), if desired',
      ],
      subRecipe: {
        name: 'Topping Options',
        ingredients: [
          'Melted butter -OR-',
          'Egg wash (1 T. liquid mixed with 1 egg)',
          'Seeds (opt.)',
          'For breadsticks: kosher salt, Parmesan cheese, garlic powder, onion powder, Italian seasoning, paprika',
        ],
      },
      steps: [
        `Add the liquid ingredients to the pan.
            `,
        `Add the dry ingredients.`,
        'Select the dough cycle.',
        'When the cycle is completed and the dough has risen sufficiently, divide the dough into 12-24 pieces.',
        "Form as you'd like (balls, breadsticks, twisted breadsticks, cloverleaf, rosettes, spirals, knots, crescents, twists, etc.",
        'For cloverleaf rolls, take each piece and make 3 balls with it, and place them together in a cup of a greased muffin tin.',
        'For twists, roll each piece into a 10-in. rope. Fold the rope in half and twist two or three times, holding both ends. Pinch the rope ends to seal.',
        'For rosettes, roll each piece into a 10-in. rope. Tie a loose knot in the center of the rope. Bring the bottom end up and tuck it into the center of the roll; wrap the top end around and tuck under the roll.',
        'For twists, roll each piece into a 10-in. rope. Fold the rope in half and twist two or three times, holding both ends. Pinch the rope ends to seal.',
        'If desired, brush with melted butter or egg wash.',
        'If desired, add other toppings, like seeds or breadstick toppings.',
        'Cover and allow to rise.',
        'Uncover and bake at 375 degrees F for 8-12 min., or until golden brown.',
      ],
      notes:
        "I wouldn't be able to count the number of times I've made this recipe! Our bread machine is so handy!",
    },
    {
      id: 12,
      name: 'Vegan Mac-n-Cheese',
      slug: 'vegan-mac-n-cheese',
      categories: ['pasta', 'entrees'],
      bg_img: 'dry-pasta.jpg',
      featured_img: 'macaroni-and-cheese.jpg',
      ingredients: [
        '12 oz. uncooked elbow macaroni or other shaped pasta',
        '1 c. raw cashews',
        '160 g (2 med.) raw carrots, steamed, roasted, or boiled (10 min.)',
        '1/2 c. nutritional yeast',
        '2 tsp. white vinegar',
        '1 c. water',
        '1 T. + 1 tsp. buttery spread (opt.)',
        '2 tsp. salt',
        '1/2 tsp. onion powder',
        '1/4 tsp. nutmeg',
      ],
      steps: [
        `Soak cashews overnight, or boil them for 10 min.`,
        `Drain.`,
        `Cook pasta as directed on package.`,
        `Put everything, except pasta, in a blender and blend until completely smooth.`,
        `Add blended sauce to drained pasta.`,
      ],
    },
    {
      id: 13,
      name: 'Roasted Parmesan Potatoes',
      slug: 'roasted-parmesan-potatoes',
      categories: ['sides', 'potatoes'],
      bg_img: 'potatoes.jpg',
      featured_img: 'roasted-potatoes.jpg',
      ingredients: [
        '4 medium russet potatoes, peeled if desired',
        '1 T. oil',
        '3 T. Parmesan cheese or Nutty "Parm"*',
        '2 tsp. dried parsley or 2 T. fresh',
        '1 tsp. paprika',
        '1/2 tsp. garlic powder',
        '1 tsp. salt',
        '1/8 tsp. cayenne pepper',
      ],
      subRecipe: {
        name: 'Nutty "Parm"',
        ingredients: [
          '1/4 c. cashews',
          '1/4 c. almonds',
          '2 T. nutritional yeast',
          '1/4 tsp. salt',
          '1/4 tsp. garlic powder',
        ],
      },
      steps: [
        `Preheat oven to 450 degrees F.`,
        `Cut potatoes into cubes.`,
        `Place cubes in a bowl and toss with oil.`,
        '*If you want to make Nutty "Parm", add the Nutty "Parm" ingredients in a high-speed blender and pulse for a minute.',
        `Add dry ingredients to bowl and toss.`,
        `Bake potatoes on a baking sheet for 15 min.`,
        'Turn the potatoes over and bake for 10 min. more.',
      ],
    },
    {
      id: 14,
      name: 'Vegan Crêpes',
      slug: 'vegan-crepes',
      categories: ['breakfast'],
      bg_img: 'citrus.jpg',
      featured_img: 'crepes.jpg',
      ingredients: [
        '1 1/2 c. whole-wheat or white flour',
        '3 T. brown sugar',
        '1 tsp. baking powder',
        '1 1/2 c. - 2 c. plant milk',
        '1 T. oil',
        '1 tsp. vanilla',
      ],
      steps: [
        `Mix all ingredients, using 1 1/2 c. plant milk at first; add more milk if needed.`,
        `Heat skillet over med-high heat.`,
        `Lightly coat with oil if needed.`,
        `Swirl around 3 T. batter.`,
        `Cook 1-2 min.`,
        'Flip & cook 1 min. more.',
        'Continue until batter is gone.',
        'Fill and/or top crêpes as desired.',
      ],
      notes:
        'I love this recipe because vegan baked goods can be a little tricky to make and get the results you were expecting. However, this recipe is easy and turns out just fine!',
    },
    {
      id: 15,
      name: 'Vegan Pancakes',
      slug: 'vegan-pancakes',
      categories: ['breakfast'],
      bg_img: 'walnuts.jpg',
      featured_img: 'pancakes.jpg',
      ingredients: [
        '1 1/4 c. whole-wheat flour',
        '1 1/4 c.  white flour',
        '1/4 c. sugar',
        '4 tsp. baking powder',
        '1 tsp. salt',
        '2 tsp. ground flax',
        '2 1/2 c. plant milk or water',
        '2 T. oil',
        '1 tsp. vanilla',
      ],
      steps: [
        `Mix dry ingredients in a large bowl.`,
        `Pour wet ingredients in the center and stir until blended.`,
        `Drop batter by spoonfuls onto med-high-heater, lightly-oiled pan.`,
        `Cook until edges look dry.`,
        `Flip & cook about 2 min. more.`,
      ],
    },
    {
      id: 16,
      name: 'Cheesy Southwestern Lentils & Brown Rice',
      slug: 'cheesy-lentils-and-rice',
      categories: ['entrees', 'instant-pot'],
      bg_img: 'onions.jpg',
      featured_img: 'lentils-and-rice.jpg',
      ingredients: [
        '1/2 red onion, finely chopped',
        '1/2 bell pepper, finely chopped',
        '4 cloves garlic, minced',
        '3/4 c. brown rice, uncooked',
        '3/4 c. brown lentils',
        '2 1/2 c. veggie broth',
        '1 can diced tomatoes, 15 oz.',
        '1 can diced green chiles, 4 oz.',
        '1 T. taco seasoning',
        '2 tsp. dried oregano',
        '1 tsp. salt',
        '1/2 tsp. black pepper',
        '2 c. shredded cheese',
        '1/4 c. chopped cilantro',
      ],
      steps: [
        `Combine all ingredients in the instant pot, except for cheese and cilantro.`,
        'Cook at high pressure for 15 min.',
        'Allow pressure to naturally release for 15 min., and then release remaining pressure.',
        'Remove lid and add 1/2 of the cheese.',
        'Put the rest of the cheese on top and put the lid back on.',
        'Let stand 5 min.',
        'Sprinkle with cilantro and enjoy.',
      ],
      titleColor: 'black',
      notes:
        "This is a goto recipe quite often at my house. I love the fact that is uses brown rice and lentils -- healthy stuff! We call it 'taco dip' and eat it with tortilla chips.",
    },
    {
      id: 17,
      name: 'Tomatillo Salsa',
      slug: 'tomatillo-salsa',
      categories: ['sauces'],
      bg_img: 'tomatillos.jpg',
      featured_img: 'tomatillo-salsa.jpg',
      ingredients: [
        '6 tomatillos',
        '1-2 Serrano peppers',
        '1 bunch cilantro (Chop off the "trunk" stems)',
        '1 T. garlic',
        '1 onion',
        '2 avocados',
        '1/4 tsp. salt',
        '1 T. lime juice',
      ],
      steps: [
        `Boil the tomatillos and peppers while preparing the rest of the ingredients.`,
        'Add the rest of the ingredients to a blender.',
        'Then add the boiled tomatillos and peppers.',
        'Blend everything together.',
      ],
      notes:
        "We call this 'Martha Salsa' because my sister Martha learned to make it in Texas and shared the recipe with us. 'Martha Tacos' are a favorite of my brother-in-law Mark -- my sister Mary says that they are just tacos with this salsa. Martha salsa makes all the difference!",
    },
    {
      id: 18,
      name: 'Breakfast Shake',
      slug: 'breakfast-shake',
      categories: ['breakfast', 'drinks'],
      bg_img: 'bananas.jpg',
      featured_img: 'breakfast-shake.jpg',
      ingredients: [
        '2 or more bananas, peeled and frozen',
        '2 T. cocoa powder',
        '1 package Instant Breakfast powder or 2 T. protein powder (optional)',
        '1/4 c. peanut butter',
        '1 T. flax',
        '2 tsp. vanilla',
        '2-3 c. milk (regular or plant milk)',
        '2 c. vanilla ice cream and/or yogurt',
        '2-3 handfuls of ice',
      ],
      steps: [
        `Combine all ingredients in blender.`,
        'Add more ice for thickness; more milk to thin out.',
      ],
      notes: 'This is a great way to use up ripe bananas!',
    },
  ],
})
