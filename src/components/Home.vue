<template>
  <nav class="navBarContainer">
    <div>
      <button type="button" class="button" v-on:click="showListHome">
        HOME
      </button>
    </div>
    <div>
      <button type="button" class="button button2" v-on:click="showListAtrasados">
        ATRASADOS
      </button>
    </div>
    <div class="save-btn">
      <button type="button" class="button button3" v-on:click="toSchedule" id="show-modal" @click="showModal = true">
        AGENDAR
      </button>
    </div>
  </nav>
  <table>
    <tbody>
      <section class="headerMedicineContainer">
        <tr>
          <th id="1" class="">
            REMÉDIO
          </th>
          <th id="2">
            HORA AGENDADA
          </th>
          <th id="3">
            HORA DE CONSUMO
          </th>
        </tr>
      </section>
      <section class="bodyMedicineContainer">
        <tr v-for="item in renderList" :key="item.length">
          <th id="1">
            {{ item.nomeRemedio }}
          </th>
          <th id="2">
            {{ item.horaAgendada }}
          </th>
          <th id="3">
            {{ item.horaConsumo }}
          </th>
        </tr>
      </section>
    </tbody>
  </table>
  <SavedModal v-show="showModal" @close-modal="showModal = false" />
</template>

<script>
import SavedModal from './SavedModal.vue';
export default {
  name: 'Home',
  components: { SavedModal },
  data() {
    return {
      showModal: false,
      items: [
        { nomeRemedio: "Dipirona", horaAgendada: "Mon Jul 16 2022 00:00:00 GMT-0300", horaConsumo: "Mon Jul 17 2022 00:00:00 GMT-0300" },
        { nomeRemedio: "Amoxilina", horaAgendada: "Mon Jul 18 2022 00:00:00 GMT-0300", horaConsumo: "Mon Jul 18 2022 00:00:00 GMT-0300" },
        { nomeRemedio: "Insulina", horaAgendada: "Mon Jul 15 2022 00:00:00 GMT-0300", horaConsumo: "Mon Jul 19 2022 00:00:00 GMT-0300" },
        { nomeRemedio: "Clonazepam", horaAgendada: "Mon Jul 12 2022 00:00:00 GMT-0300", horaConsumo: "" }
      ],
      atrasados: [
        { nomeRemedio: "Roucutan", horaAgendada: "Mon Jul 16 2022 00:00:00 GMT-0300", horaConsumo: "Mon Jul 17 2022 00:00:00 GMT-0300" },
      ],
      renderList: [{}],
    }
  },
  methods: {
    showListHome() {
      this.renderList = this.items;
    },
    showListAtrasados() {
      this.renderList = this.atrasados;
    },
    toSchedule() {
      console.log('Agendando');
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body{
  background-color: #e3e3e3;
  font-family: 'Poppins', 'Raleway', sans-serif;
}

.navBarContainer {
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: 400;
  height: 100px;
  justify-content: space-around;
  margin: auto;
  margin-top: 40px;
  width: 90%;
}

table {
  border: 1px solid black;
  border-radius: 30px 30px 0px 0px;
  margin: auto;
  margin-top: 40px;
  width: 90%;
}

tr {
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  height: 50px;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  width: 100%;
}

tr:nth-child(even) {
  background:#E5E9EB;
}

.headerMedicineContainer {
  border-radius: 30px 30px 0px 0px;
  background:#E5E9EB;
}

.bodyMedicineContainer {
  border-radius: 0px 0px 30px 30px;
}

th {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  font-weight: 400px;

}

.button {
  padding: 16px 42px;
  font-family: 'Poppins', 'Raleway', sans-serif;
  background:#E5E9EB;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
}

.button:hover {
  color: rgb(0, 0, 0);
  font-weight: 700;
  border: 1px solid black;
}

</style>
