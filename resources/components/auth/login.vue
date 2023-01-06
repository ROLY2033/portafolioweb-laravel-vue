<script setup>
    import { reactive, ref } from 'vue';
    import axios from 'axios';
import router from '../router';

    let form = reactive({
        'email': '',
        'password': '',
    })
    let  errors = ref("")

    const login = async () =>{
            await axios.post('/api/login', form).then(response =>{
            if(response.data.success){
                localStorage.setItem('token', response.data.data.token)
                router.push('/admin/home')
            }else{
                errors.value = response.data.message
            }
            })
    }
</script>

<template>
    <h1>login de proyecto</h1>
    <div class="container">
        <p class="text-danger col-3" >
                    {{errors}}
            </p>

        <form @submit.prevent="login"  action="" method="post" class="m-0 row justify-content-center align-items-center" >

            <div class="form-group col-auto text-center col-3">
                <label for="email" class="mx-3">email</label>
                <input v-model="form.email" class="form-control" type="email" placeholder="ingrese su email" name="email" id="email">
            </div>
            <div class="form-group  col-auto text-center">
                <label for="email" class="mx-3">password</label>
                <input v-model="form.password" class="form-control" type="password" placeholder="ingrese su password" name="password" id="password">
            </div>

            <input class="btn btn-primary col-3 " type="submit" value="Login">

        </form>
    </div>
</template>
