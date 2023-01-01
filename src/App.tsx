import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

type FeedbackType = {
  id: string;
  rating: number;
  text: string;
};

export type AddFeedbackType = Omit<FeedbackType, 'id'>;

const App = () => {
  const [feedback, setFeedback] = useState<FeedbackType[]>(feedbackData);

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = (newFeedback: AddFeedbackType) => {
    setFeedback([{ ...newFeedback, id: uuidv4() }, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
