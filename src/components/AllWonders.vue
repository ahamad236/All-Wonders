<template>
    <div class="container">
        <h1> All Wonders Here </h1>

        <div class="wonders-container">
            <div class="wonder" v-for="wonder in AllWonders">
                <img :src="wonder.ImageUrl"/>
                <h3> Name is : {{ wonder.Name }}</h3>
                <p> Location is : {{ wonder.Location }} </p>
                <button>
                    <RouterLink :to="`/edit-wonder/${wonder.Id}`"> Update </RouterLink>
                </button>
            </div>
        </div>
        <div class="addWonders">
            <button>
                <RouterLink to="/AddWonders">
                    AddWonder
                </RouterLink>
            </button>
        </div>

    </div>
</template>
<script setup lang="ts">
    import {ref, onBeforeMount} from 'vue'
    import axios from 'axios'

    const AllWonders = ref([])

    onBeforeMount( () => {
        axios.get("http://localhost:3000/Wonders").then(response =>{
            AllWonders.value = response.data
        })
    } )


</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
        font-family: 'sans-serif'
    }

    .container{
        background: url("../assets/images/backgroundImage.jpg") center;
        background-size: cover;
        width: 100%;
    }

    .container h1{
        text-align: center;
        padding: 25px 0;
        color: #fff;
    }

    .wonders-container{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        padding: 20px 0;
    }

    .wonders-container .wonder{
        flex-basis: 31%;
        padding: 10px 0;
    }

    .wonder img{
        width: 280px;
        height: 130px;
    }

    .wonder h3{
        color: #fff;
        padding: 5px 0;
    }

    .wonder p{
        color: white;
    }

    .wonder button{
        margin: 5px 0;
        padding: 8px 30px;
        border: none;
        border-radius: 10px;
    }

    .wonder h3:hover, .wonder p:hover{
        color: blue;
    }

    .wonder button:hover{
        background: #fff;
    }

    .addWonders{
        margin: 30px;
        text-align: center;
    }

    .addWonders button{
        margin: 5px 0;
        padding: 12px 30px;
        border: none;
        border-radius: 10px;
    }

    .addWonders button:hover{
        color: #fff;
    }

    @media (min-width: 200px) and (max-width: 768px){


        .wonders-container{
            width: 100%;
            flex-direction: column;
        }
    }
</style>