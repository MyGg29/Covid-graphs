<template>
  <v-dialog v-model="dialog" max-width="700px">
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
</template>
<script>
import DatePicker from "@/components/utils/DatePicker"
export default {
  name: "EditDialog",
  components: {
    DatePicker
  },
  props: {
    open: {
      type: Boolean,
    },
    content: {
      type: Array
    },
  },
  data: () => ({
    dialog: false,
    editedItem: {

    },
    responsables: [],
    editIndex: -1
  }),
  computed: {
    formTitle: function(){
      return this.editedIndex === -1 ? "New Item" : "Editer action préventive";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    open(val) {
      this.dialog = open;
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.content.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
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
}
</script>