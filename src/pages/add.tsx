import { useSession } from "next-auth/react";
import { useRouter } from "next/router";



const Add = () => {
    const session=useSession()
    const router=useRouter()
    if(!session.data?.user){
        if(typeof window!='undefined'){

            router.push('/')
        }
    }
    return ( <div>
        <h1>add post</h1>
    </div> );
}
 
export default Add;