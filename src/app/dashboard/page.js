"use client"

import  NavBar  from "../../components/nav";
import { useEffect } from "react";
import { useAuth } from "../../../firebase/auth";
import { useRouter } from "next/navigation";



export default function Dashboard() {
  const { authUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
		if (!isLoading && !authUser) router.push("/");
	}, [authUser, isLoading]);
  
  return(
    <NavBar/>
   
  );
}
<title>Histórico de Notas</title>

/*

{
    titulo: "NOta1",
    valor: 10.25

}

*/

return nota
function Dashboard(props) {
    
    return (
    <div>
        <Card>
            props = nota
        </Card>
    </div>
    )
 }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }