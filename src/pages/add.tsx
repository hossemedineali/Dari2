import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";



const Add = () => {
  //  const session=useSession()
    //const router=useRouter()
    const test=trpc.addpost.add.useQuery()
    console.log(test.data)
    return ( <div>
        <h1>add post</h1>
    </div> );
}
 
export default Add;