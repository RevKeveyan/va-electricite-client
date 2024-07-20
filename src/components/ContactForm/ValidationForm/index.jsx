import { useForm, Controller } from 'react-hook-form';
import './style.scss';
import useMessageService from '../../../service/messageService';

export const ValidationForm = () => {
  const { handleSubmit, control, errors } = useForm();
  const { sendMessage } = useMessageService();
 

  return (
    <form onSubmit={handleSubmit(sendMessage)}>
      <Controller
        name="contactInfo.name"
        control={control}
        rules={{ required: 'Name is required', minLength: { value: 2, message: 'Minimum 2 characters' } }}
        render={({ field }) => (
          <>
            {errors?.contactInfo?.name && <label className="error">{errors?.contactInfo.name.message}</label>}
            <label htmlFor="name">Nom</label>
            <br />
            <input placeholder="Votre nom" type="text" id="name" {...field} />
            <br />
            <br />
          </>
        )}
      />
      <Controller
        name="contactInfo.email"
        control={control}
        rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
        render={({ field }) => (
          <>
            {errors?.contactInfo?.email && <label className="error">{errors?.contactInfo.email.message}</label>}
            <label  htmlFor="email">Email</label>
            <br />
            <input placeholder="Votre adresse email" type="text" id="email" {...field} />
            <br />
            <br />
          </>
        )}
      />
      <Controller
        name="contactInfo.phone"
        control={control}
        rules={{ required: 'Phone number is required' }}
        render={({ field }) => (
          <>
            {errors?.contactInfo?.phone && <label className="error">{errors?.contactInfo.phone.message}</label>}
            <label htmlFor="phone">Numéro de téléphone</label>
            <br />
            <input placeholder="Ex : +33 9 99 99 99 99" type="text" id="phone" {...field} />
            <br />
            <br />
          </>
        )}
      />
      <Controller
        name="title"
        control={control}
        rules={{ required: 'Sujet is required', minLength: { value: 5, message: 'Minimum 5 characters' } }}
        render={({ field }) => (
          <>
            {errors?.title && <label className="error">{errors?.title.message}</label>}
            <label htmlFor="title">Sujet</label>
            <br />
            <input placeholder="Sujet de votre message" type="text" id="title" {...field} />
            <br />
            <br />
          </>
        )}
      />
      <Controller
        name="massage"
        control={control}
        rules={{ required: 'Massage is required', minLength: { value: 10, message: 'Minimum 10 characters' } }}
        render={({ field }) => (
          <>
            {errors?.massage && <label className="error">{errors?.massage.message}</label>}
            <label htmlFor="massage">Sumassagejet</label>
            <br />
            <textarea placeholder="Votre message ici" id="massage" {...field} />
            <br />
            <br />
          </>
        )}
      />
      <button type="submit" className="form__btn">
        Envoyer
      </button>
    </form>
  );
};