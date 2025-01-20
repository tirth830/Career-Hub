import { ACCOUNT_TYPE } from "../utils/constants"
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
    {
      id: 2,
      name: "My jobs",
      path: "/dashboard/my-jobs",
      type: ACCOUNT_TYPE.RECRUITER,
      icon: "VscVm",
    },
]
