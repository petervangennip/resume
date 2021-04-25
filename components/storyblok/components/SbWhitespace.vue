<template>
  <section v-editable="blok">
    <atom-whitespace :size="blok.space"></atom-whitespace>
  </section>
</template>

<script>
export default {
  name: 'SbWhitespace',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
