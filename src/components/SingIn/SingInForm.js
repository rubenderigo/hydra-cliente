import BeatLoader from 'react-spinners/BeatLoader';

import FormikWrapper from 'components/Form';
import FieldController from 'components/Form/FieldController';
import HaveAccount from 'components/Form/HaveAccount/HaveAccount';
import validationSchema from './validationSchema';
import { initialValues } from './initialValues';
import { useSingIn } from 'hooks/auth';

import styles from 'components/SingIn/SingInForm.module.css';

const SingInForm = () => {
  const { onSubmit, error, promiseInProgress } = useSingIn();

  return (
    <div className={styles['sing-in-form']}>
      <FormikWrapper
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <FieldController
          typeField="input"
          name="username"
          label="Nombre de usuario"
          placeholder="Nombre de usuario"
          typeInput="text"
        />
        <FieldController
          typeField="input"
          name="password"
          label="Contraseña"
          placeholder="Contraseña"
          typeInput="password"
        />
        <HaveAccount haveAccount={false} />
        <div className={styles['button-container']}>
          <FieldController typeField="button">
            {promiseInProgress ? (
              <BeatLoader color="#fbeaeb" size="4px" />
            ) : (
              'iniciar sesión'
            )}{' '}
          </FieldController>
        </div>
        {error && (
          <p className={styles['error']}>las credenciales no coinciden</p>
        )}
      </FormikWrapper>
    </div>
  );
};

export default SingInForm;
