import React from "react";
import styles from "./SubAccordion.module.css";
import ArrowIcon from "../images/icon-arrow-down.svg";

function SubAccordion(props) {
	return (
		<div className={styles.container}>
			<button className={styles.questionContainer}>
				<p className={styles.question}>{props.question}</p>
				<img src={ArrowIcon} alt="arrow-icon" />
			</button>
			<p className={styles.answer}>{props.answer}</p>
			<hr />
		</div>
	);
}

export default SubAccordion;
