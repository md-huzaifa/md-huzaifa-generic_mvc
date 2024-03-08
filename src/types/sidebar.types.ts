export interface ISidebarItem {
  name: string;
  path: string;
  icon: JSX.Element;
  accordian: ISidebarItem[] | null;
}
