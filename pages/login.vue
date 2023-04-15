<template>
  <form @submit.prevent="login">
    <label for="usuario">Nombre de usuario:</label>
    <input type="text" id="usuario" v-model="email">
    <br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button type="submit">Iniciar sesión</button>
  </form>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
        await axios.post('http://localhost:3001/api/signin', {
        email: this.email,
        password: this.password,
      })
      .then((respuesta) => {
        const token = respuesta.data.token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        this.$router.replace('/menu');
      })
      .catch(error => {
        this.$swal({
          title: 'ERROR',
          text: '¡Ingrese de nuevo las credenciales!',
          icon: 'warning',
          confirmButtonColor: 'red',
       });
      });
    },
  },
};

</script>
