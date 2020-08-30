import React, {useState, useEffect} from 'react';
import JobBoard from "./components/JobBoard";
import data from './assets/data.json'

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data),[]);

  const filterFunction = ({role, level, tools, languages}) => {
    if(filters.length === 0) return true;

    const tags = [role, level];
    if(tools) tags.push(...tools);
    if(languages) tags.push(...languages);
    
    return filters.every(filter => tag.includes(filter));
  }

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (filter) => {
    setFilters(filters.filter(f => f !==filter));
  }

  const clearFilters = () => {
    setFilters([]);
  }
  const filteredJobs = jobs.filter(filterFunction)

  return (
    
    <div className="App font-body bg-background min-h-screen w-full pb-6">
      <header className="bg-desaturated ">
        <img className="w-full mb-16 h-32" src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="max-w-6xl m-auto h-full">
        {filters.length > 0 && (
          <div className={`flex flex-wrap md:flex-row bg-white shadow-lg  -mt-24 relative z-10 mb-10 mx-6 p-6 items-start md:items-center rounded-md`}>        
          {filters.length > 0 && filters.map((filter) =>
            (<span className="text-sm text-desaturated my-2 md:my-0 mr-8 font-bold rounded-md cursor-pointer inline-flex">
              <span  className="bg-filter inline-block -mr-1 px-2 py-1 pr-6 bg-desaturated rounded-lg">
                {filter}
              </span>
                
              <span onClick={() => handleFilterClick(filter)} className="inline-block px-2 -mr-4 py-1 bg-desaturated ml-auto">
                <img src="images/icon-remove.svg" alt="remove"/>
              </span>

            </span>))
          }
          <button class="font-bold text-gray-700 ml-auto px-2 py-1 text-sm hover:underline" onClick={clearFilters}>clear</button>
          </div>
        )}
        
        {
          jobs.length === 0 ? (<p>fetching jobs...</p>)
          : (filteredJobs.map(job => <JobBoard job={job} key={job.id} handleTagClick={handleTagClick}/>))
        }
        </div>
    </div>

  );
}

export default App;
