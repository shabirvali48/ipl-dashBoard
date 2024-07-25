import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

function App() {
  return(
    
<>
<Routes>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Routes>
</>
    
  );
 
}
export default App
