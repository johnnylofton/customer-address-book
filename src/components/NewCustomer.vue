<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Address</label>
      <input type="text" v-model="enteredAddress" />
    </div>
    <div>
      <label>Phone Number</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email Address</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <label>Comment</label>
      <input type="text" v-model="enteredComment" />
    </div>
    <div>
      <button>Add Customer</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-customer'],
  data() {
    return {
      enteredName: '',
      enteredAddress: '',
      enteredPhone: '',
      enteredEmail: '',
      enteredComment: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-customer',
        this.enteredName,
        this.enteredAddress,
        this.enteredPhone,
        this.enteredEmail,
        this.enteredComment
      );
    },
  },
};
</script>
