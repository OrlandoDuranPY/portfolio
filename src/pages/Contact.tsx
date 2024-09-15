import { Container } from '../components/Layouts/Container';
// import WhatsappIcon from '../assets/icons/whatsapp.svg';

export const Contact = () => {
  const phoneNumber = '4421548755'; // Reemplaza con tu número de teléfono
  const message =
    'Hola, me gustaría saber más sobre tus servicios de freelance.'; // Mensaje predeterminado

  return (
    <Container>
      <div className='bg-customBlack2 py-20 rounded-3xl'>
        <div className='text-center'>
          <h2 className='text-3xl lg:text-4xl font-palanquin mb-2 text-white font-gloria'>
            Contáctame
          </h2>
          <p className='text-white text-opacity-60 text-sm mb-10'>
            Disponible para proyectos freelance. ¡Hablemos!
          </p>
        </div>
        <div className='text-center mt-8'>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            className='border border-fuccia2 bg-fuccia2 bg-opacity-10 py-3 px-5 rounded-tr-3xl rounded-bl-3xl flex w-fit m-auto hover:scale-105 transition-all'

          >
            <span className=' text-fuccia2 font-jost'>Envíame un mensaje</span>
          </a>
        </div>
      </div>
    </Container>
  );
};
