import styles from "./hello-world.module.scss";

const HelloWorld = () => {
  return (
    <div className={styles.hello}>
      Hello World, I am being styled using SCSS Modules!
    </div>
  );
};

export default HelloWorld;
