import { useContext } from 'react';
import { FaTimes } from "react-icons/fa";
import Card from './shared/Card';
import FeedbackContext from '../context/Feedbackcontext';

type Props = {
  item: {
    id: string;
    rating: number;
    text: string;
  };
};

const FeedbackItem: React.FC<Props> = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback!(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
      </>
    </Card>
  );
};
export default FeedbackItem;
