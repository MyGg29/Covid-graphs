<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="value"
    transition="scale-transition"
    offset-y
    min-width="290px"
    :disabled="disabled"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="value"
        :label="label"
        append-icon="event"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="value"
      :disabled="disabled"
      no-title
      scrollable
      @change="selected"
    >
      <v-spacer />
      <v-btn text color="primary" @click="menu = false">
        Cancel
      </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(value)">
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Default label"
    },
    disabled: Boolean,
    value: {
      type: String,
      default: "1970/01/01"
    }
  },
  data() {
    return {
      menu: false,
      modal: false,
      menu2: false
    };
  },
  watch: {
    value: function(newVal){
      console.log(newVal, this.value)
    }
  },
  methods: {
    selected: function() {
      this.$emit("input", this.value);
    }
  }
};
</script>
