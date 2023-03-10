import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackContextProvider } from './context/FeedbackContext';

const App = () => {

  return (
    <FeedbackContextProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            } />

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackContextProvider>
  );
};

export default App;
