<template>
  <v-container-fluid>
    <nav>
      <v-snackbar v-model="snackbar" :timeout="3000" top color="grey">
        <span>Awesome! message send successfully😇 </span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <v-app-bar class="px-2 mx-6 mt-6 mt-md-3 mx-md-auto v-app-bar--fixed">
        <v-toolbar-title>Sunil Dangi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs class="visibility-item1">
          <v-tab><a @click="scrollToSection('about')">About</a></v-tab>
          <v-tab><a @click="scrollToSection('teck')">Technologies</a></v-tab>
          <v-tab><a @click="scrollToSection('projects')">Projects</a></v-tab>
          <v-tab
            ><a @click="scrollToSection('experience')">Experience</a></v-tab
          >
        </v-tabs>
        <v-btn rounded class="action_btn visibility-item2">
          <span
            ><a @click="scrollToSection('hire')" class="white--text"
              >Hire me!
            </a></span
          >
        </v-btn>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="visibility-item3"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary fixed-drawer>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Sunil Dangi
              </v-list-item-title>
              <v-list-item-subtitle
                >sunidangi111@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list nav dense rounded link>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :href="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-main class="main">
      <v-row class="section1" id="home">
        <v-col cols="12" md="12" sm="12">
          <h4>
            Hola amigos! <br />
            I’m
            <h1>Sunil Dangi</h1>
            a techy &
          </h4>
          <div class="greetings">
            <v-img
              class="greet-img1"
              src="../assets/images/Group 6398.svg"
              alt="Greetings-image"
              height="auto"
              max-width="600"
            ></v-img>
            <v-img
              class="greet-img2"
              src="../assets/images/Group 6399.svg"
              alt="Greetings-image"
              height="auto"
              max-width="400"
            ></v-img>
          </div>
          <div class="know-block">
            <v-btn rounded class="action_btn">
              <a @click="scrollToSection('hire')" class="white--text"
                >Hire me!
              </a>
            </v-btn>
            &nbsp;&nbsp; &nbsp;

            <a @click="scrollToSection('about')">
              <span class="green-light pt-4">
                Know more about me
                <v-icon small class="green-light">mdi-arrow-right</v-icon>
              </span>
            </a>
          </div>
          <v-img
            class="profile-img1"
            src="../assets/images/Group 2.png"
            alt="profile image"
            max-height="1000"
            max-width="1000"
          ></v-img>
          <v-img
            class="profile-img2"
            src="../assets/images/Group 1.png"
            alt="profile image"
            max-height="auto"
            max-width="350"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="section2" id="about">
        <v-col cols="12" md="12" sm="12">
          <v-container>
            <p class="mt-15 pt-15">
              Welcome to my digital realm! I’m Sunil Dangi, a Pre-final year B.Tech student fueled by curiosity and driven by innovation, with a strong passion for full-stack development. Equipped with a solid foundation in computer science and hands-on experience in technologies like React.js, JavaScript, HTML, and CSS , Java, I am eager to build dynamic and responsive web applications that make an impact.
              <br>
              My academic journey, along with real-world experiences such as the Smart India Hackathon Finalist and organizing GeekSphere 2025, has honed my problem-solving skills and attention to detail—traits that are essential in the world of software development. With a strong desire to learn, collaborate, and innovate, I am excited to contribute my creativity and technical expertise toward building user-friendly and meaningful solutions.
              <br>
              I am ready to embrace challenges, work with like-minded professionals, and grow continuously in the ever-evolving world of technology.
            </p>

            <span class="mb-10 connect">
              <a href="https://www.linkedin.com/in/sunil-dangi-02a5502b1">
                <v-icon color="black">mdi-linkedin</v-icon>
              </a>
              <a href="">
                <v-icon color="black">mdi-twitter</v-icon>
              </a>
              <a href="https://www.instagram.com/sunildangi_111">
                <v-icon color="black">mdi-instagram</v-icon>
              </a>
              <a href="mailto: sunidangi111@gmail.com">
                <v-icon color="black">mdi-email</v-icon>
              </a>
              <a href="https://github.com/sunildangi111">
                <v-icon color="black">mdi-github</v-icon>
              </a>
            </span>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section3" id="teck">
        <v-col cols="12" md="12" sm="12">
          <v-container class="teck-block align-center mt-10">
            <p class="green-dark">Technologies, I’m working with</p>
            <h2 class="mb-5">Got a tech challenge? I code the answer.</h2>
            <div class="teck-stack">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>React.js</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>C++</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    alt="Firebase"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Firebase</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                    alt="Bootstrap"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Bootstrap</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Html</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>CSS</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="SCSS"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>SCSS</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>JavaScript</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>MySql</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Vue.js</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
                    alt="Vuetify"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Vuetify</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Java</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind CSS"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Tailwind CSS</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Github</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                    alt="Nuxt.js"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Nuxt.js</span>
              </v-tooltip>
            </div>
            <p>
              I strongly value thinking creatively and outside the conventional
              boundaries. I also believe that learning is a continuous process
              that persists throughout one's life, regardless of age. Adopting a
              straightforward and uncomplicated approach to life, while still
              maintaining ambitious aspirations, is my philosophy. With this
              mindset, I am actively pursuing my objectives.
            </p>
            <a @click="scrollToSection('hire')">
              <span class="green-light mb-10"> Let's Connect</span>

              <v-icon small class="green-light">mdi-arrow-right</v-icon>
            </a>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section4" id="projects">
        <v-col cols="12" md="12" sm="12">
          <v-container class="mt-15">
            <p class="green-dark">Projects</p>
            <h2>I Build Magical products (Like this Website)</h2>
            <div class="cards">
              <v-card
                v-for="(item, index) in cardData1"
                :key="index"
                class="mx-auto"
                max-width="300"
              >
                <v-img :src="item.imageUrl" height="180px" class="ma-2"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.subtitle }}
                  <a :href="item.url">
                    <v-icon small class="float-right"> mdi-arrow-right </v-icon>
                  </a>
                </v-card-subtitle>
              </v-card>
            </div>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section5" id="experience">
        <v-col cols="12" md="12" sm="12">
          <v-container>
            <p class="green-dark">Experiences</p>
            <h2>Life is all about Experiences, Isn't it?</h2>
            
            <div class="group-img">
              <v-img
                class="ma-3 group-img"
                src="../assets/images/Group 3.png"
                alt="group image"
                max-height="460"
                max-width="1024"
              ></v-img>
            </div>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section6" id="hire">
        <v-col cols="12" md="12" sm="12">
          <v-container pt-15>
            <p class="green-light-bold">Let’s Connect</p>
            <h2 class="green-light-big">Hire me to code your Vision</h2>

            <v-form v-model="valid" ref="form">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    placeholder="Your Name"
                    filled
                    rounded
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email Id"
                    placeholder="Your Email Id here"
                    filled
                    rounded
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    filled
                    name="input-7-4"
                    label="Message"
                    value=""
                    placeholder="Enter here"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn
                rounded
                :disabled="!valid"
                class="action_btn mr-4"
                @click="submit"
                :loading="loading"
              >
                Submit
              </v-btn>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section7" id="connect">
        <v-col cols="12" md="6" sm="12">
          <p>Sunil Dangi - 2024</p>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class="mb-10 connect">
            <a href="https://www.linkedin.com/in/sunil-dangi-02a5502b1">
              <v-icon color="black">mdi-linkedin</v-icon>
            </a>
            <a href="">
              <v-icon color="black">mdi-twitter</v-icon>
            </a>
            <a href="https://www.instagram.com/sunildangi_111">
              <v-icon color="black">mdi-instagram</v-icon>
            </a>
            <a href="mailto: sunidangi111@gmail.com">
              <v-icon color="black">mdi-email</v-icon>
            </a>
            <a href="https://github.com/sunildangi111">
              <v-icon color="black">mdi-github</v-icon>
            </a>
          </span>
          <div
            class="scroll-to-top"
            @click="scrollToTop"
            v-show="showScrollButton"
          >
            <v-btn dark fab small>
              <v-icon small>mdi-arrow-up</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-container-fluid>
