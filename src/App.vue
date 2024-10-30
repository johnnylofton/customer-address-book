<template>
  <section>
    <header>
      <h1>Customer Address Book</h1>
    </header>
    <new-customer @add-customer="addCustomer"></new-customer>
    <p>
      <button @click="printCustomers">Print</button>
    </p>
    <table id="customerList">
      <caption :style="{ margin: '1rem', fontWeight: 'bold' }">
        Customer List
      </caption>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Comment</th>
        <th data-html2canvas-ignore></th>
      </tr>
      <customer-contact
        v-for="customer in customers"
        :key="customer.id"
        :id="customer.id"
        :name="customer.name"
        :address="customer.address"
        :phone-number="customer.phone"
        :email-address="customer.email"
        :comment="customer.comment"
        @delete="deleteCustomer"
      ></customer-contact>
    </table>
  </section>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    printCustomers() {
      console.log('Printing...');
      var element = document.getElementById('customerList');
      var opt = { margin: 10, filename: 'customers.pdf' };
      html2pdf(element, opt);
    },
    addCustomer(name, address, phone, email, comment) {
      const newCustomer = {
        id: new Date().toISOString(),
        name,
        address,
        phone,
        email,
        comment,
      };
      this.customers.push(newCustomer);
    },
    deleteCustomer(customerId) {
      this.customers = this.customers.filter(
        (customer) => customer.id !== customerId
      );
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: arial, sans-serif;
}

header {
  box-shadow: 0 2px px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 0.1rem;
  background-color: #1e496d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #70b035;
  background-color: #70b035;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #4b7523;
  border-color: #4b7523;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

table {
  border-collapse: collapse;
  width: 100%;
}

#app caption {
  display: none;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #d6eeee;
}

tr:hover {
  background-color: #d6eeee;
}

#app p {
  padding: 0.1rem;
  text-align: right;
  width: 90%;
}
</style>
