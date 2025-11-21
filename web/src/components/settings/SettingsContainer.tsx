import { Button } from "../ui/button"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { useState,useEffect } from "react"
import { Switch } from "../ui/switch"
import { Download ,TriangleAlert,Shield,Trash2} from "lucide-react"

interface UserSecuritySettings {
  twoFactorEnabled: boolean;
  languagePreference?: string;
  Timezone?: string;
  DataFormat?: string;

}

const initialMockedSettings: UserSecuritySettings = {
  twoFactorEnabled: true,
  languagePreference: "English",
  Timezone: "GMT",
  DataFormat: "MM/DD/YYYY"
}



export default function SettingsContainer() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(initialMockedSettings.twoFactorEnabled)
  useEffect(() => {
    const settings = {
      twoFactorEnabled,
    }
    console.log("Security settings updated:", settings);
  }, [twoFactorEnabled])
  return (
    <div>
        <span className='font-extralight'>Manage your account settings and preferences</span>
        <Card className="mt-6 p-6 bg-card max-w-4xl">
          <CardTitle className='flex flex-row items-center gap-1 text-lg font-semibold'>
              <Shield  className='text-chart-1'/>
            Security Settings
          </CardTitle>
          <div className='flex flex-col gap-6 mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Two-Factor Authentication (2FA)
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Enhance your account security by requiring a second form of verification during login.
                </span>
              </div>
              <Switch 
                checked={twoFactorEnabled} 
                onCheckedChange={setTwoFactorEnabled}
              />               
              
            </div>
            <Separator className=" bg-gray-200 dark:bg-accent-foreground" />
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Password
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                    Change your account password regularly to keep your account secure.
                </span>
                <Button className="mt-5 bg-chart-1 hover:bg-chart-1 cursor-pointer" size="sm">Change Password</Button>
              </div>
            </div>
          </div>


        </Card>
        
        <Card className="mt-6 p-6 bg-card max-w-4xl">
          <CardTitle className='flex flex-row items-center gap-1 text-lg font-semibold'>
              <Download  className='text-chart-1'/>
              Privacy and Data
          </CardTitle>
          <div className='flex flex-col gap-6 mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Data Export
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                  Download a copy of your account data for personal records or transfer to another service.
                </span>
                <Button className="mt-5 bg-chart-1 hover:bg-chart-1 cursor-pointer items-center" size="sm">
                  <Download className="h-4 w-4"/>
                  Export Data
                </Button>

              </div>
                       
            </div>
            <Separator className=" bg-gray-200 dark:bg-accent-foreground" />
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium'>
                  Cookie Preferences
                </span>
                <span className='text-sm font-light text-muted-foreground'>
                    Manage how we use cookies to enhance your experience and for analytics.
                </span>
                <Button className="mt-5 bg-chart-1 hover:bg-chart-1 cursor-pointer" size="sm">Manage Cookies</Button>
              </div>
            </div>
          </div>
        </Card>


        <Card className="mt-6 p-6 bg-destructive-foreground/50 max-w-4xl ">
          <CardTitle className='flex flex-row items-center gap-1 text-lg font-semibold'>
              <TriangleAlert  className='text-destructive'/>
              <span className="text-destructive  ">
                Danger Zone
              </span>
          </CardTitle>
          <div className='flex flex-col '>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col items-start '>
                <span className='font-medium text-destructive'>
                  Delete Account
                </span>
                <span className='text-sm font-light text-destructive-foreground'>
                  Permanently delete your account and all associated data. This action cannot be undone.
                </span>
                <Button className="mt-5   cursor-pointer items-center" size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4"/>
                  Delete Account
                </Button>

              </div>
                       
            </div>
      
          </div>
        </Card>





    </div>
  )
}