</template>

<script>
import { supabase } from "../services/supabaseClient";

export default {
  name: "HomePage",

  data() {
    return {
      // Navbar & general
      drawer: false,
      snackbar: false,
      loading: false,
      links: [
        { icon: "mdi-home-outline", text: "Home", route: "#home" },
        { icon: "mdi-account-heart", text: "About", route: "#about" },
        { icon: "mdi-laptop", text: "Technologies", route: "#teck" },
        { icon: "mdi-format-float-right", text: "Projects", route: "#projects" },
        { icon: "mdi-weight-lifter", text: "Experience", route: "#experience" },
        { icon: "mdi-handshake-outline", text: "Hire me", route: "#connect" },
      ],
      showScrollButton: false,

      // Form
      valid: false,
      name: "",
      email: "",
      message: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 25) ||
          "Name must be less than 25 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          (v && v.length <= 350) ||
          "Message must be less than 350 characters",
      ],

      // Project cards
      cardData1: [
        {
          imageUrl: require("../assets/images/gfg.png"),
          title: "GeeksForGeeks",
          subtitle: "HTML.CSS.JavaScript.Supabase",
          url: "https://gfgbvucoep.github.io/gfgwebsite/",
        },
        {
          imageUrl: require("../assets/images/Group 4.png"),
          title: "Bharatiyam-2025",
          subtitle: "React Js.JavaScript.Supabase.Node Js",
          url: "https://github.com/Bharatiyam25/bharatiyamWebsite",
        },
        {
          imageUrl: require("../assets/images/Tic-Tac-Toe.png"),
          title: "Tic-Tac-Toe",
          subtitle: "React.JavaScript.Html.Css",
          url: "https://github.com/sunildangi111/Tic-Tac-Toe",
        },
        {
          imageUrl: require("../assets/images/Dominos.png"),
          title: "Domino's-clone",
          subtitle: "JavaScript.HTML.TailwindCss.CSS",
          url: "https://github.com/sunildangi111/Dominosclone.github",
        },
        {
          imageUrl: require("../assets/images/net1.png"),
          title: "Netflix-clone",
          subtitle: "JavaScript.Html.Css",
          url: "https://github.com/sunildangi111/myNETFLIXclone.github",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    // Scroll functions
    scrollToSection(section) {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    handleScroll() {
      this.showScrollButton = window.scrollY > 100;
    },

    // Form functions
    async submit() {
      if (!this.$refs.form.validate()) return;

      this.loading = true;

      try {
        // Insert data into Supabase table 'messages'
        const {error } = await supabase
          .from("databook") // Replace with your actual table name
          .insert([
            {
              name: this.name,
              email: this.email,
              message: this.message,
            },
          ]);

        if (error) throw error; // Handle insertion errors

        this.resetForm();
        this.snackbar = true;
        this.$emit("messageAdded");
        alert("Message sent successfully!");
      } catch (err) {
        console.error("Error sending message:", err);
        alert("Error sending message");
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      if (this.$refs.form) this.$refs.form.resetValidation();
    },
  },
};
</script>



<style scoped>
* {
  box-sizing: border-box;
}
.main {
  margin: 0;
  padding: 0;
}
body,
html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
body {
  scroll-behavior: smooth;
}
.scroll-to-top {
  position: fixed;
  bottom: 12%;
  right: 3%;
  transform: translateX(-50%);
  display: block;
}
div.container {
  text-align: center;
  max-width: 70%;
}
.visibility-item1,
.visibility-item2 {
  display: block;
}
.visibility-item3 {
  display: none;
}
.section4 div.container {
  text-align: center;
  max-width: 60%;
}
.section6 div.container {
  text-align: center;
  max-width: 65%;
}
.row {
  text-align: center;
}
.v-toolbar__title {
  width: 450px;
}
.v-navigation-drawer {
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 300px !important;
  backdrop-filter: saturate(100%) blur(10px) !important;
  background-color: rgba(255, 255, 255, 0.6) !important;
  border: 1px solid rgb(218, 220, 224) !important;
}
.v-application a {
  color: #000;
  font-size: 0.8rem;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.group-img {
  border-radius: 15px;
}
.v-sheet.theme--light.v-toolbar.v-app-bar {
  height: 64px;
  margin: auto;
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  align-items: center;
  max-width: 1024px;
  border-radius: 25px;
  backdrop-filter: saturate(100%) blur(10px);
  background-color: rgba(191, 218, 158, 50%);
  border: 1px solid rgb(218, 220, 224) !important;
}

.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.main {
  background-color: #f2f2f2;
}
p {
  font-weight: 500;
}
h4 {
  color: #244633;
  font-size: 1.5rem;
  font-weight: 600;
}
h1 {
  font-size: 1.5rem;
  display: inline-block;
  font-weight: 800;
}
h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
.section2,
.section3,
.section4,
.section5,
.section6 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.section1 {
  position: relative;
  margin-top: 10rem;
  min-height: 15%;
}
.section1 .greetings {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0;
}
.section1 div.know-block {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
}
.section2 {
  border-radius: 5rem;
  background-color: #fff;
  padding: 7rem 0 3rem;
  min-height: 15%;
}
.greet-img1 {
  display: block;
}
.greet-img2 {
  display: none;
}
.profile-img1 {
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -10%);
}

.profile-img2 {
  display: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0%);
}
.connect a {
  margin: 0.2rem;
}
.green-light {
  color: #3f682a;
  font-weight: 800;
  font-size: 0.8rem;
}
.green-light-bold {
  color: #3f682a;
  font-size: 1.5rem;
  font-weight: 600;
}
.green-light-big {
  color: #3f682a;
  font-size: 3rem;
  font-weight: 600;
}
.green-dark {
  color: #244633;
  font-size: 1.3rem;
  font-weight: 600;
}
.section4 {
  background-color: #fff;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
}
.links {
  color: black;
  margin-right: 2rem;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
}
.cards .v-card {
  border-radius: 1rem;
  background: #f2f2f2;
  margin: 1rem;
}
.cards .v-card__title {
  color: #244633;
}
.cards .v-card__subtitle {
  color: #000;
  text-align: left;
  font-weight: 500;
}
.cards .v-card__subtitle .v-icon {
  color: #244633;
  font-weight: 600;
}
.experience-box {
  border-radius: 1rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  margin: 3rem 5rem;
}
.experience-box .box-1 {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.section5 .group-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section6 {
  background-color: #fff;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
}
.teck-block img {
  margin: 1rem;
}
.teck-stack {
  margin: 3rem 0;
}
form.v-form .row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.theme--light.v-btn.v-btn--disabled {
  color: #fff;
}
.section7 {
  background-color: #dce7ce;
  padding: 1rem;
}
/*  ///////////////////// media query ////////////////   */

@media screen and (max-width: 1560px) {
  .section4 div.container {
    max-width: 75%;
  }
  .section2 {
    min-height: 17%;
  }
}
@media screen and (max-width: 1280px) {
  .section5 div.v-image.v-responsive.theme--light {
    width: 800px;
  }
  .section1 div.v-image.v-responsive.profile-img1.theme--light {
    width: 800px;
  }
  .v-application .mt-15 {
    margin-top: 0 !important;
  }
  .section2 {
    min-height: 10%;
  }
}

@media screen and (max-width: 960px) {
  .visibility-item1 {
    display: none;
  }
  .visibility-item3 {
    display: block;
  }

  .section1 div.v-image.v-responsive.profile-img1.theme--light {
    width: 800px;
  }

  .section2 {
    min-height: 0%;
    padding: 2rem 0 3rem;
  }
  .section5 div.v-image.v-responsive.theme--light {
    border-radius: 1rem;
    height: 600px;
    width: 800px;
  }
  .experience-box {
    margin: 1.5rem 2rem;
  }
}

@media screen and (max-width: 860px) {
  .section1 div.v-image.v-responsive.profile-img1.theme--light {
    width: 680px;
  }
  .section1 {
    min-height: 10%;
  }
  .section5 div.v-image.v-responsive.theme--light {
    width: 680px;
    height: 400px;
  }
  .section4 div.mx-auto.v-card.v-sheet.theme--light {
    min-width: 420px;
  }
  .experience-box {
    padding: 0.5rem 1rem;
    margin: 1rem 1.5rem;
  }
  .v-application .mt-15 {
    margin-top: 40px !important;
  }
}
@media screen and (max-width: 760px) {
  .visibility-item2 {
    display: none;
  }

  .section1 div.v-image.v-responsive.profile-img1.theme--light {
    width: 600px;
  }
}
@media screen and (max-width: 680px) {
  .greet-img1 {
    display: none;
  }
  .greet-img2 {
    display: block;
  }
  .section1 {
    min-height: 17%;
  }
  .section1 div.v-image.v-responsive.profile-img1.theme--light {
    display: none;
  }
  .section1 .profile-img2 {
    object-fit: contain !important;
    display: block;
  }
  .section2 {
    min-height: 15%;
    padding: 7rem 0 2rem;
  }
  .section5 div.v-image.v-responsive.theme--light {
    width: 500px;
    height: 350px;
  }
  .section4 div.container {
    max-width: 80%;
  }
  .experience-box {
    padding: 0.5rem 1rem 0;
    margin: 1rem 0;
  }
  .experience-box .box-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .v-application .mr-6 {
    margin-right: 0px !important;
  }
  .v-application .mt-5 {
    margin-top: 0px !important;
  }
  .v-application .mt-15 {
    margin-top: 20px !important;
  }
  h4,
  h1 {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 520px) {
  div.container {
    max-width: 85%;
  }
  .section6 div.container {
    max-width: 80%;
  }

  .section5 div.v-image.v-responsive.theme--light {
    width: 400px;
    height: 300px;
  }
  .section4 div.mx-auto.v-card.v-sheet.theme--light {
    min-width: 250px;
  }
  h2 {
    font-size: 1.8rem;
  }
  .green-light-big {
    font-size: 2rem;
  }
  .v-application .mt-15 {
    margin-top: 50px !important;
  }
  .section1 div.know-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem 0;
  }
  .v-application .pt-4 {
    padding-top: 0px !important;
  }
}
@media screen and (max-width: 460px) {
  .section4 div.container {
    max-width: 90%;
  }
  .section4 div.mx-auto.v-card.v-sheet.theme--light {
    min-width: 180px;
  }
  .section5 div.v-image.v-responsive.theme--light {
    width: 380px;
    height: 280px;
  }
  .green-light-bold {
    font-size: 1rem;
  }
  .green-light-big {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 390px) {
  .section5 div.v-image.v-responsive.theme--light {
    width: 250px;
    height: auto;
  }
  .v-application .mt-15 {
    margin-top: 80px !important;
  }
}
</style>
