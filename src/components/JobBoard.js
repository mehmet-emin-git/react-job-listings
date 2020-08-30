import React from 'react';

const JobBoard = ({
	job: {id,logo,company,hot,featured,position,role,level,postedAt,contract,location,languages,tools},

}) => {
	const tags = [role, level];

	if(tools) tags.push(...tools);
	if(languages) tags.push(...languages);

  return (
    <div className={`flex bg-white shadow-lg m-8 p-8 items-center rounded-lg ${featured && 'border-l-4 border-desaturated border-solid'}`}>
    	<div>
    		<img src={logo} alt={company}/>
    	</div>
    	<div className="ml-4 flex flex-col justify-between">
	    	<h3 className="font-bold text-desaturated">
		    	{company}
		    	{hot &&  (<span className="text-xs ml-4 inline-block p-1 bg-desaturated text-white rounded-full">New!</span>)}
		    	{featured && (<span className="text-xs ml-2 inline-block p-1 text-white rounded-full bg-veryDarkGray">FEATURED</span>)}
	    	</h3>
	    	<h2 className="font-bold text-xl text-veryDarkGray py-1">{position}</h2>
	    	<p className="text-gray-500">
	    		{postedAt} &bull; {contract} &bull; {location}
	    	</p>
    	</div>
    	<div className="ml-auto flex items-center justify-center">
    		{tags ? (tags.map(tag => <span className="text-desaturated bg-filter font-bold m-2 p-1 rounded-md text-sm hover:cursor-pointer inline-block">{tag}</span>)) : ('') }
    	</div>
    </div>
  )
}

export default JobBoard;