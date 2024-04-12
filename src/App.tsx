import { Route, Routes } from "react-router-dom";
// import "./App.module.scss";

import Layout from "./components/Layout/Layout";
// PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoviesPage from "./pages/MoviesPage";
// import NotFoundPage from "./pages/NotFoundPage";

const appRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
];

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="movies" element={<MoviesPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
