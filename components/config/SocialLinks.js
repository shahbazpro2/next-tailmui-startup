import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { company } from './company/Details';
export const SocialLinks = [
  {
    name: 'Facebook',
    href: `${company.Facebook}`,
    icon: <FacebookIcon />,
  },
  {
    name: 'Twitter',
    href: `${company.Twitter}`,
    icon: <TwitterIcon />,
  },
  {
    name: 'LinkedIn',
    href: `${company.LinkedIn}`,
    icon: <LinkedInIcon />,
  },
  {
    name: 'YouTube',
    href: `${company.YouTube}`,
    icon: <YouTubeIcon />,
  },
  {
    name: 'Instagram',
    href: `${company.Instagram}`,
    icon: <InstagramIcon />,
  },
];
