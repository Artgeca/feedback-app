type FeedbackContextProviderProps = {
  children: React.ReactNode;
};

type FeedbackType = {
  id: string;
  text: string;
  rating: number;
};

type AddEditFeedbackType = Omit<FeedbackType, 'id'>;

type FeedbackEditState = {
  item: FeedbackType | null;
  edit: boolean;
};

type FeedbackContextType = {
  feedback: FeedbackType[],
  deleteFeedback: (id: string) => void;
  addFeedback: (newFeedback: AddEditFeedbackType) => void;
  feedbackEdit: FeedbackEditState;
  editFeedback: (item: FeedbackType) => void;
  updateFeedback: (id: string, item: AddEditFeedbackType) => void;
};
