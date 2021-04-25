<template>
  <img class="img" :src="image" />
</template>

<script>
export default {
  name: 'AtomImage',
  props: {
    image: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="postcss">
.image-wrapper {
}
</style>
