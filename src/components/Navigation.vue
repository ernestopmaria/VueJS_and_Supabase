<template>
  <header class="bg-black text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img  class="w-14" src="../assets/images/dumbbell-light.png" alt="" >
        <h1 class="text-lg">Active</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{name: 'Home'}">Home</router-link>
        <router-link class="cursor-pointer" :to="{name: 'Create'}">Criar Plano de treino</router-link>
        <router-link class="cursor-pointer" :to="{name: 'Register'}">Cadastrar</router-link>
          <router-link class="cursor-pointer" :to="{name: 'Login'}">Entrar</router-link>
  
        <li class="cursor-pointer">Sair</li>
     

      </ul>
    </nav>
 

  </header>
</template>

<script>

export default {



};
</script>
