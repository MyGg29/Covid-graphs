<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="actions"
      :items-per-page="itemsPerPage"
      :page="focusIncomingAction ? pageIncomingAction : 1"
      sort-by="dateProgramme"
      class="elevation-1"
      @dblclick:row="(e, item) => editItem(item.item)"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-toolbar flat color="white" :height="showCreateButton ? undefined : '0px'">
      <v-dialog v-model="dialog" max-width="700px">
        <template v-if="showCreateButton" v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" block>New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <DatePicker disabled label="Date de programmation" v-model="editedItem.dateProgramme"></DatePicker>
                    <v-select
                      v-model="editedItem.responsable"
                      :items="responsables"
                      label="Réponsable"
                    ></v-select>
                    <v-text-field 
                      v-model="editedItem.lieuRealisation" 
                      label="Lieu de réalisation"
                    ></v-text-field>
                    <DatePicker label="Date de réalisation" v-model="editedItem.dateRealisation"></DatePicker>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-file-input multiple chips label="Pièces jointes"></v-file-input>
                    <v-textarea 
                      v-model="editedItem.commentaire" 
                      label="Commentaire"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
</template>

<script>
import DatePicker from "@/components/utils/DatePicker";
export default {
  components: {
    DatePicker,
  },
  props: {
    itemsPerPage: Number,
    showCreateButton: Boolean,
    responsables: Array,
    focusIncomingAction: Boolean,
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: "Date de programmation", value: "dateProgramme" },
      { text: "Date de réalisation", value: "dateRealisation" },
      { text: "Lieu de réalisation", value: "lieuRealisation" },
      { text: "Responsable", value: "responsable" },
      { text: "Commentaire", value: "commentaire" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    actions: [],
    editedIndex: -1,
    editedItem: {
      dateProgramme: "",
      responsable: 0,
      lieuRealisation: 0,
      dateRealisation: 0,
      commentaire: 0,
    },
    defaultItem: {
      dateProgramme: "",
      responsable: 0,
      lieuRealisation: 0,
      dateRealisation: 0,
      commentaire: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Editer action préventive";
    },
    pageIncomingAction: function(){
      return this.actions.findIndex((x) => x.dateRealisation === null) % this.itemsPerPage + 1;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.actions = [
        {
          dateProgramme: new Date("2020-04-15").toISOString().substr(0, 10),
          responsable: "xavier",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-04-21").toISOString().substr(0, 10),
          commentaire: 4.0,
        },
        {
          dateProgramme: new Date("2020-05-15").toISOString().substr(0, 10),
          responsable: "xavier",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-05-15").toISOString().substr(0, 10),
          commentaire: 4.3,
        },
        {
          dateProgramme: new Date("2020-06-15").toISOString().substr(0, 10),
          responsable: "xavier",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-06-15").toISOString().substr(0, 10),
          commentaire: 6.0,
        },
        {
          dateProgramme: new Date("2020-07-15").toISOString().substr(0, 10),
          responsable: "pierre",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-07-20").toISOString().substr(0, 10),
          commentaire: 4.3,
        },
        {
          dateProgramme: new Date("2020-08-15").toISOString().substr(0, 10),
          responsable: "pierre",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-08-16").toISOString().substr(0, 10),
          commentaire: 3.9,
        },
        {
          dateProgramme: new Date("2020-09-15").toISOString().substr(0, 10),
          responsable: "paul",
          lieuRealisation: "Brest",
          dateRealisation: new Date("2020-09-15").toISOString().substr(0, 10),
          commentaire: 0.0,
        },
        {
          dateProgramme: new Date("2020-10-15").toISOString().substr(0, 10),
          responsable: "paul",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 0,
        },
        {
          dateProgramme: new Date("2020-11-15").toISOString().substr(0, 10),
          responsable: "paul",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 6.5,
        },
        {
          dateProgramme: new Date("2020-12-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 4.9,
        },
        {
          dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 7,
        },
        {
          dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 7,
        },
        {
          dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 7,
        },
        {
          dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 7,
        },
        {
          dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
          responsable: "jack",
          lieuRealisation: "Brest",
          dateRealisation: null,
          commentaire: 7,
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.actions.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.actions.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.actions.splice(index, 1);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.actions[this.editedIndex], this.editedItem);
      } else {
        this.actions.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>