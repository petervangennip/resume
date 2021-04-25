<template>
  <section v-editable="blok" class="image-wrapper">
    <atom-image :image="blok.image.filename"></atom-image>
  </section>
</template>

<script>
export default {
  name: 'SbImage',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss">
.image-wrapper {
}
</style>
