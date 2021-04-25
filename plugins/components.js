import Vue from 'vue';
import AtomDivider from '~/components/atoms/AtomDivider.vue';
import AtomImage from '~/components/atoms/AtomImage.vue';
import AtomWhitespace from '~/components/atoms/AtomWhitespace.vue';
import SbHeading from '~/components/storyblok/components/SbHeading.vue';
import SbImage from '~/components/storyblok/components/SbImage.vue';
import SbRichtext from '~/components/storyblok/components/SbRichtext.vue';
import SbWhitespace from '~/components/storyblok/components/SbWhitespace.vue';
import SbResume from '~/components/storyblok/content-types/SbResume.vue';

// init
Vue.component('AtomDivider', AtomDivider);
Vue.component('AtomImage', AtomImage);
Vue.component('AtomWhitespace', AtomWhitespace);
Vue.component('SbHeading', SbHeading);
Vue.component('SbImage', SbImage);
Vue.component('SbResume', SbResume);
Vue.component('SbRichtext', SbRichtext);
Vue.component('SbWhitespace', SbWhitespace);
