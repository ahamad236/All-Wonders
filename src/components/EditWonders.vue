<template>
    <form @submit.prevent="updateWonder">
        <div>
            <label for="wonderName">Name : </label>
            <input id="wonderName" v-model="wonderToUpdate.Name" />
       </div>
       <div>
            <label for="wonderLocation">Location : </label>
            <input id="wonderLocation" v-model="wonderToUpdate.Location" />
       </div>
       <div>
            <label for="wonderImageUrl">ImageUrl : </label>
            <input id="wonderImageUrl" v-model="wonderToUpdate.ImageUrl" />
       </div>
       <button>Update</button>
    </form>
</template>
<script setup>
    import { ref, onBeforeMount } from 'vue'
    import axios from 'axios'
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()

    let wonderToUpdate = ref({
        Id: 0,
        Name: "",
        Location: "",
        ImageUrl: ""
    })

    onBeforeMount(() =>{
        axios.get('http://localhost:3000/Wonders/:'+route.params.Id).then( (response) =>{
            wonderToUpdate.value.Id = response.data.Id
            wonderToUpdate.value.Name = response.data.Name
            wonderToUpdate.value.Location = response.data.Location
            wonderToUpdate.value.ImageUrl = response.data.ImageUrl
        } )
    })

    const updateWonder = () =>{
        axios.put(`http:localhost:3000/Wonders/${route.params.Id}`, wonderToUpdate).then(() =>{
            router.push("/")
        })
    }

</script>