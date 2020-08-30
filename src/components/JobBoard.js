import React from 'react';

const JobBoard = ({
	job: {id,logo,company,hot,featured,position,role,level,postedAt,contract,location,languages,tools}, handleTagClick

}) => {
	const tags = [role, level];

	if(tools) tags.push(...tools);
	if(languages) tags.push(...languages);

  return (
    <div className={`flex flex-col md:flex-row bg-white shadow-lg mt-16 md:mt-6 mx-6 p-6 items-start md:items-center rounded-md ${featured && 'border-l-4 border-desaturated border-solid'}`}>
    	<div>
    		<img className="w-20 h-20 md:w-full md:h-full mr-auto -mt-16 mb-4 md:m-0" src={logo} alt={company}/>
    	</div>
    	<div className="ml-4 flex flex-col justify-between">
	    	<h3 className="font-bold text-desaturated">
		    	{company}
		    	{hot &&  (<span className="text-xs ml-4 inline-block px-2 py-1 bg-desaturated text-white rounded-full">New!</span>)}
		    	{featured && (<span className="text-xs ml-2 inline-block p-1 text-white rounded-full bg-veryDarkGray">FEATURED</span>)}
	    	</h3>
	    	<h2 className="font-bold text-base md:text-xl text-veryDarkGray my-2 py-1 hover:text-desaturated cursor-pointer">{position}</h2>
	    	<p className="text-gray-500 text-sm">
	    		{postedAt} &bull; {contract} &bull; {location}
	    	</p>
    	</div>
    	<div className="flex flex-wrap items-center mt-4 md:mt-0  mx-4 md:mx-0 pt-4 border-t border-gray-300 border-solid md:ml-auto md:border-none md:p-0">
    		{tags ? (tags.map(tag => <button onClick={() => handleTagClick(tag)} className="text-desaturated bg-filter font-bold mr-4 mb-4 md:mb-2 lg:mb-0 p-2 rounded-md text-xs cursor-pointer hover:bg-desaturated hover:text-teal-100 active:bg-desaturated inline-block focus:outline-none">{tag}</button>)) : ('') }
    	</div>
    </div>
  )
}

export default JobBoard;