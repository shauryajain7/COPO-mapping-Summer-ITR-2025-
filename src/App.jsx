import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import Home from './pages/Home';

import Copomap from './pages/Copomap';
import ViewCAM from './pages/ViewCAM';
import UpRes from './pages/UpRes';
import ViewReps from './pages/ViewReps';
import UploadPage from './pages/UploadPage';



export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Drawer isOpen={drawerOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AppBar onMenuClick={() => setDrawerOpen(!drawerOpen)} />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ViewCAM" element={<ViewCAM />} />
              <Route path="/UpRes" element={<UpRes />} />
              <Route path="/ViewReps" element={<ViewReps />} />
              
              <Route path="/copomap" element={<Copomap />} />
              <Route path="/UploadPage" element={<UploadPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}