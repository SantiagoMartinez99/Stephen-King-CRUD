export interface Book {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
  created_at: string;
}

export interface Short {
  id: number;
  title: string;
  originallyPublishedIn: string;
  collectedIn: string;
  year: number;
  created_at: string;
}

export interface Villain {
  id: number;
  name: string;
  gender: string;
  status: string;
  created_at: string;
}
