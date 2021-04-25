<template functional>
  <div class="whitespace" :class="['whitespace--' + props.size, data.staticClass]"></div>
</template>

<script>
export default {
  name: 'AtomWhitespace',
}
</script>

<style lang="postcss">
.whitespace {
  @apply m-0 p-0 w-auto overflow-hidden bg-transparent;
  font-size: 0;
  line-height: 0;

  &--xs {
    height: theme('spacing.2');

    @screen md {
      height: theme('spacing.6');
    }
  }

  &--sm {
    height: theme('spacing.4');

    @screen md {
      height: theme('spacing.12');
    }
  }

  &--md {
    height: theme('spacing.8');

    @screen md {
      height: theme('spacing.24');
    }
  }

  &--lg {
    height: theme('spacing.12');

    @screen md {
      height: theme('spacing.48');
    }
  }
}
</style>
