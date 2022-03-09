<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.name : 'Loading...'"
    page-default-back-link="/tabs"
  >
    <h2 v-if="!loadedMemory">Could not find any accounts</h2>
    <tab-1-overview
      v-else
      :job="loadedMemory.job"
      :name="loadedMemory.name"
      :image="loadedMemory.image"
      :tel="loadedMemory.tel"
      :email="loadedMemory.email"
    ></tab-1-overview>
  </base-layout>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import Tab1Overview from "../components/Tab1/Tab1Overview.vue";
export default {
  components: {
    Tab1Overview,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const tab1Id = ref(route.params.id);
    let loadedMemory = computed(() => {
      return store.getters.tab(tab1Id.value);
    });
    return { tab1Id, loadedMemory };
  },
  // data() {
  //   return {
  //     tab1Id: this.$route.params.id,
  //   };
  // },
  // computed: {
  //   loadedMemory() {
  //     return this.$store.getters.tab(this.tab1Id);
  //   },
  // },
};
</script>
