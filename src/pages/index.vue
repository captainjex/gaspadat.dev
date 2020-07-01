<template>
  <div class="bg-gray-100">
    <section class="flex justify-center items-center min-h-screen text-center ">
      <h1 class="text-6xl text-primary italic">
        gaspadat
      </h1>
    </section>
    <section class="flex justify-center items-center px-2">
      <div class="shadow-inner bg-gray-200 -mt-8 mb-20 p-6 text-primary text-lg font-light w-full max-w-screen-sm">
        <div class="text-3xl font-bold">
          Muhammad Arji' Sharofuddin
        </div>
        <div>
          Software Engineer
        </div>
        <div>
          Semarang, Indonesia
        </div>
        <div class="mt-12 text-right">
          <div
            v-for="(contact, i) in contacts"
            :key="i"
            :class="{
              'mt-2': i > 0,
              'mb-3': i === 0
            }"
          >
            {{ contact.text }}
            <a :href="contact.href" class="shadow-md rounded-md px-2 py-1 ml-1 bg-primary text-white" target="_blank" rel="noopener noreferrer">
              <fa-icon :icon="contact.icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        { text: 'hello@gaspadat.dev', href: 'mailto:hello@gaspadat.dev', icon: 'envelope' },
        { text: 'medium.com/@gaspadat', href: 'https://medium.com/@gaspadat', icon: ['fab', 'medium'] },
        { text: 'github.com/gaspadat', href: 'https://github.com/gaspadat', icon: ['fab', 'github'] },
        { text: 'twitter.com/gaspadat', href: 'https://twitter.com/gaspadat', icon: ['fab', 'twitter'] },
        { text: 'instagr.am/gaspadat', href: 'https://instagr.am/gaspadat', icon: ['fab', 'instagram'] }
      ]
    }
  }
}
</script>

<style>

body {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}

</style>
