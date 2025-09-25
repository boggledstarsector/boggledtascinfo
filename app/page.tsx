import Image from "next/image";

export default function Home() {
  const StarfieldBackground = () => {
  return (
    <div className="starfield-container">
      <Image
        src="/images/backgrounds/starfield.jpg"
        alt="Starfield background"
      />
    </div>
  );
};

  return (
    <div className={'body'}>
      <StarfieldBackground />
      General Discussion
    </div>
  );
}
