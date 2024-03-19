import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page,totalPages,handlePage} = useContext(AppContext);
  return (
    <div className='border w-full flex  justify-evenly text-center'>
      <div>
        { page > 1 &&
          <button onClick={handlePage(page-1)}>Previous</button>
        }
        { page < totalPages &&
          <button onClick={handlePage(page+1)}>Next</button>
        }
      </div>
      <div>
      <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
