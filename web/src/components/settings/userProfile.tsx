import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Camera } from 'lucide-react'
import { Separator } from '../ui/separator'
import { EditProfileForm } from '../Forms/EditProfileForm'

interface UserProfileProps {
  // Define any props if needed in the future
  name?: string;
  email?: string;
  memberSince?: string;

}
interface companyInfo {
  companyName: string;
  location: string;
  image_url?: string;
}
const mockCompanyInfo:companyInfo={
  companyName: "ACME Inc.",
  location: "San Francisco, CA",
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcmkt-image-prd.freetls.fastly.net%2F0.1.0%2Fps%2F6713806%2F3500%2F2330%2Fm1%2Ffpnw%2Fwm0%2Flogos-21-77-.jpg%3F1563702063%26s%3Dc25446499054f94d550e28c39b63e932&f=1&nofb=1&ipt=0a58766cf420bea50de3a97e986f5256fc0167fb26b739eb866fa8f28376315b"
};
const mockUserData:UserProfileProps = {
  name: "Airton Silva",
  email: "airton.silva@example.com",
  memberSince: "January 2022",
};
export default function UserProfile() {
  return (
    <div >
        <span className='font-extralight'>Manage your personal information </span>

        <Card className="mt-6 p-6 bg-card min-h-screen">
          <div className='card-header flex md:flex-row items-start md:justify-between  flex-col '>
            <div className='flex flex-row items-start gap-4'>
              
              <div className='flex flex-row items-end'> 
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fhappy-man-ai-generated-portrait-user-profile_1119669-1.jpg%3Fw%3D2000&f=1&nofb=1&ipt=46f7e6f0518b0b5fc27e24ac3a899e8c5ce3ddfa77a4ee5fea2000b4bc083360" alt="User ProfilePic" className='rounded-3xl  h-20 w-20 md:h-30 md:w-30'/>
                <div className='bg-chart-1 rounded-2xl  -ml-5  p-2 shadow-md scale-90 cursor-pointer hover:scale-130 transition-all'>
                    <Camera className='text-white'/>
                </div>
              </div>

                <div className='flex flex-col items-start justify-around md:gap-3'>
                  <h1 className='font-bold  md:text-2xl'>{mockUserData.name}</h1>
                  <span className='font-light  md:text-xl'>{mockUserData.email}</span>
                  <span className='font-light  md:text-xl
                  '>Member since {mockUserData.memberSince}</span>
                </div>
            </div>
          </div>
          <Separator className="my-4 bg-gray-200 dark:bg-accent-foreground" />
       
          <EditProfileForm />
          
          <div className='flex flex-col  self-end mt-6 font-semibold text-lg bg-chart-1/90 p-4 rounded-lg '>
            <span className='text-sm font-light mb-2'>Your Company</span>
            <div className='flex flex-col'>
              <div className='max-w-30 max-h-30 rounded-2xl overflow-hidden mb-2'>
                <img src={mockCompanyInfo.image_url} alt="Company Logo" className='object-contain '/>

              </div>
              <span className='font-light text-sm'>{mockCompanyInfo.companyName}</span>
              <span className='font-light text-sm'>{mockCompanyInfo.location}</span>

            </div>
          </div>
          <Separator className="my-4 bg-gray-200 dark:bg-accent-foreground" />
          <Card className="mt-6 p-4 bg-muted flex items-center">
            <CardTitle className="text-lg font-semibold">Account Statistics</CardTitle>
            <CardContent className='flex flex-row bg-muted items-center justify-around '>
              <div className="flex flex-row bg-red-500"></div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <h2 className="text-2xl font-bold">5</h2>
                  <p className="text-sm text-muted-foreground">Open Tickets</p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <h2 className="text-2xl font-bold">7</h2>
                  <p className="text-sm text-muted-foreground">Resolved Tickets</p>
                </div>
            </CardContent>
         
          </Card>


        </Card>
    </div>
    
  )
}
