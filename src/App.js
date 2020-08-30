import React, {useState, useEffect} from 'react';
import JobBoard from "./components/JobBoard";
import data from './assets/data.json'

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data),[]);

  return (
    <div className="App font-body bg-blue-100">
      <header className="bg-desaturated w-full">
        <img className="w-full mb-16" src="/images/bg-header-desktop.svg" alt="header image" />
      </header>
      {
        jobs.length === 0 ? (<p>fetching jobs...</p>)
        : (jobs.map(job => <JobBoard job={job} key={job.id}/>))
      }
    </div>
  );
}

export default App;
