<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center"
    style="
      background: url('/images/jukebox.jpg') repeat center center fixed;
      background-size: cover;
    "
  >
    <h1
      class="text-3xl text-center font-bold py-8 text-white tracking-wide md:text-6xl"
    >
      Songs with Food
    </h1>
    <div
      class="p-4 md:p-8 w-11/12 mx-auto bg-white bg-opacity-75 rounded flex flex-col items-center justify-center md:w-3/4 space-y-4"
    >
      <h2 class="italic text-black text-lg py-4 font-bold">
        Songs to enjoy while cooking and eating
      </h2>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/playlist/03lPFyeshHaiYg7emqmiUT?utm_source=generator&theme=0"
        width="100%"
        height="525"
        frameBorder="5"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
      <iframe
        src="https://open.spotify.com/embed/playlist/1UWnJIh3aD2fTUj2m1uE7g?theme=0"
        width="100%"
        height="525"
        frameBorder="5"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Songs',
}
</script>
