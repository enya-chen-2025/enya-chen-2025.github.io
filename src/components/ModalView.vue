<template>
  <div class="modal-overlay" v-if="isShowModal" @click.self="close">
    <div class="modal-content">
      <div class="modal-title">
        <h3>{{ title }}</h3>
        <button class="modal-btn" @click="close">
          <span class="material-symbols-outlined"> close </span>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalView",
  props: {
    isShowModal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
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
  margin-top: 20px;
  position: relative;
  background-color: var(--modal-content-color);
  padding: 16px;
  border-radius: 8px;
  max-width: 250px;
  max-height: fit-content;
  width: 90%;
  overflow: hidden;
  border: 1px solid var(--btn-border-color);
  box-shadow: 2px 4px var(--btn-border-color);
}

@media (min-width: 400px) {
  .modal-content {
    max-width: 500px;
  }
}
</style>
