<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>
<style>
h1 {
  @apply text-3xl;
}
h2 {
  @apply text-xl;
}
main {
  @apply mx-5;
  @apply my-10;
}
</style>
