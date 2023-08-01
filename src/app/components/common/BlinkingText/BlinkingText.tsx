import styles from "./BlinkingTest.module.scss";
const BlinkingText = () => {
  return (
    <div className={`z-10 mt-5 bottom-0 ${styles.wrapper}`}>
      <h1 className="text-[1.4rem] md:text-[2rem] uppercase font-bold">Reviewing</h1>
    </div>
  );
};

export default BlinkingText;
