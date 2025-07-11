<template>
  <div class="modal-overlay" v-if="show" @click.self="close">
    <div class="modal-content">
      <div class="modal-title">
        <h4>Ranking</h4>
        <button class="modal-btn" @click="close">×</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalView",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.modal-btn {
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  cursor: pointer;
}

.modal-content {
  margin-top: 10%;
  position: relative;
  background-color: azure;
  padding: 1em;
  border-radius: 0.25rem;
  max-width: 250px;
  max-height: fit-content;
  width: 90%;
  overflow: hidden;
}

@media (min-width: 400px) {
  .modal-content {
    max-width: 500px;
  }
}
</style>
