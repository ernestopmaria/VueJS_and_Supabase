<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10 ">
    <!--Error Handling -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-2xl bg-light-grey">
      <p class="text-red-500">{{errorMsg}}</p>
    </div>

    <!-- Register-->
    <form @submit.prevent="login" class="p-8 flex flex-col bg-light-grey rounded-2xl shadow-lg">
      <h1 class="text-3xl mb-4 text-center">Iniciar Sessão</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-md">Email</label>

        <input type="text" required class="p-2 rounded-2xl text-gray-500 focus:outline-none"
        id="email"
        v-model="email"
        >

      </div>
          <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-md ">Palavra Passe</label>

        <input type="password" required class="p-2 rounded-2xl text-gray-500 focus:outline-none"
        id="password"
        v-model="password"
        >

      </div>

      <button  class="mt-6 py-2 px-6 rounded-2xl bg-gray-300 
      duration-200 border-solid border-2 border-transparent hover:border-gray-300 
      hover:bg-white " type="submit">Entrar</button>

      <router-link class="text-md mt-6 text-center " :to="{name:'Register'}">
        Não tem uma conta? <span class="underline">Clique aqui</span>
      </router-link>
    </form>

  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {supabase} from '../supabase/init'
import { useRouter } from 'vue-router';


export default {
  name:"login",
  
  setup() {
    // Create data / vars
    const router =useRouter()
     const email= ref(null)
    const password= ref(null)
    const errorMsg =ref(null)

    // Login function
    const login = async()=>{
    try {
      const {error} = await supabase.auth.signIn({
        email:email.value,
        password:password.value,
           })
        if(error){
          errorMsg.value="Verificar suas credencias"
        }
       else router.push({name:"Home"})
   
  
      } catch (error) {
         errorMsg.value=`Error: ${error.message}`;
      setTimeout(()=>{
      errorMsg.value=null
      }, 5000)
  
      }
    }
    
    
    

    return { email, password, errorMsg, login };
  },
};
</script>
