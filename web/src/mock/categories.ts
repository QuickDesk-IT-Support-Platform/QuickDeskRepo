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
  children: [
    {
      id: 71,
      name: "VPN Configuration",
      description: "Setup, troubleshooting, and credential updates for VPN access to corporate networks.",
      icon: "Shield",
      color: "text-indigo-500",
    },
    {
      id: 72,
      name: "Wi-Fi Access & Performance",
      description: "Issues related to Wi-Fi connectivity, speed, or authentication in the company network.",
      icon: "Router",
      color: "text-sky-500",
    },
    {
      id: 73,
      name: "Network Drive & Shared Folders",
      description: "Access, permission requests, or connection issues with shared drives or folders.",
      icon: "FolderNetwork",
      color: "text-cyan-600",
    },
  ],
  },
  {
    id: 8,
    name: "Software & Applications",
    description: "Installation, licensing, and troubleshooting for software and tools.",
    icon: "AppWindow",
    color: "text-green-500",
    children: [
      {
        id: 81,
        name: "Software Installation & Updates",
        description: "Requests to install, update, or repair approved company software and tools.",
        icon: "Download",
        color: "text-emerald-500",
      },
      {
        id: 82,
        name: "License Management",
        description: "Activation, renewal, or transfer of software licenses within the organization.",
        icon: "KeyRound",
        color: "text-lime-500",
      },
      {
        id: 83,
        name: "Application Access & Permissions",
        description: "Issues accessing internal tools or requesting new application permissions.",
        icon: "LockKeyhole",
        color: "text-teal-500",
      },
    ],
  },


]
