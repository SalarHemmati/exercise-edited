<template>
  <ion-item :router-link="`/tab1/${tab.id}`">
    <ion-button slot="end">
      <ion-icon slot="icon-only" :icon="pencil"> </ion-icon>
    </ion-button>
    <ion-button slot="end">
      <ion-icon slot="icon-only" color="danger" :icon="trash"> </ion-icon>
    </ion-button>
    <ion-thumbnail slot="start">
      <ion-img :src="tab.image" :alt="tab.name"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ tab.name }}
      <p>{{ tab.email }}</p>
      <p2>{{ tab.job }}</p2>
    </ion-label>
  </ion-item>
</template>
<script>
import { trash, pencil } from "ionicons/icons";
import {
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/vue";
export default {
  props: ["tab"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonButton,
    IonIcon,
  },
  setup() {
    return { trash, pencil };
  },
  // data() {
  //   return { trash, pencil };
  // },
};
</script>
