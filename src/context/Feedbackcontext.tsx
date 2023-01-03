import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext<Partial<FeedbackContextType>>({});

export const FeedbackContextProvider = ({ children }: FeedbackContextProviderProps) => {
  const [feedback, setFeedback] = useState<FeedbackType[]>([
    {
      id: '1',
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: '2',
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: '3',
      text: 'This is feedback item 3',
      rating: 7
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState<FeedbackEditState>({
    item: null,
    edit: false
  });

  const addFeedback = (newFeedback: AddEditFeedbackType) => {
    setFeedback([{ ...newFeedback, id: uuidv4() }, ...feedback]);
  };

  const deleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const editFeedback = (item: FeedbackType) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  const updateFeedback = (id: string, updItem: AddEditFeedbackType) => {
    const updatedFeedback = feedback.map(item => item.id === id ? { ...item, ...updItem } : item);

    setFeedback(updatedFeedback);
  };

  return <FeedbackContext.Provider
    value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
    }}>
    {children}
  </FeedbackContext.Provider>;
};

export default FeedbackContext;
