<template>
  <div class="content p-10 print:p-0 print:pl-5" :resume-data="resumeData">
    test
    <!-- <section-work-experience :resume-data="resumeData" />
    <section-education :resume-data="resumeData" />
    <section-languages :resume-data="resumeData" /> -->
  </div>
</template>

<script>
export default {
  name: 'TheMainContent',
  props: {
    resumeData: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped lang="postcss">
.content {
  @apply bg-white h-full;
}
</style>
