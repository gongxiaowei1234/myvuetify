<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="success" v-bind="attrs" v-on="on"> Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h5>Add a New Project</h5>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          >
          </v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                label="Due date"
                prepend-icon="mdi-calendar-range"
                v-on="on"
                v-bind="attrs"
                :rules="inputRules"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <!-- loading="loading" -->
          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import format from "date-fns/format";
import moment from "moment";
export default {
  name: "Popup",
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minium length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // this.loading=true
        console.log(this.title, this.content, this.formattedDate);
        // this.loading=false
        this.dialog = false;
        this.$emit('projectAdded')
      }
    },
  },
  computed: {
    formattedDate() {
      //   return this.due ? format(this.due, "Do MMM YYYY") : "";
      //   return this.due ? moment(this.due, "") : "";
      return this.due ? moment(this.due).format("Do MMM YYYY") : "";
    },
  },
};
</script>
