export const mockCategories = [
  {
    id: 1,
    name: "Hardware & Devices",
    description: "Troubleshooting devices and other hardware issues",
    children: [
      {
        id: 2,
        name: "Computers & Laptops",
        description: "Troubleshooting involving computers or laptops",
        children: [
          {
            id: 3,
            name: "Hardware Repair",
            description: "Keyboard, screen, battery, SSD/RAM, fan, or motherboard issues.",
          },
          {
            id: 4,
            name: "OS & Updates",
            description: "Windows/macOS installation, activation, drivers, or failed updates.",
          },
          {
            id: 5,
            name: "Performance & Storage",
            description: "Slow computer, overheating, cleanup, disk space, or disk checks.",
          },
        ],
      },
      {
        id: 6,
        name: "Mobile Devices",
        description: "Assistance with network access, VPN, and Wi-Fi connectivity issues.",
      },
    ],
  },
  {
    id: 7,
    name: "Network & Connectivity",
    description: "Assistance with network access, VPN, and Wi-Fi connectivity issues.",
  },
  {
    id: 8,
    name: "Software & Applications",
    description: "Installation, licensing, and troubleshooting for software and tools.",
  },
]
