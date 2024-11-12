<template>
  <div>
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-danger"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand">Empleados</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <router-link class="nav-link active" to="/">Login</router-link>
            </li>
            <li className="nav-item">
              <router-link class="nav-link active" to="/perfil"
                >Perfil empleado</router-link
              >
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Dropdown</a
              >
              <ul className="dropdown-menu"></ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style></style>
