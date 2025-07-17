<template>
  <div class="modal-overlay" v-if="isShowModal" @click.self="onClose">
    <div class="modal-content">
      <div class="modal-title">
        <h3>{{ title }}</h3>
        <button class="modal-btn" @click="onClose">
          <span class="material-symbols-outlined"> close </span>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isShowModal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["onClose"],
  methods: {
    onClose() {
      this.$emit("onClose");
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
  background-color: var(--system-color-white-smoke);
  padding: 16px;
  border-radius: 8px;
  max-width: 250px;
  max-height: fit-content;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid var(--system-color-gray);
  box-shadow: 2px 4px var(--system-color-gray);
}

@media (min-width: 500px) {
  .modal-content {
    max-width: 500px;
  }
}
</style>
