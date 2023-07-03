import React, { useEffect, useState, useRef } from 'react';
import './Profiles.css';
import { fetchProfiles, fetchAvatar } from '../../api/api';
import InfiniteScroll from 'react-infinite-scroll-component';

const Profiles = () => {
  // State variables
  const [profiles, setProfiles] = useState<any[]>([]); // Stores the fetched profiles
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more profiles to load
  const pageRef = useRef<number>(1); // Keeps track of the current page number

  // Function to fetch profiles from the API
  const fetchData = async (page: number) => {
    try {
      // Call the fetchProfiles function from the API, passing the page number and a limit of 20 profiles per page
      const data = await fetchProfiles(page, 20);
      // Append the fetched profiles to the existing profiles using the spread operator
      setProfiles((prevProfiles) => [...prevProfiles, ...data]);

      // If the fetched data is empty, it means there are no more profiles to load
      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  // Fetch profiles when the component mounts
  useEffect(() => {
    fetchData(pageRef.current);
  }, []);

  // Function to load more profiles when scrolling
  const loadMore = () => {
    // Increment the current page number
    pageRef.current++;
    // Fetch profiles for the new page
    fetchData(pageRef.current);
  };

  return (
    <div className="profiles">
      <InfiniteScroll
        dataLength={profiles.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more profiles to load.</p>}
      >
        {/* Render each profile */}
        {profiles.map((profile) => (
          <li key={profile.id}>
            {/* Display the avatar image for each profile */}
            <img
              src={fetchAvatar(profile.username)}
              alt={profile.username}
              style={{ width: '300px', height: '300px' }}
            />
            {/* Display the name of each profile */}
            {profile.name}
          </li>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Profiles;
