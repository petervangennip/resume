<template>
  <div class="resume-wrapper container mx-auto">
    <div class="resume-container grid grid-cols-12">
      <div class="col-span-12 md:col-span-5">
        <the-sidebar :resume-data="resumeData" />
      </div>
      <div class="col-span-12 md:col-span-7">
        <the-main-content :resume-data="resumeData" />
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/organisms/TheSidebar';
import TheMainContent from '@/components/organisms/TheMainContent';

export default {
  name: 'PageResume',
  components: {
    TheSidebar,
    TheMainContent,
  },
  async asyncData(context) {
    try {
      // const team = await context.app.$storyapi.get('cdn/stories/our-team', {
      //   version: 'draft',
      // });
      // const vacancies = await context.app.$storyapi.get('cdn/stories/vacancies', {
      //   version: 'draft',
      // });
      const resume = await context.app.$storyapi.get('cdn/stories/resume', {
        version: 'draft',
      });
      return {
        // team: team.data.story,
        // vacancies: vacancies.data.story,
        resume: resume.data.story,
      };
    } catch (error) {
      if (!error.response) {
        context.error({ statusCode: 404, message: 'Failed to receive content form api' });
      } else {
        context.error({ statusCode: error.response.status, message: error.response.data });
      }
    }
  },
  data() {
    return {
      story: { content: {} },
    };
  },
  computed: {
    resumeData() {
      return this.resume.content;
    },
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      window.location.reload();
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      });
    });
  },
};
</script>

<style></style>
