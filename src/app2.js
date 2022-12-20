import * as R from "react";
import { motion as m} from "framer-motion"
import "./index.css";

const Trial = () => {
  const [move, setMove] = R.useState(true);
  const [ease, setEase] = R.useState(true);
  return (
    <div className="background2">
      <m.div 
      animate={{ y: move ? 0 : -800, opacity: ease ? 1:0}}
      transition={{duration: 1, ease: "easeOut"}}
      onClick={() => {
        setMove(!move);
        setEase(!ease);
      }}
      >

      </m.div>
    </div>
  );
};

export default Trial;