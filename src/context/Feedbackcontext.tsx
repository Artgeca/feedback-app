import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type FeedbackContextProviderProps = {
  children: React.ReactNode;
};

type FeedbackType = {
  id: string;
  text: string;
  rating: number;
};

type AddFeedbackType = Omit<FeedbackType, 'id'>;

type FeedbackContextType = {
  feedback: FeedbackType[],
  deleteFeedback: (id: string) => void;
  addFeedback: (newFeedback: AddFeedbackType) => void;
};

const FeedbackContext = createContext<Partial<FeedbackContextType>>({});

export const FeedbackContextProvider = ({ children }: FeedbackContextProviderProps) => {
  const [feedback, setFeedback] = useState<FeedbackType[]>([
    {
      id: '1',
      text: 'This item is from context',
      rating: 10
    }
  ]);

  const addFeedback = (newFeedback: AddFeedbackType) => {
    setFeedback([{ ...newFeedback, id: uuidv4() }, ...feedback]);
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return <FeedbackContext.Provider
    value={{
      feedback,
      deleteFeedback,
      addFeedback
    }}>
    {children}
  </FeedbackContext.Provider>;
};

export default FeedbackContext;
