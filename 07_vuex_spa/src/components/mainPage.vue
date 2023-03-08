<template>
  <v-container>
    <v-main>
      <div class="text-center display-3 my-4">메인 페이지입니다.</div>
      <v-row>
        <v-col offset-sm="1" sm="10">
          <!-- 제목을 입력받으면 sTitle 데이터와 바인딩 시켜 store에 
        저장함-->
          <v-text-field label="제목" v-model="sTitle" 
          :error="isEmptyTitle" 
          :rules="[rules.required]"
          clearable />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn large class="mt-5" color="primary" dark @click="setTitle">
          확 인
        </v-btn>
      </div>
    </v-main>
  </v-container>
</template>
<script>
  export default {
    // store에 있는 데이터를 가져옴
    data() {
      return {
        sTitle: this.$store.getters.getData,
        isEmptyTitle: false,
        rules: {
          required: value => !!value || "제목은 필수 입니다."
        }
      }
    },
    methods: {
      // 입력받은 제목을 store에 저장
      setTitle() {
        if(this.sTitle.trim().length === 0) {
          this.isEmptyTitle = true;
        } else {
          this.$store.commit('setData', this.sTitle);
          this.$router.push('/sub');
        }
      }
    }
  }
</script>