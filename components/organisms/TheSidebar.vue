<template>
  <div class="sidebar p-10 print:p-0 print:pr-5">
    <sb-resume :blok="resumeData" />
  </div>
</template>

<script>
import SbResume from '~/components/storyblok/content-types/SbResume.vue';

export default {
  name: 'TheSidebar',
  components: {
    SbResume,
  },
  props: {
    resumeData: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped lang="postcss">
.sidebar {
  @apply bg-gray-800 text-white h-full;
  height: 100%;
}

/deep/ .content-block-title {
  p {
    color: #333;
  }
}

.resume {
  &-name {
    @apply text-center;
  }

  &-title {
    @apply text-center mb-5;
  }
}
</style>
