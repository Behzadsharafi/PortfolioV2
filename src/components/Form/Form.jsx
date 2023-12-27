import { addMessage } from "../../services/messages-service";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    setSuccessful(false);
    setErrorMessage(null);
  }, []);

  const formSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    setLoading(true);
    addMessage(data)
      .then(() => setSuccessful(true))
      .catch((e) => setErrorMessage(e.message))
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must contain at least 2 characters" }),
    email: z.string().trim().email(),
    message: z.string().trim().min(1, { message: "Message cannot be empty" }),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={styles.form__field}>
        <input
          className={styles.form__field__input}
          id="name"
          type="text"
          {...register("name")}
          placeholder="Your Name"
        />

        {errors.name && (
          <p className={styles.form__field__error}>{errors.name.message}</p>
        )}
      </div>
      <div className={styles.form__field}>
        <input
          className={styles.form__field__input}
          id="email"
          type="email"
          {...register("email")}
          placeholder="Your Email"
        />
        {errors.email && (
          <p className={styles.form__field__error}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.form__field}>
        <textarea
          className={`${styles.form__field__input} ${styles.form__field__input__textarea}`}
          id="message"
          type="text"
          {...register("message")}
          placeholder="Your Message..."
        />
        {errors.message && (
          <p className={styles.form__field__error}>{errors.message.message}</p>
        )}
      </div>
      {loading && <p className={styles.form__loading}>Sending...</p>}
      {!loading && !errorMessage && successful && (
        <p className={styles.form__success}>Message was sent successfully! </p>
      )}
      {errorMessage && (
        <p className={styles.form__field__error}>Something went wrong.</p>
      )}
      <Button className={styles.form__button} type={"submit"}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
