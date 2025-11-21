import { Card } from '@/components/ui/card'
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import {  useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import quickdeskLogo from '../../assets/quickdesk-icon1.png'
import useAuthStore from '@/Store/auth.store';
import { useEffect } from 'react'
export const Route = createFileRoute('/auth/login')({
  component: LoguinPage,
})

interface LoguinForm {
    email:string;
    password:string;
}
function LoguinPage() {
  const navigate = useNavigate();
  const {isAuthenticated,setIsAuthenticated}=useAuthStore();
  const [form, setForm] = useState<LoguinForm>({
    email: '',
    password: '',
  })
  const handleLogin = () => {
    // if (form.email === '' || form.password === '') {
    //     alert("Please fill in all required fields!");
    //     return;
    // }
    //To do validate email format 
    console.log('Form submitted:', form);
    setIsAuthenticated(true);
  }
  

  useEffect(()=>{
    if(isAuthenticated){
     // alert("User already authenticated. Redirecting to home page.");
      navigate(
        {
          to:"/services/indexServices",
         
        }
      );
    }
  },[isAuthenticated])
  return(
    <div className='flex flex-col  w-screen h-screen  items-center justify-center bg-white'>
    



      <Card className='flex flex-col items-center justify-center md:px-20 gap-4 p-2 shadow-2xl rounded-2xl md:py-10 bg-card'>
        <img src={quickdeskLogo} alt="QuickDesk Logo" className='max-w-sm mb-4'/>
        
          <span className='text-2xl text-chart-1 font-bold font-serif mb-4'>Login </span>
      
          <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className='mb-4 shadow-lg'
          />
          <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className='mb-4 shadow-lg'
          />
            <Button 
              className='bg-chart-1 text-white px-4 py-2 rounded hover:bg-green-400 hover:cursor-pointer w-full '
              onClick={()=>handleLogin()}
          >
              Loguin
          </Button>

        <div className='flex flex-col mt-4 items-start justify-center '>

          <div className='flex flex-row gap-5'>
            <span className='text-sm text-gray-500 mb-4'>Forgot your password?</span>
            <Link to="#" className='text-sm text-chart-1 mb-4 ml-1 hover:underline'>Reset Password</Link>
          </div>

          <div className='flex flex-row gap-5'>
            <span className='text-sm text-gray-500'>Don't have an account?</span>
            <Link to="/auth/register" className='text-sm text-chart-1 mb-4 ml-1 hover:underline'>Sign-up here</Link>
          </div>
        
      

        </div>

      
      
      </Card>




      
    </div>
  )
}
