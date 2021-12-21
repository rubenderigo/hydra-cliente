import SingUpForm from 'components/SingUp/SingUpForm';
import background from 'assets/background-singup.png';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './SingUp.module.css';

const SingUp = () => {
  return (
    <OnboardingLayout
      background={background}
      atlBackground="background sing up"
    >
      <div className={styles['sing-up-container']}>
        <p>¡Hola!</p>
        <h2>¡Empecemos!</h2>
        <SingUpForm />
      </div>
    </OnboardingLayout>
  );
};

export default SingUp;
