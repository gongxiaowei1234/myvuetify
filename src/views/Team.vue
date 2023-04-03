<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <!-- fluid 全宽 -->
    <v-container class="my-5">
      <v-row wrap>
        <!-- md="6"表示占六列 -->
        <v-col
          xs="12"
          sm="6"
          md="6"
          lg="3"
          v-for="item in team"
          :key="item.name"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4"> 
              <!-- 样式未生效 -->
             <v-avatar size="100" class="grey lighten-2">
              <img :src="item.avatar">
             </v-avatar>
               </v-responsive>
            <v-card-text>
              <div class="font-weight-medium ">{{ item.name }}</div>
              <div class="grey--text">{{ item.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Team",
  components: {},
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "web developer",avatar:"/1.jpg" },
        { name: "Tomcat", role: "frontWeber",avatar:"/2.jpg"  },
        { name: "rose", role: "layout",avatar:"/3.jpeg"  },
        { name: "Yoyo", role: "web designer",avatar:"/4.jpeg"  },
        { name: "Tom", role: " cat fasher" ,avatar:"/5.jpeg" },
      ],
    };
  },
};
</script>
