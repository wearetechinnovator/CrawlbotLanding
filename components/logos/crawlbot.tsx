import Image from "next/image";

const Crawlbot = (props: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) => (
  <Image
    src="/crawlbot-logo.png"
    alt="Crawlbot AI"
    width={24}
    height={24}
    {...props}
  />
);

export default Crawlbot;
