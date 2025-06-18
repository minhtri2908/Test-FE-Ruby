import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
// import Home from "./pages/Dashboard/Home"
import LookupPage from "./pages/Lookup/LookupPage";
import TopBlockAPage from "./pages/TopGroupA/Top10Page";
import StatisticsPage from "./pages/Report/StatisticsPage";

export default function App() {
  return (
    < div className="font-[Rubik]">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route path="/" element={<Navigate to="/lookup" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/lookup" element={<LookupPage />} />
            <Route path="/topblockapage" element={<TopBlockAPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
