<template>
  <div id="app">
    <nav> 라우터 링크 사용 👉
      <router-link to="/main"> 메인 페이지</router-link> |
      <router-link to="/sub"> 서브 페이지</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color:white;
  background:#333;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
