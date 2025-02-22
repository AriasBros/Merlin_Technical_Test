import Image from "next/image";

interface Props {
  id: string;
  size?: number;
}

export default function Icon({ id, size }: Props) {
  return (
    <Image
      aria-hidden={true}
      src={`/icons/${id}.svg`}
      alt={`Icon ${id}`}
      width={size ?? 24}
      height={size ?? 24}
    />
  );
}
