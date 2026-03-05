import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from "../stores/userStore"

import Landing from "../pages/Landing.vue"
import Login from "../pages/Login.vue"

import PostJob from "@/pages/client/PostJob.vue"
import Messages from "@/pages/shared/Messages.vue"
import FreelancerDashboard from "@/pages/freelancer/FreelancerDashboard.vue"
import ClientDashboard from "@/pages/client/ClientDashboard.vue"
import Proposals from "@/pages/client/Proposals.vue"
import JobList from "@/pages/marketplace/JobsList.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/post-job",
      component: PostJob,
      meta: { requiresAuth: true }
    },
    {
      path: "/messages",
      component: Messages,
      meta: { requiresAuth: true }
    },
    {
      path: "/freelancer-dashboard",
      component: FreelancerDashboard,
      meta: { requiresAuth: true }
    },
    {
      path: "/client-dashboard",
      component: ClientDashboard,
      meta: { requiresAuth: true }
    },
    {
      path: "/proposals",
      component: Proposals,
      meta: { requiresAuth: true }
    },
    {
    path: "/findWork",
    component: JobList,
    meta: {requiresAuth: true}
  }
]
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  // If route requires auth and user isn't logged in
  if (to.meta.requiresAuth && !user.isLoggedIn) {
    return next("/login")
  }

  if (to.path === "/login" && user.isLoggedIn) {
    return next("/")
  }

  next()
})

export default router