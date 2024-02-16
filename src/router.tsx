import { Route, Routes, HashRouter } from "react-router-dom";
import { Homepage } from "@Pages/homepage";
// import Homepage from "@Pages/homepage/Homepage";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;