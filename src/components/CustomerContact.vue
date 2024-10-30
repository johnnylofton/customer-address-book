<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ address }}</td>
    <td>{{ phoneNumber }}</td>
    <td>{{ emailAddress }}</td>
    <td>{{ comment }}</td>
    <td data-html2canvas-ignore>
      <button @click="$emit('delete', id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    comment: { type: String, required: true },
  },
  emits: ['delete'],
};
</script>
