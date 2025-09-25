import Image from "next/image";

export default function StarfieldBackground() {
  return (
    <div className="starfield-container">
      <Image
        src="/images/backgrounds/starfield.webp"
        alt="Starfield background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
