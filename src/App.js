import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publucRoutes } from './routes';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publucRoutes.map((route, index) => {
                        return <Route path={route.path} element={<route.component />} key={index} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
