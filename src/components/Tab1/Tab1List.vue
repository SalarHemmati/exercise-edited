<template>
  <ion-list>
    <tab-1-list-item v-for="tab in tab1" :key="tab.id" :tab="tab">
    </tab-1-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import Tab1ListItem from "./Tab1ListItem.vue";
export default {
  props: ["tab1"],
  components: {
    IonList,
    Tab1ListItem,
  },
};
</script>
