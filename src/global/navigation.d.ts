import { GuestStackParamList } from '../routes/Guest';
import { UserStackParamList } from '../routes/User';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GuestStackParamList, UserStackParamList {}
  }
}
