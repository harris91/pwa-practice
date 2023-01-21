<template>
  <div>
    <h2>메인 페이지</h2>
    <button @click="fnSubPage">서브 페이지 이동(by Router)</button>
  </div>
</template>

<script>
export default {
  methods: {
    fnSubPage() {
      this.$router.push('/sub');
    }
  }
}
</script>