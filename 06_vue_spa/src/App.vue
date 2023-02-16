<template>
  <v-app>
    <v-app-bar app color="secondray" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <b-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </b-btn>
    </v-app-bar>

    <!-- 내용 영역에 라우터 페이지 렌더링 -->
    <v-main>
      <!-- 페이지 전환 효과 -->
      <v-slide-x-trasition mode="out-in">
        <router-view></router-view>
      </v-slide-x-trasition>
    </v-main>

    <!-- footer 구성 -->
    <v-footer color="secondary" foxed dark>
      <div class="mx-auto">github.com/harris91</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
