<template>
  <div class="container">
    <h2 class="title">Count THings</h2>
    <div class="form">
      <form>
        <input type="number" v-model="count" placeholder="Enter digits here" />
        <button type="submit" @click.prevent="counter.setValue(count)">Enter</button>
      </form>
    </div>
    <p class="count">{{ counter.count }}</p>
    <button @click="counter.reset()" class="reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    </button>
    <div class="counter">
      <button @click="counter.decrement()" class="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dash-lg"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
        </svg>
      </button>
      <button @click="counter.increment()" class="increment">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import useCounter from '../composables/useCounter'

export default {
  name: 'CounterView',
  setup () {
    const counter = useCounter()

    return {
      counter
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 30rem;
  border: 2px solid rgb(250, 247, 253);
  padding: 1rem;
  border-radius: 2rem;
  background: rgb(92, 3, 87);
  color: white;
  justify-content: center;
}

.title {
  font-size: 2rem;
  margin:1rem;
}

form {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
}

form>input {
  width: 8rem;
  height: 2.5rem;
  border: none;
  border-radius: 1rem;
  text-align: center;
  background-color: white;
}

form>button {
  width: 4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
}

.count {
  font-size: 4rem;
  margin-bottom: 3rem;
  border: 2px solid;
}

.reset {
  align-self: center;
  justify-self: center;
  padding: 1rem;
  border: 2px solid white;
  background: transparent;
  border-radius: 5rem;
  cursor: pointer;
  color:white;
}
.reset:hover{
  background: white;
  color:black;
}

.counter {
  display: inline-flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.counter>button {
  background: transparent;
  color: white;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 100%;
  cursor:pointer;
}

.counter>button:hover{
  background: white;
  color:black;
}

@media (max-width:600px) {
  .container{
    width:80%;
  }
}
</style>
