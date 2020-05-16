<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-grey py-6 md:justify-start md:space-x-10">
      <div class="lg:w-0 lg:flex-1">
        <a href="#" class="flex">
          <app-logo class="h-8 w-auto sm:h-10"></app-logo>
        </a>
      </div>
      <div class="mr-0 my-0 md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-grey hover:text-grey-darker hover:bg-grey-lightest focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          @click="toggleNav"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <a v-for="menu in menuItems" :key="menu.label" href="#" class="whitespace-no-wrap text-base leading-6 font-semibold text-grey-darker hover:text-grey-darkest focus:outline-none focus:text-gray-900">
          {{ menu.label }}
        </a>
      </div>
    </div>
  </div>

  <div
    v-if="showNav"
    class="absolute top-0 inset-x-0 p-2 transition scale-100 transform origin-top-right z-50 md:hidden"
  >
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <app-logo class="h-8 w-auto"></app-logo>
            </div>
            <div class="-mr-2">
              <button @click="toggleNav" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="grid row-gap-8">
              <a v-for="menu in menuItems" :key="menu.label" href="#" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-grey-lightest transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ menu.label }}
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppLogo from '~/assets/logo.svg'
export default {
  components: {
    AppLogo
  },
  data() {
    return {
      showNav: false,
      menuItems: [
        { label: 'BLOG' },
        { label: 'NOW' },
        { label: 'RSS' },
      ]
    }
  },

  methods: {
    toggleNav() {
      this.showNav = !this.showNav
    }
  }
}
</script>
