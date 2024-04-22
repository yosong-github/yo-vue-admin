import { ref } from 'vue'

export const onUserInfo = () => {
  const userAge = ref(18)
  userAge.value++
  return {
    userAge
  }
}
