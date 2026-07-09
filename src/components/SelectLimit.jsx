import React from 'react'

export default function SelectLimit({limit, setLimit}) {
  return (
    <div>
        <label htmlFor='limit'>Show: </label>
        <select value = {limit} id="limit" onChange={(e) => {
            const newLimit = Number(e.target.value)
            setLimit(e.target.value)
            localStorage.setItem('searchLimit', newLimit)
            }} className='border border-slate-200 rounded-lg p-2 text-sm bg-white shadow-sm'>
            <option value={4}>4 Product</option>
            <option value={8}>8 Product</option>
            <option value={12}>12 Product</option>
            <option value={20}>20 Product</option>
        </select>
    </div>
  )
}
