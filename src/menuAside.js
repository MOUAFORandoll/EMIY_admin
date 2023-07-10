import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiAccountSwitch, mdiBell, mdiHomeGroup, mdiCommentProcessing, mdiPhoneSettings
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },

  {
    to: "/commandes",
    label: "Commandes",
    icon: mdiTable,
  },
  {

    label: "Boutiques",
    icon: mdiHomeGroup,
    menu: [
      {
        to: "/boutiques",
        label: "Liste des Boutiques",

      },
      {
        to: "/boutiques/demandes",
        label: "Liste des Demandes",
      },
    ],
  },


  {
    to: "/utilisateurs",
    label: "Utilisateurs",
    icon: mdiAccountSwitch,
  }, {
    to: "/notifications",
    label: "Notifications",
    icon: mdiBell,
  }, {
    to: "/negociations",
    label: "Negociations",
    icon: mdiCommentProcessing,
  }, {
    to: "/service_client",
    label: "Service Client",
    icon: mdiPhoneSettings,
  },
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
];
