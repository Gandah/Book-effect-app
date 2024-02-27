import { useState } from 'react'
import Rimage  from './assets/angle-circle-left.svg'
import Limage  from './assets/angle-circle-right.svg'

import './App.css'

function App() {
  
  const [flip, setFlip] = useState(false)
  const [name, setName] = useState(" ")


  const handleName = (e) => {

    const { value } = e.target;
    setName(value)
  }

  return (
    <div className='relative min-h-[34rem] w-[30rem] flex'>

    {/* Page 1 */}
    <div className="paper w-full h-full z-[1]">
    {/* Front */}
        <div className={`front flex justify-center items-center w-full h-full  rounded-2xl
        bg-white-400 p-4 absolute top-0 left-0 z-[1] origin-left transition-transform duration-500 ${flip ? "rotate-y-180": ""}`}>
          <div className="flex flex-col justify-center items-center gap-10 flex-1">
            <div>
              {/* <label htmlFor="pet-select">Choose a pet:</label> */}
              <select id="food-select" className='bg-lighter-gray rounded-lg p-1 shadow-md'>
                <option value="">Catégorie</option>
                <option value="Pites et Biscuits">Pites et Biscuits</option>
                <option value="Garnitures chaudes">Garnitures chaudes</option>
                <option value="Garnitures froides">Garnitures froides</option>
                <option value="Décors et autres">Décors et autres</option>
              </select>
            </div>
            <input onChange={handleName} type="text" 
              name="Name" value={name}
              placeholder="Nom"
              className="outline-none border-b-2"
            />

            
            <div className="flex flex-col w-full">
              <label htmlFor="notes" className="mb-2">Notes</label>
              <textarea id="notes" className="bg-lighter-gray rounded-2xl 
              outline-none py-2 px-3 w-full" rows={10} ></textarea>
            </div>
            
              <div className="flex flex-row justify-center items-center w-full relative">
                <button type="button" className="rounded-2xl 
                bg-lighter-gray px-6 border-2 border-slate-700/20">Annuler</button>
                <div className="absolute right-0" onClick={() => setFlip(preV => !preV)}>
                  <img className="w-[24px] h-[24px]" src={Limage} alt="left arrow" />
                </div>
              </div>
           
          </div>
      </div>

      {/* Paper 1 Back  */}
      <div className={`back flex justify-center items-end w-full h-full  rounded-lg
        bg-white-400  p-4 absolute top-0 left-0 z-0 origin-left transition-transform duration-500 ${flip ? "rotate-y-180": ""}`}>
          <div className="flex gap-4 arotate-y-180">
            <div onClick={() => setFlip(preV => !preV)}>
              <img className="w-[24px] h-[24px] " src={Rimage} alt="right arrow" />
            </div>
            <p>Paper 1 Back</p>
         
        
          </div>
      </div>

    </div>
      

      {/* Page 2 */}
      <div className="paper w-full h-full z-0">
      {/* Front */}
        <div className="flex justify-center items-end h-full w-full
        rounded-lg bg-white-400 p-4 paper z-[1]">
            {/* <div className="flex gap-4">
              <div>
                <img className="w-[24px] h-[24px] " src={Rimage} alt="right arrow" />
              </div>
              <p>Paper 2 Front</p>
              <div>
                <img className="w-[24px] h-[24px]" src={Limage} alt="left arrow" />
              </div>
            </div> */}
        </div>

        {/* Paper 2 Back  */}
          <div className="flex justify-center items-end h-full w-full
          rounded-lg bg-pale-blue/45 p-4 paper z-0">
              {/* <div className="flex gap-4">
                <div>
                  <img className="w-[24px] h-[24px] " src={Rimage} alt="right arrow" />
                </div>
                <p>Paper 2 back</p>
                <div>
                  <img className="w-[24px] h-[24px]" src={Limage} alt="left arrow" />
                </div>
              </div> */}
          </div>

      </div>
     


    </div>
  )
}

export default App
