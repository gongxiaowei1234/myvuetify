<template>
  <div class="projects">
    <h1  class="subheading grey--text">Projects</h1>
    <!-- <v-expansion-panel >
      <v-expansion-panel-header>
        project title
      </v-expansion-panel-header>
      <v-expansion-panel-content>
       <v-card>
        <v-card-text class="px-4 grey--text">
          <div class="font-weight-bold">due by xx.xx.xx</div>
          <div>info</div>
        </v-card-text>
       </v-card>
       </v-expansion-panel-content> 
    </v-expansion-panel> -->
 
    <v-expansion-panels focusable >
     
    <v-expansion-panel
    v-for="item in myProject"
      :key="item.title"
    >
      <v-expansion-panel-header> {{ item.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <!-- <v-card>
        <v-card-text class="px-4 grey--text"> -->
          <div class="font-weight-bold">due by {{item.due}}</div>
          <div>{{item.content }}</div>
        <!-- </v-card-text>
       </v-card> -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
  
    >
      You've got <strong>5</strong> new updates on your timeline!.
    </v-alert>

    <div class="text-center">
      <v-btn
        v-if="!alert"
        dark
        @click="alert = true"
      >
        Reset Alert
      </v-btn>
    </div>
  </div>

  <v-card
    color="blue-grey darken-2"
    dark
    :loading="isUpdating"
  >
   
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    >
    </v-img>
    <v-form>
      <v-container>
        <v-row>
          <v-col
         
            md="4"
          >
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
            
              color="blue-grey lighten-2"
              label="Name"
            ></v-text-field>
          </v-col>
          <v-col
            md="8"
          >
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="Title"
            ></v-text-field>
          </v-col>
          <v-col >
            <v-autocomplete
              v-model="friends"
              :disabled="isUpdating"
              :items="people"
              filled
            
              color="blue-grey lighten-2"
              label="Select"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                 
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
                    <img :src="data.item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0"
        color="green lighten-2"
        hide-details
        label="Auto Update"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        color="blue-grey darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>
          mdi-update
        </v-icon>
        Update Now
      </v-btn>
    </v-card-actions>
  </v-card>

  </div>
</template>

<script>
  export default {
    name: 'Projects',
    components: {
      
    },
    data(){
      const srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      }
    return{
      project:[
      {title:"Design a new website",person:"The net NinJa", due:"1st Jan 2019",status:"ongoing",content:"lorem"},
      {title:"A new website",person:" zhangSan", due:"1st Jan 2017",status:"complete",content:"hello"},
      {title:"Website",person:" Grome", due:"1st Jan 2020",status:"ongoing",content:"nihao"},
      {title:"Big",person:" TiNa", due:"1st Jan 2023",status:"overdue",content:"123"}
    ],
    alert:true,
    sticky: false,
    items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      fab: false,
      hidden: false,
      tabs: null,
      autoUpdate: true,
        friends: ['Sandra Adams', 'Britta Holt'],
        isUpdating: false,
        name: 'Midnight Crew',
        people: [
          { header: 'Group 1' },
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { divider: true },
          { header: 'Group 2' },
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
        ],
        title: 'The summer breeze',
    }
  },
  computed:{
    myProject(){
      return this.project.filter((item)=>{
        return item.person==='The net NinJa'
      })
    },
    activeFab () {
        switch (this.tabs) {
          case 'one': return { color: 'success', icon: 'mdi-share-variant' }
          case 'two': return { color: 'red', icon: 'mdi-pencil' }
          case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
          default: return {}
        }
      },
  },
  watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    },
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #lateral .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 20px 30px;
  }
</style>