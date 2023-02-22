import React from "react";
import { AiOutlineClear, AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";

const UserSearch = () => {
  const { users, searchUsers, clearUsers, } = useContext(GithubContext);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [clickerr, setClickerr] = useState(false);
  

  const handleChange = (e) => {
    setText(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text === "") {
      setClickerr(false);
      setError(true);
      setTimeout(() => setError(false), 3000);
      clearUsers();
      

    } else {
      searchUsers(text);
      setError(false);
      setClickerr(true);
    }
  };
  const clearText = () => {
    setClickerr(false);
    setText("");
  };
    

  
  
  

 

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className=" form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input-lg text-black input    "
              />
              {error ? (
                
                <div className="alert alert-error shadow-lg mt-4  ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className=" font-bold">
                      This field is required !!
                    </span>
                  </div>
                </div>
              ) : null}

              <div
                className="btn-group  absolute
              top-0 right-0 "
              >
                {clickerr ? (
                  <button
                    onClick={clearText}
                    className=" btn btn-lg hover:bg-transparent rounded-full align-middle  btn-ghost "
                  >
                    <AiOutlineClose />
                  </button>
                ) : null}

                <button
                  type="submit"
                  className=" btn btn-lg  btn-ghost bottom-4 "
                >
                  <BiSearchAlt2 color="gray" size={20} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>


      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost   text btn-lg">
            <AiOutlineClear size={25} className="mr-4" />
            clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
