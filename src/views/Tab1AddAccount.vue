<template>
  <base-layout
    page-title="Add a New Account"
    page-default-back-link="/tabs/tab1"
  >
    <create-account-form @save-memory="saveMemory"></create-account-form>
  </base-layout>
</template>
<script>
import CreateAccountForm from "./CreateAccountForm.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    CreateAccountForm,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    function saveMemory(memoryData) {
      store.dispatch("addAccount", memoryData);
      router.replace("/tabs");
    }
    return { saveMemory };
  },
  // methods: {
  //   saveMemory(memoryData) {
  //     this.$store.dispatch("addAccount", memoryData);
  //     this.$router.replace("/tabs");
  //   },
  // },
};
</script>
