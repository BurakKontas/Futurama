import { Route, Routes, Router as DomRouter, BrowserRouter } from "react-router-dom";
import { Homepage } from "@Pages/homepage";
import { Character } from "@Pages/character";
import { Characters } from "@Pages/characters";
import { Layout } from "@Components/layout";
// import Homepage from "@Pages/homepage/Homepage";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={RouteList.INDEX} element={<Homepage />} />
                    <Route path={RouteList.CHARACTER_DETAILS} element={<Character />} />
                    <Route path={RouteList.CHARACTERS} element={<Characters />} />
                    <Route path={RouteList.INFO} element={<div>Not Found</div>} />
                    <Route path={RouteList.CAST} element={<div>Not Found</div>} />
                    <Route path={RouteList.CAST_DETAILS} element={<div>Not Found</div>} />
                    <Route path={RouteList.EPISODE} element={<div>Not Found</div>} />
                    <Route path={RouteList.EPISODE_DETAILS} element={<div>Not Found</div>} />
                    <Route path={RouteList.QUESTION} element={<div>Not Found</div>} />
                    <Route path={RouteList.QUESTION_DETAILS} element={<div>Not Found</div>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export enum RouteList {
    INDEX = "/",
    CHARACTERS = "/characters",
    CHARACTER_DETAILS = "/character/:id",
    INFO = "/info",
    CAST = "/cast",
    CAST_DETAILS = "/cast/:id",
    EPISODE = "/episode",
    EPISODE_DETAILS = "/episode/:id",
    QUESTION = "/question",
    QUESTION_DETAILS = "/question/:id",
}

export default Router;