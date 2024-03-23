import { Link as RRLink } from 'react-router-dom';
type Props = {
  children: React.ReactNode;
  href?: string;
} & React.RefAttributes<HTMLAnchorElement>;

export const Link: React.FC<Props> = ({ children, href, ...rest }) => {
  return (
    <RRLink to={href ?? ''} {...rest}>
      {children}
    </RRLink>
  );
};
