import { useState } from 'react';

type Props = {
  select: (rating: number) => void;
};

const RatingSelect: React.FC<Props> = ({ select }) => {
  const [selected, setSelected] = useState<number>(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};
export default RatingSelect;
