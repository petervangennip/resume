<template>
  <div v-editable="blok" class="richtext" :inner-html.prop="richtext(blok.richtext)"></div>
</template>

<script>
export default {
  name: 'SbRichtext',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    richtext(val) {
      return this.$storyapi.richTextResolver.render(val);
    },
  },
};
</script>

<style lang="postcss"></style>
