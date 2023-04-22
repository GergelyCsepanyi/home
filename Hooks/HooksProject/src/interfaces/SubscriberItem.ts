import {ImageSourcePropType} from 'react-native';

interface SubscriberItem {
  id: number;
  image?: ImageSourcePropType;
  name: string;
  description: string;
  isFollowing: boolean;
}

export default SubscriberItem;
