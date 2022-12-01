import {PricingCard} from '@rneui/base/dist/PricingCard';

const Lab9_1 = () => {
  return (
    <PricingCard
      color="#4f9deb"
      title="Free"
      price="$0"
      info={['1 User', 'Basic Support', 'All Core Features']}
      button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
    />
  );
};

export default Lab9_1;
