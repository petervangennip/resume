<template>
  <component :is="blok.level" v-editable="blok"> {{ blok.text }} </component>
</template>

<script>
export default {
  name: 'SbHeading',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss"></style>
