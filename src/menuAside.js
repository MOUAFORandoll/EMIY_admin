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
  mdiAccountSwitch,
  mdiBell,
  mdiHomeGroup,
  mdiCommentProcessing,
  mdiPhoneSettings,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },

  {
    to: "/projets",
    label: "Projets",
    icon: mdiTable,
  },
  {
    to: "/Transactions",

    label: "Transactions",
    icon: mdiHomeGroup,
    // menu: [
    //   {
    //     to: "/Transactions",
    //     label: "Liste des Transactions",
    //   },
    //   {
    //     to: "/boutiques/demandes",
    //     label: "Liste des Demandes",
    //   },
    // ],
  },

  {
    to: "/utilisateurs",
    label: "Utilisateurs",
    icon: mdiAccountSwitch,
  },
  {
    to: "/agregateur",
    label: "Agregateur",
    icon: mdiAccountSwitch,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
];
