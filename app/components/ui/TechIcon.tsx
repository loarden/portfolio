import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiCursor,
  SiDocker,
  SiExpress,
  SiModelcontextprotocol,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const ICONS = {
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  php: SiPhp,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  docker: SiDocker,
  mcp: SiModelcontextprotocol,
  cursor: SiCursor,
  claude: SiAnthropic,
} satisfies Record<string, IconType>;

export type TechIconName = keyof typeof ICONS;

type TechIconProps = {
  name: TechIconName;
  size?: number;
  className?: string;
};

export default function TechIcon({
  name,
  size = 22,
  className = "",
}: TechIconProps) {
  const Icon = ICONS[name];

  return (
    <Icon
      aria-hidden
      size={size}
      className={`shrink-0 ${className}`}
    />
  );
}
