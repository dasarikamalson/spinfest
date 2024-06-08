<template>
  <div class="errorPage flex flex-col justify-center items-center gap-2 max-w-md mx-auto text-center">
      <h3 class="text-5xl font-black">{{ error.statusCode }}</h3>
      <span class="font-bold text-base">{{ error.message }}</span>
      <p class="text-sm">{{ message }}</p>
      <button class="border-b-2" @click="handleClearError">Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
      error: String,
  },
  data() {
      return {
          message: 'Looks like this page went on a vacation without telling us. Sorry for the inconvenience!'
      }
  },
  methods: {
      handleClearError() {
          clearError({
              redirect: '/'
          })
      }
  },
}
</script>


<style lang="scss" scoped>
.errorPage {
  height: 100vh;
  overflow: hidden;

  &::before {
      content: url('https://spinfest.org/wp-content/uploads/2024/06/Asset-4.png');
      position: fixed;
      float: right;
      z-index: -999;
      opacity: 10%;
      overflow: hidden;
  }

  span {
      color: #08415c;
  }

  h3 {
      color: #cc2936;
  }

  p {
      color: #474747;
  }

  button {
      width: max-content;

      &:hover {
          color: #cc2936;
      }
  }
}
</style>