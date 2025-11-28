import React from 'react'
import CategoryDropDown from './Category-DropDown';

interface CatetgoriesProps{
    data : any
}

const Categories = ({data}: CatetgoriesProps) => {
    
    return (
    <div className='flex w-full gap-x-3'>
      {data.docs.map((cat: any) => (
        <div key={cat.id}>
            <CategoryDropDown categories={cat} isActive={false} isNavigateHover={false} />
        </div>
      ))}
    </div>
  )
}

export default Categories
