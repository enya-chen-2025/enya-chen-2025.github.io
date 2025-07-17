<template>
  <div class="card">
    <div class="card-img">
      <img :src="src" class="card-img-top" />
    </div>
    <div class="card-body">
      <h4 v-show="isShowTitle" class="card-title" :title="cardTooltip">
        {{ title }}
      </h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {},
  props: {
    src: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    cardTooltip: {
      type: String,
      default: "",
    },
    isShowTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.card {
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--system-color-gray);
  border-radius: 8px;
  overflow: hidden;
}

.card-img {
  aspect-ratio: 1/1;
  width: 100%;
  height: 240px;
  overflow: hidden;
  margin-bottom: 5px;
}

.card-img img {
  transition: all 0.3s ease-in-out;
}

.card-img:hover img {
  transform: scale(1.25);
}

.card-title {
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-img-top {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}
</style>
