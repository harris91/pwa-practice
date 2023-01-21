<template>
  <div>
    <h2>서브 페이지</h2>
    <button @click="fnMainPage">메인 페이지 이동(by Router)</button>
  </div>
</template>

<script>
  export default {
    methods: {
      fnMainPage() {
        this.$router.push('/main');
      }
    }
  }
</script>
