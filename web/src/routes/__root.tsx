// import { Navbar } from '@/components/navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import useAuthStore from '@/Store/auth.store';
import NotFoundPage from '@/components/NotFoundPage';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// interface userData{
//     name:string;
//     email:string;
//     contact:string;
//     profile_picture_link:string;
//     role:string;
//     isAuthenticated:boolean;
// }
// const mockUser:userData={
//     name:"Airton Silva",
//     email:"airton@example.com",
//     contact:"123-456-7890",
//     profile_picture_link:"https://example.com/profile.jpg",
//     role:"Admin",
//     isAuthenticated:false
// }

// const requireAuth=()=>{
//    const {isAuthenticated}=useAuthStore();
//    if(!isAuthenticated){
//     alert("User not authenticated. Redirecting to login page.");
//    }else{
//     alert("User authenticated. Access granted.");
//    }
// }


const RootLayout = () => (
    

  <div className='min-h-screen bg-gradient-to-br from-orange-50 to-gray-100  flex flex-col'>
    <Outlet />
    {/* <TanStackRouterDevtools /> */}
  </div>

)

export const Route = createRootRoute({ 
  component: RootLayout,
  notFoundComponent:NotFoundPage,
})