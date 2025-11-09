export const mockTickets = [
    {
        id: 1,
        service: "Slow computer, overheating, cleanup, disk space or disk checks.",
        form_id: 1,
        user: "nunofv6",
        assigned_to: "admin",
        ticket_status: "Assigned" as const,
        ticket_priority: "High" as const,
        description: "My computer is running very hot, reaching CPU temps of over 90ºC",
        created_at: "02-11-2025",
        updated_at: null,
        closed_at: null
    },
    {
        id: 2,
        service: "Keyboard, screen, battery, SSD/RAM, fan, or motherboard issues.",
        form_id: 2,
        user: "airton2000",
        assigned_to: "admin",
        ticket_status: "Assigned" as const,
        ticket_priority: "Medium" as const,
        description: "Some keys on my keyboard are double typing.",
        created_at: "03-11-2025",
        updated_at: null,
        closed_at: null
    },
    {
        id: 3,
        service: "Windows/macOS installation, activation, drivers, or failed updates.",
        form_id: 3,
        user: "azon",
        assigned_to: "admin",
        ticket_status: "Assigned" as const,
        ticket_priority: "Medium" as const,
        description: "Need to format my computer with Windows 11.",
        created_at: "04-11-2025",
        updated_at: null,
        closed_at: null
    },
    {
        id: 4,
        service: "Network issues on mobile phone.",
        form_id: 4,
        user: "jvbatista",
        assigned_to: "admin",
        ticket_status: "Assigned" as const,
        ticket_priority: "High" as const,
        description: "Can't access the organization's Wi-Fi network.",
        created_at: "04-11-2025",
        updated_at: null,
        closed_at: null
    }
]