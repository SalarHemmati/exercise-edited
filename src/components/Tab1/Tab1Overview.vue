<template>
  <ion-title>
    <ion-img :src="image" :alt="title"> </ion-img>
    <h2 class="ion-text-center">{{ job }}</h2>
    <p>Mail: {{ email }}</p>
    <p>Tel: {{ tel }}</p>
  </ion-title>
</template>

<script>
import { IonImg, IonTitle } from "@ionic/vue";

export default {
  props: ["name", "image", "job", "email", "tel"],
  components: {
    IonImg,
    IonTitle,
  },
};
</script>
