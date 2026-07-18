import "./IconLink.scss";

interface IconLinkProps {
  href: string;
  icon: string;
}

export const IconLink = ({ href, icon }: IconLinkProps) => {
  return (
    <a
      href={href}
      class="icon-link"
      target="_blank"
      rel="noopener"
      innerHTML={{ __dangerousHtml: icon }}
    ></a>
  );
};

export default IconLink;
