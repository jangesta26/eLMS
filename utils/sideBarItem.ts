import {
  CalendarDays,
    ChartPie,
    LifeBuoy,
    Megaphone,
    Monitor,
    Send,
    Settings2,
    Sparkles,
    UsersRound,
    Zap,
  } from "lucide-react"
  
export const data = {
    navMain: [
      {
        title: "Overview",
        url: "/",
        icon: ChartPie,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Announcement",
        url: "#",
        icon: Megaphone,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Course",
        url: "/course",
        icon: Sparkles,
        isActive: true,
        items: [
          {
            title: "Top Course",
            url: "/view/top-course/1",
          },
          {
            title: "Heart Course",
            url: "/view/hear-course/2",
          },
          {
            title: "Chest Course",
            url: "/view/chest-course/3",
          },
          {
            title: "Business Course",
            url: "/view/business-course/4",
          },
        ],
      },
      {
        title: "My course",
        url: "/my-course",
        icon: Monitor,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Learning progress",
        url: "#",
        icon: Zap,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Community",
        url: "#",
        icon: UsersRound,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Calendar",
        url: "#",
        icon: CalendarDays,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings2,
        items: [
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
          {
            title: "",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
  }