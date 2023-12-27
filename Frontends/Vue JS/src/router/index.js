import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import HomePage from "../views/Index.vue";
import FlightsPage from "../views/FlightsPage.vue";
import FlightViewPage from "../views/FlightViewPage.vue";
import AirportsPage from "../views/AirportsPage.vue";
import AirportViewPage from "../views/AirportViewPage.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect:"/",
    component: DefaultLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: "/",
        name: "homePage",
        component: HomePage,
      },
      {
        path: "/flights",
        name: "flightspage",
        component: FlightsPage,
      },
      {
        path: "/flights/:id",
        name: "flightViewpage",
        component: FlightViewPage,
      },
      {
        path: "/airports",
        name: "airportsPage",
        component: AirportsPage,
      },
      {
        path: "/airports/:id",
        name: "AirportViewPage",
        component: AirportViewPage,
      },
      {
        path: "/:catchAll(.*)",
        name:"pagenotfound",
        component:PageNotFound
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  next();
});
export default router;
