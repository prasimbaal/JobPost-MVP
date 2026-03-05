import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,

    accounts: [
      {
        id: 1,
        email: "client@demo.com",
        password: "client123",
        role: "client",
        name: "Demo Client"
      },
      {
        id: 2,
        email: "freelancer@demo.com",
        password: "freelancer123",
        role: "freelancer",
        name: "Demo Freelancer"
      }
    ],

    darkMode: localStorage.getItem("darkMode") === "true"
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
    role: (state) => state.user?.role || null,
    name: (state) => state.user?.name || null
  },

  actions: {
    login(email, password) {
      const account = this.accounts.find(
        (a) => a.email === email && a.password === password
      )

      if (!account) {
        return { success: false, message: "Invalid credentials" }
      }

      this.user = account
      localStorage.setItem("user", JSON.stringify(account))

      return { success: true }
    },

    logout() {
      this.user = null
      localStorage.removeItem("user")
    },

    toggleDarkMode() {

      this.darkMode = !this.darkMode
    
      if (this.darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.theme = "dark"
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.theme = "light"
      }
    
    }
  }
})