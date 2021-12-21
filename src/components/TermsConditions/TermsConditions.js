import Card from './Card';
import background from 'assets/background-terms-conditions.png';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <OnboardingLayout
      background={background}
      atlBackground="background terms and conditions"
    >
      <div className={styles['terms-conditions-container']}>
        <Card />
      </div>
    </OnboardingLayout>
  );
};

export default TermsConditions;
