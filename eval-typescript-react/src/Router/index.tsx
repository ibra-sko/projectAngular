import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostContextProvider from "../contexts/PostContextProvider";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/Page404";
import PageTemplate from "../pages/PageTemplate";
import PostPage from "../pages/PostPage";
import PostDetailPage from "../pages/PostPage/PostDetailPage";
import PostOwnerPage from "../pages/PostPage/PostOwnerPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<HomePage />} />
        <Route
          path="posts/:postId"
          element={
            <PostContextProvider>
              <PostPage />
            </PostContextProvider>
          }
        >
          <Route index element={<Navigate to="detail" replace />} />
          <Route path="detail" element={<PostDetailPage />} />
          <Route path="owner/:userId" element={<PostOwnerPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
