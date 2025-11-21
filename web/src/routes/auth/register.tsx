import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import quickdeskLogo from '@/assets/quickdesk-icon1.png'
import { useState } from 'react'


interface RegisterForm {
    name?: string;
    email: string;
    password: string;
    repeatPassword?: string;
    contact?: number;
    location?: string;

  }   



export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
   const [form, setForm] = useState<RegisterForm>({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      contact: 0,
      location: '',
    })
  const handleSubmitForm = () => {
    if (form.email === '' || form.password === '' || !form.name || !form.contact) {
        alert("Please fill in all required fields!");
        return;
    }
    if(form.password !== form.repeatPassword){
        alert("Passwords do not match!");
        return;
    }
    //To do validate email,contact format 
  
    console.log('Form submitted:', form);
    alert(`Registered with email: ${form.email}`);
  }


return (
   <div className='flex flex-col  w-screen h-screen  items-center justify-center bg-white'>
    



      <Card className='flex flex-col items-center justify-center md:px-20 gap-4 shadow-2xl rounded-2xl md:py-10 bg-card p-2 '>
        <img src={quickdeskLogo} alt="QuickDesk Logo" className='max-w-sm mb-4'/>
        
          <span className='text-2xl text-chart-1 font-bold font-serif'>Register </span>
          <Input
              type="name"
              placeholder="Enter your name"
              className='mb-4 shadow-lg'
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}

              
          />
      
          <Input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className='mb-4 shadow-lg'
          />
          <Input
              type="password"
              placeholder="Enter a password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className='mb-4 shadow-lg'
          />
          <Input
              type="password"
              placeholder="Repeat your password"
              value={form.repeatPassword}
              onChange={e => setForm({ ...form, repeatPassword: e.target.value })}
              className='mb-4 shadow-lg'
          />
          <Input
              type="contact"
              placeholder="Contact Number"
              value={form.contact || ''}
              onChange={e => setForm({ ...form, contact: Number(e.target.value) })}
              className='mb-4 shadow-lg'
          />
         
          <Button 
            className='bg-chart-1 text-white px-4 py-2 rounded hover:bg-green-400 hover:cursor-pointer w-full '
            onClick={()=>handleSubmitForm()}
        >
            Register
          </Button>

        <div className='flex flex-col mt-4 items-start justify-center '>
          <div className='flex flex-row gap-5'>
            <span className='text-sm text-gray-500'>Alread have an account?</span>
            <Link to="/auth/login" className='text-sm text-chart-1 mb-4 ml-1 hover:underline'>Sign-in here</Link>
          </div>
        
      

        </div>

      
      
      </Card>

      
    </div>
  )
}
