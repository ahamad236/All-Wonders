<template>
    <form class="wonder" @submit.prevent="addNewWonder">
       <div>
            <label for="wonderName">Name : </label>
            <input id="wonderName" v-model="newWonder.Name" />
       </div>
       <div>
            <label for="wonderLocation">Location : </label>
            <input id="wonderLocation" v-model="newWonder.Location" />
       </div>
       <div>
            <label for="wonderImageUrl">ImageUrl : </label>
            <input id="wonderImageUrl" v-model="newWonder.ImageUrl" />
       </div>
       <button>Add</button>
    </form>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const newWonder = ref({
        Name: "",
        Location: "",
        ImageUrl: ""
    })

    const addNewWonder = () =>{
        axios.post("http://localhost:3000/Wonders", newWonder.value).then(() =>{
            router.push("/")
        })
    }

</script>

<style scoped>
    
</style>