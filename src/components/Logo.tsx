import Image from "next/image";

type LogoProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  rounded?: boolean;
};

export default function Logo({
  className = "",
  imgClassName = "",
  priority = false,
  rounded = false,
}: LogoProps) {
  return (
    <span
      className={`inline-flex ${rounded ? "rounded-full overflow-hidden bg-stone" : ""} ${className}`}
    >
      <Image
        src="/images/PI LOGO.png"
        alt="PI Electrical logo"
        width={120}
        height={60}
        priority={priority}
        className={`${rounded ? "object-cover" : "object-contain"} ${imgClassName}`}
      />
    </span>
  );
}
