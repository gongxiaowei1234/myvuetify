<template>
  <nav>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      top
      color="success"
      dark
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- class="blue darken-2" -->
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Ninjia</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey-3"  v-bind="attrs" v-on="on">
            <v-icon left> mdi-chevron-down </v-icon>
            Menu
          </v-btn>
        </template>
        <v-list  >
          <v-list-item v-for="(item, index) in links" :key="index" router="item.route">
            <v-list-item-title>{{ item.text }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <v-btn color="grey" text>
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <div>
      <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-col align-center>
          <v-flex class="mt-5 ml-15">
            <v-avatar size="100">
              <img src="/1.jpg" alt="" />
            </v-avatar>
            <p class="white--text subheading mt-1"></p>
            panda gongfu
          </v-flex>
          <v-flex class="mt-4 mb-3">
            <Popup @projectAdded="snackbar=true"/>
          </v-flex>
        </v-col>

        <v-list dense nav>
          <v-list-item
            v-for="item in links"
            :key="item.text"
            item
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                item.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
import Popup from "./Popup.vue"
export default {
  name: "Navbar",
  components: {
    Popup
  },
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Projects", route: "/projects" },
      { icon: "mdi-account", text: "Team", route: "/team" },
    ],
    snackbar: false,
    text: `Awesome, You success added a new project`,
  }),
};
</script>
