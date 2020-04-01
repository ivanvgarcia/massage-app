export interface ReduxStore {
  auth: Auth;
}

export interface FormTypes {
  confirmDirty: boolean;
  autoCompleteResult: [];
}

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
}

export interface Auth {
  token?: string | null;
  isAuthenticated: boolean;
  user: User;
  redirectUri: string | null | undefined;
  loading: boolean;
  members?: [];
}

export interface SideDrawerProps {
  showDrawer: boolean;
  handleShowDrawer: () => void;
}

export type ResourceType = News;

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

export interface Resource {
  name: string;
  data: ResourceType[];
  columns: Column[];
  loading: boolean;
}

export interface News {
  id: number;
  title: string;
  body: string;
}
