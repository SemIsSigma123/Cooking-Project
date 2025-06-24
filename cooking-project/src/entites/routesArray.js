import Blog from "../components/pages/blog/Blog";
import Contact from "../components/pages/Contact/Contact";
import Home from "../components/pages/home/Home";
import RecipesPagination from "../components/pages/recipes/RecipesPagination";

export const routesArray = [
  {
    id: 1,
    name: 'home',
    path: '/',
    component: Home
  },
  {
    id: 2,
    name: 'recipes',
    path: '/recipes',
    component: RecipesPagination
  },
  {
    id: 3,
    name: 'blog',
    path: '/blog',
    component: Blog
  },
  {
    id: 4,
    name: 'contact',
    path: '/contact',
    component: Contact
  },
  {
    id: 5,
    name: 'about us',
    path: '/about-us',
    component: Home
  }
];

