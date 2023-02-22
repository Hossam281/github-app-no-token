import { createContext, useReducer, } from "react";
import axios from "axios";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

const GITHUB_API = "";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user:{},
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //searching for users
  const searchUsers =  (text) => {

    setLoading();
    const params = new URLSearchParams({
      q:text,
    })

     axios
      .get(`${GITHUB_API}/search/users?${params}`)
      .then((res) => {
        const {items}=res.data;
        dispatch({
          type: "GET_USERS",
          payload: items,
        });
      });
  };

 
  

  

  const setLoading=()=>dispatch({type:'SET_LOADING'})
  
  const clearUsers=()=>dispatch({type:'CLEAR_USERS'})
  
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user:state.user,
        searchUsers,
        clearUsers,
        
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
