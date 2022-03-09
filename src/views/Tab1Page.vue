<template>
  <base-layout page-title="List">
    <template v-slot:actions-end>
      <ion-button router-link="/tab1/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <tab-1-list :tab1="tab1"></tab-1-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import Tab1List from "../components/Tab1/Tab1List.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Tab1List,
    IonButton,
    IonIcon,
  },

  setup() {
    const store = useStore();
    let tab1 = computed(() => {
      return store.getters.tab1;
    });
    return { add, tab1 };
  },

  // computed: {
  //   tab1() {
  //     return this.$store.getters.tab1;
  //   },
  // },
};
</script>
