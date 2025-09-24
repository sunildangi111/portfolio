<template>
  <nav>
    <v-app-bar app class="px-2 mx-6 mt-5 mt-md-3 mx-md-auto v-app-bar--fixed">
      <v-toolbar-title>Sunil Dangi</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs class="visibility-item1">
        <v-tab><a @click="scrollToSection('about')">About</a></v-tab>
        <v-tab><a @click="scrollToSection('teck')">Technologies</a></v-tab>
        <v-tab><a @click="scrollToSection('projects')">Projects</a></v-tab>
        <v-tab><a @click="scrollToSection('experience')">Experience</a></v-tab>
      </v-tabs>
      <v-btn rounded class="action_btn visibility-item2">
        <span
          ><a @click="scrollToSection('hire')" class="white--text"
            >Hire me!
          </a></span
        >
      </v-btn>

      <!-- <v-menu offset-y transition="slide-x-transition" :rounded="rounded">
            <template v-slot:activator="{ on, attrs }"> -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="visibility-item3"
      ></v-app-bar-nav-icon>
      <!-- </template> -->
      <v-navigation-drawer
        app
        v-model="drawer"
        class="grey"
        absolute
        left
        temporary
      >
        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- </v-menu> -->
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Home", route: "/" },
        { icon: "mdi-folder", text: "About", route: "/projects" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
        { icon: "mdi-account", text: "Projects", route: "/team" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
      ],
      snackbar: false,
    };
  },
  methods: {
    scrollToSection(section) {
      let targetElement;
      if (section === "about") {
        targetElement = document.getElementById("about");
      } else if (section === "teck") {
        targetElement = document.getElementById("teck");
      } else if (section === "projects") {
        targetElement = document.getElementById("projects");
      } else if (section === "experience") {
        targetElement = document.getElementById("experience");
      } else if (section === "hire") {
        targetElement = document.getElementById("hire");
      }

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>

<template>
  <nav>
    <v-app-bar app class="px-2 mx-6 mt-5 mt-md-3 mx-md-auto v-app-bar--fixed">
      <v-toolbar-title>Sunil Dangi</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs class="visibility-item1">
        <v-tab><a @click="scrollToSection('about')">About</a></v-tab>
        <v-tab><a @click="scrollToSection('teck')">Technologies</a></v-tab>
        <v-tab><a @click="scrollToSection('projects')">Projects</a></v-tab>
        <v-tab><a @click="scrollToSection('experience')">Experience</a></v-tab>
      </v-tabs>
      <v-btn rounded class="action_btn visibility-item2">
        <span
          ><a @click="scrollToSection('hire')" class="white--text"
            >Hire me!
          </a></span
        >
      </v-btn>

      <!-- <v-menu offset-y transition="slide-x-transition" :rounded="rounded">
            <template v-slot:activator="{ on, attrs }"> -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="visibility-item3"
      ></v-app-bar-nav-icon>
      <!-- </template> -->
      <v-navigation-drawer
        app
        v-model="drawer"
        class="grey"
        absolute
        left
        temporary
      >
        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- </v-menu> -->
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Home", route: "/" },
        { icon: "mdi-folder", text: "About", route: "/projects" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
        { icon: "mdi-account", text: "Projects", route: "/team" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
      ],
      snackbar: false,
    };
  },
  methods: {
    scrollToSection(section) {
      let targetElement;
      if (section === "about") {
        targetElement = document.getElementById("about");
      } else if (section === "teck") {
        targetElement = document.getElementById("teck");
      } else if (section === "projects") {
        targetElement = document.getElementById("projects");
      } else if (section === "experience") {
        targetElement = document.getElementById("experience");
      } else if (section === "hire") {
        targetElement = document.getElementById("hire");
      }

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
