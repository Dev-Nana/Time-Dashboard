import Perfil from '../assets/images/image-jeremy.png';
// import './App.css';
// import './index.css';

function UserCard() {
  return (
    <div className="usercard max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48"
            src={Perfil}
            alt="perfil" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-sm text-white font-semibold">
            Report for
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
            Jeremy Robson
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
