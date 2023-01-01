import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { AddFeedbackType } from '../App';

type Props = {
  handleAdd: (newFeedback: AddFeedbackType) => void;
};

const FeedbackForm: React.FC<Props> = ({ handleAdd }) => {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      };

      console.log(newFeedback);
      handleAdd(newFeedback);

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input type="text" value={text} onChange={handleTextChange} placeholder='Write a review' />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {
          message && <div className='message'>{message}</div>
        }
      </form>
    </Card>
  );
};
export default FeedbackForm;
