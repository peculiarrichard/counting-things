<template>
  <div class="home">
    <h2>Count THings- A counting app for everybody and anybody</h2>
    <p>With Count THings, you can increment, decrement, reset, and set value</p>
    <button @click="$router.push('/counter')">Explore Counting THings</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style>
.home>h2{
  margin: 1rem;
}
.home>button{
  margin:2rem;
  width: 12rem;
  height: 4rem;
  border: none;
  border-radius: 3rem;
  background: rgb(92, 3, 87);
  color: white;
  cursor:pointer;
}

.home>button:hover{
  background-color: rgb(197, 121, 193);
}
.home{
  padding: 1rem;
}
</style>
