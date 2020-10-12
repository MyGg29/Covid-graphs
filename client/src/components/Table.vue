<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="content"
      :items-per-page="itemsPerPage"
      :page="focusIncomingActions ? pageIncomingAction : 1"
      sort-by="dateProgramme"
      class="elevation-1"
      @dblclick:row="(e, item) => editItem(item.item)"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        Nothing here
      </template>
    </v-data-table>
    <v-toolbar
      flat
      color="white"
      :height="showCreateButton ? undefined : '0px'"
    >
      <v-dialog v-model="dialog" max-width="700px">
        <template v-if="showCreateButton" v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            block
            v-on="on"
          >
            New Item
          </v-btn>
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
                    <DatePicker
                      v-model="editedItem.dateProgramme"
                      disabled
                      label="Date de programmation"
                    />
                    <v-select
                      v-model="editedItem.responsable"
                      :items="responsables"
                      label="Réponsable"
                    />
                    <v-text-field
                      v-model="editedItem.lieuRealisation"
                      label="Lieu de réalisation"
                    />
                    <DatePicker
                      v-model="editedItem.dateRealisation"
                      label="Date de réalisation"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-file-input multiple chips label="Pièces jointes" />
                    <v-textarea
                      v-model="editedItem.commentaire"
                      label="Commentaire"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="close">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import DatePicker from "../components/utils/DatePicker";
export default {
  components: {
    DatePicker
  },
  props: {
    itemsPerPage: {
      type: Number,
      default: 5
    },
    showCreateButton: Boolean,
    responsables: {
      type: Array,
      default: () => []
    },
    focusIncomingActions: Boolean,
    showEditButton: Boolean,
    headers: {
      type: Array,
      default: () => [{ text: "No Data", value: "NoData" }]
    },
    content: {
      type: Array,
      default: () => [
        {
          NoData: "Nothing here"
        }
      ]
    }
  },
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {
      dateProgramme: "",
      responsable: 0,
      lieuRealisation: 0,
      dateRealisation: 0,
      commentaire: 0
    },
    defaultItem: {
      dateProgramme: "",
      responsable: 0,
      lieuRealisation: 0,
      dateRealisation: 0,
      commentaire: 0
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Editer action préventive";
    },
    pageIncomingAction: function() {
      return (
        (this.content.findIndex(x => x.dateRealisation === null) %
          this.itemsPerPage) +
        1
      );
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.content.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.content.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.content.splice(index, 1);
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
        Object.assign(this.content[this.editedIndex], this.editedItem);
      } else {
        this.content.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
