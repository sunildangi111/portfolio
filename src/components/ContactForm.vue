<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <textarea v-model="message" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</template>

<script>
import { addData } from "@/services/app.serviceAdd"; // import your service

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    async submitForm() {
      await addData({
        name: this.name,
        email: this.email,
        message: this.message
      });

      // Optional: reset the form
      this.name = "";
      this.email = "";
      this.message = "";
      alert("Message sent successfully!");
    }
  }
};
</script>
