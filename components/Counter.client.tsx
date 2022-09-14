import {useState} from "react";

type Props = {
  translations: Record<string, string>;
};

const Counter: React.FC<Props> = ({translations}) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      {translations.counter}: {counter}
    </button>
  );
};

export default Counter;
