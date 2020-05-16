<template>
  <div class="flex flex-col min-h-screen">
    <Header class="flex-shrink-0" />
    <main class="flex-auto">
      <slot/>
    </main>
    <Footer class="flex-shrink-0"/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>
