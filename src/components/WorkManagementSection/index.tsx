import Button from "../Button";
import styles from "./styles.module.css";
import workTogetherImg from "../../img/workTogether.svg"

export default function WorkManagementSection() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Project Management</h2>

        <p className={styles.text}>
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>

        <Button text="Get Started" icon={true} />
      </div>

      <div className={styles.workTogether}>
        <h2>Work together</h2>
        <p className={styles.text}>
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>

        <Button text="Try it now" icon={true} />

        <img src={workTogetherImg} alt="" />
      </div>
    </section>
  );
}
