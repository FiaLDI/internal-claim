export interface TimelineItemType {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
}

export type TimelineDict = {
  items: TimelineItemType[];
};
