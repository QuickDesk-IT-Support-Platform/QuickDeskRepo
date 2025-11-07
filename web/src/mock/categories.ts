import { Laptop, Wifi, Lock, Users, Settings, Shield } from "lucide-react"

export const mockCategories = [
  {
    id: 1,
    name: "Hardware & Devices",
    description: "Troubleshooting devices and other hardware issues",
    icon: "Laptop",
    color: "text-orange-600",
    children: [
      {
        id: 2,
        name: "Computers & Laptops",
        description: "Troubleshooting involving computers or laptops",
        icon: "Monitor",
        color: "text-amber-500",
        children: [
          {
            id: 3,
            name: "Hardware Repair",
            description: "Keyboard, screen, battery, SSD/RAM, fan, or motherboard issues.",
            icon: "Wrench",
            color: "text-yello-500",
          },
          {
            id: 4,
            name: "OS & Updates",
            description: "Windows/macOS installation, activation, drivers, or failed updates.",
            icon: "Settings",
            color: "text-orange-400",
          },
          {
            id: 5,
            name: "Performance & Storage",
            description: "Slow computer, overheating, cleanup, disk space, or disk checks.",
            icon: "HardDrive",
            color: "text-red-400",
          },
        ],
      },
      {
        id: 6,
        name: "Mobile Devices",
        description: "Assistance with network access, VPN, and Wi-Fi connectivity issues.",
        icon: "Smartphone",
        color: "text-pink-500",
      },
    ],
  },
  {
    id: 7,
    name: "Network & Connectivity",
    description: "Assistance with network access, VPN, and Wi-Fi connectivity issues.",
    icon: "Wifi",
    color: "text-blue-500",
  },
  {
    id: 8,
    name: "Software & Applications",
    description: "Installation, licensing, and troubleshooting for software and tools.",
    icon: "AppWindow",
    color: "text-green-500",
  },
]
