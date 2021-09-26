import './App.css';
import { useQuery } from "react-query"

function App() {

  //first arg is key to a request, use it to do any stuff like caching (everything you will do is pointed by this key)
  const {data, error , isLoading, isError, isSuccess, isIdle } = useQuery('hello-world', () => {
    // return Promise.resolve(5)
    //react query return you whatever the promise resolves
    // return Promise.reject(5) //--> gives 5 as an error 

    return new Promise(resolve => setTimeout(resolve,1000)) //resolve promise after 1 sec

  })
  console.log({data, error , isLoading, isError, isSuccess, isIdle})

  return (
    <div>
      
    </div>
  );
}

export default App;
