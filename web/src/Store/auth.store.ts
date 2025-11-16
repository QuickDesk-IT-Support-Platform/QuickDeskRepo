import {create} from 'zustand'
import { Loguin } from '../Services/AuthService';
type User={
   username: string;
   token: string;
   role: string;
}

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    setIsAuthenticated: (value: boolean) => void;
    setIsLoading: (loading: boolean) => void;
    AuthenticateUser: (email: string, password: string) => Promise<boolean>;
    user: User | null;
    setUser: (user: User | null) => void;
}


const useAuthStore = create<AuthState>((set)=>({
    isAuthenticated:false,
    user:null,
    isLoading:true,
    setIsAuthenticated:(value)=>set({isAuthenticated:value}),
    setUser:(user) =>set({user}),
    setIsLoading:(value)=>set({isLoading:value}),

    AuthenticateUser:async (userName,password)=>{
        set({isLoading:true})

        try{

            const result = await Loguin(userName,password)
            if(result){
                set({isAuthenticated:true})
                return true
            }else{
                set({isAuthenticated:false})
                return false
            }
            // if(user){
            //     set({isAuthenticated:true,user:user as User})
            //     return true

            // }else{
            //     set({isAuthenticated:false,user:null})
            //     return false
            // }

            
        }catch(error){
             console.log('fetchAuthenticatedUser error ',error)
            set({isAuthenticated:false,user:null}) 
         return false
        }finally{
            set({isLoading:false})
        }
    }


}))

export default useAuthStore