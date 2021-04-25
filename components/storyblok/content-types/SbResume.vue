<template>
  <div v-editable="blok">
    <h1 class="resume-name print:text-3xl print:mt-4">
      {{ blok.name }}
    </h1>
    <p class="resume-title text-xl print:text-lg">
      {{ blok.title }}
    </p>
    <div class="profile-picture">
      <img class="img-fluid clipped" :src="blok.profile_picture.filename" alt="" />
    </div>
    <sb-richtext :blok="blok"></sb-richtext>
    <component
      :is="blok.component"
      v-for="blok in blok.personal_data"
      :key="blok._uid"
      :blok="blok"
    />

    <atom-divider />

    <div class="skills">
      <h2 class="mb-2">Skills</h2>
      <div class="skill">
        <div v-for="(skill, index) in blok.skills" :key="index" class="skill__container">
          <h3 class="skill__chapter">
            {{ skill.skills_group_title }}
          </h3>

          <ul class="skill__list">
            <li v-for="(keyword, i) in skill.skills_group_items" :key="i" class="skill__item">
              {{ keyword.skills_group_item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <atom-divider />

    <div class="personal">
      <h2 class="mb-2">Personal info</h2>
      <label for="firstName" class="font-weight-bold flex items-center mb-5">
        <base-icon :width="20" :height="20" icon="user" class="mr-3" />
        <p id="firstName" class="font-weight-normal mb-0">
          {{ blok.name }}
        </p>
      </label>

      <label for="phoneNumber" class="font-weight-bold flex items-center mb-5">
        <base-icon :width="20" :height="20" icon="mobile-android" class="mr-3" />
        <p id="phoneNumber" class="font-weight-normal mb-0">
          {{ blok.telephone_number }}
        </p>
      </label>

      <label for="social-linkedin" class="font-weight-bold flex items-center mb-5">
        <base-icon :width="20" :height="20" icon="linkedin" class="mr-3" />
        <p id="social-linkedin" class="font-weight-normal mb-0">
          <a
            :aria-label="`Click to visit ${blok.linkedin_profile}`"
            :href="`http://www.${blok.linkedin_profile}`"
            >{{ blok.linkedin_profile }}</a
          >
        </p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
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

<style scoped lang="postcss">
.resume {
  &-name {
    @apply text-center;
  }

  &-title {
    @apply text-center mb-5;
  }
}

.profile-picture {
  @apply bg-gray-800;

  img {
    max-width: 50%;
    margin: 0 auto;
    display: block;
  }

  .clipped {
    clip-path: circle();
  }
}

.skill {
  &__chapter {
    @apply font-normal text-lg mb-2;
  }

  &__list {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  &__item {
    background-color: var(--color-primary);
    padding: 5px 10px;
    border-radius: 3px;
    color: var(--color-black);
    margin-bottom: 0.5rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
</style>
