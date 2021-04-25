<template>
  <div class="divider" :class="spacing ? 'divider--sm' : ''">
    <span />
  </div>
</template>

<script>
export default {
  name: 'AtomDivider',
  props: {
    spacing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="postcss">
.divider {
  border-bottom: 1px solid var(--color-gray-400);
  height: 1px;
  margin: 1.5rem 0;

  &--sm {
    margin: 1rem 0;
  }

  span {
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    top: -1px;
    position: relative;
  }
}

.bg-dark {
  .divider {
    border-bottom: 1px solid var(--color-gray-700);
  }
}
</style>
