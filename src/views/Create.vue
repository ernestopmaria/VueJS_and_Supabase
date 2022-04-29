<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!--Status message -->
    <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-2xl bg-light-grey">
      <p class="text-black">{{statusMsg}}</p>
      <p class="text-red-500">{{errorMsg}}</p>
    </div>
    <!--Create -->
    <div class="p-8 flex items-start rounded-2xl bg-light-grey shadow-lg">
      <!--Form-->
      <form class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl">Criar treino</h1>

        <!--Workout Name-->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm ">Nome do treino</label>
          <input type="text" required class="p-2 text-gray-500  
          rounded-2xl focus:outline-none " id="workout-name"
          v-model="workout"
          >
        </div>

       <!--Workout Type--> 
       <div class="flex flex-col">
         <label for="workoutType" class="mb-1 text-sm ">Tipo de treino</label>
          <select id ="workout-type" required class="p-2 text-gray-500  
          rounded-2xl focus:outline-none"
          v-model="workoutType"
          >
          <option value="select-workout">Selecione um treino</option>
          <option value="strength">Musculação</option>
          <option value="cardio">Cardio</option>
          </select>

       </div>
       <!--Strength training inputs-->
       <div v-if="workoutType=== 'strength'" class="flex flex-col gap-y-4">
         <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
         v-for="(item, index) in exercises "
         :key="index"
         >
         <div class="flex flex-col md:w-1/2 ">
            <label for="exercise-name" class="mb-1 text sm ">Exercicios</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.exercise"
            />
         </div>
             <div class="flex flex-col flex-1">
            <label for="sets" class="mb-1 text sm ">Series</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.sets"
            />
         </div>
            <div class="flex flex-col flex-1">
            <label for="reps" class="mb-1 text sm ">Repetições</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.reps"
            />
         </div>
            <div class="flex flex-col flex-1">
            <label for="weight" class="mb-1 text sm ">Peso (Kgs)</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.weight"
            />
         </div>  
         <img src="@/assets/images/trash-light-green.png"
          class="h-4 w-auto absolute -left-5 cursor-pointer" alt=""/>
               
          </div>
           <button  @click="addExercise"   class="mt-6 py-2 px-6 rounded-2xl bg-gray-300 
      duration-200 border-solid border-2 border-transparent hover:border-gray-300 
      hover:bg-white " type="button">Adicionar Exercicio</button>  
       </div>

         <!--Cardio training inputs-->
        <div v-if="workoutType=== 'cardio'" class="flex flex-col gap-y-4">
         <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
         v-for="(item, index) in exercises "
         :key="index"
         >
         <div class="flex flex-col md:w-1/3 ">
            <label for="cardio_type" class="mb-1 text sm ">Tipo</label>
           <select id="cardio_type" 
           v-model="item.cardio"
           class="p-2 w-full text-gray-500 focus:outline-none">
           <option value="#">Selecione um tipo</option>
          <option value="run">Correr</option>
          <option value="walk">Caminhar</option>
          <option value="jump">Saltar corda</option>
           </select>
         </div>
             <div class="flex flex-col flex-1">
            <label for="distance" class="mb-1 text sm " >Distancia</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
           v-model="item.distace"
            />
         </div>
            <div class="flex flex-col flex-1">
            <label for="duration" class="mb-1 text sm ">Duração</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.duration"
            />
         </div>
            <div class="flex flex-col flex-1">
            <label for="pace" class="mb-1 text sm ">Passos</label>
            <input type="text" required 
            class="p-2 w-full text-gray-500 focus:outline-none rounded-2xl"
            v-model="item.pace"
            />
         </div>  
         <img src="@/assets/images/trash-light-green.png"
          class="h-4 w-auto absolute -left-5 cursor-pointer" alt=""/>
               
          </div>
           <button  @click="addExercise"  class="mt-6 py-2 px-6 rounded-2xl bg-gray-300 
      duration-200 border-solid border-2 border-transparent hover:border-gray-300 
      hover:bg-white " type="button">Adicionar Exercicio</button>  
       </div>
        <button class="mt-6 py-2 px-6 rounded-2xl bg-gray-300 
      duration-200 border-solid border-2 border-transparent hover:border-gray-300 
      hover:bg-white " type="submit">Gravar treino</button> 
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { uid } from 'uid';

export default {
  name: "create",
  setup() {

    


    // Personalizing your training
    // Create data
    const workout =ref('')
    const workoutType= ref('select-workout')
    const exercises =ref([])
    const statusMsg=ref(null)
    const errorMsg=ref(null)
   
    // Add exercise
    const addExercise=()=>{
      if(workoutType.value ==="strength"){
        exercises.value.push({
          id:uid(),
          exercise:"",
          sets:"",
          reps:"",
          weight:""
        });
        return
      }
      exercises.value.push({
        id:uid(),
        cardioType:"",
        distance:"",
        duration:"",
        pace: ""
      })

    }
  

    // Delete exercise
   

    // Listens for chaging of workout type input

   
    // Create workout


    return {workout, workoutType, exercises, statusMsg, errorMsg, addExercise  };
  },
};
</script>
