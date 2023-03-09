<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view/>
</template>

<style>

*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

nav a {
  font-weight: 800;
  font-size: 1.2rem;
  color: rgb(92, 3, 87);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(197, 121, 193)
}
</style>
