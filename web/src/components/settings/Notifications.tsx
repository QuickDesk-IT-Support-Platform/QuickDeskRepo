import { Card, CardContent, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { Bell } from 'lucide-react'
import { Ticket } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Switch } from "@/components/ui/switch"

interface UserNotificationSettings {
  emailEnabled: boolean;
  pushEnabled: boolean;
  ticketUpdatesEnabled: boolean;
  ticketResolvedEnabled: boolean;
}

const initialMockedSettings: UserNotificationSettings = {
  emailEnabled: true,
  pushEnabled: false,
  ticketUpdatesEnabled: true,
  ticketResolvedEnabled: false
}

export default function Notifications() {
  const [emailEnabled, setEmailEnabled] = useState(initialMockedSettings.emailEnabled)
  const [pushEnabled, setPushEnabled] = useState(initialMockedSettings.pushEnabled)
  const [ticketUpdatesEnabled, setTicketUpdatesEnabled] = useState(initialMockedSettings.ticketUpdatesEnabled)
  const [ticketResolvedEnabled, setTicketResolvedEnabled] = useState(initialMockedSettings.ticketResolvedEnabled)

  useEffect(() => {
    const settings = {
      emailEnabled,
      pushEnabled,
      ticketUpdatesEnabled,
      ticketResolvedEnabled
    }
    console.log("Notification settings updated:", settings);
  }, [emailEnabled, pushEnabled, ticketResolvedEnabled, ticketUpdatesEnabled])
  
  return (
    <div >
        <span className='font-extralight'>Manage how you receive notifications and updates</span>
        <Card className="mt-6 p-6 bg-card max-w-4xl">
          <CardTitle className='flex flex-row items-center gap-1 text-lg font-semibold'>
              <Bell  className='text-chart-1'/>
            Notification Channels
          </CardTitle>
          <div className='flex flex-col gap-6 mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Email Notifications
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Receive notifications via email 
                </span>
              </div>
               
              <Switch 
                checked={emailEnabled} 
                onCheckedChange={setEmailEnabled}
              />
            </div>
            <Separator className=" bg-gray-200 dark:bg-accent-foreground" />
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Push Notifications
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Receive notifications via push notifications on your browser 
                </span>
              </div>
               
              <Switch 
                checked={pushEnabled} 
                onCheckedChange={setPushEnabled}
              />
            
            </div>
            
          </div>

        </Card>

         <Card className="mt-6 p-6 bg-card max-w-4xl">
          <CardTitle className='flex flex-row items-center gap-1 text-lg font-semibold'>
              <Ticket  className='text-chart-1'/>
            Ticket Notifications
          </CardTitle>
          <div className='flex flex-col gap-6 mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Ticket Updates
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Get notified when your tickets are updated
                </span>
              </div>
               
              <Switch 
                checked={ticketUpdatesEnabled} 
                onCheckedChange={setTicketUpdatesEnabled}
              />
            </div>
            <Separator className=" bg-gray-200 dark:bg-accent-foreground" />
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Ticket Resolved
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Get notified when your tickets are marked as resolved
                </span>
              </div>
               
              <Switch 
                checked={ticketResolvedEnabled} 
                onCheckedChange={setTicketResolvedEnabled}
              />
                          
            </div>
            
          </div>

        </Card>
      
    </div>
  )
}
