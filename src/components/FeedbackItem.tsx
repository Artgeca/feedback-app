import { FaTimes } from "react-icons/fa";
import Card from './shared/Card';

type Props = {
  item: {
    id: number;
    rating: number;
    text: string;
  };
  handleDelete: (id: number) => void;
};

const FeedbackItem: React.FC<Props> = ({ item, handleDelete }) => {
  return (
    <Card>
      <>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
      </>
    </Card>
  );
};
export default FeedbackItem;
