import { useQuery } from "react-query";

 export const useFetchData=()=>{
    return useQuery(
        {
            queryKey:"systemdata",
            queryFn: async ()=>  {
                const response = await fetch('http://localhost:3000/api/system-data');
                return  response.json();
                 }
            
              
        }
    )
}
// const getFacts = async () => {
//     const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
//     return res.json();
// };
// // Using the hook
// const {data, error, isLoading} = useQuery('randomFacts', getFacts);

