import Get from "./components/Get/Get";
import { useGetProvider } from "./hooks/providers/useGetProvider";

const App = () =>{
    return(
        <useGetProvider>
            <Get/>
        </useGetProvider>
    )
}
