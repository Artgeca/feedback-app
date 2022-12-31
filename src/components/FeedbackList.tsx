import FeedbackItem from './FeedbackItem';

type Props = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
  handleDelete: (id: number) => void;
};

const FeedbackList: React.FC<Props> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      }
    </div>
  );
};
export default FeedbackList;
