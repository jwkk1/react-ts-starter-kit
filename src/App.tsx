import { RouterProvider } from 'react-router-dom';
import router from './router/appRouter';

function App() {
  return (
    <div className="h-screen bg-fuchsia-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
