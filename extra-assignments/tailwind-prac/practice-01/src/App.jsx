import './App.css'
import RevenueCard from "./components/RevenueCard.jsx";
function App() {
    return (
        <>
            <div className='grid grid-cols-4'>
                <RevenueCard  className='col-span-4 lg:col-span-1 sm:col-span-2' title="Amount Pending" showWarning={false} Amount={92312.2} OrderCount={13}/>
            </div>
        </>
    )
}

export default App;