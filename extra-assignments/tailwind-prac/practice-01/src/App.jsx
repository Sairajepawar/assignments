import './App.css'
function App() {
    return (
        <>
            <div className='grid grid-cols-3'>
                <div className=' col-span-3 md:col-span-1 bg-amber-300'>first</div>
                <div className=' col-span-3 md:col-span-1 bg-red-500'>second</div>
                <div className=' col-span-3 md:col-span-1 bg-blue-600'>thrid</div>
            </div>
        </>
    )
}

export default App;