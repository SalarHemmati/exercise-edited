<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input type="text" required v-model="enteredName" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image</ion-label>
        <ion-input type="url" required v-model="enteredImage" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Job</ion-label>
        <ion-input type="text" required v-model="enteredJob" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="text" required v-model="enteredEmail" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Tel</ion-label>
        <ion-input type="number" required v-model="enteredTel" />
      </ion-item>

      <ion-button type="submit" expand="full">Add</ion-button>
    </ion-list>
  </form>
</template>
<script>
import { IonList, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";

export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      enteredName: "",
      enteredImage: "",
      enteredJob: "",
      enteredEmail: "",
      enteredTel: "",
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        name: this.enteredName,
        image: this.enteredImage,
        job: this.enteredJob,
        email: this.enteredEmail,
        tel: this.enteredTel,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>
