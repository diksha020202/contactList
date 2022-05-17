import { useState } from "react";
import styles from "./ContactCard.module.css";

function ContactCard(props) {
  // es6 destructuring
  const { name, email, phone } = props;
  const [isActive, setIsActive] = useState(false);

  // conditional rendering
  // if (isActive) {
  //   return <div onClick={() => setIsActive(false)}> activated </div>;
  // }

  return (
    <div>
      <div className={styles.container}>
        <div>{name}</div>
        <div>{email}</div>
        {/* if false, show click to show more */}
        <div className={styles.clickContainer}>
          {isActive ? (
            <div onClick={() => setIsActive(!isActive)}>
              {" "}
              click to show more{" "}
            </div>
          ) : (
            <div onClick={() => setIsActive(!isActive)}> {phone} </div>
          )}
          {/* else true, show number */}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
