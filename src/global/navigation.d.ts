import { GuestStackParamList } from '../routes/Guest';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GuestStackParamList {}
  }
}
