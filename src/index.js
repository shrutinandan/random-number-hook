import { useState } from "react";

function useRandomNumberGenerator() {
  const [randomNumber, setRandomNum] = useState(1);
 
  // function to get the random number bewtween 1 to 100 
  const getRandomNumber = () => {
    const min = 1;
    const max = 100;
    setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
  };

  // funtion to configure init
  const initValue = () => {
    setRandomNum(1);
  };
  return [randomNumber, getRandomNumber, initValue];
}
export default useRandomNumberGenerator;

// counter hook
/* export const useMyHook = () => {
  let [{ counter }, setState] = React.useState({
    counter: 0,
  });

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      counter++;
      setState({ counter });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};*/
