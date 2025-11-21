import { createFileRoute, Outlet ,redirect} from '@tanstack/react-router'
import { Navbar } from '@/components/navbar';
import useAuthStore from '@/Store/auth.store';
export const Route = createFileRoute('/services')({
  beforeLoad:()=>{
    const {isAuthenticated}=useAuthStore.getState();
    console.log("isAuthenticated in services route ",isAuthenticated);
    if(!isAuthenticated){
      throw redirect({
        to:"/auth/login",
        search:{
          redirect:location.pathname
        }
      });
    }
  },
  component: Index,
})

function Index() {
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-20"></div>
      <Outlet></Outlet>
    </div>
  )
}