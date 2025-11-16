import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar';
import useAuthStore from '@/Store/auth.store';
export const Route = createFileRoute('/tickets')({
  beforeLoad:()=>{
    const {isAuthenticated}=useAuthStore.getState();
    console.log("isAuthenticated in tickets route ",isAuthenticated);
    if(!isAuthenticated){
      throw redirect({
        to:"/auth/login",
      });
    }
  },
  component: Index,
})

function Index() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}