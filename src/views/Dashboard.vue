<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="rowbtn">
       <v-tooltip top>
        <template  v-slot:activator="{on}">
          <v-btn small  color="grey-3" elevation="0" @click="sortBy('title')" v-on="on">
        <v-icon left >mdi-folder</v-icon>
        <span class="caption text-lowercase grey--text">By project name</span>
       </v-btn>
        </template>
        <span>Sort by project name</span>
       </v-tooltip>
       <v-tooltip top>
       <template  v-slot:activator="{on}">
        <v-btn small text color="grey-3" @click="sortBy('person')"  v-on="on">
        <v-icon left >mdi-account</v-icon>
        <span class="caption text-lowercase grey--text"> By person</span>
       </v-btn>
      </template>
      <span>Sort by person name</span>
    </v-tooltip>
      </v-row>
      
      <!-- pa-3 内边距，all，-->
      <v-card flat class="pa-3 mb-3" v-for="item in project" :key="item.title">
        <v-row wrap :class="`pa-3 item ${item.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ item.title }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ item.person }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ item.due }}</div>
          </v-col>
          <v-col xs="2"  sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${item.status} white--text caption my-2`">
                {{ item.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data(){
    return{
      project:[
      {title:"Design a new website",person:" The net NiJia", due:"1st Jan 2019",status:"ongoing",content:"lorem"},
      {title:"A new website",person:" zhangSan", due:"1st Jan 2017",status:"complete",content:"hello"},
      {title:"Website",person:" Grome", due:"1st Jan 2020",status:"ongoing",content:"nihao"},
      {title:"Big",person:" TiNa", due:"1st Jan 2023",status:"overdue",content:"123"}
    ]
    }
  },
  methods:{
    sortBy(prop){
      console.log("123");
      this.project.sort()
      // (a,b) => a[prop] < b[prop] ? -1:1
    }
  }
};
</script>
<style >
.item.complete{
  border-left: 4px solid #3cd;
}
.item.ongoing{
  border-left: 4px solid orange;
}
.item.overdue{
  border-left: 4px solid tomato;
}
/*加 !important 颜色才生效*/
.v-chip.complete{
 background:  #3cd !important;
}
.v-chip.ongoing{
  background:  orange !important;
}
.v-chip.overdue{
background:  tomato !important;
}
.rowbtn{
  margin-bottom: 20px;
  margin-left: 0px;
}
</style>