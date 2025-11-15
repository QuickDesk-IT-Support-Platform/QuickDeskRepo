import { createFileRoute } from '@tanstack/react-router'
import userMock from '../../mock/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { RollerCoaster } from 'lucide-react';
import { Card } from '@/components/ui/card';
export const Route = createFileRoute('/user/userProfile')({
  component: UserProfilePage,
})

interface UserProfileForm {
    name:string;
    email:string;
    contact:string;
    profile_picture_link:string;
    role:string;
}

const handleSaveChanges = (form:  UserProfileForm) => {
    // Logic to save changes goes here
    console.log(form);
    if (form.name === "" || form.email === "" || form.contact === "") {
        alert("Please fill in all fields.");
        return;
    }
    alert("Changes saved successfully!");
}


function UserProfilePage() {
 const [form, setForm] = useState({
    name:userMock.name,
    email:userMock.email,
    contact:userMock.contact,
    profile_picture_link:userMock.profile_picture_link,
    role:userMock.role
 })


  return (
    <div className='flex flex-col mt-20 gap-5  items-center mx-auto max-w-2xl justify-evenly rounded-2xl ' >
        <Card  className='flex flex-row w-full bg-card  rounded-2xl shadow-2xl justify-center items-center p-2'>
            <img src={form.profile_picture_link} alt="Profile Picture" className='rounded-2xl h-48 w-48 m-2  shadow-2xl'/>
        
        
        </Card>
        <Card className='flex flex-col bg-card w-2xl  rounded-2xl shadow-2xl'>
            <div className='flex flex-row items-center justify-evenly p-4 border-b'>
                <span className='text-black font-bold'>Name</span>
                
                <Input defaultValue={form.name} className='flex max-w-120 h-12'
                onChange={e => setForm({ ...form, name: e.target.value })}
                />
            </div>
            <div className='flex flex-row items-center justify-evenly p-4 border-b'>
                <span className='text-black font-bold'>Email</span>
                <Input defaultValue={form.email} className='flex max-w-120 h-12' 
                onChange={e => setForm({ ...form, email: e.target.value })}
                />
                
            </div>
            <div className='flex flex-row items-center justify-evenly p-4 '>
                <span className='text-black font-bold'>Contact</span>
                <Input defaultValue={form.contact} className='flex max-w-120 h-12'
                onChange={e => setForm({ ...form, contact: e.target.value })}
                />
            </div>
            <div className='flex flex-row items-center justify-evenly p-4 border-t'>
                <span className='text-black text-lg font-semibold'>You Are an {form.role}</span>
            </div>
        
        </Card>
        <Button className='w-1/4 mb-10 bg-chart-1 hover:bg-green-400 hover:cursor-pointer' 
        onClick={() => handleSaveChanges(form)}
        >Save Changes</Button>
    </div>
  
  )
}
