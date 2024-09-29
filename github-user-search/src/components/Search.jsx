import React, {useState} from 'react'
import {fetchUserData} from '../services/githubService.js'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [userData, setUserData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try{
        const response = await fetchUserData(searchTerm, location, minRepos);
          setUserData(response);
          setLoading(false);
          } catch (error) {
            setError('Looks like we cant find the user');
          } finally {
            setLoading(false);
          } 

    };



    return(
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-8"> Search GitHub User</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <div>
                    <label htmlFor="searchTerm" className="block font-medium mb-2">
                        Username
                        </label>
                 <input
                  type="text"
                 placeholder="Enter GitHub Username"
                 value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                  />
                </div>
                <div>
                    <label htmlFor="location" className="block font-medium mb-2">
                        Location
                    </label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block font-medium mb-2">
                        Minimum Repositories
                        </label>
                        <input
                        type="text"
                        id="minRepos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        />
                </div>
                   </div>
         <button type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4"
         >
            Search
            </button>
            </form>

            {Loading && <p>Loading...</p> }
            {error && <p className="text-red-500">{error}</p> }

            {userData.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {userData.map((user) => (
                            <div
                             key={user.id}
                             className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
                             >
                        <img
                        src={user.avatar_url}
                        alt={user.login}
                         className="w-20 h-20 rounded-full mb-2"
                        />
                        <h3  className="text-lg font-medium mb-1">{user.name}</h3>
                        <p  className="text-gray-500 mb-2">@{user.login}</p>
                        <p  className="text-gray-500 mb-2">Location: {user.location}</p>
                        <p className="text-gray-500 mb-2">
                            Repositories: {user.public_repos}
                        </p>
                        <a href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:text-blue-600 mt-2"
                        >
                            View on Github
                            </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
};

export default Search;