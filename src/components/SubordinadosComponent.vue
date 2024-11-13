<template>
  <div>
    <div v-if="!token && !status">
      <h2>No has hecho login</h2>
      <button class="btn btn-primary" @click="goToLogin">Ir a Login</button>
    </div>
    <div v-else-if="status == true">
      <h1>Subordinados</h1>
      <hr />
      <table class="table table-info">
        <thead>
          <tr>
            <th>Id empleado</th>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sub in subordinados" :key="sub">
            <td>{{ sub.idEmpleado }}</td>
            <td>{{ sub.apellido }}</td>
            <td>{{ sub.oficio }}</td>
            <td>{{ sub.salario }}</td>
            <td>{{ sub.director }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceEmpleado from "@/services/ServiceEmpleado";
const service = new ServiceEmpleado();

export default {
  name: "SubordinadosComponent",
  data() {
    return {
      status: false,
      subordinados: [],
      token: Global.token,
    };
  },
  mounted() {
    if (!this.token) {
      this.status = false;
      return;
    }

    service.getSubordinados().then((result) => {
      this.subordinados = result.data;
      console.log(this.subordinados);
      this.status = true;
    });
  },
  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
