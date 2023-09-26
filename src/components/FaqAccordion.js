import React from "react";
import styles from "./FaqAccordion.module.css";
import BackgroundPatternDesktop from "../images/bg-pattern-desktop.svg";
import BackgroundPatternMobile from "../images/bg-pattern-mobile.svg";
import IllustrationWomanDesktop from "../images/illustration-woman-online-desktop.svg";
import IllustrationWomanMobile from "../images/illustration-woman-online-mobile.svg";
import IllustrationBox from "../images/illustration-box-desktop.svg";
import SubAccordion from "./SubAccordion";

function FaqAccordion(props) {
	return (
		<div className={styles.container}>
			<img className={styles.box} src={IllustrationBox} alt="box" />
			<div className={styles.illustrationContainer}>
				<img
					className={styles.backgroundPatternDesktop}
					src={BackgroundPatternDesktop}
					alt="background-pattern"
				/>
				<img
					className={styles.illustrationWomanDesktop}
					src={IllustrationWomanDesktop}
					alt="illustration"
				/>
				<img
					className={styles.backgroundPatternMobile}
					src={BackgroundPatternMobile}
					alt="background-pattern"
				/>
				<img
					className={styles.illustrationWomanMobile}
					src={IllustrationWomanMobile}
					alt="illustration"
				/>
			</div>
			<div className={styles.faqContainer}>
				<h1>FAQ</h1>
				<SubAccordion
					question="How many team members can i invite?"
					answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
				/>
				<SubAccordion
					question="What is the maximum file upload size?"
					answer="No more than 2GB. All files in your account must fit your allotted storage space."
				/>
				<SubAccordion
					question="How do I reset my password?"
					answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
				/>
				<SubAccordion
					question="Can I cancel my subscription?"
					answer="Yes! Send us a message and we’ll process your request no questions asked."
				/>
				<SubAccordion
					question="Do you provide additional support?"
					answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
				/>
			</div>
		</div>
	);
}

export default FaqAccordion;
