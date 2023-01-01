import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from './FeedbackItem';

type Props = {
  feedback: {
    id: string;
    rating: number;
    text: string;
  }[];
  handleDelete: (id: string) => void;
};

const FeedbackList: React.FC<Props> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} handleDelete={handleDelete} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  );
};
export default FeedbackList;
