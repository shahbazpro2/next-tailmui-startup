import { company } from './company/Details';
import SmartBanner from 'react-smartbanner';

const AppSmartBanner = () => {
  return (
    <SmartBanner
      title={
        <span className="font-bold tex-primary text-md">
          {company.apptitle}
        </span>
      }
      button={<span className="font-bold text-md">Download</span>}
      onInstall={''}
      daysHidden={'0'}
    />
  );
};

export default AppSmartBanner;
