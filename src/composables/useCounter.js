
import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter () {
  const store = useStore()

  const count = computed(() => store.state.count)

  function increment () {
    store.dispatch('increment')
  }

  function decrement () {
    store.dispatch('decrement')
  }

  function setValue (value) {
    store.dispatch('setValue', value)
  }

  function reset () {
    store.dispatch('reset')
  }

  return {
    count,
    increment,
    decrement,
    setValue,
    reset
  }
}
