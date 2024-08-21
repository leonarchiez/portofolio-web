<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<template>
  <nav class="sm:flex sm:justify-between py-5 px-5 sm:py-8 sm:px-10 text-text">
    <div class="navbar flex justify-between">
      <span class="font-bold">akhdrzki</span>

      <div class="md:hidden">
        <button @click="toggleMenu">
          <img
            :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
            class=""
            src="../assets/menu.svg"
            alt=""
          />
          <img
            :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
            class=""
            src="../assets/menu-scale.svg"
            alt=""
          />
        </button>
      </div>
    </div>

    <ul
      :class="isMenuOpen ? 'flex delay-200' :'hidden delay-200'"
      class="transition sm:flex sm:flex-row lg:gap-12 py-20 gap-14 flex-col items-center sm:py-0"
    >
      <li
        class="transition ease-out hover:-translate-y-1 hover:border hover:border-text hover:border-solid hover:py-2 hover:px-3 hover:border-r-4 hover:border-b-4 hover:rounded-md hover:bg-white hover:text-black delay-200"
      >
        <a href="">Project</a>
      </li>

      <li
        class="transition ease-out hover:-translate-y-1 hover:border hover:border-text hover:border-solid hover:py-2 hover:px-3 hover:border-r-4 hover:border-b-4 hover:rounded-md hover:bg-white hover:text-black delay-200"
      >
        <a href="">About</a>
      </li>

      <li
        class="transition ease-out hover:-translate-y-1 hover:border hover:border-text hover:border-solid hover:py-2 hover:px-3 hover:border-r-4 hover:border-b-4 hover:rounded-md hover:bg-white hover:text-black delay-200"
      >
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
</template>
