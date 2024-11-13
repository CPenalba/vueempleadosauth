<template>
  <div>
    <div v-if="!token && !status">
      <h2>No has hecho login</h2>

      <button class="btn btn-primary" @click="goToLogin">Ir a Login</button>
    </div>
    <div v-else-if="status == true">
      <h1>Perfil empleado: {{ empleado.apellido }}</h1>
      <hr />
      <ul class="list-group">
        <li class="list-group-item">Id empleado: {{ empleado.idEmpleado }}</li>
        <li class="list-group-item">Apellido: {{ empleado.apellido }}</li>
        <li class="list-group-item">Oficio: {{ empleado.oficio }}</li>
        <li class="list-group-item">Salario: {{ empleado.salario }}</li>
        <li class="list-group-item">Director: {{ empleado.director }}</li>
      </ul>
      <br />
      <button class="btn btn-danger" @click="logout()">Log out</button>
    </div>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceEmpleado from "@/services/ServiceEmpleado";
const service = new ServiceEmpleado();

export default {
  name: "PerfilEmpleadoComponent",
  data() {
    return {
      status: false,
      empleado: [],
      token: Global.token,
    };
  },
  mounted() {
    if (!this.token) {
      this.status = false;
      return;
    }

    service.getPerfilEmpleado().then((result) => {
      this.empleado = result.data;
      console.log(this.empleado);
      this.status = true;
    });
  },
  methods: {
    logout() {
      Global.token = "";
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
