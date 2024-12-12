import { StaticImageData } from "next/image";

export type dataPlusProps = {
  title: string;
  description: string;
};
export type indexItemProps = {
  nameItem?: string;
};

export type dataTab = {
  title: string;
  image: string;
  description: string;
};

export type dataSlide = {
  image: string;
  description: string;
};

export type dataListProps = {
  header: string;
  data?: Array<string>;
};
type dataContentMerge = {
  label: string;
  description: dataPlusProps[];
};
export type dataMergeProps = {
  header?: string;
  data?: dataContentMerge[];
  image: string | StaticImageData ;
};
export class ContentLesson {
  dataSlides?: dataSlide[];
  contentText?: Array<string>;
  dataPlus?: dataPlusProps[];
  title?: Array<string>;
  dataVideo?: string;
  dataImage?: string;
  dataTab?: dataTab[];
  dataList?: dataListProps;
  dataList2?: dataListProps;
  dataMerge?: dataMergeProps;
}
